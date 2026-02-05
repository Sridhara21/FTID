
import {
  CreditCard,
  Landmark,
  PiggyBank,
  Receipt,
  HandCoins,
  ShieldCheck,
  Fuel,
  Utensils,
  Wheat,
  HeartPulse,
  Building,
  TrendingUp,
  TrendingDown,
  Minus,
  Rocket,
  GraduationCap,
  Factory,
  Leaf,
  Magnet,
  UserRound,
  Bot,
  BookOpen,
  Train,
  Banknote,
  Globe,
  LineChart as LineChartIcon,
  Users,
  Target,
  ArrowRightLeft,
  Briefcase,
  BarChart,
  Scale,
  CandlestickChart,
  Folders,
  Gem,
  Shield,
  PieChart as PieChartIcon,
  AlertTriangle,
  Link,
  Wallet,
  FileText,
  Lock,
  History,
  CheckCircle,
  XCircle,
  Info,
  Smartphone,
  Server,
} from 'lucide-react';

export const ftidSystemStatus = {
  status: 'Active',
  linkedIdentifiers: [
    { name: 'PAN', status: 'Verified', icon: CheckCircle },
    { name: 'Aadhaar', status: 'Verified', icon: CheckCircle },
    { name: 'Bank KYC', status: 'Partially Verified', icon: Info },
  ],
  complianceHealth: 'Healthy',
};

export const consentData = [
    {
        category: 'Banks & Financial Institutions',
        description: "For providing financial services, loans, and credit assessment.",
        consents: [
            { id: 'c1', name: 'HDFC Bank', purpose: 'Account Aggregation', type: 'Read-only', expiry: '2026-12-31', given: true },
            { id: 'c2', name: 'ICICI Bank', purpose: 'Credit Underwriting', type: 'Verification', expiry: '2025-08-15', given: true },
            { id: 'c3', name: 'Bajaj Finserv', purpose: 'Loan Application', type: 'Analytics', expiry: 'N/A', given: false },
        ]
    },
    {
        category: 'Government Departments',
        description: "For subsidy disbursement, tax compliance, and regulatory oversight.",
        consents: [
            { id: 'c4', name: 'Income Tax Department', purpose: 'Tax Pre-fill', type: 'Read-only', expiry: 'Perpetual', given: true },
            { id: 'c5', name: 'Ministry of Agriculture', purpose: 'Subsidy Verification', type: 'Verification', expiry: 'Perpetual', given: true },
            { id: 'c6', name: 'UIDAI', purpose: 'Aadhaar e-KYC', type: 'Verification', expiry: '2030-01-01', given: true },
        ]
    },
     {
        category: 'Third-Party Fintech Applications',
        description: "For providing value-added financial services and analytics.",
        consents: [
            { id: 'c7', name: 'Zerodha', purpose: 'Portfolio Tracking', type: 'Read-only', expiry: '2025-11-01', given: true },
            { id: 'c8', name: 'Cred', purpose: 'Credit Score Monitoring', type: 'Analytics', expiry: 'N/A', given: false },
        ]
    }
];

export const transactions = [
  {
    id: 'txn_1',
    description: 'Grocery Store Purchase',
    amount: -5000,
    date: '2024-07-20',
    icon: Receipt,
    classification: 'Discretionary Spending',
    originInstitution: 'Self (HDFC Bank)',
    destinationInstitution: 'Masked Merchant (Reliance Fresh)',
  },
  {
    id: 'txn_2',
    description: 'Salary Credit',
    amount: 50000,
    date: '2024-07-19',
    icon: Landmark,
    classification: 'Primary Income',
    originInstitution: 'Masked Employer (Infosys)',
    destinationInstitution: 'Self (HDFC Bank)',
  },
  {
    id: 'txn_3',
    description: 'Utility Bill Payment',
    amount: -8000,
    date: '2024-07-18',
    icon: Receipt,
    classification: 'Essential Spending',
    originInstitution: 'Self (HDFC Bank)',
    destinationInstitution: 'Masked Utility (BESCOM)',
  },
  {
    id: 'txn_4',
    description: 'Mutual Fund Investment',
    amount: -10000,
    date: '2024-07-17',
    icon: PiggyBank,
    classification: 'Investment',
    originInstitution: 'Self (ICICI Bank)',
    destinationInstitution: 'Masked AMC (Parag Parikh)',
  },
];

