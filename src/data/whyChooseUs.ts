// Reasons to choose ELOANSS, shown as section 9 on the home page.
// Edit this array to change what that section lists.

export interface AdvantagePoint {
  label: string;
  /** True when the claim needs the indicative-terms footnote. */
  qualified?: boolean;
}

export const whyChooseUs: AdvantagePoint[] = [
  { label: 'Competitive Pricing', qualified: true },
  { label: 'Faster Processing & TAT', qualified: true },
  { label: 'Flexible Credit Assessment' },
  { label: 'Cash-Flow-Based Lending' },
  { label: 'MSME & Mid-Corporate Expertise' },
  { label: 'End-to-End Documentation Assistance' },
  { label: 'Dedicated Relationship Manager Support' },
  { label: 'Pan-India Banking Network' },
  { label: 'Digital & Doorstep Assistance' }
];
