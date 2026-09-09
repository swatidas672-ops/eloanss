export interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

export const mainNavItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Loans', href: '/loans' },
  { name: 'Insurance', href: '/insurance' },
  { name: 'Invest', href: '/invest' },
  { name: 'Calculators', href: '/calculator' },
  { name: 'Global Business', href: '/global-business' },
  { name: 'Distributors', href: '/distributors' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' }
];

export const footerQuickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Financial Calculators', href: '/calculator' },
  { name: 'About ELOANSS', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Distributor Network', href: '/distributors' },
  { name: 'Shareholders & Governance', href: '/shareholders' },
  { name: 'Contact & Support', href: '/contact' }
];

export const footerLoanLinks = [
  { name: 'Home Loan', href: '/loans/home-loan' },
  { name: 'Business Loan', href: '/loans/business-loan' },
  { name: 'Mortgage Loan (LAP)', href: '/loans/mortgage-loan' },
  { name: 'Open Plot Loan', href: '/loans/open-plot-loan' },
  { name: 'Personal Loan', href: '/loans/personal-loan' },
  { name: 'Commercial Vehicle', href: '/loans/commercial-vehicle-loan' },
  { name: 'Overdraft (OD) Facility', href: '/loans/od-loan' },
  { name: 'Gold Loan', href: '/loans/gold-loan' }
];

export const footerInsuranceLinks = [
  { name: 'Health Insurance', href: '/insurance/health-insurance' },
  { name: 'Life Insurance', href: '/insurance/life-insurance' },
  { name: 'Term Insurance', href: '/insurance/term-insurance' },
  { name: 'Property Insurance', href: '/insurance/property-insurance' },
  { name: 'Vehicle Insurance', href: '/insurance/vehicle-insurance' },
  { name: 'Cargo & Marine', href: '/insurance/cargo-insurance' }
];