export const incomeExpenseData = [
  { name: 'Jan', income: 50000, expense: 30000 },
  { name: 'Feb', income: 52000, expense: 32000 },
  { name: 'Mar', income: 55000, expense: 35000 },
  { name: 'Apr', income: 53000, expense: 38000 },
  { name: 'May', income: 58000, expense: 34000 },
  { name: 'Jun', income: 60000, expense: 40000 },
];

export const flowScoreData = {
  score: 820,
  rating: 'Very Strong',
  summary:
    'Your FTID Flow Score indicates high financial stability and reliability based on consistent income, regular repayments, and healthy financial habits.',
  factors: [
    {
      name: 'Income Stability & Regularity',
      status: 'Excellent',
      impact: 'High',
      icon: TrendingUp,
      color: 'text-green-400',
    },
    {
      name: 'Repayment Consistency',
      status: 'Excellent',
      impact: 'High',
      icon: CheckCircle,
      color: 'text-green-400',
    },
    {
      name: 'Financial Discipline',
      status: 'Good',
      impact: 'Medium',
      icon: ShieldCheck,
      color: 'text-green-400',
    },
    {
      name: 'Debt-to-Income Ratio',
      status: 'Good',
      impact: 'Medium',
      icon: Scale,
      color: 'text-green-400',
    },
    {
      name: 'Inquiry Frequency',
      status: 'Low',
      impact: 'Low',
      icon: Minus,
      color: 'text-yellow-400',
    },
  ],
  history: [
    { month: 'Jan', score: 790 },
    { month: 'Feb', score: 795 },
    { month: 'Mar', score: 805 },
    { month: 'Apr', score: 800 },
    { month: 'May', score: 815 },
    { month: 'Jun', score: 820 },
  ],
  dataSources: [
      { name: 'HDFC Bank (Account Data)', verified: true },
      { name: 'ICICI Bank (Account Data)', verified: true },
      { name: 'CIBIL (Credit Report)', verified: true },
      { name: 'Income Tax Dept (ITR Data)', verified: true }
  ]
};

export const subsidies = [
  {
    id: 'sub_1',
    name: 'Food Subsidy (NFSA)',
    status: 'Active',
    amount: 600,
    icon: Utensils,
    sourceMinistry: 'Dept. of Food & Public Distribution',
    timeline: 'Disbursed monthly on 5th',
    eligibility: 'BPL Card Holder, Verified via Aadhaar',
    ftidVerified: true,
  },
  {
    id: 'sub_2',
    name: 'Health Insurance (PM-JAY)',
    status: 'Active',
    amount: 416, // (5L / 12) ~416, but this is not how it works. It's a coverage amount.
    icon: HeartPulse,
    sourceMinistry: 'National Health Authority',
    timeline: 'Coverage Active',
    eligibility: 'SECC 2011 Database',
    ftidVerified: true,

  },
  {
    id: 'sub_3',
    name: 'LPG Subsidy (Ujjwala)',
    status: 'Active',
    amount: 200,
    icon: Fuel,
    sourceMinistry: 'Ministry of Petroleum & Natural Gas',
    timeline: 'On cylinder purchase',
    eligibility: 'Ujjwala Beneficiary',
    ftidVerified: true,

  },
  {
    id: 'sub_4',
    name: 'Housing Subsidy (PMAY)',
    status: 'Inactive',
    amount: 0,
    icon: Building,
    sourceMinistry: 'Ministry of Housing & Urban Affairs',
    timeline: 'N/A',
    eligibility: 'EWS/LIG Category (Not Availed)',
    ftidVerified: false,
  },
  {
    id: 'sub_5',
    name: 'Fertilizer Subsidy (PM-PRANAM)',
    status: 'Active',
    amount: 1200,
    icon: Wheat,
    sourceMinistry: 'Dept. of Fertilizers',
    timeline: 'Disbursed per cropping season',
    eligibility: 'Registered Farmer',
    ftidVerified: true,
  },
];


