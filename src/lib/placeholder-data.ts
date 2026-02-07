
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
  { year: '2020', gdp: 250, range: [245, 255] },
  { year: '2021', gdp: 275, range: [270, 280] },
  { year: '2022', gdp: 305, range: [300, 310] },
  { year: '2023', gdp: 340, range: [335, 345] },
  { year: '2024', gdp: 375, range: [370, 380] },
  { year: '2025', gdp: 410, range: [400, 420] },
  { year: '2026', gdp: 450, range: [440, 460] },
];

export const revenueData = [
  { name: 'Income Tax', value: 22, fill: 'hsl(var(--chart-1))', growth: '+9.5%', volatility: 'Low', risk: 'Low' },
  { name: 'Corporate Tax', value: 13, fill: 'hsl(var(--chart-2))', growth: '+7.2%', volatility: 'Medium', risk: 'Medium' },
  { name: 'GST', value: 20, fill: 'hsl(var(--chart-3))', growth: '+11.1%', volatility: 'Low', risk: 'Low' },
  { name: 'Customs', value: 5, fill: 'hsl(var(--chart-4))', growth: '-2.5%', volatility: 'High', risk: 'High' },
  { name: 'Other', value: 4, fill: 'hsl(var(--chart-5))', growth: '+5.0%', volatility: 'Medium', risk: 'Low' },
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

export const balanceSheetData = {
    assets: [
      { name: 'E-Rupee Wallet', value: 85250 },
      { name: 'Bank Deposits (Emergency Fund)', value: portfolioData.emergencyFund.reduce((sum, item) => sum + item.value, 0) },
      { name: 'Stocks', value: portfolioData.stocks.reduce((sum, item) => sum + item.value, 0) },
      { name: 'Mutual Funds', value: portfolioData.mutualFunds.reduce((sum, item) => sum + item.value, 0) },
      { name: 'Fixed Deposits', value: portfolioData.fixedDeposits.reduce((sum, item) => sum + item.value, 0) },
      { name: 'Bonds', value: portfolioData.bonds.reduce((sum, item) => sum + item.value, 0) },
      { name: 'Digital Gold', value: portfolioData.digitalGold.reduce((sum, item) => sum + item.value, 0) },
      { name: 'Real Estate (Self-Declared)', value: 1200000 },
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
  // Group: Growth
  {
    label: 'GDP (Nominal)',
    value: '₹324L Cr',
    change: '~$3.9T',
    icon: Landmark,
    trend: 'up',
    color: 'text-foreground',
    group: 'Growth',
    definition: 'The total market value of all final goods and services produced in a country in a given period.',
    source: 'Aggregated FTID transaction flows, corporate revenue data.',
    relevance: 'Primary measure of economic size and health.',
    limitations: 'Does not account for income distribution or informal economy fully.',
  },
  {
    label: 'GNP (Nominal)',
    value: '₹319L Cr',
    change: '~$3.8T',
    icon: Globe,
    trend: 'up',
    color: 'text-foreground',
    group: 'Growth',
    definition: 'GDP plus net factor income from abroad.',
    source: 'FTID flows and international transaction data.',
    relevance: 'Measures economic output generated by a country\'s citizens.',
    limitations: 'Can be influenced by large multinational corporation activities.',
  },
  {
    label: 'Real GDP Growth',
    value: '6.5%',
    change: 'Annual YoY',
    icon: LineChartIcon,
    trend: 'stable',
    color: 'text-foreground',
    group: 'Growth',
    definition: 'The inflation-adjusted growth rate of GDP.',
    source: 'Calculated from FTID-derived nominal GDP and CPI data.',
    relevance: 'Shows the actual growth of the economy, stripped of price changes.',
    limitations: 'High-frequency estimate; subject to revision.',
  },
  {
    label: 'Per Capita Income',
    value: '₹2.45L',
    change: '~$2,950',
    icon: Users,
    trend: 'up',
    color: 'text-foreground',
    group: 'Growth',
    definition: 'The average income earned per person in a given area.',
    source: 'Derived from FTID-based national income and population data.',
    relevance: 'Indicates the standard of living.',
    limitations: 'Average value; masks income inequality.',
  },
  // Group: Fiscal Health
  {
    label: 'Total Tax Revenue',
    value: '₹26.5L Cr',
    change: 'Net of refunds',
    icon: Banknote,
    trend: 'up',
    color: 'text-foreground',
    group: 'Fiscal Health',
    definition: 'The total tax receipts collected by the government.',
    source: 'Directly aggregated from FTID tax payment flows.',
    relevance: 'Core funding source for all government activities.',
    limitations: 'Reflects compliance, not necessarily economic activity.',
  },
  {
    label: 'Capital Expenditure',
    value: '₹11.1L Cr',
    change: 'Asset-creating',
    icon: Building,
    trend: 'up',
    color: 'text-green-400',
    group: 'Fiscal Health',
    definition: 'Government spending on acquiring or maintaining fixed assets.',
    source: 'Aggregated from FTID project payment and procurement flows.',
    relevance: 'Drives long-term economic growth.',
    limitations: 'Does not measure the quality or efficiency of the expenditure.',
  },
  {
    label: 'Fiscal Deficit',
    value: '5.1%',
    change: 'of GDP',
    icon: PieChartIcon,
    trend: 'down',
    color: 'text-green-400',
    group: 'Fiscal Health',
    definition: 'The shortfall in a government\'s income compared with its spending.',
    source: 'Calculated from FTID-tracked revenue and expenditure.',
    relevance: 'Key indicator of government financial health.',
    limitations: 'Does not distinguish between productive and unproductive spending.',
  },
  {
    label: 'Revenue Deficit',
    value: '2.9%',
    change: 'of GDP',
    icon: PieChartIcon,
    trend: 'down',
    color: 'text-green-400',
    group: 'Fiscal Health',
    definition: 'Occurs when realized net income is less than the projected net income.',
    source: 'Calculated from FTID-tracked revenue and expenditure.',
    relevance: 'Indicates the government is borrowing to finance current consumption.',
    limitations: 'A non-zero value is not always negative in a developing economy.',
  },
  // Group: External Stability
  {
    label: 'Inflation (CPI)',
    value: '4.5%',
    change: 'Projected',
    icon: TrendingUp,
    trend: 'down',
    color: 'text-green-400',
    group: 'External Stability',
    definition: 'The rate at which the general level of prices for goods and services is rising.',
    source: 'Estimated from price data linked to FTID merchant transactions.',
    relevance: 'Affects purchasing power and monetary policy.',
    limitations: 'High-frequency estimate; may differ from official statistical measures.',
  },
  {
    label: 'Forex Reserves',
    value: '$640B',
    change: 'Current',
    icon: ShieldCheck,
    trend: 'stable',
    color: 'text-foreground',
    group: 'External Stability',
    definition: 'Assets held on reserve by a central bank in foreign currencies.',
    source: 'RBI data feed, cross-verified with FTID international flows.',
    relevance: 'Cushions against external shocks and maintains currency stability.',
    limitations: 'Does not reflect private foreign currency holdings.',
  },
  {
    label: 'Current Account Deficit',
    value: '1.5%',
    change: 'of GDP',
    icon: ArrowRightLeft,
    trend: 'down',
    color: 'text-green-400',
    group: 'External Stability',
    definition: 'When a country\'s total imports are greater than its total exports.',
    source: 'Estimated from FTID-tracked trade and remittance flows.',
    relevance: 'Indicates reliance on foreign capital.',
    limitations: 'Short-term fluctuations are common and not always a concern.',
  },
  {
    label: 'Unemployment Rate',
    value: '6.2%',
    change: 'Estimated',
    icon: Target,
    trend: 'down',
    color: 'text-green-400',
    group: 'External Stability',
    definition: 'The percentage of the labor force that is jobless.',
    source: 'Estimated from payroll data, PF/ESI flows, and subsidy applications.',
    relevance: 'Key measure of labor market health.',
    limitations: 'Does not capture underemployment or informal sector employment.',
  },
];


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

export const statePerformanceData = {
    indicators: [
      { state: 'Maharashtra', gstFy: 245000, gstJun: 22000, perCapita: 215000, gsdpGrowth: 6.8 },
      { state: 'Karnataka', gstFy: 130000, gstJun: 11500, perCapita: 236000, gsdpGrowth: 7.2 },
      { state: 'Gujarat', gstFy: 110000, gstJun: 9800, perCapita: 241000, gsdpGrowth: 8.5 },
      { state: 'Tamil Nadu', gstFy: 120000, gstJun: 10500, perCapita: 220000, gsdpGrowth: 7.1 },
      { state: 'Uttar Pradesh', gstFy: 95000, gstJun: 8500, perCapita: 78000, gsdpGrowth: 6.5 },
      { state: 'Delhi', gstFy: 60000, gstJun: 5500, perCapita: 444000, gsdpGrowth: 7.8 },
      { state: 'Haryana', gstFy: 45000, gstJun: 4100, perCapita: 296000, gsdpGrowth: 7.5 },
      { state: 'West Bengal', gstFy: 55000, gstJun: 4800, perCapita: 121000, gsdpGrowth: 6.2 },
    ],
    efficiency: [
      { state: 'Gujarat', metric: 'Ease of Doing Business', value: 'Rank 1', rank: 'Top' },
      { state: 'Karnataka', metric: 'Startup Ecosystem', value: 'Best Performer', rank: 'Top' },
      { state: 'Tamil Nadu', metric: 'Manufacturing Output', value: 'Rank 2', rank: 'High' },
      { state: 'Maharashtra', metric: 'Infrastructure Dev.', value: 'High', rank: 'High' },
      { state: 'Uttar Pradesh', metric: 'MSME Growth', value: '14.2% YoY', rank: 'Top' },
    ]
  };
    
