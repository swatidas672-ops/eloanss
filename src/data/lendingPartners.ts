// Lending partner directory.
//
// The section renders entirely from this array - add, remove or reorder entries
// here and the grid, counts and category chips all follow.
//
// `categories` holds SLUGS from loans.ts, not free text. The component resolves
// each one against the real catalogue to get its display name and route, so
// every chip is a working link and the labels can never drift out of sync with
// the products themselves. An unknown slug is skipped rather than rendered as a
// dead link.
//
// `logo` points at a file in ../assets/logos. If a logo is omitted or fails to
// load, the card falls back to the two-letter monogram rather than rendering an
// empty box.

import sbiLogo from '../assets/logos/sbi.png';
import hdfcLogo from '../assets/logos/hdfc.png';
import iciciLogo from '../assets/logos/icici.ico';
import axisLogo from '../assets/logos/axis.png';
import kotakLogo from '../assets/logos/kotak.png';
import bobLogo from '../assets/logos/bob.png';
import pnbLogo from '../assets/logos/pnb.ico';
import idfcLogo from '../assets/logos/idfc.png';
import indusindLogo from '../assets/logos/indusind.png';
import yesLogo from '../assets/logos/yes.png';
import bajajLogo from '../assets/logos/bajaj.png';
import tataLogo from '../assets/logos/tata.png';
import muthootLogo from '../assets/logos/muthoot.png';
import piramalLogo from '../assets/logos/piramal.png';
import incredLogo from '../assets/logos/incred.png';

export type PartnerType = 'Bank' | 'NBFC';

export interface LendingPartner {
  id: string;
  name: string;
  /** Two-letter monogram, shown when no logo is supplied or one fails to load. */
  monogram: string;
  /** Official logo imported from ../assets/logos. */
  logo?: string;
  type: PartnerType;
  /** Loan product slugs from loans.ts. The first is treated as the headline product. */
  categories: string[];
  /** Lowest advertised rate across that lender's products. */
  startingRate: string;
  /** One line on what this lender is strongest at. */
  highlight: string;
  /** Accent drawn from the existing palette, used by the monogram fallback. */
  accent: 'sky' | 'cyan' | 'blue' | 'indigo' | 'emerald' | 'amber' | 'purple' | 'teal';
}

