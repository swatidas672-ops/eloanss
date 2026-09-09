import { Distributor, LocationData } from '../types';

export const locationHierarchy: LocationData[] = [
  {
    state: 'Maharashtra',
    districts: [
      { name: 'Mumbai City', cities: ['South Mumbai', 'Fort', 'Nariman Point', 'Colaba'] },
      { name: 'Mumbai Suburban', cities: ['Bandra Kurla Complex (BKC)', 'Andheri', 'Borivali', 'Goregaon'] },
      { name: 'Pune', cities: ['Shivaji Nagar', 'Kothrud', 'Hinjewadi', 'Viman Nagar', 'Kalyani Nagar'] },
      { name: 'Thane', cities: ['Thane West', 'Navi Mumbai', 'Kalyan', 'Dombivli'] },
      { name: 'Nagpur', cities: ['Dharampeth', 'Civil Lines', 'Sitabuldi', 'Wardha Road'] }
    ]
  },
  {
    state: 'Delhi NCR',
    districts: [
      { name: 'Central Delhi', cities: ['Connaught Place', 'Karol Bagh', 'Pahar Ganj'] },
      { name: 'South Delhi', cities: ['Saket', 'Hauz Khas', 'Nehru Place', 'Vasant Kunj'] },
      { name: 'Gurugram', cities: ['Cyber City', 'Golf Course Road', 'Sohna Road', 'Udyog Vihar'] },
      { name: 'Noida', cities: ['Sector 62', 'Sector 18', 'Greater Noida Knowledge Park'] }
    ]
  },
  {
    state: 'Karnataka',
    districts: [
      { name: 'Bengaluru Urban', cities: ['Koramangala', 'Indiranagar', 'Whitefield', 'Electronic City', 'HSR Layout'] },
      { name: 'Mysuru', cities: ['Gokulam', 'Jayalakshmipuram', 'Kuvempunagar'] },
      { name: 'Mangaluru', cities: ['Hampankatta', 'Kadri', 'Kodialbail'] }
    ]
  },
  {
    state: 'Gujarat',
    districts: [
      { name: 'Ahmedabad', cities: ['SG Highway', 'Ashram Road', 'Prahlad Nagar', 'Bodakdev', 'Maninagar'] },
      { name: 'Surat', cities: ['Ring Road', 'Vesu', 'Adajan', 'Varachha'] },
      { name: 'Vadodara', cities: ['Alkapuri', 'Gotri', 'Manjalpur'] }
    ]
  },
  {
    state: 'Telangana',
    districts: [
      { name: 'Hyderabad', cities: ['HITEC City', 'Gachibowli', 'Banjara Hills', 'Jubilee Hills', 'Madhapur'] },
      { name: 'Secunderabad', cities: ['Begumpet', 'Marredpally', 'Trimulgherry'] },
      { name: 'Warangal', cities: ['Hanamkonda', 'Kazipet', 'Subedari'] }
    ]
  },
  {
    state: 'Tamil Nadu',
    districts: [
      { name: 'Chennai', cities: ['T. Nagar', 'OMR Tech Corridor', 'Anna Nagar', 'Nungambakkam', 'Guindy'] },
      { name: 'Coimbatore', cities: ['RS Puram', 'Gandhipuram', 'Peelamedu'] },
      { name: 'Madurai', cities: ['KK Nagar', 'Anna Nagar', 'Simmakkal'] }
    ]
  },
  {
    state: 'West Bengal',
    districts: [
      { name: 'Kolkata', cities: ['Park Street', 'Salt Lake Sector V', 'New Town', 'Ballygunge'] },
      { name: 'Howrah', cities: ['Shibpur', 'Salkia', 'Bally'] }
    ]
  },
  {
    state: 'Rajasthan',
    districts: [
      { name: 'Jaipur', cities: ['C-Scheme', 'Malviya Nagar', 'Vaishali Nagar', 'Mansarovar'] },
      { name: 'Jodhpur', cities: ['Sardarpura', 'Ratanada', 'Paota'] },
      { name: 'Udaipur', cities: ['Panchwati', 'Fatehpura', 'Hiran Magri'] }
    ]
  },
  {
    state: 'Uttar Pradesh',
    districts: [
      { name: 'Lucknow', cities: ['Hazratganj', 'Gomti Nagar', 'Alambagh', 'Indira Nagar'] },
      { name: 'Kanpur', cities: ['Civil Lines', 'Swaroop Nagar', 'Kakadeo'] },
      { name: 'Varanasi', cities: ['Sigra', 'Cantt', 'Lanka'] }
    ]
  }
];

