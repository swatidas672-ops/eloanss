// Answer engine for the AI Financial Companion.
//
// Rather than matching a handful of hardcoded phrases, this resolves two things
// from a question - WHICH product it is about and WHAT is being asked - and then
// answers from the real catalogue in loans.ts / insurance.ts. That means every
// field we hold on all 13 loan products is answerable, and the FAQs act as a
// full-text fallback before we ever admit defeat.

import { loanProducts } from './loans';
import { insuranceProducts } from './insurance';
import type { LoanProduct, InsuranceProduct } from '../types';

export interface AssistantAction {
  label: string;
  /** Route to push, e.g. /loans/home-loan */
  navigateTo?: string;
  /** Opens the global apply modal instead of navigating. */
  apply?: { type: 'loan' | 'insurance'; slug?: string };
}

export interface AssistantReply {
  text: string;
  suggestions: string[];
  actions: AssistantAction[];
}

type Intent =
  | 'rate'
  | 'tenure'
  | 'amount'
  | 'eligibility'
  | 'documents'
  | 'fees'
  | 'speed'
  | 'income'
  | 'benefits'
  | 'emi'
  | 'compare'
  | 'apply'
  | 'distributor'
  | 'creditScore'
  | 'overview';

/** Extra words that should resolve to a product beyond its own name. */
const loanAliases: Record<string, string[]> = {
  'home-loan': ['home', 'house', 'housing', 'flat', 'apartment', 'property purchase', 'villa'],
  'mortgage-loan': ['mortgage', 'lap', 'loan against property', 'against property'],
  'open-plot-loan': ['plot', 'land', 'open plot'],
  'business-loan': ['business', 'msme', 'working capital', 'enterprise', 'shop', 'startup'],
  'personal-loan': ['personal', 'emergency', 'wedding', 'medical', 'travel'],
  'gold-loan': ['gold', 'jewellery', 'jewelry', 'ornament'],
  'new-car-loan': ['new car', 'car loan', 'auto loan', 'new vehicle'],
  'used-car-loan': ['used car', 'second hand', 'pre owned', 'preowned', 'resale car'],
  'two-wheeler-loan': ['two wheeler', 'bike', 'scooter', 'motorcycle'],
  'commercial-vehicle-loan': ['commercial vehicle', 'van', 'tempo', 'pickup'],
  'heavy-commercial-vehicle-loan': ['heavy commercial', 'truck', 'trailer', 'fleet', 'lorry'],
  'project-loan': ['project', 'construction finance', 'infrastructure'],
  'od-loan': ['overdraft', 'od ', 'cash credit', 'credit line']
};

const insuranceAliases: Record<string, string[]> = {
  'life-insurance': ['life insurance', 'life cover'],
  'health-insurance': ['health', 'mediclaim', 'hospital'],
  'term-insurance': ['term insurance', 'term plan', 'term cover']
};

const intentPatterns: { intent: Intent; words: string[] }[] = [
  { intent: 'rate', words: ['interest', 'rate', 'roi', 'percent', '%', 'how much interest', 'cheap'] },
  { intent: 'speed', words: ['how fast', 'how long does it', 'how long will it', 'take to sanction', 'time to sanction', 'disburs', 'sanction time', 'processing time', 'how quickly', 'how soon'] },
  { intent: 'tenure', words: ['tenure', 'duration', 'repayment period', 'how many years', 'how many months', 'how long can i repay'] },
  { intent: 'amount', words: ['how much can i', 'maximum', 'max amount', 'limit', 'quantum', 'ticket size', 'borrow'] },
  { intent: 'eligibility', words: ['eligib', 'qualify', 'criteria', 'who can apply', 'requirement', 'cibil score needed'] },
  { intent: 'documents', words: ['document', 'papers', 'paperwork', 'kyc', 'what do i need to submit', 'proof'] },
  { intent: 'fees', words: ['fee', 'charge', 'processing fee', 'hidden cost', 'prepayment', 'foreclosure'] },
  { intent: 'income', words: ['salary', 'income required', 'minimum income', 'earn'] },
  { intent: 'benefits', words: ['benefit', 'advantage', 'why choose', 'feature'] },
  { intent: 'emi', words: ['emi', 'monthly payment', 'installment', 'instalment', 'calculate'] },
  { intent: 'compare', words: ['compare', 'difference', 'vs', 'versus', 'better', 'which one'] },
  { intent: 'apply', words: ['apply', 'start application', 'get this loan', 'proceed'] },
  { intent: 'distributor', words: ['distributor', 'agent', 'partner', 'branch', 'near me', 'local'] },
  { intent: 'creditScore', words: ['cibil', 'credit score', 'credit report', 'score check'] }
];

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, ' ').trim();

