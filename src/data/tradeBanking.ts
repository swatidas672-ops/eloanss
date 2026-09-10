// Trade & banking facilities page content.
//
// `slug` maps each facility to a product in loans.ts so the card can open the
// application form already set to it. Descriptions matter here - BG, LC and
// LRD-style instruments are unfamiliar to many borrowers.

export type TradeIcon =
  | 'guarantee'
  | 'letter'
  | 'gst'
  | 'pos'
  | 'capital'
  | 'enhance'
  | 'transfer';

export interface TradeFacility {
  id: string;
  name: string;
  icon: TradeIcon;
  /** Plain-language explanation of the instrument. */
  description: string;
  /** Loan product the application form should open on. */
  slug: string;
}

export const tradeFacilities: TradeFacility[] = [
  {
    id: 'bank-guarantee',
    name: 'Bank Guarantee (BG)',
    icon: 'guarantee',
    description:
      'A bank undertaking to pay your counterparty if you cannot perform. Commonly demanded for tenders, performance bonds and security deposits.',
    slug: 'business-loan'
  },
  {
    id: 'letter-of-credit',
    name: 'Letter of Credit (LC)',
    icon: 'letter',
    description:
      'Payment assured to your supplier once shipping documents are presented. Lets you buy on credit terms without the supplier carrying your risk.',
    slug: 'business-loan'
  },
  {
    id: 'gst-based-od',
    name: 'GST-Based OD',
    icon: 'gst',
    description:
      'An overdraft limit assessed on your filed GST turnover rather than on collateral, so declared sales become borrowing capacity.',
    slug: 'od-loan'
  },
  {
    id: 'pos-based-od',
    name: 'POS-Based OD',
    icon: 'pos',
    description:
      'A limit sized on your card settlement volumes, repaid as a share of daily receipts. Suited to retail and hospitality counters.',
    slug: 'od-loan'
  },
  {
    id: 'working-capital-limits',
    name: 'Working Capital Limits',
    icon: 'capital',
    description:
      'Cash credit and drawing power against stock and receivables, sized to your operating cycle so payroll and purchases stay funded.',
    slug: 'od-loan'
  },
  {
    id: 'cc-od-enhancement',
    name: 'CC / OD Enhancement',
    icon: 'enhance',
    description:
      'Raise an existing cash credit or overdraft limit as turnover grows, without unwinding the facility you already run.',
    slug: 'od-loan'
  },
  {
    id: 'takeover-balance-transfer',
    name: 'Takeover & Balance Transfer',
    icon: 'transfer',
    description:
      'Move an existing facility to a lender offering better pricing or higher limits, with the takeover handled end to end.',
    slug: 'business-loan'
  }
];

export const tradeBankingImages = {
  hero: {
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop',
    alt: 'Container ship being loaded by gantry cranes at a working port'
  },
  workingCapital: {
    src: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop',
    alt: 'Spread of banknotes representing working capital'
  },
  takeover: {
    src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
    alt: 'Two people shaking hands over a completed banking agreement'
  }
};

/** Who these facilities typically suit. */
export const tradeAudience = [
  'Importers and exporters settling against shipping documents',
  'Contractors posting performance or tender guarantees',
  'GST-registered traders with declared turnover but limited collateral',
  'Retail and hospitality counters with steady card settlements',
  'Manufacturers funding stock and receivables through the operating cycle',
  'Businesses outgrowing an existing cash credit limit'
];
