import {
  Landmark,
  Utensils,
  HeartPulse,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  ShieldCheck,
  Briefcase,
  ShoppingCart,
  ZapOff,
  Factory,
  Cpu,
  Globe,
  DollarSign,
  Activity,
  Zap
} from 'lucide-react';

export const userProfileData = {
  name: 'Ananya Iyer',
  email: 'ananya.iyer@ftid.in',
  ftid: '4196-7914-2020',
  fallback: 'AI',
  pan: { number: 'PNGND1694Z', status: 'Verified' },
  aadhaar: { number: 'XXXX-XXXX-2020', status: 'Verified' },
  address: 'Indiranagar, 100 Feet Rd, Bangalore, KA 560038',
  bankKyc: [
    { bank: 'ICICI Bank', status: 'Verified', icon: CheckCircle, color: 'text-green-400' },
    { bank: 'HDFC Bank', status: 'Verified', icon: CheckCircle, color: 'text-green-400' }
  ],
  security: {
    devices: [{ id: 1, type: 'Mobile', name: 'iPhone 15 Pro', location: 'Bangalore, IN', lastLogin: '2026-04-08T10:00:00Z' }],
    loginHistory: [{ id: 1, date: '2026-04-08', action: 'Login', platform: 'Mobile App', ip: '103.48.197.10', status: 'Success' }]
  },
  consentHistory: [
    { id: 1, date: '2026-03-01', entity: 'SpendWise AI', action: 'Consent Granted', details: 'Read-only access' },
    { id: 2, date: '2026-02-15', entity: 'TaxSaver Pro', action: 'Renewed', details: 'Full flow verification' }
  ]
};

export const consentData = [
  {
    category: '3rd Party Applications',
    description: "Authorize private fintech apps and analytical services to access specific data streams via FTID.",
    consents: [
      { id: 'c1', name: 'SpendWise AI', purpose: 'Personal Budgeting', type: 'Read-only', expiry: '2026-12-31', given: true },
      { id: 'c2', name: 'TaxSaver Pro', purpose: 'Tax Optimization', type: 'Analytics', expiry: '2025-08-15', given: true },
    ]
  }
];

export const spendingCategoryData = [
  { name: 'Housing', value: 20425, fill: 'hsl(var(--chart-1))' },
  { name: 'Food', value: 8988, fill: 'hsl(var(--chart-2))' },
  { name: 'Shopping', value: 63622, fill: 'hsl(var(--chart-3))' },
  { name: 'Investment', value: 87856, fill: 'hsl(var(--chart-4))' },
  { name: 'Utilities', value: 4532, fill: 'hsl(var(--chart-5))' },
];

export const portfolioData = {
  stocks: [
    { name: 'Equity Stocks', symbol: 'EQUITY', quantity: 1, value: 1574073, change: "+1.2%", changeValue: 18888, taxClassification: 'LTCG' }
  ],
  mutualFunds: [
    { name: 'Mutual Fund SIP', units: 1000, value: 1290189, change: "+0.8%", changeValue: 10321, taxClassification: 'LTCG' }
  ],
  fixedDeposits: [
    { bank: 'ICICI Bank', value: 238484, interestRate: '7.1%', maturityDate: '2027-05-10', taxClassification: 'Debt' }
  ],
  digitalGold: [
    { name: 'Gold', grams: 120, value: 873422, change: "+2.1%", changeValue: 18341, taxClassification: 'LTCG' }
  ],
  bonds: [],
  emergencyFund: [
    { name: 'Savings Account', value: 238484, bank: 'ICICI Bank', taxClassification: 'Exempt' }
  ]
};

export const balanceSheetData = {
  assets: [
    { name: 'ICICI Savings', value: 238484 },
    { name: 'Stocks', value: 1574073 },
    { name: 'Mutual Funds', value: 1290189 },
    { name: 'Gold', value: 873422 }
  ],
  liabilities: [
    { name: 'Credit Card', value: 12500 }
  ],
};

export const transactions = [
  { id: 'txn_1', description: 'Zepto', amount: -502, date: '2026-03-01', icon: ShoppingCart, classification: 'Food', originInstitution: 'Paytm', destinationInstitution: 'Zepto' },
  { id: 'txn_2', description: 'Rent Payment', amount: -20425, date: '2026-03-02', icon: Landmark, classification: 'Housing', originInstitution: 'UPI', destinationInstitution: 'Landlord Node' },
  { id: 'txn_3', description: 'Amazon Purchase', amount: -15956, date: '2026-03-06', icon: ShoppingCart, classification: 'Shopping', originInstitution: 'Kotak Bank', destinationInstitution: 'Amazon' },
];