export const gdpData = [
  { year: '2020', gdp: 250 },
  { year: '2021', gdp: 275 },
  { year: '2022', gdp: 305 },
  { year: '2023', gdp: 340 },
  { year: '2024', gdp: 375 },
  { year: '2025', gdp: 410 },
  { year: '2026', gdp: 450 },
];

export const revenueData = [
  { name: 'Income Tax', value: 22, fill: 'hsl(var(--chart-1))' },
  { name: 'Corporate Tax', value: 13, fill: 'hsl(var(--chart-2))' },
  { name: 'GST', value: 20, fill: 'hsl(var(--chart-3))' },
  { name: 'Customs', value: 5, fill: 'hsl(var(--chart-4))' },
  { name: 'Other', value: 4, fill: 'hsl(var(--chart-5))' },
];

export const subsidyDistributionData = [
  { name: 'Food', value: 203420, fill: 'hsl(var(--chart-1))' },
  { name: 'Fertiliser', value: 167887, fill: 'hsl(var(--chart-2))' },
  { name: 'Petroleum', value: 12100, fill: 'hsl(var(--chart-3))' },
  { name: 'Interest', value: 27840, fill: 'hsl(var(--chart-4))' },
  { name: 'Other', value: 14969, fill: 'hsl(var(--chart-5))' },
];

export const subsidyDetailsData = [
    {
        title: 'Food Subsidy',
        amount: '2,03,420',
        description: 'Implemented mainly through the National Food Security Act (NFSA), covering distribution of rice, wheat, and coarse grains to ~81 crore beneficiaries.',
        icon: Utensils,
        color: "hsl(var(--chart-1))"
    },
    {
        title: 'Fertiliser Subsidy',
        amount: '1,67,887',
        description: 'Covers both Urea subsidy and Nutrient-Based Subsidy (NBS) for phosphatic & potassic fertilisers, ensuring farmers get fertilisers at affordable prices.',
        icon: Wheat,
        color: "hsl(var(--chart-2))"
    },
    {
        title: 'Petroleum Subsidy',
        amount: '12,100',
        description: 'Includes LPG subsidy under the PAHAL Direct Benefit Transfer (DBT) scheme, providing subsidised cooking gas for low-income households.',
        icon: Fuel,
        color: "hsl(var(--chart-3))"
    },
    {
        title: 'Interest Subsidy',
        amount: '27,840',
        description: 'Support for sectors like education loans, MSMEs, export promotion, and housing through schemes like the Interest Subvention Scheme (ISS).',
        icon: Banknote,
        color: "hsl(var(--chart-4))"
    },
    {
        title: 'Other Subsidies',
        amount: '14,969',
        description: 'Includes Price Support Scheme (PSS), Market Intervention Scheme (MIS), and subsidies for jute, sugar, and other industrial incentives.',
        icon: Landmark,
        color: "hsl(var(--chart-5))"
    }
];

export const balanceSheetData = {
  assets: [
    { name: 'E-Rupee Wallet', value: 85250 },
    { name: 'HDFC Bank Savings', value: 175000 },
    { name: 'ICICI Bank Savings', value: 75000 },
    { name: 'Emergency Fund', value: 250000 },
    { name: 'Stocks', value: 835000 },
    { name: 'Mutual Funds', value: 250000 },
    { name: 'Fixed Deposits', value: 350000 },
    { name: 'Bonds', value: 150000 },
    { name: 'Digital Gold', value: 350000 },
    { name: 'Real Estate', value: 1200000 },
  ],
  liabilities: [
    { name: 'Credit Card Debt', value: 25000 },
    { name: 'Personal Loan', value: 100000 },
    { name: 'Student Loan', value: 300000 },
  ],
};

