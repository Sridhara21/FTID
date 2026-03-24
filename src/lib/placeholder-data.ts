import {
  Landmark,
  Receipt,
  Utensils,
  HeartPulse,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  ShieldCheck,
  Briefcase,
  User,
  CreditCard,
  History,
  Lock,
  Smartphone,
  Server,
  Terminal,
  FileCheck,
  Vote,
  PiggyBank,
  Activity,
  Zap,
  DollarSign,
  TrendingDown,
  BarChart3
} from 'lucide-react';

export const userProfileData = {
  name: 'Ravi Kumar',
  email: 'ravi.kumar@ftid.in',
  ftid: '2398-6501-4775',
  fallback: 'RK',
  pan: { number: 'ABCDE1234F', status: 'Verified' },
  aadhaar: { number: 'XXXX-XXXX-8901', status: 'Verified' },
  address: 'HSR Layout, Sector 2, Bangalore, KA 560102',
  bankKyc: [
    { bank: 'HDFC Bank', status: 'Verified', icon: CheckCircle, color: 'text-green-400' },
    { bank: 'SBI', status: 'Verified', icon: CheckCircle, color: 'text-green-400' }
  ],
  security: {
    devices: [{ id: 1, type: 'Mobile', name: 'OnePlus 12', location: 'Bangalore, IN', lastLogin: '2025-12-29T10:00:00Z' }],
    loginHistory: [{ id: 1, date: '2025-12-29', action: 'Login', platform: 'Mobile App', ip: '103.48.197.10', status: 'Success' }]
  },
  consentHistory: [
    { id: 1, date: '2025-12-01', entity: 'SpendWise AI', action: 'Consent Granted', details: 'Read-only access' },
    { id: 2, date: '2025-11-15', entity: 'TaxSaver Pro', action: 'Renewed', details: 'Full flow verification' }
  ]
};

export const consentData = [
  {
    category: '3rd Party Applications',
    description: "Authorize private fintech apps, budgeting tools, and lifestyle services to access specific data streams via FTID.",
    consents: [
      { id: 'c1', name: 'SpendWise AI', purpose: 'Personal Budgeting', type: 'Read-only', expiry: '2026-12-31', given: true },
      { id: 'c2', name: 'TaxSaver Pro', purpose: 'Tax Optimization', type: 'Analytics', expiry: '2025-08-15', given: true },
      { id: 'c3', name: 'Investify Hub', purpose: 'Portfolio Tracking', type: 'Verification', expiry: 'N/A', given: false },
    ]
  }
];

export const portfolioData = {
  stocks: [
    { name: 'Reliance Industries', symbol: 'RELIANCE', quantity: 150, value: 435000, change: "+1.2%", changeValue: 5220, taxClassification: 'LTCG' },
    { name: 'HDFC Bank', symbol: 'HDFCBANK', quantity: 250, value: 400000, change: "+0.5%", changeValue: 2000, taxClassification: 'LTCG' }
  ],
  mutualFunds: [
    { name: 'Parag Parikh Flexi Cap', units: 1379.31, value: 100000, change: "+0.8%", changeValue: 800, taxClassification: 'LTCG' }
  ],
  fixedDeposits: [
    { bank: 'SBI', value: 200000, interestRate: '7.1%', maturityDate: '2026-05-10', taxClassification: 'Debt' }
  ],
  digitalGold: [
    { name: 'SafeGold Digital', grams: 50, value: 350000, change: "+2.1%", changeValue: 7200, taxClassification: 'LTCG' }
  ],
  bonds: [
    { name: 'GOI 7.26% 2033', value: 100000, interestRate: '7.26%', taxClassification: 'Tax-Free' }
  ],
  emergencyFund: [
    { name: 'Liquid Savings Account', value: 250000, bank: 'HDFC Bank', taxClassification: 'Exempt' }
  ]
};