const findLoans = (q: string): LoanProduct[] => {
  const matches = loanProducts.filter((p) => {
    if (q.includes(norm(p.name))) return true;
    if (q.includes(p.slug.replace(/-/g, ' '))) return true;
    return (loanAliases[p.slug] ?? []).some((a) => q.includes(a));
  });
  // "car loan" shouldn't return both new and used unless asked to compare.
  return matches;
};

const findInsurance = (q: string): InsuranceProduct[] =>
  insuranceProducts.filter((p) => {
    if (q.includes(norm(p.name))) return true;
    return (insuranceAliases[p.slug] ?? []).some((a) => q.includes(a));
  });

const detectIntent = (q: string): Intent => {
  for (const { intent, words } of intentPatterns) {
    if (words.some((w) => q.includes(w))) return intent;
  }
  return 'overview';
};

const bullets = (items: string[]) => items.map((i) => `• ${i}`).join('\n');

const productActions = (p: LoanProduct): AssistantAction[] => [
  { label: `Open ${p.name} page`, navigateTo: `/loans/${p.slug}` },
  { label: `Apply for ${p.name}`, apply: { type: 'loan', slug: p.slug } },
  { label: 'Calculate EMI', navigateTo: '/calculator' }
];

/** Search every FAQ we hold; used before falling back to a generic reply. */
const searchFaqs = (q: string) => {
  const words = q.split(' ').filter((w) => w.length > 3);
  if (!words.length) return null;

  let best: { product: LoanProduct; question: string; answer: string; score: number } | null = null;
  for (const p of loanProducts) {
    for (const faq of p.faqs) {
      const haystack = norm(`${faq.question} ${faq.answer}`);
      const score = words.reduce((n, w) => (haystack.includes(w) ? n + 1 : n), 0);
      if (score > 0 && (!best || score > best.score)) {
        best = { product: p, question: faq.question, answer: faq.answer, score };
      }
    }
  }
  return best && best.score >= 2 ? best : null;
};

const faqForProduct = (p: LoanProduct, q: string) => {
  const words = q.split(' ').filter((w) => w.length > 3);
  let best: { question: string; answer: string; score: number } | null = null;
  for (const faq of p.faqs) {
    const haystack = norm(`${faq.question} ${faq.answer}`);
    const score = words.reduce((n, w) => (haystack.includes(w) ? n + 1 : n), 0);
    if (!best || score > best.score) best = { ...faq, score };
  }
  return best && best.score >= 3 ? best : null;
};