export const governmentBalanceSheetDataProjected = {
  assets: [
    {
      name: 'Revenue Receipts',
      value: 3821000,
      subItems: [
        { name: 'Tax Revenue (Net)', value: 3361000 },
        { name: 'Non-Tax Revenue', value: 460000 },
      ],
    },
    {
      name: 'Capital Receipts',
      value: 1787000,
      subItems: [
        { name: 'Recovery of Loans', value: 30000 },
        { name: 'Other Receipts', value: 51000 },
        { name: 'Borrowings & Other Liabilities', value: 1706000 },
      ],
    },
  ],
  liabilities: [
    {
      name: 'Revenue Account Expenditure',
      value: 4108000,
      subItems: [
        { name: 'Interest Payments', value: 1190000 },
        { name: 'Grants for Capital Assets', value: 499000 },
      ],
    },
    {
      name: 'Capital Account Expenditure',
      value: 1500000,
      subItems: [],
    },
  ],
};


export const governmentBalanceSheetDataFy2526 = {
  assets: [
    {
      name: 'Revenue Receipts',
      value: 3502000,
      subItems: [
        { name: 'Tax Revenue (Net)', value: 3043000 },
        { name: 'Non-Tax Revenue', value: 459000 },
      ],
    },
    {
      name: 'Capital Receipts',
      value: 1870000,
      subItems: [
        { name: 'Recovery of Loans', value: 25000 },
        { name: 'Other Receipts', value: 65000 },
        { name: 'Borrowings & Other Liabilities', value: 1780000 },
      ],
    },
  ],
  liabilities: [
    {
      name: 'Revenue Account Expenditure',
      value: 3945000,
      subItems: [
        { name: 'Interest Payments', value: 1123000 },
        { name: 'Grants for Capital Assets', value: 439000 },
      ],
    },
    {
      name: 'Capital Account Expenditure',
      value: 1427000,
      subItems: [],
    },
  ],
};


export const schemes = [
    {
        icon: Building,
        title: "PMAY Urban Expansion",
        description: "₹736 crore has been allocated for affordable housing in Uttar Pradesh under the Pradhan Mantri Awas Yojana."
    },
    {
        icon: ShieldCheck,
        title: "₹20,000 Crore Infrastructure Guarantee Fund",
        description: "The government is establishing a ₹20,000 crore fund to support infrastructure investments by covering non-commercial risks."
    },
    {
        icon: Bot,
        title: "SUMAN SAKHI Chatbot",
        description: "Madhya Pradesh is launching an AI-based chatbot, providing 24/7 maternal and reproductive health information to women via WhatsApp."
    },
    {
        icon: Factory,
        title: "Kalamkari Garment Cluster",
        description: "Maharashtra is developing a Kalamkari garment cluster to train rural women in traditional garment-making, promoting self-employment."
    },
    {
        icon: Wheat,
        title: "Prime Minister Dhan-Dhaanya Krishi Yojana",
        description: "This scheme aims to support 1.7 crore farmers in 100 districts with low agricultural productivity through targeted measures."
    },
    {
        icon: Rocket,
        title: "Digital Agriculture Mission (DAM)",
        description: "The government is promoting the use of digital tools and technologies to enhance agricultural sustainability and productivity."
    },
    {
        icon: UserRound,
        title: "UIDAI Biometric Update",
        description: "Biometric updates for children aged 0-5 and 15-17 are being conducted to ensure accurate records for accessing educational and welfare services."
    },
    {
        icon: GraduationCap,
        title: "PM Internship Scheme",
        description: "The scheme offers 12-month internships in top companies across various sectors, aiming to provide 1 crore internships over the next five years."
    },
    {
        icon: Leaf,
        title: "Carbon Capture Incentives",
        description: "Financial support will be provided for carbon capture projects, aiming to reduce emissions while maintaining coal as a key energy source."
    },
    {
        icon: Magnet,
        title: "Rare Earth Magnet Manufacturing",
        description: "Fiscal incentives will be offered to encourage the local production of rare-earth magnets, which are essential for electric vehicles and renewable energy sectors."
    }
];

