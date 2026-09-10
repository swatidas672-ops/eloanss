// Service categories shown on the Services page.
//
// Every image URL below was checked for a 200 and viewed before use.
// `href` points at a real route, so no card links nowhere.

export type ServiceIcon =
  | 'loans'
  | 'insurance'
  | 'business'
  | 'vehicle'
  | 'property'
  | 'gold'
  | 'global'
  | 'trade'
  | 'partner';

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: ServiceIcon;
  /** Tailwind gradient for the icon tile. */
  accent: string;
  items: string[];
  cta: { label: string; href: string };
  image: { src: string; alt: string };
}

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=800&auto=format&fit=crop`;

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'loan-services',
    title: 'Loan Services',
    subtitle: 'Personal and business loans for every goal',
    icon: 'loans',
    accent: 'from-sky-500 to-blue-500',
    items: ['Personal Loan', 'Business Loan', 'Home Loan', 'Car Loan', 'Loan Against Property'],
    cta: { label: 'View Loan Services', href: '/loans' },
    image: { src: u('1560520653-9e0e4c89eb11'), alt: 'Model house on architectural plans beside savings' }
  },
  {
    id: 'insurance-services',
    title: 'Insurance Services',
    subtitle: 'Protection for you, your family and your business',
    icon: 'insurance',
    accent: 'from-emerald-500 to-green-600',
    items: [
      'Life Insurance',
      'Health Insurance',
      'Car Insurance',
      'Two Wheeler Insurance',
      'Commercial Vehicle Insurance'
    ],
    cta: { label: 'View Insurance Services', href: '/insurance' },
    image: { src: u('1511895426328-dc8714191300'), alt: 'Extended family together at sunset' }
  },
  {
    id: 'business-solutions',
    title: 'Business Solutions',
    subtitle: 'Financial support for business growth',
    icon: 'business',
    accent: 'from-purple-500 to-fuchsia-600',
    items: [
      'Working Capital',
      'OD / Overdraft',
      'Project Finance',
      'Commercial Vehicle Loan',
      'Trade Finance'
    ],
    cta: { label: 'View Business Services', href: '/loans/business-loan' },
    image: { src: u('1449824913935-59a10b8d2000'), alt: 'Commercial district at street level' }
  },
  {
    id: 'vehicle-finance',
    title: 'Vehicle Finance',
    subtitle: 'Drive your dreams with flexible finance',
    icon: 'vehicle',
    accent: 'from-blue-500 to-sky-400',
    items: [
      'New Car Loan',
      'Used Car Loan',
      'Two Wheeler Loan',
      'Commercial Vehicle Loan',
      'Heavy Vehicle Loan'
    ],
    cta: { label: 'View Vehicle Finance', href: '/loans/new-car-loan' },
    image: { src: u('1552519507-da3b142c6e3d'), alt: 'Modern car on an open road' }
  },
  {
    id: 'property-finance',
    title: 'Home & Property Finance',
    subtitle: 'Build, buy or expand with ease',
    icon: 'property',
    accent: 'from-orange-500 to-amber-500',
    items: [
      'Home Loan',
      'Plot Loan',
      'Mortgage Loan',
      'Loan Against Property',
      'Construction Finance'
    ],
    cta: { label: 'View Property Finance', href: '/loans/home-loan' },
    image: { src: u('1600585154340-be6161a56a0c'), alt: 'Contemporary residential property at dusk' }
  },
  {
    id: 'gold-loan',
    title: 'Gold Loan',
    subtitle: 'Quick and easy finance against your gold assets',
    icon: 'gold',
    accent: 'from-amber-400 to-yellow-500',
    items: [
      'Instant Processing',
      'Competitive Interest Rates',
      'Flexible Repayment',
      'Minimal Documentation',
      'Secure and Transparent'
    ],
    cta: { label: 'View Gold Loan', href: '/loans/gold-loan' },
    image: { src: u('1610375461246-83df859d849d'), alt: 'Stacked gold bullion bars' }
  },
  {
    id: 'global-business',
    title: 'Global Business',
    subtitle: 'Expand your possibilities across borders',
    icon: 'global',
    accent: 'from-violet-500 to-purple-600',
    items: [
      'International Opportunities',
      'Cross-Border Finance',
      'Global Partnership',
      'Market Expansion Support',
      'Dedicated Advisory'
    ],
    cta: { label: 'Explore Global Business', href: '/global-business' },
    image: { src: u('1451187580459-43490279c0fa'), alt: 'Earth at night showing global connections' }
  },
  {
    id: 'trade-working-capital',
    title: 'Trade & Working Capital',
    subtitle: 'Fuel your business operations',
    icon: 'trade',
    accent: 'from-teal-500 to-emerald-600',
    items: [
      'Working Capital Loan',
      'Trade Finance',
      'OD Facilities',
      'Supply Chain Finance',
      'Invoice Discounting'
    ],
    cta: { label: 'View Trade Finance', href: '/trade-banking' },
    image: { src: u('1494412574643-ff11b0a5c1c3'), alt: 'Container port handling export freight' }
  },
  {
    id: 'partner-programme',
    title: 'Partner & Distributor Program',
    subtitle: 'Grow with ELOANSS',
    icon: 'partner',
    accent: 'from-rose-500 to-pink-600',
    items: [
      'Attractive Commissions',
      'Dedicated Support',
      'Wide Product Range',
      'Pan-India Opportunities',
      'Training & Resources'
    ],
    cta: { label: 'Become a Partner', href: '/distributors' },
    image: { src: u('1521791136064-7986c2920216'), alt: 'Two people shaking hands on a partnership' }
  }
];
