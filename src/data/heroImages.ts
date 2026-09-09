// High-resolution hero imagery assets for all ELOANSS pages
import loansSavingsImg from '../assets/images/loans_savings_hero.jpg';
import wealthInvestImg from '../assets/images/wealth_invest_corridor_1788930809385.jpg';
import insuranceShieldImg from '../assets/images/insurance_shield_future_1788930847817.jpg';
import homeSkylineHeroImg from '../assets/images/hero_financial_skyline_1788934739275.jpg';

export const heroImages = {
  home: {
    src: homeSkylineHeroImg,
    alt: 'Executive penthouse desk overlooking metropolitan financial skyline at golden hour sunset',
    tag: 'NEXT-GEN FINANCIAL PLATFORM',
    floatingTitle: 'AI Financial Engine v2035',
    floatingSubtitle: 'Institutional Liquidity & Direct Routing'
  },
  loans: {
    src: loansSavingsImg,
    alt: 'Piggy bank overflowing with banknotes and gold coins, representing accessible financing',
    tag: 'INSTANT SANCTIONS',
    floatingTitle: 'Lowest Rate Discovery',
    floatingSubtitle: 'Direct Bank & NBFC Underwriting'
  },
  insurance: {
    src: insuranceShieldImg,
    alt: 'High-tech insurance protection and healthcare shield',
    tag: '99.6% CLAIM SETTLEMENT',
    floatingTitle: 'Comprehensive Protection Shield',
    floatingSubtitle: 'Cashless Hospital Network Across India'
  },
  distributors: {
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
    alt: 'Certified financial advisors and local distributor network',
    tag: 'PAN-INDIA FOOTPRINT',
    floatingTitle: '1,500+ Certified Advisors',
    floatingSubtitle: 'Doorstep Documentation & Verified KYC'
  },
  invest: {
    src: wealthInvestImg,
    alt: 'Global wealth management and capital investment corridor',
    tag: 'WEALTH ADVISORY',
    floatingTitle: 'Curated Institutional Portfolios',
    floatingSubtitle: 'Fixed Income, Sovereign Bonds & Multi-Asset'
  },
  global: {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    alt: 'International financial trading towers and cross-border corridors',
    tag: 'GLOBAL BUSINESS CORRIDOR',
    floatingTitle: 'Cross-Border Capital Desk',
    floatingSubtitle: 'GIFT City IFSC, Dubai & Singapore Axis'
  },
  services: {
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
    alt: 'Modern glass-walled corporate office housing enterprise financial operations',
    tag: 'ENTERPRISE ECOSYSTEM',
    floatingTitle: 'Integrated Financial Suite',
    floatingSubtitle: 'Banking APIs, Underwriting & Verification'
  },
  about: {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Corporate financial leadership and institutional headquarters',
    tag: 'INSTITUTIONAL INTEGRITY',
    floatingTitle: 'Bandra Kurla Complex (BKC)',
    floatingSubtitle: 'Mumbai Headquarters & National Operations'
  },
  shareholders: {
    src: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Corporate governance, statutory balance sheets and stock exchange',
    tag: 'STATUTORY GOVERNANCE',
    floatingTitle: 'Audited Institutional Disclosures',
    floatingSubtitle: 'Zero Net Debt & Independent Oversight'
  },
  calculator: {
    src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Financial calculator, analytics and digital balance spreadsheet',
    tag: 'INSTANT ALGORITHMIC ESTIMATION',
    floatingTitle: 'Exact EMI & Wealth Simulation',
    floatingSubtitle: 'Direct RBI Amortization Formula'
  },
  contact: {
    src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    alt: '24/7 financial support and customer advisory concierge',
    tag: '24/7 DEDICATED DESK',
    floatingTitle: 'National Helpline: 1800-ELOANSS',
    floatingSubtitle: '< 2-Hour Ticket Resolution Protocol'
  }
};