export const balanceSheetData = {
  assets: [
    { name: 'E-Rupee Wallet', value: 85250 },
    { name: 'Stocks', value: 835000 },
    { name: 'Mutual Funds', value: 100000 },
    { name: 'Fixed Deposits', value: 200000 },
    { name: 'Digital Gold', value: 350000 },
    { name: 'Bonds', value: 100000 },
    { name: 'Emergency Fund', value: 250000 }
  ],
  liabilities: [
    { name: 'Credit Card Debt', value: 25000 },
    { name: 'Vehicle Loan', value: 450000 }
  ],
};

export const transactions = [
  { id: 'txn_1', description: 'Grocery Store Purchase', amount: -5240.50, date: '2024-07-20', icon: Receipt, classification: 'Discretionary Spending', originInstitution: 'Self (HDFC Bank)', destinationInstitution: 'Masked Merchant (Reliance Fresh)' },
  { id: 'txn_2', description: 'Salary Credit', amount: 85000.00, date: '2024-07-19', icon: Landmark, classification: 'Primary Income', originInstitution: 'Masked Employer (Infosys)', destinationInstitution: 'Self (HDFC Bank)' },
  { id: 'txn_3', description: 'Utility Bill Payment', amount: -8200.00, date: '2024-07-18', icon: Receipt, classification: 'Essential Spending', originInstitution: 'Self (HDFC Bank)', destinationInstitution: 'Masked Utility (BESCOM)' },
];

export const incomeExpenseData = [
  { name: 'Jan', income: 75000, expense: 42000 },
  { name: 'Feb', income: 78000, expense: 45000 },
  { name: 'Mar', income: 82000, expense: 48000 },
  { name: 'Apr', income: 80000, expense: 52000 },
  { name: 'May', income: 85000, expense: 46000 },
  { name: 'Jun', income: 88000, expense: 50000 },
];

export const autoCapturedIncome = {
  sources: [
    { source: 'Employment (TDS Form 16)', amount: 1245000, verified: true },
    { source: 'Dividend Income', amount: 12500, verified: true },
    { source: 'Bank Interest (Sec 194A)', amount: 8400, verified: true },
    { source: 'Consulting (Form 26AS)', amount: 45000, verified: false }
  ],
  deductions: [
    { section: 'Standard Deduction', amount: 75000, verified: true },
    { section: '80C (EPF/LIC)', amount: 150000, verified: true },
    { section: '80D (Medical)', amount: 25000, verified: true }
  ]
};

export const flowScoreData = {
  score: 820,
  rating: 'Very Strong',
  summary: 'High financial stability based on consistent cash flows and verified identity.',
  factors: [
    { name: 'Income Stability', status: 'Excellent', impact: 'High', icon: TrendingUp, color: 'text-green-400' },
    { name: 'Repayment Consistency', status: 'Excellent', impact: 'High', icon: CheckCircle, color: 'text-green-400' },
  ],
  history: [
    { month: 'Jan', score: 790 },
    { month: 'Jun', score: 820 },
  ],
  dataSources: [
    { name: 'HDFC Bank (Account Data)', verified: true },
    { name: 'Income Tax Dept (ITR Data)', verified: true }
  ]
};

export const governmentBalanceSheetDataFy2526 = {
  assets: [
    { name: 'Revenue Receipts', value: 3820000, subItems: [{ name: 'Tax Revenue', value: 3412000 }, { name: 'Non-Tax Revenue', value: 408000 }] },
    { name: 'Capital Receipts', value: 1315000, subItems: [{ name: 'Borrowings', value: 1125000 }, { name: 'Asset Sales', value: 190000 }] }
  ],
  liabilities: [
    { name: 'Revenue Expenditure', value: 4125000, subItems: [{ name: 'Interest', value: 1205000 }, { name: 'Subsidies', value: 450000 }, { name: 'Salaries/Pensions', value: 2470000 }] },
    { name: 'Capital Expenditure', value: 1010000, subItems: [{ name: 'Infrastructure', value: 810000 }, { name: 'Defense Capital', value: 200000 }] }
  ],
};