const answerForLoan = (p: LoanProduct, intent: Intent, q = ''): AssistantReply => {
  const base = { actions: productActions(p) };

  // A directly matching FAQ beats a generic field lookup.
  const faq = q ? faqForProduct(p, q) : null;
  if (faq) {
    return {
      ...base,
      text: `${faq.question}

${faq.answer}`,
      suggestions: [`${p.name} eligibility`, `${p.name} documents`, `${p.name} interest rate`]
    };
  }

  switch (intent) {
    case 'rate':
      return {
        ...base,
        text: `${p.name} — interest rate\n\n${p.interestRate}\n\nThe rate you are offered inside that band depends on your credit score, income stability, and the lender we match you with. Processing fee is ${p.processingFee}.`,
        suggestions: [`${p.name} eligibility`, `${p.name} documents`, 'Calculate EMI']
      };
    case 'tenure':
      return {
        ...base,
        text: `${p.name} — repayment tenure\n\n${p.tenure}\n\nA longer tenure lowers your monthly EMI but increases total interest paid. The EMI calculator will show you the trade-off for your exact amount.`,
        suggestions: ['Calculate EMI', `${p.name} interest rate`, `Apply for ${p.name}`]
      };
    case 'amount':
      return {
        ...base,
        text: `${p.name} — how much you can borrow\n\n${p.maxAmount}\n\nYour sanctioned amount depends on income, existing EMIs, and (for secured products) the value of the asset. Minimum income expected: ${p.minIncome}.`,
        suggestions: [`${p.name} eligibility`, 'Check my credit score', `Apply for ${p.name}`]
      };
    case 'income':
      return {
        ...base,
        text: `${p.name} — income requirement\n\n${p.minIncome}\n\nMost lenders also want your total EMIs to stay under roughly 40-50% of monthly income.`,
        suggestions: [`${p.name} eligibility`, 'Check my credit score', 'Calculate EMI']
      };
    case 'eligibility':
      return {
        ...base,
        text: `${p.name} — eligibility criteria\n\n${bullets(p.eligibility)}\n\nMinimum income: ${p.minIncome}`,
        suggestions: [`${p.name} documents`, 'Check my credit score', `Apply for ${p.name}`]
      };
    case 'documents':
      return {
        ...base,
        text: `${p.name} — documents required\n\n${bullets(p.documents)}\n\nEverything is uploaded digitally; a local distributor can collect originals at your doorstep if verification is needed.`,
        suggestions: [`Apply for ${p.name}`, 'Find a local distributor', `${p.name} eligibility`]
      };
    case 'fees':
      return {
        ...base,
        text: `${p.name} — charges\n\nProcessing fee: ${p.processingFee}\nInterest rate: ${p.interestRate}\n\nAsk your matched lender for the full schedule of charges before signing; prepayment and foreclosure terms vary by lender.`,
        suggestions: [`${p.name} interest rate`, 'Calculate EMI', `Apply for ${p.name}`]
      };
    case 'speed':
      return {
        ...base,
        text: `${p.name} — how quickly it moves\n\nTypical sanction time: ${p.processingTime}\n\nThat clock starts once your documents are complete, so having them ready is the single biggest factor.`,
        suggestions: [`${p.name} documents`, `Apply for ${p.name}`, 'Find a local distributor']
      };
    case 'benefits':
      return {
        ...base,
        text: `${p.name} — key benefits\n\n${bullets(p.keyBenefits)}`,
        suggestions: [`${p.name} eligibility`, `${p.name} interest rate`, `Apply for ${p.name}`]
      };
    case 'emi':
      return {
        actions: [
          { label: 'Open EMI calculator', navigateTo: '/calculator' },
          { label: `Apply for ${p.name}`, apply: { type: 'loan', slug: p.slug } }
        ],
        text: `${p.name} — EMI\n\nRate band ${p.interestRate} over ${p.tenure}. Open the EMI calculator to model your exact amount, rate and tenure; it uses the standard reducing-balance formula.`,
        suggestions: ['Calculate EMI', `${p.name} interest rate`, `${p.name} tenure`]
      };
    case 'apply':
      return {
        ...base,
        text: `${p.name} — starting your application\n\nYou will need: ${p.documents[0]}, plus income proof. Sanction typically takes ${p.processingTime}.\n\nUse the button below to open the pre-qualification form, or talk to a distributor in your city first.`,
        suggestions: [`${p.name} documents`, 'Find a local distributor', `${p.name} eligibility`]
      };
    default:
      return {
        ...base,
        text: `${p.name}\n\n${p.shortDesc}\n\n• Interest rate: ${p.interestRate}\n• Tenure: ${p.tenure}\n• Maximum amount: ${p.maxAmount}\n• Processing fee: ${p.processingFee}\n• Typical sanction: ${p.processingTime}\n• Minimum income: ${p.minIncome}\n\nAsk me about eligibility, documents, or charges for this product.`,
        suggestions: [`${p.name} eligibility`, `${p.name} documents`, `${p.name} interest rate`]
      };
  }
};

const compareLoans = (a: LoanProduct, b: LoanProduct): AssistantReply => ({
  text: `${a.name} vs ${b.name}\n\n${a.name}\n• Rate: ${a.interestRate}\n• Tenure: ${a.tenure}\n• Max: ${a.maxAmount}\n• Sanction: ${a.processingTime}\n\n${b.name}\n• Rate: ${b.interestRate}\n• Tenure: ${b.tenure}\n• Max: ${b.maxAmount}\n• Sanction: ${b.processingTime}\n\n${a.shortDesc}\n${b.shortDesc}`,
  suggestions: [`${a.name} eligibility`, `${b.name} eligibility`, 'Calculate EMI'],
  actions: [
    { label: `Open ${a.name}`, navigateTo: `/loans/${a.slug}` },
    { label: `Open ${b.name}`, navigateTo: `/loans/${b.slug}` }
  ]
});

const cheapestLoans = () =>
  [...loanProducts]
    .map((p) => ({ p, from: parseFloat(p.interestRate.replace(/[^0-9.]/g, '')) || 99 }))
    .sort((x, y) => x.from - y.from)
    .slice(0, 4);

