// Specialised funding programmes shown on the Loans page.
//
// Everything the section renders comes from this array - headings, images and
// every listed item. `icon` holds a key that the component maps to a lucide
// icon, keeping JSX out of the data layer.

export type FundingIcon =
  | 'check'
  | 'sprout'
  | 'home'
  | 'building'
  | 'factory'
  | 'land'
  | 'rental';

export interface FundingItem {
  label: string;
  icon?: FundingIcon;
  /** Adds an asterisk tied to the section footnote. */
  qualified?: boolean;
}

export interface FundingList {
  heading?: string;
  /** Icon used for every item in the list unless the item overrides it. */
  icon: FundingIcon;
  items: FundingItem[];
}

export interface FundingGroup {
  id: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  image: { src: string; alt: string };
  lists: FundingList[];
}

export const fundingGroups: FundingGroup[] = [
  {
    id: 'specialized-business',
    badge: 'SPECIALIZED BUSINESS FUNDING',
    title: 'Sector Expertise For',
    highlight: 'Businesses Banks Often Decline',
    description:
      'Trade profiles that generic credit models struggle with, underwritten by lenders who understand how these businesses actually earn.',
    image: {
      src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop',
      alt: 'Warehouse aisle stacked with commercial inventory'
    },
    lists: [
      {
        icon: 'check',
        items: [
          { label: 'Jewellers – Excluding Bullion Traders' },
          { label: 'Fuel Stations & Gas Agencies' },
          { label: 'Transport, Logistics & Shipping' },
          { label: 'Government & Civil Contractors' },
          { label: 'EPC & Telecom Contractors' },
          { label: 'Infrastructure & Project Businesses' },
          { label: 'Poultry, Dairy & Seafood Businesses' },
          { label: 'Agriculture & Agro-Based Businesses' },
          { label: 'Rice, Dal & Cotton Mills' },
          { label: 'Agro Processing Units' },
          { label: 'Wholesale & Retail Businesses' },
          { label: 'Iron & Steel / Coal-Linked Industries – Non-Mining' },
          { label: 'Heavy Equipment Dealers & Manufacturers' },
          { label: 'Warehousing & Cold Storage' },
          { label: 'Doctors, Clinics & Healthcare Businesses' },
          { label: 'Hotels & Restaurants' },
          { label: 'Eligible Hospitality Businesses' }
        ]
      }
    ]
  },
  {
    id: 'agriculture-rural',
    badge: 'AGRICULTURE & RURAL FINANCE',
    title: 'Credit Built Around',
    highlight: 'Harvest Cycles',
    description:
      'Seasonal cash flow, stored stock and land assets treated as the collateral and repayment sources they are.',
    image: {
      src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop',
      alt: 'Farmers walking through a wheat field at harvest time'
    },
    lists: [
      {
        icon: 'sprout',
        items: [
          { label: 'Agriculture Finance' },
          { label: 'Crop Loans' },
          { label: 'Agriculture LAP' },
          { label: 'Warehouse Stock OD' },
          { label: 'Agro Processing Finance' },
          { label: 'Poultry & Dairy Finance' },
          { label: 'Rice / Dal / Cotton Mill Finance' },
          { label: 'Rural Business Funding' }
        ]
      }
    ]
  },
  {
    id: 'lap-property',
    badge: 'LAP & PROPERTY-BACKED FUNDING',
    title: 'Release Capital From',
    highlight: 'Property You Already Own',
    description:
      'Secured facilities against residential, commercial, industrial and rented assets, including balance transfer and top-up structures.',
    image: {
      src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
      alt: 'Model house and keys on a desk, representing property-backed lending'
    },
    lists: [
      {
        heading: 'Property We Fund Against',
        icon: 'home',
        items: [
          { label: 'Residential Property', icon: 'home' },
          { label: 'Commercial Property', icon: 'building' },
          { label: 'Industrial Property / Factory', icon: 'factory' },
          { label: 'Vacant Land / Open Plots', icon: 'land' },
          { label: 'Rental Income-Generating Properties', icon: 'rental' }
        ]
      },
      {
        heading: 'Facilities Available',
        icon: 'check',
        items: [
          { label: 'LAP for Salaried & Business Customers' },
          { label: 'LAP Balance Transfer' },
          { label: 'LAP Top-Up' },
          { label: 'Lease Rental Discounting (LRD)' },
          { label: 'OD/CC Enhancement Against Property' },
          { label: 'Competitive LTV Structure', qualified: true }
        ]
      }
    ]
  }
];