export const governmentBalanceSheetDataProjected = {
  assets: [
    { name: 'Revenue Receipts', value: 4150000, subItems: [{ name: 'Tax Revenue', value: 3720000 }, { name: 'Non-Tax Revenue', value: 430000 }] },
    { name: 'Capital Receipts', value: 1420000, subItems: [{ name: 'Borrowings', value: 1210000 }, { name: 'Asset Sales', value: 210000 }] }
  ],
  liabilities: [
    { name: 'Revenue Expenditure', value: 4450000, subItems: [{ name: 'Interest', value: 1290000 }, { name: 'Subsidies', value: 470000 }] },
    { name: 'Capital Expenditure', value: 1120000, subItems: [{ name: 'Infrastructure', value: 910000 }] }
  ],
};

export const gdpData = [
  { year: '2023', gdp: 345, range: [340, 350] },
  { year: '2024', gdp: 375, range: [370, 380] },
  { year: '2025', gdp: 410, range: [400, 420] },
  { year: '2026 (Est)', gdp: 442, range: [435, 450] },
];

export const revenueData = [
  { name: 'Income Tax', value: 24.8, fill: 'hsl(var(--chart-1))', growth: '+10.2%', risk: 'Low' },
  { name: 'Corporate Tax', value: 14.2, fill: 'hsl(var(--chart-2))', growth: '+8.4%', risk: 'Medium' },
  { name: 'GST', value: 23.5, fill: 'hsl(var(--chart-3))', growth: '+12.5%', risk: 'Low' },
  { name: 'Customs', value: 5.8, fill: 'hsl(var(--chart-4))', growth: '+5.1%', risk: 'Low' },
  { name: 'Other Receipts', value: 4.2, fill: 'hsl(var(--chart-5))', growth: '+3.4%', risk: 'Medium' },
];

export const subsidyDistributionData = [
  { name: 'Food', value: 205500, fill: "hsl(var(--chart-1))" },
  { name: 'Fertiliser', value: 168000, fill: "hsl(var(--chart-2))" },
  { name: 'Petroleum', value: 28000, fill: "hsl(var(--chart-3))" },
  { name: 'Interest', value: 18000, fill: "hsl(var(--chart-4))" },
  { name: 'Other', value: 14500, fill: "hsl(var(--chart-5))" },
];

export const regulatoryAlerts = [
  { id: 1, date: '2025-12-28', title: 'New Aadhaar-PAN linking deadline extended to FY27.', severity: 'Medium', icon: AlertTriangle },
  { id: 2, date: '2025-12-15', title: 'Institutional compliance audit required.', severity: 'High', icon: ShieldCheck }
];

export const institutionConnectivity = [
  { id: 1, name: 'HDFC Bank', status: 'Active', type: 'Bank', icon: Landmark },
  { id: 2, name: 'ICICI Bank', status: 'Active', type: 'Bank', icon: Landmark },
  { id: 3, name: 'Income Tax Dept.', status: 'Active', type: 'Regulator', icon: ShieldCheck }
];

export const statePerformanceData = {
  indicators: [
    { state: 'Maharashtra', gstFy: 265000, gstJun: 24200, perCapita: 228000, gsdpGrowth: 7.1 },
    { state: 'Karnataka', gstFy: 198000, gstJun: 18100, perCapita: 252000, gsdpGrowth: 7.4 },
    { state: 'Gujarat', gstFy: 168000, gstJun: 15400, perCapita: 218000, gsdpGrowth: 8.3 }
  ],
  efficiency: [
    { state: 'Gujarat', metric: 'Ease of Biz', value: 'Rank 1', rank: 'Top' },
    { state: 'Karnataka', metric: 'Innovation Index', value: 'Rank 1', rank: 'Top' }
  ]
};

export const subsidyDetailsData = [
  { title: 'Food Subsidy', amount: 205500, description: 'Direct Beneficiary Transfer (DBT) via FTID for National Food Security Act.', icon: Utensils, color: "hsl(var(--chart-1))" },
  { title: 'Fertiliser Subsidy', amount: 168000, description: 'Soil Health Card linked subsidy routing for Urea and Complex fertilisers.', icon: Landmark, color: "hsl(var(--chart-2))" },
];

