// Indicative CIBIL-style credit score model.
//
// This is an ESTIMATOR, not a bureau lookup. It reproduces the publicly
// documented weighting that TransUnion CIBIL describes for its 300-900 scale
// so a visitor can see roughly where they stand and which habit is holding
// them back. It never contacts a credit bureau and never sees a real report.

export const SCORE_MIN = 300;
export const SCORE_MAX = 900;

export type PaymentHistory = 'spotless' | 'rare' | 'occasional' | 'frequent';
export type CreditMix = 'both' | 'loans' | 'cards' | 'none';

export interface CreditScoreInput {
  /** Track record of paying dues on or before the due date. */
  paymentHistory: PaymentHistory;
  /** Percentage of the total card limit currently in use (0-100). */
  utilisation: number;
  /** Years since the oldest credit line was opened. */
  creditAgeYears: number;
  /** Types of credit currently held. */
  creditMix: CreditMix;
  /** Hard enquiries raised by lenders in the last 6 months. */
  enquiries: number;
  /** Gross monthly income in rupees. */
  monthlyIncome: number;
  /** Total of all monthly EMIs currently being serviced. */
  monthlyEmi: number;
}

export interface ScoreFactor {
  key: keyof CreditScoreInput | 'debtToIncome';
  label: string;
  /** Share of the total score this factor controls. */
  weight: number;
  /** How well this input scored, 0-1. */
  performance: number;
  detail: string;
  /** Shown when this factor is the biggest drag on the score. */
  advice: string;
}

export interface ScoreBand {
  label: string;
  /** Inclusive lower bound on the 300-900 scale. */
  from: number;
  to: number;
  /** Tailwind text colour token. */
  tone: string;
  /** Hex used by the gauge arc, safe in both themes. */
  hex: string;
  summary: string;
}

export const scoreBands: ScoreBand[] = [
  {
    label: 'Needs Work',
    from: 300,
    to: 549,
    tone: 'text-rose-600 dark:text-rose-400',
    hex: '#F43F5E',
    summary: 'Most lenders decline at this level. Clearing overdue balances is the fastest way up.'
  },
  {
    label: 'Fair',
    from: 550,
    to: 649,
    tone: 'text-amber-600 dark:text-amber-400',
    hex: '#F59E0B',
    summary: 'Approval is possible but expect higher rates and a smaller sanctioned amount.'
  },
  {
    label: 'Good',
    from: 650,
    to: 749,
    tone: 'text-sky-600 dark:text-sky-400',
    hex: '#0EA5E9',
    summary: 'Comfortably approvable at most banks and NBFCs on standard terms.'
  },
  {
    label: 'Very Good',
    from: 750,
    to: 799,
    tone: 'text-cyan-600 dark:text-cyan-400',
    hex: '#06B6D4',
    summary: 'You qualify for the advertised rate at nearly every lender on our panel.'
  },
  {
    label: 'Excellent',
    from: 800,
    to: 900,
    tone: 'text-emerald-600 dark:text-emerald-400',
    hex: '#10B981',
    summary: 'Top tier. You have real room to negotiate on rate and processing fees.'
  }
];

export const bandForScore = (score: number): ScoreBand =>
  scoreBands.find((band) => score >= band.from && score <= band.to) ?? scoreBands[0];

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

/** Piecewise curve: rewards low utilisation steeply, punishes above 60%. */
const utilisationPerformance = (pct: number): number => {
  const u = Math.min(100, Math.max(0, pct));
  if (u <= 30) return 1 - (u / 30) * 0.15;
  if (u <= 60) return 0.85 - ((u - 30) / 30) * 0.35;
  return Math.max(0.1, 0.5 - ((u - 60) / 40) * 0.4);
};

/** Same shape applied to EMI-to-income, the ratio underwriters actually gate on. */
const debtToIncomePerformance = (ratioPct: number): number => {
  const d = Math.max(0, ratioPct);
  if (d <= 20) return 1 - (d / 20) * 0.1;
  if (d <= 40) return 0.9 - ((d - 20) / 20) * 0.35;
  return Math.max(0.1, 0.55 - ((d - 40) / 30) * 0.45);
};

const paymentPerformance: Record<PaymentHistory, number> = {
  spotless: 1,
  rare: 0.72,
  occasional: 0.4,
  frequent: 0.12
};

