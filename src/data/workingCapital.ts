// Working capital and business finance facilities shown on the home page.
//
// `slug` maps each item to a product in loans.ts so the card can open the
// application form already set to it. Items without a slug are descriptive
// programmes rather than products to apply for, and render as plain cards.

export interface WorkingCapitalItem {
  label: string;
  slug?: string;
}

export const workingCapitalItems: WorkingCapitalItem[] = [
  { label: 'Cash Credit (CC)', slug: 'od-loan' },
  { label: 'Overdraft (OD)', slug: 'od-loan' },
  { label: 'Working Capital Finance', slug: 'od-loan' },
  { label: 'Business Loans – Secured & Unsecured', slug: 'business-loan' },
  { label: 'Term Loans', slug: 'business-loan' },
  { label: 'Loan Against Property (LAP)', slug: 'mortgage-loan' },
  { label: 'Machinery & Equipment Finance', slug: 'heavy-commercial-vehicle-loan' },
  { label: 'Project & Infrastructure Finance', slug: 'project-loan' },
  { label: 'CGTMSE / MSME Funding Solutions', slug: 'business-loan' },
  { label: 'Cash-Flow Based Lending', slug: 'business-loan' },
  { label: 'GST & Banking-Based Funding', slug: 'od-loan' },
  { label: 'Business Expansion Finance', slug: 'business-loan' },
  { label: 'Balance Transfer & Takeover', slug: 'business-loan' },
  { label: 'Top-Up Funding', slug: 'business-loan' },
  { label: 'Structured Business Finance', slug: 'project-loan' }
];