export const loanDetailHeroImages: Record<string, { src: string; alt: string; tag: string; title: string; subtitle: string }> = {
  'home-loan': {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern luxury residential home architecture',
    tag: 'STARTING AT 8.40%',
    title: 'Up to ₹10 Crore Facility',
    subtitle: 'Zero Prepayment Penalty on Floating Rates'
  },
  'mortgage-loan': {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    alt: 'High-value commercial and residential mortgage property',
    tag: 'LOAN AGAINST PROPERTY',
    title: 'Unlock 70% Property Value',
    subtitle: 'High Liquid Capital for Expansion'
  },
  'business-loan': {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Enterprise operations and high-growth business team',
    tag: 'ZERO COLLATERAL UP TO ₹50L',
    title: 'Accelerate Enterprise Growth',
    subtitle: '48-Hour Direct Bank Disbursement'
  },
  'personal-loan': {
    src: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern digital lifestyle and immediate financial comfort',
    tag: '100% PAPERLESS',
    title: 'Instant Sanction in 4 Hours',
    subtitle: 'Flexible Repayment from 12 to 60 Months'
  },
  'project-finance': {
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    alt: 'Mega infrastructure and industrial project site',
    tag: 'SYNDICATED CONSORTIUM',
    title: 'Up to ₹250 Crore Scale',
    subtitle: 'Structured Milestone Drawdowns'
  },
  'vehicle-loan': {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    alt: 'Premium automobile mobility and fleet transportation',
    tag: 'UP TO 100% ON-ROAD',
    title: 'Smart Vehicle Financing',
    subtitle: 'Pre-Approved Instant Clearances'
  },
  'gold-loan': {
    src: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Certified gold bullion and high-security depository vault',
    tag: 'LOWEST 8.50% RATE',
    title: '30-Minute Cash Sanction',
    subtitle: 'No Income Proof or ITR Required'
  },
  'working-capital': {
    src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    alt: 'Corporate supply chain and cashflow management',
    tag: 'REVOLVING CREDIT LINE',
    title: 'Pay Interest Only on Usage',
    subtitle: 'Optimize Cash Cycle & Inventory'
  }
};

export const insuranceDetailHeroImages: Record<string, { src: string; alt: string; tag: string; title: string; subtitle: string }> = {
  'health-insurance': {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern hospital care and doctor consultation',
    tag: 'CASHLESS HOSPITALIZATION',
    title: '10,000+ Empaneled Hospitals',
    subtitle: 'Zero Room Rent Capping & Global Cover'
  },
  'term-insurance': {
    src: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=1200&q=80',
    alt: 'Family protection and financial security for future generations',
    tag: '99.6% SETTLEMENT RATIO',
    title: 'Up to ₹20 Crore Pure Cover',
    subtitle: 'Critical Illness Rider & Accidental Benefit'
  },
  'motor-insurance': {
    src: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    alt: 'Automobile vehicle protection and roadside assistance',
    tag: 'INSTANT DIGITAL POLICY',
    title: 'Zero Depreciation Add-on',
    subtitle: 'Cashless Garages & 24/7 Roadside Assist'
  },
  'business-insurance': {
    src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Corporate cybersecurity, office asset and liability protection',
    tag: 'ENTERPRISE RISK SHIELD',
    title: 'Fire, Burglary & Cyber Cover',
    subtitle: 'Directors & Officers (D&O) Liability'
  },
  'travel-insurance': {
    src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    alt: 'International travel and cross-border flight security',
    tag: 'WORLDWIDE COVERAGE',
    title: 'Schengen & US Visa Compliant',
    subtitle: 'Baggage Loss, Flight Delays & Medical'
  },
  'marine-cargo': {
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    alt: 'Container ships and international maritime freight logistics',
    tag: 'GLOBAL TRANSIT CARGO',
    title: 'Warehouse-to-Warehouse Shield',
    subtitle: 'Sea, Air, Road & Rail Freight Protection'
  },
  'heavy-commercial': {
    src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Commercial logistics trucks and transport fleet',
    tag: 'LOGISTICS FLEET COVER',
    title: 'Payload & Multi-Driver Shield',
    subtitle: 'Third-Party Liability & Fast Claim Desk'
  },
  'group-health': {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Corporate team working together in modern workplace',
    tag: 'EMPLOYEE WELLNESS',
    title: 'From 5 to 50,000 Employees',
    subtitle: 'Day-1 Pre-Existing Disease Coverage'
  }
};