export const userProfileData = {
  name: 'Ravi',
  email: 'ravi@email.com', // Retained for UserNav, but not displayed on profile
  ftid: '2398-6501-4775',
  fallback: 'R',
  pan: { number: 'ABCDE1234F', status: 'Verified' },
  aadhaar: { number: 'XXXX-XXXX-8901', status: 'Verified (Consent Active)' },
  bankKyc: [
      { bank: 'HDFC Bank', status: 'Verified', icon: CheckCircle, color: 'text-green-400' },
      { bank: 'ICICI Bank', status: 'Verified', icon: CheckCircle, color: 'text-green-400' },
      { bank: 'Axis Bank', status: 'Pending', icon: XCircle, color: 'text-yellow-400' }
  ],
  security: {
      devices: [
          { id: 1, type: 'Mobile', name: 'OnePlus 12', location: 'Bangalore, IN', lastLogin: '2025-12-29T10:00:00Z', icon: Smartphone },
          { id: 2, type: 'Web', name: 'Chrome on Mac', location: 'Mumbai, IN', lastLogin: '2025-12-28T18:30:00Z', icon: Server }
      ],
      loginHistory: [
          { id: 1, date: '2025-12-29', action: 'Login', platform: 'Mobile App', ip: '103.48.197.10', status: 'Success' },
          { id: 2, date: '2025-12-28', action: 'Password Change', platform: 'Web', ip: '115.98.2.145', status: 'Success' },
          { id: 3, date: '2025-12-27', action: 'Failed Login', platform: 'Web', ip: '202.83.21.5', status: 'Failure' },
      ]
  },
  consentHistory: [
      { id: 1, date: '2025-12-01', entity: 'Income Tax Dept.', action: 'Consent Granted', details: 'Read-only access for tax pre-fill' },
      { id: 2, date: '2025-11-15', entity: 'HDFC Bank', action: 'Consent Renewed', details: 'Account aggregation for 1 year' },
      { id: 3, date: '2025-10-20', entity: 'Groww App', action: 'Consent Revoked', details: 'Portfolio tracking access removed' },
  ]
};

export const dummyFtidData = JSON.stringify(
  [
    {
      "transaction_id": "a1b2c3d4",
      "timestamp": "2023-10-26T10:00:00Z",
      "amount": 12500.50,
      "currency": "INR",
      "merchant_name": "SuperBazaar",
      "merchant_category": "Groceries",
      "location": { "latitude": 19.0760, "longitude": 72.8777 }
    },
    {
      "transaction_id": "e5f6g7h8",
      "timestamp": "2023-10-26T12:30:00Z",
      "amount": 2100.00,
      "currency": "INR",
      "merchant_name": "Chai Point",
      "merchant_category": "Food & Drink",
      "location": { "latitude": 19.0765, "longitude": 72.8780 }
    },
    {
      "transaction_id": "i9j0k1l2",
      "timestamp": "2023-10-26T15:45:00Z",
      "amount": 41500.00,
      "currency": "INR",
      "merchant_name": "Digital World",
      "merchant_category": "Electronics",
      "location": { "latitude": 19.0780, "longitude": 72.8800 }
    }
  ],
  null,
  2
);