export const incomeExpenseData = [
  { name: 'Jan', income: 146000, window: '2026-01-01', expense: 85000 },
  { name: 'Feb', income: 146000, window: '2026-02-01', expense: 92000 },
  { name: 'Mar', income: 146649, window: '2026-03-01', expense: 87000 },
];

export const autoCapturedIncome = {
  sources: [
    { source: 'Employment (TDS Form 16)', amount: 1759794, verified: true },
    { source: 'Dividend Income', amount: 12500, verified: true }
  ],
  deductions: [
    { section: 'Standard Deduction', amount: 75000, verified: true },
    { section: '80C (EPF/LIC)', amount: 150000, verified: true }
  ]
};

export const flowScoreData = {
  score: 539,
  rating: 'Fair',
  trend: '-13',
  summary: 'Declining trend due to increased high-value discretionary spending in March cycle.',
  factors: [
    { name: 'Spending Velocity', status: 'High', impact: 'High', icon: TrendingUp, color: 'text-red-400' },
    { name: 'Savings Ratio', status: 'Healthy', impact: 'Medium', icon: CheckCircle, color: 'text-green-400' },
  ],
  history: [
    { month: 'Oct', score: 589 },
    { month: 'Nov', score: 580 },
    { month: 'Dec', score: 567 },
    { month: 'Jan', score: 556 },
    { month: 'Feb', score: 552 },
    { month: 'Mar', score: 539 },
  ],
  dataSources: [
    { name: 'ICICI Bank (Account Data)', verified: true },
    { name: 'Income Tax Dept (ITR Data)', verified: true }
  ]
};

export const governmentBalanceSheetDataFy2526 = {
  assets: [
    { name: 'Direct Taxes (Income/Corp)', value: 1612000 },
    { name: 'GST & Indirect Taxes', value: 1245000 },
    { name: 'Non-Tax Revenue (Dividends)', value: 408000 },
    { name: 'Capital Receipts (Borrowing)', value: 1555000 }
  ],
  liabilities: [
    { name: 'Interest Payments', value: 1205000 },
    { name: 'Centrally Sponsored Schemes', value: 1010000 },
    { name: 'Subsidies (Food/Fertiliser)', value: 450000 },
    { name: 'Defense & Infrastructure Outlay', value: 2155000 }
  ],
};

export const governmentBalanceSheetDataProjected = {
  assets: [
    { name: 'Direct Taxes (Income/Corp)', value: 1820000, subItems: [{ name: 'Corporate Tax', value: 920000 }, { name: 'Income Tax', value: 900000 }] },
    { name: 'GST & Indirect Taxes', value: 1412000, subItems: [{ name: 'GST', value: 1100000 }, { name: 'Customs', value: 312000 }] },
    { name: 'Non-Tax Revenue', value: 440000 },
    { name: 'Capital Receipts', value: 1750000 }
  ],
  liabilities: [
    { name: 'Interest Payments', value: 1320000 },
    { name: 'Centrally Sponsored Schemes', value: 1120000 },
    { name: 'Subsidies', value: 410000 },
    { name: 'Capital Outlay (National)', value: 2572000 }
  ],
};

export const gdpComposedData = [
  { name: 'Jan', gdp: 400, consumption: 280, tax: 85 },
  { name: 'Feb', gdp: 405, consumption: 285, tax: 88 },
  { name: 'Mar', gdp: 415, consumption: 290, tax: 92 },
  { name: 'Apr', gdp: 420, consumption: 300, tax: 98 },
  { name: 'May', gdp: 435, consumption: 310, tax: 105 },
  { name: 'Jun', gdp: 442, consumption: 320, tax: 112 },
];

export const gdpData = [
  { year: '2021', gdp: 2.7, range: [2.5, 2.9] },
  { year: '2022', gdp: 3.1, range: [2.9, 3.3] },
  { year: '2023', gdp: 3.4, range: [3.2, 3.6] },
  { year: '2024', gdp: 3.7, range: [3.5, 3.9] },
  { year: '2025', gdp: 4.1, range: [3.8, 4.4] },
  { year: '2026', gdp: 4.5, range: [4.2, 4.8] },
];

export const sectorActivityData = [
  { name: 'Retail', value: 45, fill: 'hsl(var(--chart-1))' },
  { name: 'Services', value: 30, fill: 'hsl(var(--chart-2))' },
  { name: 'Manufacturing', value: 20, fill: 'hsl(var(--chart-3))' },
  { name: 'Agri', value: 5, fill: 'hsl(var(--chart-4))' },
];