const mixPerformance: Record<CreditMix, number> = {
  both: 1,
  loans: 0.7,
  cards: 0.6,
  none: 0.25
};

export const paymentHistoryOptions: { value: PaymentHistory; label: string }[] = [
  { value: 'spotless', label: 'Never missed a due date' },
  { value: 'rare', label: 'One or two late payments' },
  { value: 'occasional', label: 'Occasionally 30+ days late' },
  { value: 'frequent', label: 'Frequent defaults or a settlement' }
];

export const creditMixOptions: { value: CreditMix; label: string }[] = [
  { value: 'both', label: 'Both credit cards and loans' },
  { value: 'loans', label: 'Loans only (home, auto, personal)' },
  { value: 'cards', label: 'Credit cards only' },
  { value: 'none', label: 'No active credit yet' }
];

export interface CreditScoreResult {
  score: number;
  band: ScoreBand;
  factors: ScoreFactor[];
  /** The weighted factor costing the most points, or null when nothing is weak. */
  weakest: ScoreFactor | null;
  debtToIncome: number;
}

export const estimateCreditScore = (input: CreditScoreInput): CreditScoreResult => {
  const debtToIncome =
    input.monthlyIncome > 0 ? (input.monthlyEmi / input.monthlyIncome) * 100 : 0;

  const ageYears = Math.max(0, input.creditAgeYears);
  const enquiries = Math.max(0, input.enquiries);

  const factors: ScoreFactor[] = [
    {
      key: 'paymentHistory',
      label: 'Payment history',
      weight: 0.35,
      performance: paymentPerformance[input.paymentHistory],
      detail: paymentHistoryOptions.find((o) => o.value === input.paymentHistory)?.label ?? '',
      advice:
        'Payment history carries the most weight. Set up auto-debit so no due date is ever missed again.'
    },
    {
      key: 'utilisation',
      label: 'Credit utilisation',
      weight: 0.3,
      performance: utilisationPerformance(input.utilisation),
      detail: `${Math.round(input.utilisation)}% of your limit in use`,
      advice:
        'Bring card usage under 30% of your limit, or ask your issuer for a limit increase to lower the ratio.'
    },
    {
      key: 'creditAgeYears',
      label: 'Credit age & mix',
      weight: 0.15,
      performance: clamp01(0.15 + ageYears * 0.11) * 0.6 + mixPerformance[input.creditMix] * 0.4,
      detail: `${ageYears} year${ageYears === 1 ? '' : 's'} of history`,
      advice:
        'Keep your oldest card open even if unused, and hold a healthy mix of secured and unsecured credit.'
    },
    {
      key: 'enquiries',
      label: 'Recent enquiries',
      weight: 0.1,
      performance: Math.max(0.15, 1 - enquiries * 0.14),
      detail: `${enquiries} in the last 6 months`,
      advice:
        'Space out applications. Each hard enquiry shaves points, and a cluster signals credit hunger.'
    },
    {
      key: 'debtToIncome',
      label: 'EMI to income',
      weight: 0.1,
      performance: debtToIncomePerformance(debtToIncome),
      detail: `${Math.round(debtToIncome)}% of income goes to EMIs`,
      advice:
        'Close or consolidate a smaller loan. Most lenders want total EMIs under 40% of monthly income.'
    }
  ];

  const weighted = factors.reduce((sum, f) => sum + f.weight * clamp01(f.performance), 0);
  const score = Math.round(SCORE_MIN + (SCORE_MAX - SCORE_MIN) * clamp01(weighted));

  // Biggest opportunity = the factor losing the most weighted points.
  const ranked = [...factors].sort(
    (a, b) => a.weight * (1 - a.performance) - b.weight * (1 - b.performance)
  );
  const worst = ranked[ranked.length - 1];

  return {
    score,
    band: bandForScore(score),
    factors,
    weakest: worst && worst.performance < 0.9 ? worst : null,
    debtToIncome
  };
};

export const defaultCreditScoreInput: CreditScoreInput = {
  paymentHistory: 'spotless',
  utilisation: 35,
  creditAgeYears: 5,
  creditMix: 'both',
  enquiries: 1,
  monthlyIncome: 90000,
  monthlyEmi: 22000
};
