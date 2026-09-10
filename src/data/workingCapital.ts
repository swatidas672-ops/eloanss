// Working capital and business finance facilities shown on the home page.
//
// These are descriptive facility types rather than individually applicable
// products, so no item carries a slug and the component renders them as plain,
// non-clickable cards. The section's own CTAs handle the enquiry.

export interface WorkingCapitalItem {
  label: string;
  slug?: string;
}

export const workingCapitalItems: WorkingCapitalItem[] = [
  { label: 'Cash Credit (CC)' },
  { label: 'Overdraft (OD)' },
  { label: 'Working Capital Finance' },
  { label: 'Business Loans – Secured & Unsecured' },
  { label: 'Term Loans' },
  { label: 'Loan Against Property (LAP)' },
  { label: 'Machinery & Equipment Finance' },
  { label: 'Project & Infrastructure Finance' },
  { label: 'CGTMSE / MSME Funding Solutions' },
  { label: 'Cash-Flow Based Lending' },
  { label: 'GST & Banking-Based Funding' },
  { label: 'Business Expansion Finance' },
  { label: 'Balance Transfer & Takeover' },
  { label: 'Top-Up Funding' },
  { label: 'Structured Business Finance' }
];