export const economicIndicatorsData = [
  { label: 'GDP Growth (Real)', value: '7.2%', change: '+0.4% YoY', icon: Activity, trend: 'up', color: 'text-green-400', group: 'Growth', definition: 'Real GDP growth rate adjusted for inflation.', source: 'Anonymized FTID flow analysis.', relevance: 'Primary growth benchmark.', limitations: 'Based on financial transaction proxy.' },
  { label: 'CPI Inflation', value: '4.4%', change: '-0.2% MoM', icon: Zap, trend: 'down', color: 'text-primary', group: 'Stability', definition: 'Consumer Price Index inflation rate.', source: 'Real-time retail flow tracking.', relevance: 'Monetary policy input.', limitations: 'Excludes unorganized cash markets.' },
  { label: 'Fiscal Deficit', value: '4.2%', change: 'Target 2027', icon: Landmark, trend: 'down', color: 'text-foreground', group: 'Fiscal', definition: 'Gap between government receipts and expenditure.', source: 'Union Budget FY 2026-27.', relevance: 'Macroeconomic health.', limitations: 'Interim budgetary target.' },
  { label: 'GST Velocity', value: '1.4x', change: 'High Activity', icon: BarChart3, trend: 'up', color: 'text-primary', group: 'Growth', definition: 'Ratio of GST collection growth to nominal GDP growth.', source: 'Direct tax flow stream.', relevance: 'Formalization indicator.', limitations: 'Varies by industrial sector.' },
  { label: 'Forex Reserves', value: '₹55L Cr', change: '+2.1%', icon: DollarSign, trend: 'up', color: 'text-foreground', group: 'External', definition: 'National foreign exchange reserves in INR equivalent.', source: 'RBI Aggregate Data.', relevance: 'Import cover benchmark.', limitations: 'Subject to exchange rate volatility.' }
];

export const schemes = [
  { icon: Landmark, title: "PMAY Urban Expansion", description: "Expanded allocation for affordable urban housing." },
  { icon: HeartPulse, title: "Ayushman Bharat 2.0", description: "Increased coverage for senior citizens and expanded disease registry." }
];

export const subsidies = [
  { id: 'sub_1', name: 'Food Subsidy (NFSA)', status: 'Active', amount: 600, icon: Utensils, sourceMinistry: 'Dept. of Food', timeline: 'Monthly on 5th', eligibility: 'BPL Card Holder', ftidVerified: true },
  { id: 'sub_2', name: 'Health Insurance (PM-JAY)', status: 'Active', amount: 416, icon: HeartPulse, sourceMinistry: 'NHA', timeline: 'Coverage Active', eligibility: 'SECC 2011', ftidVerified: true },
];

export const donationData = [
  { id: 1, election: 'Lok Sabha 2024', donor: 'Future Gaming', party: 'DMK', amount: 5090000000 },
  { id: 2, election: 'State Assembly 2025', donor: 'Megha Engineering', party: 'BJP', amount: 2000000000 }
];

export const creditScoreData = {
  score: 742,
  rating: 'Good',
  summary: 'Your financial health is stable. Improving repayment history could boost your score further.',
  history: [
    { month: 'Jan', score: 710 },
    { month: 'Feb', score: 715 },
    { month: 'Mar', score: 725 },
    { month: 'Apr', score: 730 },
    { month: 'May', score: 738 },
    { month: 'Jun', score: 742 },
  ],
  factors: [
    { name: 'Payment History', status: 'Good', impact: 'High', icon: CheckCircle, color: 'text-green-400' },
    { name: 'Credit Utilization', status: 'Excellent', impact: 'Medium', icon: TrendingUp, color: 'text-green-400' },
    { name: 'Credit Age', status: 'Fair', impact: 'Low', icon: History, color: 'text-yellow-400' }
  ],
  tips: [
    "Keep credit card utilization below 30%.",
    "Ensure all utility bills are paid through FTID-linked accounts for auto-verification.",
    "Avoid applying for multiple new loans in a short period."
  ]
};

export const dummyFtidData = JSON.stringify([{ "transaction_id": "a1b2", "amount": 12500.50, "location": { "latitude": 19.07, "longitude": 72.87 } }]);
