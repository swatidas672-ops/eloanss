export interface LoanProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'personal' | 'business' | 'property' | 'auto' | 'specialized';
  shortDesc: string;
  longDesc: string;
  imageUrl: string;
  interestRate: string;
  tenure: string;
  maxAmount: string;
  processingFee: string;
  processingTime: string;
  minIncome: string;
  keyBenefits: string[];
  eligibility: string[];
  documents: string[];
  faqs: { question: string; answer: string }[];
}

export interface InsuranceProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'health' | 'life' | 'property' | 'auto' | 'commercial';
  shortDesc: string;
  longDesc: string;
  imageUrl: string;
  coverageUpTo: string;
  startingPremium: string;
  claimSettlementRatio: string;
  suitableFor: string[];
  keyBenefits: string[];
  considerations: string[];
  documents: string[];
  faqs: { question: string; answer: string }[];
}

export interface Distributor {
  id: string;
  name: string;
  agencyName: string;
  partnerCode: string;
  state: string;
  district: string;
  city: string;
  area: string;
  rating: number;
  completedCases: number;
  experienceYears: number;
  services: string[];
  languages: string[];
  phone: string;
  email: string;
  verified: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestions?: string[];
  category?: 'loan' | 'insurance' | 'distributor' | 'general';
}

export interface LocationData {
  state: string;
  districts: {
    name: string;
    cities: string[];
  }[];
}