export const economicIndicatorsData = [
    { label: "GDP (Nominal)", value: "₹324L Cr", change: "~$3.9T", icon: Landmark },
    { label: "GNP (Nominal)", value: "₹319L Cr", change: "~$3.8T", icon: Globe },
    { label: "Real GDP Growth", value: "6.5%", change: "Annual", icon: LineChartIcon },
    { label: "Per Capita Income", value: "₹2.45L", change: "~$2,950", icon: Users },
    { label: "Total Tax Revenue (Net)", value: "₹26.5L Cr", change: "Total", icon: Banknote },
    { label: "Fiscal Deficit", value: "₹17.35L Cr", change: "5.1% of GDP", icon: PieChartIcon },
    { label: "Revenue Deficit", value: "₹9.5L Cr", change: "2.9% of GDP", icon: PieChartIcon },
    { label: "Capital Expenditure", value: "₹11.1L Cr", change: "Infrastructure", icon: Building },
    { label: "Inflation (CPI)", value: "4.5%", change: "Projected", icon: TrendingUp, color: "text-red-400" },
    { label: "Forex Reserves", value: "$640B", change: "Current", icon: ShieldCheck },
    { label: "Current Account Deficit (CAD)", value: "1.5% of GDP", change: "Current Account Deficit", icon: ArrowRightLeft },
    { label: "Unemployment Rate", value: "6.2%", change: "Estimated", icon: Target },
];

export const statePerformanceData = {
    indicators: [
        { state: 'Maharashtra', gstJun: 30553, gstFy: 359854.70, perCapita: 176678, gsdpGrowth: 7.96 },
        { state: 'Karnataka', gstJun: 13409, gstFy: 159563.80, perCapita: 204605, gsdpGrowth: 7.50 },
        { state: 'Gujarat', gstJun: 11404, gstFy: 136748.21, perCapita: 272450, gsdpGrowth: 8.94 },
        { state: 'Tamil Nadu', gstJun: 10676, gstFy: 131115.43, perCapita: 196309, gsdpGrowth: 9.69 },
        { state: 'Haryana', gstJun: 9959, gstFy: 119362.24, perCapita: 194285, gsdpGrowth: 7.55 },
        { state: 'Uttar Pradesh', gstJun: 9248, gstFy: 112212.23, perCapita: 93510, gsdpGrowth: 8.51 },
        { state: 'Delhi', gstJun: 5610, gstFy: 77002.34, perCapita: 461910, gsdpGrowth: null },
        { state: 'West Bengal', gstJun: 5551, gstFy: 66892.28, perCapita: 154120, gsdpGrowth: null },
        { state: 'Telangana', gstJun: 5111, gstFy: 62986.63, perCapita: 187912, gsdpGrowth: null },
        { state: 'Odisha', gstJun: 5079, gstFy: 60928.44, perCapita: 182548, gsdpGrowth: 10.03 },
        { state: 'Goa', gstFy: null, gstJun: null, perCapita: 472070, gsdpGrowth: null },
        { state: 'Sikkim', gstFy: null, gstJun: null, perCapita: 463509, gsdpGrowth: null },
        { state: 'Chandigarh', gstFy: null, gstJun: null, perCapita: 333932, gsdpGrowth: null },
        { state: 'Bihar', gstFy: null, gstJun: null, perCapita: 60337, gsdpGrowth: null }
    ],
    efficiency: [
        { state: 'Maharashtra', metric: 'Energy Efficiency', value: '80.5%', rank: 'Top' },
        { state: 'Andhra Pradesh', metric: 'Energy Efficiency', value: '79.3%', rank: 'Top' },
        { state: 'Telangana', metric: 'Per Capita NSDP', value: '₹3.87 lakh', rank: 'Top' }
    ]
};