export const lendingPartners: LendingPartner[] = [
  {
    id: 'sbi',
    name: 'State Bank of India',
    monogram: 'SB',
    logo: sbiLogo,
    type: 'Bank',
    categories: ['home-loan', 'personal-loan', 'new-car-loan'],
    startingRate: 'From 8.40% p.a.',
    highlight: "India's largest lender, with the widest branch reach for secured loans.",
    accent: 'blue'
  },
  {
    id: 'hdfc-bank',
    name: 'HDFC Bank',
    monogram: 'HD',
    logo: hdfcLogo,
    type: 'Bank',
    categories: ['home-loan', 'business-loan', 'new-car-loan'],
    startingRate: 'From 8.45% p.a.',
    highlight: 'Deep property finance expertise and high sanction ceilings.',
    accent: 'blue'
  },
  {
    id: 'icici-bank',
    name: 'ICICI Bank',
    monogram: 'IC',
    logo: iciciLogo,
    type: 'Bank',
    categories: ['home-loan', 'new-car-loan', 'business-loan'],
    startingRate: 'From 8.40% p.a.',
    highlight: 'Wide product coverage and straight-through digital sanction.',
    accent: 'amber'
  },
  {
    id: 'axis-bank',
    name: 'Axis Bank',
    monogram: 'AX',
    logo: axisLogo,
    type: 'Bank',
    categories: ['home-loan', 'personal-loan', 'mortgage-loan'],
    startingRate: 'From 8.60% p.a.',
    highlight: 'Competitive balance transfer pricing on existing home loans.',
    accent: 'purple'
  },
  {
    id: 'kotak-mahindra-bank',
    name: 'Kotak Mahindra Bank',
    monogram: 'KM',
    logo: kotakLogo,
    type: 'Bank',
    categories: ['personal-loan', 'business-loan', 'od-loan'],
    startingRate: 'From 10.25% p.a.',
    highlight: 'Flexible overdraft and working capital structures for SMEs.',
    accent: 'indigo'
  },
  {
    id: 'bank-of-baroda',
    name: 'Bank of Baroda',
    monogram: 'BB',
    logo: bobLogo,
    type: 'Bank',
    categories: ['home-loan', 'personal-loan', 'commercial-vehicle-loan'],
    startingRate: 'From 8.50% p.a.',
    highlight: 'Strong public sector pricing on housing and vehicle finance.',
    accent: 'amber'
  },
  {
    id: 'punjab-national-bank',
    name: 'Punjab National Bank',
    monogram: 'PN',
    logo: pnbLogo,
    type: 'Bank',
    categories: ['home-loan', 'mortgage-loan', 'personal-loan'],
    startingRate: 'From 8.55% p.a.',
    highlight: 'Long-tenure housing finance with modest processing charges.',
    accent: 'purple'
  },
  {
    id: 'idfc-first-bank',
    name: 'IDFC FIRST Bank',
    monogram: 'IF',
    logo: idfcLogo,
    type: 'Bank',
    categories: ['personal-loan', 'used-car-loan', 'home-loan'],
    startingRate: 'From 9.10% p.a.',
    highlight: 'Rapid paperless approvals for salaried applicants.',
    accent: 'cyan'
  },
  {
    id: 'indusind-bank',
    name: 'IndusInd Bank',
    monogram: 'IB',
    logo: indusindLogo,
    type: 'Bank',
    categories: ['personal-loan', 'new-car-loan', 'business-loan'],
    startingRate: 'From 9.50% p.a.',
    highlight: 'Responsive underwriting for self-employed borrowers.',
    accent: 'teal'
  },
  {
    id: 'yes-bank',
    name: 'YES Bank',
    monogram: 'YB',
    logo: yesLogo,
    type: 'Bank',
    categories: ['personal-loan', 'business-loan', 'home-loan'],
    startingRate: 'From 10.00% p.a.',
    highlight: 'Digital-first retail lending with quick turnaround.',
    accent: 'sky'
  },
  {
    id: 'bajaj-finance',
    name: 'Bajaj Finance',
    monogram: 'BF',
    logo: bajajLogo,
    type: 'NBFC',
    categories: ['personal-loan', 'business-loan', 'two-wheeler-loan'],
    startingRate: 'From 11.00% p.a.',
    highlight: 'High approval rates on unsecured consumer and SME credit.',
    accent: 'sky'
  },
  {
    id: 'tata-capital',
    name: 'Tata Capital',
    monogram: 'TC',
    logo: tataLogo,
    type: 'NBFC',
    categories: ['business-loan', 'project-loan', 'personal-loan'],
    startingRate: 'From 10.99% p.a.',
    highlight: 'Structured project and commercial finance for growing firms.',
    accent: 'blue'
  },
  {
    id: 'muthoot-finance',
    name: 'Muthoot Finance',
    monogram: 'MF',
    logo: muthootLogo,
    type: 'NBFC',
    categories: ['gold-loan', 'personal-loan'],
    startingRate: 'From 8.50% p.a.',
    highlight: 'Same-day gold loans with no income documentation required.',
    accent: 'amber'
  },
  {
    id: 'piramal-finance',
    name: 'Piramal Finance',
    monogram: 'PF',
    logo: piramalLogo,
    type: 'NBFC',
    categories: ['home-loan', 'mortgage-loan', 'project-loan'],
    startingRate: 'From 9.75% p.a.',
    highlight: 'Housing and secured lending in tier 2 and tier 3 markets.',
    accent: 'emerald'
  },
  {
    id: 'incred-finance',
    name: 'InCred Finance',
    monogram: 'IN',
    logo: incredLogo,
    type: 'NBFC',
    categories: ['personal-loan', 'business-loan', 'two-wheeler-loan'],
    startingRate: 'From 11.50% p.a.',
    highlight: 'Data-led underwriting for thin credit files and new borrowers.',
    accent: 'indigo'
  }
];

export const partnerStats = {
  totalLenders: '50+',
  regulator: 'RBI Regulated',
  cities: '500+',
  sanctionSpeed: '24-48 Hrs'
};