export const stateHeatmapData = [
  { state: 'Maharashtra', intensity: 95, color: 'bg-primary/90' },
  { state: 'Karnataka', intensity: 88, color: 'bg-primary/80' },
  { state: 'Tamil Nadu', intensity: 82, color: 'bg-primary/70' },
  { state: 'Gujarat', intensity: 85, color: 'bg-primary/75' },
  { state: 'Uttar Pradesh', intensity: 65, color: 'bg-primary/50' },
  { state: 'Delhi', intensity: 92, color: 'bg-primary/85' },
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
  { id: 1, date: '2026-04-08', title: 'New Aadhaar-PAN linking deadline extended to FY27.', severity: 'Medium', icon: AlertTriangle },
  { id: 2, date: '2026-03-15', title: 'Institutional compliance audit required.', severity: 'High', icon: ShieldCheck }
];

export const institutionConnectivity = [
  { id: 1, name: 'ICICI Bank', status: 'Active', type: 'Bank', icon: Landmark },
  { id: 2, name: 'HDFC Bank', status: 'Active', type: 'Bank', icon: Landmark },
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

export const economicIndicatorsData = [
  { label: 'GDP Growth (Real)', value: '7.2%', change: '+0.4% YoY', icon: Activity, trend: 'up', color: 'text-green-400', group: 'Growth', definition: 'Real GDP growth rate adjusted for inflation.', source: 'Anonymized FTID flow analysis.', relevance: 'Primary growth benchmark.', limitations: 'Based on financial transaction proxy.' },
  { label: 'Consumption Index', value: '112.5', change: '+2.1% MoM', icon: ShoppingCart, trend: 'up', color: 'text-primary', group: 'Growth', definition: 'Measure of aggregate household consumption velocity.', source: 'Anonymized digital flow streams.', relevance: 'Demand health indicator.', limitations: 'Highly sensitive to seasonal spending.' },
  { label: 'CPI Inflation', value: '4.4%', change: '-0.2% MoM', icon: Zap, trend: 'down', color: 'text-primary', group: 'Stability', definition: 'Consumer Price Index inflation rate.', source: 'Real-time retail flow tracking.', relevance: 'Monetary policy input.', limitations: 'Excludes unorganized cash markets.' },
  { label: 'Fiscal Deficit', value: '4.2%', change: 'Target 2027', icon: Landmark, trend: 'down', color: 'text-foreground', group: 'Fiscal', definition: 'Gap between government receipts and expenditure.', source: 'Union Budget FY 2026-27.', relevance: 'Macroeconomic health.', limitations: 'Interim budgetary target.' },
  { label: 'Digital Txn Growth', value: '+14.8%', change: 'High Velocity', icon: ZapOff, trend: 'up', color: 'text-accent', group: 'Growth', definition: 'Year-on-year growth in digital transaction volume.', source: 'FTID Ecosystem stats.', relevance: 'Formalization benchmark.', limitations: 'Based on e-Rupee and FTID routes.' }
];

export const schemes = [
  { icon: Landmark, title: "PMAY Urban Expansion", description: "Expanded allocation for affordable urban housing." },
  { icon: HeartPulse, title: "Ayushman Bharat 2.0", description: "Increased coverage for senior citizens and expanded disease registry." }
];

export const subsidies = [
  { id: 'sub_1', name: 'LPG Subsidy', status: 'Active', amount: 100, icon: Zap, sourceMinistry: 'Ministry of Petroleum', timeline: 'Monthly on 10th', eligibility: 'Ujjwala Beneficiary', ftidVerified: true },
  { id: 'sub_2', name: 'Health Insurance (PM-JAY)', status: 'Active', amount: 0, icon: HeartPulse, sourceMinistry: 'NHA', timeline: 'Coverage Active', eligibility: 'SECC 2011', ftidVerified: true },
];

export const donationData = [
  { id: 1, election: 'Lok Sabha 2024', donor: 'Future Gaming', party: 'DMK', amount: 5090000000 },
  { id: 2, election: 'State Assembly 2025', donor: 'Megha Engineering', party: 'BJP', amount: 2000000000 }
];

export const dummyFtidData = JSON.stringify([{ "transaction_id": "a1b2", "amount": 12500.50, "location": { "latitude": 19.07, "longitude": 72.87 } }]);

export const subsidyDetailsData = [
  { title: "Food", amount: 205500, color: "hsl(var(--chart-1))", icon: Utensils, description: "Direct benefits for NFSA and PMGKAY programs." },
  { title: "Fertiliser", amount: 168000, color: "hsl(var(--chart-2))", icon: Factory, description: "Nutrient-based subsidies for agricultural stability." },
  { title: "Petroleum", amount: 28000, color: "hsl(var(--chart-3))", icon: Zap, description: "LPG and kerosene subsidies for targeted beneficiaries." },
  { title: "Interest", amount: 18000, color: "hsl(var(--chart-4))", icon: DollarSign, description: "Incentives for prompt loan repayments." },
  { title: "Other", amount: 14500, color: "hsl(var(--chart-5))", icon: Globe, description: "Miscellaneous social welfare disbursements." },
];