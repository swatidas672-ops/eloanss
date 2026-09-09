import { InsuranceProduct } from '../types';

export const insuranceProducts: InsuranceProduct[] = [
  {
    id: 'life-insurance',
    slug: 'life-insurance',
    name: 'Life Insurance',
    tagline: 'Secure your loved ones.',
    category: 'life',
    shortDesc: 'Secure your loved ones with comprehensive life coverage and built-in wealth protection.',
    longDesc: 'Ensure your family’s financial security and lifestyle continuity no matter what tomorrow brings. Combines guaranteed life cover with long-term capital preservation and tax-free maturity benefits.',
    imageUrl: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1200&auto=format&fit=crop',
    coverageUpTo: 'Up to ₹10 Crores',
    startingPremium: 'From ₹850 / month',
    claimSettlementRatio: '99.4% Verified',
    suitableFor: [
      'Primary family breadwinners with dependents',
      'Parents planning for their children’s higher education',
      'Individuals aiming for disciplined wealth accumulation with life protection'
    ],
    keyBenefits: [
      'Guaranteed financial payout to nominees in any eventuality',
      'Critical illness and accidental disability riders available',
      'Tax savings up to ₹1.5 Lakhs under Section 80C and exempt payouts under Section 10(10D)',
      'Flexible payout options: lump-sum or monthly income streams'
    ],
    considerations: [
      'Ensure accurate disclosure of pre-existing health conditions and tobacco usage during proposal.',
      'Review surrender charges if choosing plans with savings components.'
    ],
    documents: [
      'Government ID (PAN & Aadhaar)',
      'Income proofs (ITR / Form 16 / 3 months salary slips)',
      'Recent passport-size photograph',
      'Medical checkup reports (for high sum assured tiers)'
    ],
    faqs: [
      {
        question: 'What is the difference between traditional Life Insurance and Term Insurance?',
        answer: 'Term insurance provides pure high-cover risk protection at the lowest cost without a maturity bonus, whereas traditional life insurance often bundles guaranteed payouts and maturity bonuses.'
      }
    ]
  },
  {
    id: 'health-insurance',
    slug: 'health-insurance',
    name: 'Health Insurance',
    tagline: 'A healthier tomorrow.',
    category: 'health',
    shortDesc: 'Comprehensive cashless hospitalization across 10,000+ top network hospitals.',
    longDesc: 'Shield your family against escalating medical costs with 100% cashless treatment, zero room-rent capping, restore benefits, and extensive coverage for modern daycare procedures.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    coverageUpTo: 'Up to ₹1 Crore Floater',
    startingPremium: 'From ₹650 / month',
    claimSettlementRatio: '98.9% Verified',
    suitableFor: [
      'Families looking for combined health floater safety',
      'Working professionals wanting higher cover over basic corporate policies',
      'Senior citizens seeking pre-existing illness coverage'
    ],
    keyBenefits: [
      'Instant cashless approvals across 10,000+ accredited hospitals nationwide',
      'Zero copayment and no sub-limits on hospital room rent',
      'Automatic unlimited sum-insured recharge upon exhaustion',
      'Tax deductions up to ₹75,000 under Section 80D'
    ],
    considerations: [
      'Check initial waiting periods for pre-existing diseases (typically 12-36 months).',
      'Always use your ELOANSS digital health card at emergency network admissions.'
    ],
    documents: [
      'Proposer KYC (Aadhaar & PAN)',
      'Age proof of all covered family members',
      'Previous medical discharge summaries (if declaring pre-existing ailments)'
    ],
    faqs: [
      {
        question: 'Are OPD and diagnostic consultations covered?',
        answer: 'Select plans provide OPD allowances, annual health checkups, and teleconsultations through our mobile health concierge.'
      }
    ]
  },
  {
    id: 'term-insurance',
    slug: 'term-insurance',
    name: 'Term Insurance',
    tagline: 'Protection for your family’s future.',
    category: 'life',
    shortDesc: 'Maximum financial protection at affordable premiums with whole-life coverage options.',
    longDesc: 'Secure high-value sum assured of ₹1 Crore to ₹5 Crores at affordable monthly costs. Provides income replacement so your children’s dreams, home loans, and family lifestyle remain uncompromised.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    coverageUpTo: 'Up to ₹20 Crores',
    startingPremium: 'From ₹499 / month',
    claimSettlementRatio: '99.6% Verified',
    suitableFor: [
      'Young working professionals securing lowest age-based premiums',
      'Individuals with active home or business debt liabilities',
      'Parents safeguarding future education and living costs'
    ],
    keyBenefits: [
      'High sum-insured at fraction of conventional endowment costs',
      'Special discounted rates for non-smokers and female policyholders',
      'Critical illness rider protecting against 36+ ailments like cancer and stroke',
      'Option for Return of Premium (TROP) on surviving policy term'
    ],
    considerations: [
      'Lock in coverage early: premiums remain fixed for life from the age you join.',
      'Choose nominee payout preferences (lump-sum vs. indexed monthly annuity).'
    ],
    documents: [
      'Identity & Address Proof (Aadhaar, Passport)',
      'Income documentation (3 years ITR or 6 months salary slips)',
      'Bank statement verifying salary credit',
      'Routine tele-medical or clinic health report'
    ],
    faqs: [
      {
        question: 'What is Return of Premium (TROP)?',
        answer: 'TROP refunds 100% of all premiums paid during the tenure if the insured survives the term period, minus applicable taxes.'
      }
    ]
  },
  {
    id: 'property-insurance',
    slug: 'property-insurance',
    name: 'Property Insurance',
    tagline: 'Protect what matters.',
    category: 'property',
    shortDesc: 'Comprehensive coverage for residential homes, villas, commercial offices, and contents.',
    longDesc: 'Protect your building structure and valuable household or office contents from fire, natural calamities, flood, earthquakes, burglary, and electrical short-circuit damages.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
    coverageUpTo: 'Up to ₹25 Crores',
    startingPremium: 'From ₹1,200 / year',
    claimSettlementRatio: '98.2% Verified',
    suitableFor: [
      'Homeowners, apartment dwellers, and villa owners',
      'Commercial office tenants and retail shop owners',
      'Landlords seeking loss of rent and tenant liability safeguards'
    ],
    keyBenefits: [
      'Covers both building reconstruction value and internal contents/appliances',
      'Protection against natural disasters (earthquake, cyclone, inundation, landslide)',
      'Coverage for burglary, theft, and accidental glass breakage',
      'Alternative accommodation expenses during repair periods'
    ],
    considerations: [
      'Ensure property value is assessed based on construction cost rather than land rate.',
      'Maintain an updated inventory list of valuable electronic appliances and furnishings.'
    ],
    documents: [
      'Property ownership deed / lease agreement',
      'Carpet area and building construction specification details',
      'High-value electronics or jewelry invoices (for specialized contents)'
    ],
    faqs: [
      {
        question: 'Does this cover rented apartments?',
        answer: 'Yes! Tenants can protect their internal electronics, furniture, and appliances with our Home Contents policy.'
      }
    ]
  },
  {
    id: 'vehicle-insurance',
    slug: 'vehicle-insurance',
    name: 'Vehicle Insurance',
    tagline: 'Coverage for every journey.',
    category: 'auto',
    shortDesc: 'Instant car and two-wheeler insurance with zero-depreciation and roadside assistance.',
    longDesc: 'Drive with total peace of mind. Comprehensive motor insurance featuring bumper-to-bumper zero depreciation, engine protect, consumable covers, and 24/7 emergency roadside towing assistance.',
    imageUrl: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1200&auto=format&fit=crop',
    coverageUpTo: '100% IDV Coverage',
    startingPremium: 'From ₹2,094 / year',
    claimSettlementRatio: '99.1% Verified',
    suitableFor: [
      'Private car owners and SUV owners',
      'Motorcycle, scooter, and EV riders',
      'Vehicles requiring mandated Third-Party or Comprehensive shield'
    ],
    keyBenefits: [
      'Zero-depreciation bumper-to-bumper claim settlements',
      '24/7 cashless garage network across 6,500+ service centers',
      'Engine and gearbox protection against water-logging and hydrostatic lock',
      'Quick digital claims inspection via smartphone camera'
    ],
    considerations: [
      'Ensure timely renewal before policy expiry to retain accumulated No Claim Bonus (NCB).',
      'Keep your valid PUC and driving license up to date.'
    ],
    documents: [
      'Vehicle Registration Certificate (RC)',
      'Previous year insurance policy document',
      'Proposer KYC details'
    ],
    faqs: [
      {
        question: 'Can I transfer my No Claim Bonus (NCB) from my old car?',
        answer: 'Yes, NCB is tied to the driver and can be transferred up to 50% discount to your new vehicle policy.'
      }
    ]
  },
  {
    id: 'travel-insurance',
    slug: 'travel-insurance',
    name: 'Travel Insurance',
    tagline: 'Travel with confidence.',
    category: 'commercial',
    shortDesc: 'International and domestic travel safety covering medical emergencies, trip delay, & baggage.',
    longDesc: 'Explore the globe with complete confidence. Includes cashless medical hospitalization abroad, trip cancellation, passport loss compensation, flight delay assistance, and Schengen visa compliant coverage.',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop',
    coverageUpTo: 'Up to $1,000,000 USD',
    startingPremium: 'From ₹40 / day',
    claimSettlementRatio: '98.5% Verified',
    suitableFor: [
      'International vacationers and corporate business travelers',
      'Students heading abroad for higher university education',
      'Senior citizens visiting children overseas'
    ],
    keyBenefits: [
      'Schengen and USA/Canada visa compliant medical coverage',
      'Zero deductible emergency medical hospitalization',
      'Compensation for checked-in baggage delay or total loss',
      'Trip interruption and emergency medical evacuation support'
    ],
    considerations: [
      'Purchase travel cover as soon as flight bookings are finalized to protect against pre-departure cancellations.',
      'Declare any pre-existing acute medical conditions.'
    ],
    documents: [
      'Valid Passport details',
      'Travel itinerary and flight tickets',
      'Visa copy (if issued)'
    ],
    faqs: [
      {
        question: 'Does this satisfy Schengen visa requirements?',
        answer: 'Yes! Our international plans provide the mandatory minimum €30,000 emergency medical insurance accepted by all European embassies.'
      }
    ]
  },
  {
    id: 'cargo-insurance',
    slug: 'cargo-insurance',
    name: 'Cargo Insurance',
    tagline: 'Protect your business shipments.',
    category: 'commercial',
    shortDesc: 'Marine and transit cargo protection across air, sea, rail, and road freight corridors.',
    longDesc: 'Safeguard your commercial consignments against loss, transit accidents, piracy, contamination, or theft during domestic transit and worldwide export-import logistics operations.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    coverageUpTo: 'Up to ₹50 Crores per transit',
    startingPremium: 'Custom commercial tariff',
    claimSettlementRatio: '97.8% Verified',
    suitableFor: [
      'Manufacturers, exporters, and international trading companies',
      'E-commerce merchants and freight forwarders',
      'Bulk commodity distributors and logistics contractors'
    ],
    keyBenefits: [
      'Institute Cargo Clauses (A, B, and C) tailored for global maritime and air freight',
      'All-risk door-to-door transit coverage from warehouse to warehouse',
      'General Average and salvage charges indemnity included',
      'Fast digital claim survey at destination ports'
    ],
    considerations: [
      'Select Open Marine Policy for high-frequency annual shipments to get volume discounts.',
      'Ensure packing adheres to international transport standards.'
    ],
    documents: [
      'Commercial invoice and packing list',
      'Bill of Lading (BL) / Airway Bill (AWB) / Lorry Receipt (LR)',
      'Letter of Credit (LC) terms (for export/import)'
    ],
    faqs: [
      {
        question: 'What is an Open Marine Policy?',
        answer: 'An Open Policy provides automatic year-round coverage for all consignments dispatched, eliminating the need to take single policies for each shipment.'
      }
    ]
  },
  {
    id: 'heavy-vehicle-insurance',
    slug: 'heavy-vehicle-insurance',
    name: 'Heavy Vehicle Insurance',
    tagline: 'Protection for commercial transportation.',
    category: 'commercial',
    shortDesc: 'Dedicated commercial fleet insurance for multi-axle trucks, tippers, tankers, and haulers.',
    longDesc: 'Tailored commercial vehicle insurance engineered for heavy haulers, cranes, passenger buses, and earthmoving machines. Covers accident damages, third-party liability, towing, and driver personal accident.',
    imageUrl: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=1200&auto=format&fit=crop',
    coverageUpTo: 'Full Commercial IDV',
    startingPremium: 'From ₹18,500 / year',
    claimSettlementRatio: '98.0% Verified',
    suitableFor: [
      'Fleet owners and heavy equipment operators',
      'Inter-state transport companies and mining contractors',
      'Educational bus operators and municipal vehicles'
    ],
    keyBenefits: [
      'Mandatory comprehensive third-party legal liability shield',
      'Heavy towing and breakdown recovery allowances',
      'Personal accident coverage for paid drivers and cleaners',
      'Specialized add-ons for crane booms, tipping gear, and hydraulic units'
    ],
    considerations: [
      'Maintain valid vehicle fitness certificate and national commercial permit.',
      'Ensure registered drivers have appropriate heavy motor vehicle (HMV) endorsements.'
    ],
    documents: [
      'Commercial RC copy',
      'Valid Route Permit and Fitness Certificate',
      'Previous year policy & claims statement'
    ],
    faqs: [
      {
        question: 'Are claims honored in other states during inter-state transit?',
        answer: 'Yes! Our nationwide network of commercial vehicle surveyors and cashless commercial garages operates 24/7 across every national and state highway.'
      }
    ]
  }
];