export const sampleDistributors: Distributor[] = [
  {
    id: 'dist-1',
    name: 'Rajesh V. Sharma',
    agencyName: 'Apex Capital & Advisory Partners',
    partnerCode: 'EL-MAH-4001',
    state: 'Maharashtra',
    district: 'Mumbai Suburban',
    city: 'Bandra Kurla Complex (BKC)',
    area: 'G Block, Platina Tower',
    rating: 4.9,
    completedCases: 1420,
    experienceYears: 12,
    services: ['Business Loan', 'Home Loan', 'Project Loan', 'Commercial Vehicle Loan'],
    languages: ['English', 'Hindi', 'Marathi', 'Gujarati'],
    phone: '+91 98200 •••••',
    email: 'bkc.partner@eloanss-network.in',
    verified: true
  },
  {
    id: 'dist-2',
    name: 'Priya Sundaram',
    agencyName: 'Vertex Wealth & Credit Node',
    partnerCode: 'EL-KAR-5601',
    state: 'Karnataka',
    district: 'Bengaluru Urban',
    city: 'Koramangala',
    area: '4th Block, 100ft Road',
    rating: 4.95,
    completedCases: 1180,
    experienceYears: 10,
    services: ['Personal Loan', 'Home Loan', 'Health Insurance', 'Investment Advisory'],
    languages: ['English', 'Kannada', 'Tamil', 'Hindi'],
    phone: '+91 99450 •••••',
    email: 'koramangala.advisor@eloanss-network.in',
    verified: true
  },
  {
    id: 'dist-3',
    name: 'Vikramjit Singh',
    agencyName: 'Northstar Financial Consortium',
    partnerCode: 'EL-DEL-1102',
    state: 'Delhi NCR',
    district: 'Central Delhi',
    city: 'Connaught Place',
    area: 'Barakhamba Road, Statesman House',
    rating: 4.88,
    completedCases: 1890,
    experienceYears: 15,
    services: ['Business Loan', 'OD Loan', 'Mortgage Loan', 'Cargo Insurance'],
    languages: ['English', 'Hindi', 'Punjabi'],
    phone: '+91 98110 •••••',
    email: 'delhi.central@eloanss-network.in',
    verified: true
  },
  {
    id: 'dist-4',
    name: 'Ketan B. Patel',
    agencyName: 'Surya Financial Distributors',
    partnerCode: 'EL-GUJ-3801',
    state: 'Gujarat',
    district: 'Ahmedabad',
    city: 'SG Highway',
    area: 'Iscon Cross Roads, Titanium City Center',
    rating: 4.92,
    completedCases: 1640,
    experienceYears: 14,
    services: ['Open Plot Loan', 'Business Loan', 'Heavy Commercial Vehicle Loan', 'Property Insurance'],
    languages: ['English', 'Gujarati', 'Hindi'],
    phone: '+91 98250 •••••',
    email: 'ahmedabad.hub@eloanss-network.in',
    verified: true
  },
  {
    id: 'dist-5',
    name: 'K. S. Ramanathan',
    agencyName: 'Southern Star Credit & Assurance',
    partnerCode: 'EL-TAM-6003',
    state: 'Tamil Nadu',
    district: 'Chennai',
    city: 'OMR Tech Corridor',
    area: 'Tidel Park, Tharamani',
    rating: 4.86,
    completedCases: 950,
    experienceYears: 9,
    services: ['Home Loan', 'Used Car Loan', 'Term Insurance', 'Health Insurance'],
    languages: ['English', 'Tamil', 'Telugu'],
    phone: '+91 94440 •••••',
    email: 'chennai.omr@eloanss-network.in',
    verified: true
  },
  {
    id: 'dist-6',
    name: 'Deepak Reddy',
    agencyName: 'CyberCity Financial Matrix',
    partnerCode: 'EL-TEL-5008',
    state: 'Telangana',
    district: 'Hyderabad',
    city: 'HITEC City',
    area: 'Madhapur Mindspace IT Park',
    rating: 4.91,
    completedCases: 1320,
    experienceYears: 11,
    services: ['Business Loan', 'Project Loan', 'Gold Loan', 'Life Insurance'],
    languages: ['English', 'Telugu', 'Hindi'],
    phone: '+91 98490 •••••',
    email: 'hyderabad.hitec@eloanss-network.in',
    verified: true
  },
  {
    id: 'dist-7',
    name: 'Ananya Mukherjee',
    agencyName: 'Eastern Horizon Capital Associates',
    partnerCode: 'EL-WB-7001',
    state: 'West Bengal',
    district: 'Kolkata',
    city: 'Salt Lake Sector V',
    area: 'RDB Boulevard, Block EP & GP',
    rating: 4.85,
    completedCases: 870,
    experienceYears: 8,
    services: ['Personal Loan', 'Home Loan', 'Travel Insurance', 'Two Wheeler Loan'],
    languages: ['English', 'Bengali', 'Hindi'],
    phone: '+91 98300 •••••',
    email: 'kolkata.saltlake@eloanss-network.in',
    verified: true
  },
  {
    id: 'dist-8',
    name: 'Mahendra Singh Shekhawat',
    agencyName: 'Marwar Financial & Credit Services',
    partnerCode: 'EL-RAJ-3021',
    state: 'Rajasthan',
    district: 'Jaipur',
    city: 'C-Scheme',
    area: 'Ahinsa Circle, Ashok Marg',
    rating: 4.89,
    completedCases: 1040,
    experienceYears: 13,
    services: ['Open Plot Loan', 'Commercial Vehicle Loan', 'OD Loan', 'Vehicle Insurance'],
    languages: ['English', 'Hindi', 'Marwari'],
    phone: '+91 94140 •••••',
    email: 'jaipur.cscheme@eloanss-network.in',
    verified: true
  },
  {
    id: 'dist-9',
    name: 'Alok Kumar Tiwari',
    agencyName: 'Avadh Financial Consultancy',
    partnerCode: 'EL-UP-2261',
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    city: 'Gomti Nagar',
    area: 'Vibhuti Khand, Rohtas Summit',
    rating: 4.87,
    completedCases: 1120,
    experienceYears: 11,
    services: ['Home Loan', 'Business Loan', 'Gold Loan', 'Health Insurance'],
    languages: ['English', 'Hindi'],
    phone: '+91 94150 •••••',
    email: 'lucknow.gomti@eloanss-network.in',
    verified: true
  }
];
