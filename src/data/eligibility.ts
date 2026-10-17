// Indicative loan-eligibility model.
//
// This is an ESTIMATOR, not a sanction. It reproduces the core arithmetic an
// underwriter runs: it caps total EMIs at a share of income (the FOIR / Fixed
// Obligation to Income Ratio), prices a rate off the loan type and the
// applicant's credit band, and converts the leftover repayment capacity into a
// maximum loan amount via the standard reducing-balance annuity formula.
//
// Everything runs on the visitor's device. No application is created and no
// credit file is touched.

export type LoanType = 'home' | 'personal' | 'business' | 'car' | 'lap';
export type Employment = 'salaried' | 'self-employed';
export type CreditBand = 'excellent' | 'veryGood' | 'good' | 'fair' | 'poor';

export interface EligibilityInput {
  loanType: LoanType;
  employment: Employment;
  /** Gross monthly income (salaried) or monthly business income (self-employed), in rupees. */
  monthlyIncome: number;
  /** Total of all EMIs currently being serviced, in rupees. */
  existingEmi: number;
  /** Applicant age in years. */
  age: number;
  /** Amount the applicant wants to borrow, in rupees. */
  requestedAmount: number;
  /** Desired repayment tenure, in years. */
  tenureYears: number;
  /** Self-assessed credit band. Pair with the Credit Score Checker for a sharper read. */
  creditBand: CreditBand;
}

interface LoanConfig {
  label: string;
  /** Matching loan product slug for the apply hand-off. */
  slug: string;
  /** Best-case annual rate (%) before any credit-band loading. */
  baseRate: number;
  /** Longest tenure the product allows, in years. */
  maxTenureYears: number;
  /** Minimum monthly income/turnover the product underwrites against. */
  minIncome: number;
  /** Acceptable age window at application. */
  minAge: number;
  maxAge: number;
  /** Product ceiling, in rupees, used to cap the indicative amount. */
  ceiling: number;
}

/** Per-product underwriting parameters, aligned with the loan catalogue. */
export const loanConfig: Record<LoanType, LoanConfig> = {
  home: {
    label: 'Home Loan',
    slug: 'home-loan',
    baseRate: 8.4,
    maxTenureYears: 30,
    minIncome: 25000,
    minAge: 21,
    maxAge: 65,
    ceiling: 100000000 // ₹10 Cr
  },
  lap: {
    label: 'Loan Against Property',
    slug: 'mortgage-loan',
    baseRate: 9.0,
    maxTenureYears: 15,
    minIncome: 30000,
    minAge: 24,
    maxAge: 65,
    ceiling: 150000000 // ₹15 Cr
  },
  personal: {
    label: 'Personal Loan',
    slug: 'personal-loan',
    baseRate: 10.25,
    maxTenureYears: 6,
    minIncome: 25000,
    minAge: 21,
    maxAge: 58,
    ceiling: 4000000 // ₹40 L
  },
  business: {
    label: 'Business Loan',
    slug: 'business-loan',
    baseRate: 11.5,
    maxTenureYears: 5,
    minIncome: 40000,
    minAge: 23,
    maxAge: 65,
    ceiling: 7500000 // ₹75 L
  },
  car: {
    label: 'Car Loan',
    slug: 'new-car-loan',
    baseRate: 8.7,
    maxTenureYears: 7,
    minIncome: 20000,
    minAge: 21,
    maxAge: 65,
    ceiling: 10000000 // ₹1 Cr
  }
};

export const loanTypeOptions: { value: LoanType; label: string }[] = (
  Object.keys(loanConfig) as LoanType[]
).map((value) => ({ value, label: loanConfig[value].label }));

export const employmentOptions: { value: Employment; label: string }[] = [
  { value: 'salaried', label: 'Salaried' },
  { value: 'self-employed', label: 'Self-employed / Business' }
];

export const creditBandOptions: { value: CreditBand; label: string }[] = [
  { value: 'excellent', label: 'Excellent (800+)' },
  { value: 'veryGood', label: 'Very good (750 – 799)' },
  { value: 'good', label: 'Good (650 – 749)' },
  { value: 'fair', label: 'Fair (550 – 649)' },
  { value: 'poor', label: 'Needs work (below 550)' },
];