export const portfolioData = {
    stocks: [
        { name: 'Reliance Industries', symbol: 'RELIANCE', quantity: 50, value: 145000, change: "+1.2%", changeValue: 1740, taxClassification: 'LTCG' },
        { name: 'Tata Consultancy Services', symbol: 'TCS', quantity: 100, value: 380000, change: "-0.5%", changeValue: -1900, taxClassification: 'STCG' },
        { name: 'HDFC Bank', symbol: 'HDFCBANK', quantity: 200, value: 310000, change: "+2.1%", changeValue: 6510, taxClassification: 'LTCG' }
    ],
    mutualFunds: [
        { name: 'Parag Parikh Flexi Cap Fund', nav: 72.50, units: 1379, value: 100000, change: "+0.8%", changeValue: 800, taxClassification: 'LTCG (Debt)' },
        { name: 'UTI Nifty 50 Index Fund', nav: 145.20, units: 1033, value: 150000, change: "+1.1%", changeValue: 1650, taxClassification: 'STCG (Equity)' }
    ],
    fixedDeposits: [
        { bank: 'HDFC Bank', value: 200000, interestRate: '7.1%', maturityDate: '2026-05-10' },
        { bank: 'State Bank of India', value: 150000, interestRate: '6.9%', maturityDate: '2025-11-20' }
    ],
    digitalGold: [
        { grams: 50, value: 350000 }
    ],
    bonds: [
        { name: 'GOI 7.26% 2033', value: 100000 },
        { name: 'NHAI InvIT', value: 50000 }
    ],
    emergencyFund: [
        { account: 'Savings Account', value: 250000 }
    ]
};

export const autoCapturedIncome = {
    sources: [
        { source: 'Salary (Infosys Ltd)', amount: 840000, verified: true },
        { source: 'Interest (HDFC Bank Savings)', amount: 6250, verified: true },
        { source: 'Interest (FD)', amount: 10425, verified: true },
        { source: 'Dividend (Reliance Industries)', amount: 1500, verified: true },
        { source: 'Mutual Fund Gains (UTI)', amount: 12500, verified: false },
    ],
    deductions: [
        { section: '80C (EPF Contribution)', amount: 60000, verified: true },
        { section: '80C (PPF Investment)', amount: 70000, verified: true },
        { section: '80C (ELSS Investment)', amount: 20000, verified: false },
        { section: '80D (Health Insurance)', amount: 25000, verified: true },
        { section: 'Standard Deduction', amount: 50000, verified: true },
    ]
};


export const donationData = [
  {
    id: 1,
    election: 'Lok Sabha 2024',
    donor: 'Future Gaming and Hotel Services',
    party: 'DMK',
    amount: 5090000000,
  },
  {
    id: 2,
    election: 'Lok Sabha 2024',
    donor: 'Megha Engineering and Infrastructures Ltd',
    party: 'BJP',
    amount: 5840000000,
  },
  {
    id: 3,
    election: 'Vidhan Sabha 2025 (MH)',
    donor: 'Qwik Supply Chain Pvt Ltd',
    party: 'Shiv Sena',
    amount: 2250000000,
  },
  {
    id: 4,
    election: 'Vidhan Sabha 2025 (MH)',
    donor: 'Haldia Energy Ltd',
    party: 'AITC',
    amount: 2810000000,
  },
];

export const regulatoryAlerts = [
    { id: 1, date: '2025-12-28', title: 'New Aadhaar-PAN linking deadline announced.', severity: 'Medium', icon: AlertTriangle },
    { id: 2, date: '2025-12-20', title: 'Bank KYC for Axis Bank is incomplete.', severity: 'High', icon: AlertTriangle },
    { id: 3, date: '2025-11-05', title: 'Updated terms for e-Rupee transactions.', severity: 'Low', icon: Info },
]

export const institutionConnectivity = [
    { id: 1, name: 'HDFC Bank', status: 'Active', type: 'Bank', icon: Landmark },
    { id: 2, name: 'ICICI Bank', status: 'Active', type: 'Bank', icon: Landmark },
    { id: 3, name: 'Income Tax Portal', status: 'Active', type: 'Government', icon: Building },
    { id: 4, name: 'UIDAI', status: 'Active', type: 'Government', icon: Building },
    { id: 5, name: 'Zerodha', status: 'Active', type: 'Broker', icon: Briefcase },
    { id: 6, name: 'Axis Bank', status: 'Inactive', type: 'Bank', icon: Landmark },
]
