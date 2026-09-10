// Curated customer feedback shown on the home page.
// Edit this file to change what appears - it is the single source for the section.

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  /** Product the customer used, shown as a tag. */
  product: string;
  /** Whole stars, 1-5. */
  rating: number;
  quote: string;
  /** Optional context line under the name. */
  role?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Priya Sharma',
    city: 'Pune',
    product: 'Home Loan',
    rating: 5,
    role: 'First-time buyer',
    quote:
      'I had been rejected twice before. The advisor matched me to a lender that actually accepts variable income, and the sanction came through in four working days.'
  },
  {
    id: 't-2',
    name: 'Rakesh Menon',
    city: 'Kochi',
    product: 'Business Loan',
    rating: 5,
    role: 'Runs a logistics firm',
    quote:
      'Comparing eleven lenders myself would have taken weeks. I got the working capital line at 1.2% below the rate my own bank had quoted me.'
  },
  {
    id: 't-3',
    name: 'Anjali Deshpande',
    city: 'Nagpur',
    product: 'Health Insurance',
    rating: 4,
    role: 'Family floater',
    quote:
      'The coverage calculator flagged that we were under-insured for a family of four. Switching plans cost less than I expected and the claim desk is genuinely reachable.'
  },
  {
    id: 't-4',
    name: 'Imran Qureshi',
    city: 'Hyderabad',
    product: 'Vehicle Loan',
    rating: 5,
    role: 'Fleet expansion',
    quote:
      'Three commercial vehicles financed under one facility. Documentation was collected at my depot, which saved me two trips to the branch.'
  },
  {
    id: 't-5',
    name: 'Sneha Iyer',
    city: 'Chennai',
    product: 'Investments',
    rating: 4,
    role: 'Salaried professional',
    quote:
      'I wanted something more considered than a random SIP. The portfolio brief explained why each instrument was there, which no one had bothered to do before.'
  },
  {
    id: 't-6',
    name: 'Gurpreet Singh',
    city: 'Ludhiana',
    product: 'Personal Loan',
    rating: 5,
    role: 'Medical emergency',
    quote:
      'Applied at midnight during a hospital admission. Funds were in the account the next afternoon with no collateral and no branch visit.'
  }
];

export const feedbackStats = {
  averageRating: 4.7,
  totalReviews: '12,400+',
  wouldRecommend: '96%',
  citiesServed: '500+'
};