/** Rate loading (in % p.a.) added to the base rate for each credit band. */
const creditRateLoading: Record<CreditBand, number> = {
  excellent: 0,
  veryGood: 0.4,
  good: 1.1,
  fair: 2.5,
  poor: 4.0
};

/** How far a band is allowed to stretch the FOIR cap (weaker credit = tighter). */
const creditFoirFactor: Record<CreditBand, number> = {
  excellent: 1,
  veryGood: 1,
  good: 0.95,
  fair: 0.85,
  poor: 0.7
};

/**
 * Permitted Fixed Obligation to Income Ratio. Lenders allow a larger share of
 * income to go to EMIs as income rises, because more is left for living costs.
 */
const baseFoir = (monthlyIncome: number): number => {
  if (monthlyIncome < 30000) return 0.4;
  if (monthlyIncome < 60000) return 0.45;
  if (monthlyIncome < 100000) return 0.5;
  return 0.55;
};

/** EMI for a given principal on a reducing-balance loan. */
export const emiFor = (principal: number, annualRatePct: number, tenureYears: number): number => {
  const n = Math.round(tenureYears * 12);
  const r = annualRatePct / 12 / 100;
  if (n <= 0) return 0;
  if (r === 0) return principal / n;
  const factor = Math.pow(1 + r, n);
  return (principal * r * factor) / (factor - 1);
};

/** Largest principal whose EMI fits within a monthly budget. Inverse of emiFor. */
const principalFor = (emiBudget: number, annualRatePct: number, tenureYears: number): number => {
  const n = Math.round(tenureYears * 12);
  const r = annualRatePct / 12 / 100;
  if (n <= 0 || emiBudget <= 0) return 0;
  if (r === 0) return emiBudget * n;
  const factor = Math.pow(1 + r, n);
  return (emiBudget * (factor - 1)) / (r * factor);
};

export type CheckStatus = 'pass' | 'warn' | 'fail';

export interface EligibilityCheck {
  key: string;
  label: string;
  status: CheckStatus;
  detail: string;
}

export type Verdict = 'eligible' | 'review' | 'ineligible';

export interface EligibilityResult {
  verdict: Verdict;
  /** Indicative headline for the result card. */
  headline: string;
  summary: string;
  /** Interest rate used for the estimate, in % p.a. */
  rate: number;
  /** Repayment capacity left after existing EMIs, in rupees/month. */
  repaymentCapacity: number;
  /** Maximum indicative loan amount, in rupees. */
  maxAmount: number;
  /** EMI on the requested amount, in rupees/month. */
  requestedEmi: number;
  /** Requested amount, clamped to the product ceiling for display. */
  requestedAmount: number;
  /** Share of the requested amount covered by the indicative maximum, 0-1. */
  coverage: number;
  /** Resulting FOIR if the requested loan is taken, 0-1. */
  projectedFoir: number;
  config: LoanConfig;
  checks: EligibilityCheck[];
}

