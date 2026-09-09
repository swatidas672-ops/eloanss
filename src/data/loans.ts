import { LoanProduct } from '../types';

export const loanProducts: LoanProduct[] = [
  {
    id: 'business-loan',
    slug: 'business-loan',
    name: 'Business Loan',
    tagline: 'Fuel your business growth.',
    category: 'business',
    shortDesc: 'Fuel your business growth with collateral-free capital up to ₹75 Lakhs.',
    longDesc: 'Accelerate your commercial enterprise with scalable funding tailored for working capital, infrastructure expansion, inventory purchasing, and tech modernization. Quick approvals and flexible repayment options.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    interestRate: '11.5% - 17.5% p.a.',
    tenure: '12 to 60 Months',
    maxAmount: 'Up to ₹75 Lakhs',
    processingFee: '1.5% to 2.5%',
    processingTime: '24 to 48 Hours',
    minIncome: '₹40,000 / month turnover',
    keyBenefits: [
      'Zero collateral required for loans up to ₹50 Lakhs',
      'Flexible overdraft and term repayment options',
      'Minimal paperwork with digital GST & bank statement verification',
      'Pre-approved top-up limits for expanding enterprises'
    ],
    eligibility: [
      'Self-employed individuals, proprietors, partnership firms, and private limited companies',
      'Minimum business vintage of 2 years',
      'Annual turnover of minimum ₹25 Lakhs with audited financial statements',
      'Credit score (CIBIL) of 680 or higher'
    ],
    documents: [
      'PAN Card and Aadhaar Card of promoters/directors',
      'Last 12 months official bank account statements',
      'GST returns (last 12 months) & Business Registration Proof (MSME/Udyam/COI)',
      'Last 2 years audited ITR and Computation of Income'
    ],
    faqs: [
      {
        question: 'Can startups apply for an ELOANSS business loan?',
        answer: 'Startups with at least 18-24 months of operational revenue and positive unit economics can apply through our early-stage growth program with matched distributors.'
      },
      {
        question: 'Is collateral or a guarantor required?',
        answer: 'Unsecured business loans up to ₹50 Lakhs do not require collateral. Higher quantum limits can be structured with asset lien or promoter guarantees.'
      }
    ]
  },
  {
    id: 'personal-loan',
    slug: 'personal-loan',
    name: 'Personal Loan',
    tagline: 'Financial flexibility when you need it.',
    category: 'personal',
    shortDesc: 'Financial flexibility when you need it with zero restrictions on end-use.',
    longDesc: 'Access multi-purpose digital liquidity for home upgrades, weddings, travel, medical emergencies, or debt consolidation. Instant approval with same-day disbursement to your verified bank account.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    interestRate: '10.25% - 15.5% p.a.',
    tenure: '12 to 72 Months',
    maxAmount: 'Up to ₹40 Lakhs',
    processingFee: '1.0% to 2.0%',
    processingTime: 'Instant to 4 Hours',
    minIncome: '₹25,000 / month',
    keyBenefits: [
      'Instant digital sanction based on credit health and bank statements',
      'No collateral or security needed',
      'Part-prepayment and foreclosure options with low charges',
      'Flexible tenures tailored to your monthly cash flow'
    ],
    eligibility: [
      'Salaried professionals or self-employed individuals aged 21 to 58 years',
      'Minimum net monthly income of ₹25,000 (metro) or ₹20,000 (non-metro)',
      'Minimum continuous work experience of 1 year',
      'Credit score of 700+ preferred for best interest brackets'
    ],
    documents: [
      'Identity & Address Proof (Aadhaar / Passport / Voter ID)',
      'PAN Card',
      'Last 3 months salary slips or Form 16',
      'Last 6 months salary bank account statement'
    ],
    faqs: [
      {
        question: 'Are there any restrictions on how I spend the personal loan?',
        answer: 'No. You have complete freedom of usage for medical, personal, wedding, educational, or relocation purposes.'
      },
      {
        question: 'How fast is the disbursal process?',
        answer: 'With our digital KYC and automated verification, approved applicants typically receive funds within 2 to 6 hours.'
      }
    ]
  },
  {
    id: 'open-plot-loan',
    slug: 'open-plot-loan',
    name: 'Open Plot Loan',
    tagline: 'Build your future investment.',
    category: 'property',
    shortDesc: 'Finance residential and commercial plot acquisition in urban growth zones.',
    longDesc: 'Acquire your piece of land in approved townships, municipal corporation limits, or developing economic corridors. Combine plot purchase with a construction loan package for seamless future building.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop',
    interestRate: '8.75% - 11.25% p.a.',
    tenure: 'Up to 20 Years',
    maxAmount: 'Up to ₹5 Crores',
    processingFee: '0.5% to 1.0%',
    processingTime: '5 to 7 Working Days',
    minIncome: '₹35,000 / month',
    keyBenefits: [
      'High Loan-to-Value (LTV) ratio up to 75% of registered market value',
      'Comprehensive title search and legal verification included',
      'Option to bundle plot loan with home construction loan',
      'Extended tenure up to 20 years to minimize monthly EMI load'
    ],
    eligibility: [
      'Resident Indians and Non-Resident Indians (NRIs) aged 23 to 65',
      'Salaried individuals or business proprietors with steady income proofs',
      'Plot must have clear approvals from municipal authorities or town planning bodies',
      'Clear title deeds free from agricultural land restrictions'
    ],
    documents: [
      'Property title deed (Sale Deed / Allotment Letter / Possession Certificate)',
      'Approved layout map from municipal or urban development authority',
      'Encumbrance Certificate (EC) for past 13 to 30 years',
      'Standard KYC, ITR / Salary slips, and bank statements'
    ],
    faqs: [
      {
        question: 'Can I purchase agricultural land with this loan?',
        answer: 'Open plot loans are specifically structured for residential or non-agricultural approved land plots. Agricultural land requires specific rural farm financing.'
      }
    ]
  },
  {
    id: 'home-loan',
    slug: 'home-loan',
    name: 'Home Loan',
    tagline: 'Turn your dream home into reality.',
    category: 'property',
    shortDesc: 'Turn your dream home into reality with competitive interest rates and long tenures.',
    longDesc: 'Whether purchasing a ready apartment, an under-construction villa, or custom constructing on your own lot, ELOANSS provides tailored home financing with transparent legal checks and tax benefits.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    interestRate: '8.40% - 9.75% p.a.',
    tenure: 'Up to 30 Years',
    maxAmount: 'Up to ₹10 Crores',
    processingFee: '0.25% to 0.50%',
    processingTime: '3 to 5 Working Days',
    minIncome: '₹30,000 / month',
    keyBenefits: [
      'Attractive floating and fixed interest structures linked to repo benchmarks',
      'Maximum LTV up to 85% of property value',
      'Significant tax deductions under Section 80C and Section 24(b)',
      'Special discounted rates for women co-applicants'
    ],
    eligibility: [
      'Salaried professionals, self-employed businessmen, and doctors/consultants',
      'Age bracket: 21 to 65 years at time of maturity',
      'Satisfactory debt-to-income ratio (typically under 55%)',
      'CIBIL credit score of 720+ for premier tier pricing'
    ],
    documents: [
      'Agreement for Sale or Allotment Letter from Builder',
      'Property chain deeds and NOC from Society / Developer',
      'Last 3 years ITR (Self-employed) or 6 months salary slips + Form 16 (Salaried)',
      '12 months operational bank statements'
    ],
    faqs: [
      {
        question: 'What are the tax benefits of a home loan?',
        answer: 'You can claim deductions up to ₹1.5 Lakhs on principal repayment under Section 80C and up to ₹2 Lakhs on interest payment under Section 24(b).'
      },
      {
        question: 'Can I add a co-applicant to increase my loan eligibility?',
        answer: 'Yes! Adding an earning co-applicant (such as spouse, parent, or sibling) combines household income to grant significantly higher loan amounts.'
      }
    ]
  },
  {
    id: 'mortgage-loan',
    slug: 'mortgage-loan',
    name: 'Mortgage Loan (LAP)',
    tagline: 'Unlock the value of your property.',
    category: 'property',
    shortDesc: 'Unlock high-value liquidity by mortgaging your residential or commercial asset.',
    longDesc: 'Loan Against Property (LAP) enables high-ticket funding with lower interest rates and longer tenures than unsecured loans. Retain full ownership of your property while utilizing its trapped equity.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    interestRate: '9.00% - 12.5% p.a.',
    tenure: 'Up to 15 Years',
    maxAmount: 'Up to ₹15 Crores',
    processingFee: '0.5% to 1.0%',
    processingTime: '4 to 7 Working Days',
    minIncome: '₹50,000 / month',
    keyBenefits: [
      'LTV up to 65% - 70% of current market valuation',
      'Much lower interest rates compared to personal or unsecured business loans',
      'Extended repayment horizon of up to 15 years for comfortable EMIs',
      'Eligible on residential, commercial shops, or office units'
    ],
    eligibility: [
      'Clear unencumbered title on the mortgaged property',
      'Property must be structurally sound and approved by local town planning',
      'Both salaried and business owners eligible with steady financials',
      'Minimum age 23 years'
    ],
    documents: [
      'Original registered title deeds of the property',
      'Approved building sanctions and occupancy certificate',
      'Income documentation (ITR/Form 16/Balance Sheet)',
      'Property tax receipts and electricity bill'
    ],
    faqs: [
      {
        question: 'Can commercial properties be mortgaged?',
        answer: 'Yes, both residential homes/apartments and commercial office units or retail properties can be pledged.'
      }
    ]
  },
  {
    id: 'used-car-loan',
    slug: 'used-car-loan',
    name: 'Used Car Loan',
    tagline: 'Drive your next opportunity.',
    category: 'auto',
    shortDesc: 'Drive your next opportunity with fast valuation and up to 85% vehicle financing.',
    longDesc: 'Own a certified pre-owned sedan, SUV, or luxury automobile without draining your savings. Rapid doorstep physical inspection, transparent vehicle valuation, and seamless RC transfer assistance.',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop',
    interestRate: '11.0% - 15.0% p.a.',
    tenure: '12 to 60 Months',
    maxAmount: 'Up to ₹30 Lakhs',
    processingFee: '1.0% to 2.0%',
    processingTime: '24 to 48 Hours',
    minIncome: '₹20,000 / month',
    keyBenefits: [
      'Financing up to 85% of the vehicle valuation',
      'Covers cars up to 10 years of age from manufacturing',
      'RC transfer, insurance endorsement, and legal check support',
      'Quick approvals with minimal documentation'
    ],
    eligibility: [
      'Age between 21 and 65 years',
      'Salaried or self-employed with stable income proof',
      'Vehicle must have clear registration and valid fitness certificate',
      'CIBIL score 650+'
    ],
    documents: [
      'RC Copy of the car to be purchased',
      'Valid vehicle insurance copy and seller identification',
      'KYC proofs (Aadhaar & PAN)',
      '6 months bank statement'
    ],
    faqs: [
      {
        question: 'How is the valuation of the pre-owned vehicle determined?',
        answer: 'Our certified automobile valuation engineers conduct a multi-point physical inspection to calculate fair market value.'
      }
    ]
  },
  {
    id: 'new-car-loan',
    slug: 'new-car-loan',
    name: 'New Car Loan',
    tagline: 'New beginnings on the road.',
    category: 'auto',
    shortDesc: 'New beginnings on the road with up to 100% on-road price financing.',
    longDesc: 'Bring home your brand new family car or electric vehicle with tailor-made loan options, tie-ups with leading automotive manufacturers, and competitive interest brackets.',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    interestRate: '8.70% - 10.5% p.a.',
    tenure: 'Up to 84 Months (7 Years)',
    maxAmount: 'Up to ₹1 Crore',
    processingFee: '0.5% to 1.0%',
    processingTime: 'Within 24 Hours',
    minIncome: '₹25,000 / month',
    keyBenefits: [
      'Up to 90% - 100% financing on ex-showroom or on-road pricing',
      'Special interest discounts for electric vehicles (EVs)',
      'Pre-approved deals available for existing banking customers',
      'Complimentary accidental insurance bundled options'
    ],
    eligibility: [
      'Salaried or business professionals aged 21-65 years',
      'Steady employment history of at least 1 year',
      'Credit score of 700+ for prime rate slabs'
    ],
    documents: [
      'Proforma invoice from authorized automobile dealership',
      'Income documents (salary slips / ITR)',
      'Address & identity proofs',
      '6 months bank statements'
    ],
    faqs: [
      {
        question: 'Can I get financing on the on-road price including insurance and RTO?',
        answer: 'Yes, select partner lenders offer up to 90-100% on-road price financing based on your credit score profile.'
      }
    ]
  },
  {
    id: 'commercial-vehicle-loan',
    slug: 'commercial-vehicle-loan',
    name: 'Commercial Vehicle Loan',
    tagline: 'Power your business forward.',
    category: 'auto',
    shortDesc: 'Power your business forward with commercial fleet and light vehicle financing.',
    longDesc: 'Designed for logistics operators, fleet aggregators, and small freight entrepreneurs purchasing light commercial vehicles (LCVs), small trucks, tempo travelers, and passenger buses.',
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop',
    interestRate: '10.5% - 14.5% p.a.',
    tenure: '12 to 60 Months',
    maxAmount: 'Up to ₹75 Lakhs',
    processingFee: '1.0% to 2.0%',
    processingTime: '2 to 3 Working Days',
    minIncome: 'Existing transport track record or ₹35,000/mo',
    keyBenefits: [
      'Covers both single-vehicle buyers and fleet expansion operators',
      'Structured EMI matching seasonal freight cash flows',
      'Fast sanction with verified distributor assistance in your transport hub',
      'Body-building and chassis composite funding options'
    ],
    eligibility: [
      'Commercial transport operators, logistics contractors, and small business owners',
      'Possession of valid commercial driving license or transport contract agreement',
      'Minimum 1-2 years experience in transport business',
      'Satisfactory repayment history of prior fleet'
    ],
    documents: [
      'Dealer proforma invoice for vehicle chassis',
      'Business KYC and transport permits / GST registration',
      'Bank statement (12 months)',
      'Contract agreement with logistics firms (if available)'
    ],
    faqs: [
      {
        question: 'Are first-time vehicle buyers (FTBs) eligible?',
        answer: 'Yes, our First-Time Buyer program supports new transport entrepreneurs with verified co-signers or experienced guarantor support.'
      }
    ]
  },
  {
    id: 'heavy-commercial-vehicle-loan',
    slug: 'heavy-commercial-vehicle-loan',
    name: 'Heavy Commercial Vehicle Loan',
    tagline: 'Finance for heavy transportation needs.',
    category: 'auto',
    shortDesc: 'Finance for heavy transportation needs, multi-axle trailers, and tippers.',
    longDesc: 'Comprehensive asset financing for multi-axle prime movers, tippers, container haulers, and heavy earth-moving equipment. High-ticket lines designed to keep long-haul transit profitable.',
    imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop',
    interestRate: '9.80% - 13.5% p.a.',
    tenure: '24 to 60 Months',
    maxAmount: 'Up to ₹2 Crores',
    processingFee: '1.0% to 1.5%',
    processingTime: '3 to 5 Working Days',
    minIncome: 'Fleet revenue verification',
    keyBenefits: [
      'High-ticket financing for prime movers, tippers, and multi-axles',
      'Special seasonal moratorium during monsoon/slack periods',
      'Chassis and custom fabrication cost coverage',
      'Dedicated relationship managers for fleet accounts'
    ],
    eligibility: [
      'Established fleet owners, mining haulers, and infrastructure contractors',
      'Minimum existing fleet of 2 or more heavy commercial vehicles',
      'Audited balance sheets and active freight contracts',
      'Satisfactory FASTag / tolling history and credit record'
    ],
    documents: [
      'Audited financial statements for last 2 years',
      'List of existing fleet with RC copies and permit documents',
      'Quotations from authorized heavy vehicle dealership',
      'Client freight contracts or mining order slips'
    ],
    faqs: [
      {
        question: 'Does this cover tippers and mining construction trucks?',
        answer: 'Yes, we finance tippers, mining trucks, transit mixers, and bulkers from leading manufacturers.'
      }
    ]
  },
  {
    id: 'project-loan',
    slug: 'project-loan',
    name: 'Project Loan',
    tagline: 'Funding for ambitious projects.',
    category: 'specialized',
    shortDesc: 'Funding for ambitious greenfield, brownfield, and infrastructure ventures.',
    longDesc: 'Structured long-term debt financing for setting up manufacturing plants, industrial warehouses, real estate projects, and renewable energy installations. Tailored milestone disbursements.',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    interestRate: '10.0% - 14.0% p.a.',
    tenure: '5 to 15 Years',
    maxAmount: 'Up to ₹50 Crores',
    processingFee: '0.75% to 1.5%',
    processingTime: '10 to 20 Working Days',
    minIncome: 'Detailed Project Report (DPR) evaluation',
    keyBenefits: [
      'Milestone-based tranche disbursement aligned with engineering timelines',
      'Interest moratorium during construction/gestation period',
      'Syndicated debt structuring with top banking consortiums',
      'Advisory assistance on TEV (Techno-Economic Viability) compliance'
    ],
    eligibility: [
      'Corporate entities, SPVs, and registered LLPs with viable feasibility studies',
      'Promoter equity contribution of at least 25% - 35% of total project cost',
      'Statutory environmental, municipal, and land clearance approvals',
      'Proven promoter track record in the sector'
    ],
    documents: [
      'Detailed Project Report (DPR) and Techno-Economic Viability (TEV) study',
      'All regulatory clearances, pollution board consents, and land possession records',
      'Promoter group audited financials for past 3-5 years',
      'Off-take agreements / PPA / supplier contracts'
    ],
    faqs: [
      {
        question: 'Is a moratorium period offered during project construction?',
        answer: 'Yes, a principal repayment moratorium is structured until the scheduled commercial operation date (COD).'
      }
    ]
  },
  {
    id: 'od-loan',
    slug: 'od-loan',
    name: 'Overdraft (OD) Loan',
    tagline: 'Flexible cash flow solutions.',
    category: 'business',
    shortDesc: 'Flexible cash flow solutions — pay interest only on the funds you actually utilize.',
    longDesc: 'Secure a revolving credit limit against residential/commercial property or business receivables. Withdraw and repay at will with interest calculated solely on daily utilized balances.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    interestRate: '9.50% - 13.5% p.a. on utilized funds',
    tenure: 'Annual renewal (Revolving)',
    maxAmount: 'Up to ₹10 Crores',
    processingFee: '0.5% to 1.0%',
    processingTime: '3 to 5 Working Days',
    minIncome: 'Business annual turnover ₹50L+',
    keyBenefits: [
      'Interest calculated strictly on daily drawn amount, not the whole sanctioned limit',
      'Unlimited deposits and withdrawals without prepayment penalties',
      'Smooth working capital management for inventory cycles',
      'Fast annual digital renewal process'
    ],
    eligibility: [
      'Traders, manufacturers, wholesalers, and professional service companies',
      'Operative current account with consistent credit turnover',
      'Residential or commercial property / fixed deposit collateral',
      'Clean credit track record and timely tax filings'
    ],
    documents: [
      'Current account bank statements for past 12 months',
      'Stock and book debt statements',
      'Collateral property documents or FD receipts',
      'GST returns and 2 years audited balance sheets'
    ],
    faqs: [
      {
        question: 'What is the main advantage of an OD loan over a term loan?',
        answer: 'In an OD facility, if your sanctioned limit is ₹50 Lakhs but you only draw ₹10 Lakhs for 15 days, you only pay interest on ₹10 Lakhs for those 15 days.'
      }
    ]
  },
  {
    id: 'gold-loan',
    slug: 'gold-loan',
    name: 'Gold Loan',
    tagline: 'Instant funds with greater flexibility.',
    category: 'specialized',
    shortDesc: 'Instant funds with greater flexibility and same-day vault release guarantee.',
    longDesc: 'Unlock immediate cash liquidity against your gold jewelry or bullion without income proof. Bank-grade vault safety, zero credit score barrier, and multiple flexible repayment schemes.',
    imageUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1200&auto=format&fit=crop',
    interestRate: '8.50% - 14.0% p.a.',
    tenure: '3 to 36 Months',
    maxAmount: 'Up to ₹1.5 Crores',
    processingFee: '0.2% or minimal evaluation fee',
    processingTime: '30 Minutes to 2 Hours',
    minIncome: 'No minimum income proof required',
    keyBenefits: [
      'Disbursal within 30-60 minutes directly to your account or cash counter',
      'No income proof, ITR, or CIBIL score checks required',
      'Bullet repayment scheme: pay principal and interest at maturity',
      'Gold insured and secured in triple-encrypted biometric vaults'
    ],
    eligibility: [
      'Any individual aged 18+ with ownership of 18 to 24 carat gold ornaments',
      'Valid identity and address proof (Aadhaar / Voter ID)',
      'Pledged gold must be legal personal property'
    ],
    documents: [
      'Government ID proof (Aadhaar / Passport / Driving License)',
      'PAN card (for loans above ₹2 Lakhs)',
      '1 passport size photograph'
    ],
    faqs: [
      {
        question: 'Is my gold safe while under pledge?',
        answer: 'All gold is appraised in your presence, sealed in tamper-proof bags, and kept in fireproof bank vaults with 100% full-value insurance coverage.'
      }
    ]
  },
  {
    id: 'two-wheeler-loan',
    slug: 'two-wheeler-loan',
    name: 'Two Wheeler Loan',
    tagline: 'Ride ahead.',
    category: 'auto',
    shortDesc: 'Ride ahead with instant approval and up to 100% on-road funding for bikes & EV scooters.',
    longDesc: 'From daily commuter motorcycles to high-performance cruisers and next-gen electric scooters, get fast on-spot sanctions with minimal down payments and flexible pocket-friendly EMIs.',
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
    interestRate: '9.99% - 15.5% p.a.',
    tenure: '12 to 48 Months',
    maxAmount: 'Up to ₹8 Lakhs',
    processingFee: '1.0% to 2.0%',
    processingTime: 'Instant to 2 Hours',
    minIncome: '₹15,000 / month',
    keyBenefits: [
      'Up to 95% - 100% funding on top EV and petrol bike models',
      'Fast digital sanction with paperless e-KYC',
      'Pocket-friendly EMIs starting from as low as ₹1,200/month',
      'Special subsidized rates for green electric two-wheelers'
    ],
    eligibility: [
      'Salaried, students (with co-applicant), or self-employed aged 18 to 65',
      'Valid Aadhaar & PAN card',
      'Regular source of verified household income'
    ],
    documents: [
      'Aadhaar Card and PAN Card',
      'Dealer proforma invoice for chosen motorcycle or scooter',
      'Latest 3 months bank statement'
    ],
    faqs: [
      {
        question: 'Are electric scooters (EVs) covered under this loan?',
        answer: 'Yes! We actively finance all certified electric scooters and high-speed EV bikes with special green incentives.'
      }
    ]
  }
];