export const answerQuestion = (raw: string): AssistantReply => {
  const q = norm(raw);
  const intent = detectIntent(q);
  const loans = findLoans(q);
  const insurance = findInsurance(q);

  // Two named products + a comparison word = a real comparison.
  if (loans.length >= 2 && (intent === 'compare' || q.includes('vs') || q.includes('difference'))) {
    return compareLoans(loans[0], loans[1]);
  }

  if (loans.length >= 1) {
    return answerForLoan(loans[0], intent, q);
  }

  if (insurance.length >= 1) {
    const p = insurance[0];
    return {
      text: `${p.name}\n\n${p.shortDesc}\n\n• Coverage: ${p.coverageUpTo}\n• Premium: ${p.startingPremium}\n• Claim settlement: ${p.claimSettlementRatio}\n\n${bullets(p.keyBenefits.slice(0, 3))}`,
      suggestions: ['Get an insurance quote', 'Compare insurance plans', 'Find a local distributor'],
      actions: [
        { label: `Open ${p.name} page`, navigateTo: `/insurance/${p.slug}` },
        { label: 'Get a quote', apply: { type: 'insurance', slug: p.slug } }
      ]
    };
  }

  if (intent === 'creditScore') {
    return {
      text: `Credit score\n\nMost lenders on our panel look for a CIBIL score of 700+, though some products (Gold Loan in particular) are far more forgiving because they are secured against an asset.\n\nOur Credit Score Checker estimates where you land on the 300-900 scale and tells you which habit is costing you the most points. It runs entirely in your browser and has no effect on your real score.`,
      suggestions: ['Check my credit score', 'Which loan needs the lowest score?', 'What documents do I need?'],
      actions: [{ label: 'Open Credit Score Checker', navigateTo: '/calculator' }]
    };
  }

  if (intent === 'distributor') {
    return {
      text: `Local distributors\n\nWe have verified distributors across 500+ Indian cities. They handle doorstep documentation, KYC verification, and rate negotiation in your own language, at no brokerage to you.\n\nSearch by state and district on the Distributors page.`,
      suggestions: ['What documents do I need?', 'Compare loan options', 'Become a distributor'],
      actions: [{ label: 'Find a distributor', navigateTo: '/distributors' }]
    };
  }

  if (intent === 'emi') {
    return {
      text: `EMI calculation\n\nEMI = P x r x (1+r)^n / ((1+r)^n - 1), where P is principal, r the monthly rate, and n the number of months.\n\nOur calculator does this for you and also shows total interest paid, so you can see what a longer tenure really costs.`,
      suggestions: ['Home loan interest rate', 'Personal loan tenure', 'Check my credit score'],
      actions: [{ label: 'Open EMI calculator', navigateTo: '/calculator' }]
    };
  }

  if (intent === 'rate' || q.includes('lowest') || q.includes('cheapest')) {
    const list = cheapestLoans();
    return {
      text: `Lowest starting rates on our panel\n\n${list
        .map((x) => `• ${x.p.name}: ${x.p.interestRate}`)
        .join('\n')}\n\nSecured products price lower because the lender holds an asset. Ask me about any of these by name for full terms.`,
      suggestions: list.slice(0, 3).map((x) => `${x.p.name} eligibility`),
      actions: [
        { label: 'Browse all loans', navigateTo: '/loans' },
        { label: 'Calculate EMI', navigateTo: '/calculator' }
      ]
    };
  }

  if (intent === 'documents') {
    return {
      text: `Documents required\n\nAcross every loan product you will generally need:\n• Identity: Aadhaar / Passport / Voter ID\n• PAN card (mandatory for credit checks)\n• Income proof: 3 months payslips + Form 16 if salaried, or 2 years ITR if self-employed\n• Bank statements for the last 6-12 months\n• Asset papers for secured products (property, vehicle, or gold)\n\nName a specific loan and I will give you its exact list.`,
      suggestions: ['Home loan documents', 'Business loan documents', 'Gold loan documents'],
      actions: [{ label: 'Browse all loans', navigateTo: '/loans' }]
    };
  }

  if (intent === 'eligibility') {
    return {
      text: `Eligibility\n\nIt varies by product, but lenders consistently look at four things: your credit score (usually 700+), income stability, existing EMI burden, and for secured loans the asset itself.\n\nTell me which loan you are considering and I will give you its exact criteria.`,
      suggestions: ['Home loan eligibility', 'Business loan eligibility', 'Check my credit score'],
      actions: [{ label: 'Browse all loans', navigateTo: '/loans' }]
    };
  }

  // Nothing matched by intent - try the FAQ corpus before giving up.
  const faq = searchFaqs(q);
  if (faq) {
    return {
      text: `${faq.question}\n\n${faq.answer}\n\n(From our ${faq.product.name} FAQs.)`,
      suggestions: [`${faq.product.name} eligibility`, `${faq.product.name} documents`, 'Calculate EMI'],
      actions: [
        { label: `Open ${faq.product.name} page`, navigateTo: `/loans/${faq.product.slug}` },
        { label: `Apply for ${faq.product.name}`, apply: { type: 'loan', slug: faq.product.slug } }
      ]
    };
  }

  return {
    text: `I could not match that to a specific product.\n\nI can answer questions about all 13 loan products — rates, tenure, maximum amount, eligibility, documents, fees and sanction time — plus insurance, credit scores and finding a distributor.\n\nTry naming a product, for example "gold loan interest rate" or "documents for a business loan".`,
    suggestions: ['Which loan has the lowest rate?', 'Home loan eligibility', 'What documents do I need?', 'Check my credit score'],
    actions: [
      { label: 'Browse all loans', navigateTo: '/loans' },
      { label: 'Find a distributor', navigateTo: '/distributors' }
    ]
  };
};