const formatINR = (val: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(Math.max(0, Math.round(val)));

export const assessEligibility = (input: EligibilityInput): EligibilityResult => {
  const config = loanConfig[input.loanType];
  const income = Math.max(0, input.monthlyIncome);
  const existingEmi = Math.max(0, input.existingEmi);
  const tenure = Math.min(Math.max(1, input.tenureYears), config.maxTenureYears);
  const requestedAmount = Math.min(Math.max(0, input.requestedAmount), config.ceiling);

  const rate = config.baseRate + creditRateLoading[input.creditBand];

  // Repayment capacity: the FOIR-permitted EMI pool, less what is already committed.
  const foirCap = baseFoir(income) * creditFoirFactor[input.creditBand];
  const foirBudget = income * foirCap;
  const repaymentCapacity = Math.max(0, foirBudget - existingEmi);

  const rawMax = principalFor(repaymentCapacity, rate, tenure);
  const maxAmount = Math.min(rawMax, config.ceiling);

  const requestedEmi = emiFor(requestedAmount, rate, tenure);
  const coverage = requestedAmount > 0 ? Math.min(1, maxAmount / requestedAmount) : 1;
  const projectedFoir = income > 0 ? (existingEmi + requestedEmi) / income : 1;

  // ---- Individual underwriting checks ----
  const checks: EligibilityCheck[] = [];

  // Income floor
  if (income >= config.minIncome) {
    checks.push({
      key: 'income',
      label: 'Minimum income',
      status: 'pass',
      detail: `${formatINR(income)}/mo clears the ${formatINR(config.minIncome)} floor`
    });
  } else {
    checks.push({
      key: 'income',
      label: 'Minimum income',
      status: 'fail',
      detail: `${config.label} needs at least ${formatINR(config.minIncome)}/mo`
    });
  }

  // Age window
  if (input.age >= config.minAge && input.age <= config.maxAge) {
    checks.push({
      key: 'age',
      label: 'Age eligibility',
      status: 'pass',
      detail: `${input.age} yrs sits inside the ${config.minAge}–${config.maxAge} window`
    });
  } else {
    checks.push({
      key: 'age',
      label: 'Age eligibility',
      status: 'fail',
      detail: `Lenders underwrite ${config.label} between ${config.minAge} and ${config.maxAge} yrs`
    });
  }

  // Credit band
  if (input.creditBand === 'poor') {
    checks.push({
      key: 'credit',
      label: 'Credit profile',
      status: 'fail',
      detail: 'Most lenders decline below 550. Rebuild the score first.'
    });
  } else if (input.creditBand === 'fair') {
    checks.push({
      key: 'credit',
      label: 'Credit profile',
      status: 'warn',
      detail: 'Approvable, but at a higher rate and a reduced amount'
    });
  } else {
    checks.push({
      key: 'credit',
      label: 'Credit profile',
      status: 'pass',
      detail: `${creditBandOptions.find((o) => o.value === input.creditBand)?.label} earns the best pricing`
    });
  }

  // Repayment capacity vs the requested EMI
  if (repaymentCapacity <= 0) {
    checks.push({
      key: 'obligations',
      label: 'Existing obligations',
      status: 'fail',
      detail: 'Current EMIs already use up the permitted share of income'
    });
  } else if (requestedAmount > 0 && requestedEmi > repaymentCapacity) {
    checks.push({
      key: 'obligations',
      label: 'Repayment capacity',
      status: 'warn',
      detail: `Requested EMI ${formatINR(requestedEmi)} exceeds the ${formatINR(
        repaymentCapacity
      )} headroom`
    });
  } else {
    checks.push({
      key: 'obligations',
      label: 'Repayment capacity',
      status: 'pass',
      detail: `${formatINR(repaymentCapacity)}/mo free after current EMIs`
    });
  }

  // ---- Overall verdict ----
  const hasFail = checks.some((c) => c.status === 'fail');
  const hasWarn = checks.some((c) => c.status === 'warn');

  let verdict: Verdict;
  let headline: string;
  let summary: string;

  if (hasFail || maxAmount <= 0) {
    verdict = 'ineligible';
    headline = 'Not approvable yet';
    summary =
      'One or more hard criteria are not met today. The breakdown below shows exactly what to fix.';
  } else if (hasWarn || coverage < 0.999) {
    verdict = 'review';
    headline = 'Likely, with conditions';
    summary =
      requestedAmount > 0 && maxAmount < requestedAmount
        ? `You qualify for about ${formatINR(
            maxAmount
          )} on these inputs — less than requested. Extend the tenure or lower the amount to close the gap.`
        : 'You meet the core criteria. A lender will confirm the final amount and rate after documents.';
  } else {
    verdict = 'eligible';
    headline = 'Looks eligible';
    summary = `On these inputs you can comfortably support ${formatINR(
      requestedAmount || maxAmount
    )} at an indicative ${rate.toFixed(2)}% p.a.`;
  }

  return {
    verdict,
    headline,
    summary,
    rate,
    repaymentCapacity,
    maxAmount,
    requestedEmi,
    requestedAmount,
    coverage,
    projectedFoir,
    config,
    checks
  };
};

export const defaultEligibilityInput: EligibilityInput = {
  loanType: 'home',
  employment: 'salaried',
  monthlyIncome: 90000,
  existingEmi: 12000,
  age: 32,
  requestedAmount: 4000000,
  tenureYears: 20,
  creditBand: 'veryGood'
};
