import {
  Landmark,
  Receipt,
  Utensils,
  HeartPulse,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  ShieldCheck,
} from 'lucide-react';

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
  }
];

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
    { id: 1, date: '2025-12-01', entity: 'Income Tax Dept.', action: 'Consent Granted', details: 'Read-only access' },
    { id: 2, date: '2025-11-15', entity: 'HDFC Bank', action: 'Renewed', details: 'Full flow verification' }
  ]
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

export const balanceSheetData = {
  assets: [
    { name: 'E-Rupee Wallet', value: 85250 },
    { name: 'Stocks', value: 835000 },
    { name: 'Fixed Deposits', value: 200000 },
    { name: 'Digital Gold', value: 350000 }
  ],
  liabilities: [
    { name: 'Credit Card Debt', value: 25000 },
    { name: 'Vehicle Loan', value: 450000 }
  ],
};

export const governmentBalanceSheetDataFy2526 = {
  assets: [
    { name: 'Revenue Receipts', value: 3502000, subItems: [{ name: 'Tax Revenue', value: 3043000 }] },
    { name: 'Capital Receipts', value: 1250000, subItems: [{ name: 'Borrowings', value: 1045000 }] }
  ],
  liabilities: [
    { name: 'Revenue Expenditure', value: 3945000, subItems: [{ name: 'Interest', value: 1123000 }] },
    { name: 'Capital Expenditure', value: 807000, subItems: [{ name: 'Infrastructure', value: 650000 }] }
  ],
};

export const gdpData = [
  { year: '2023', gdp: 345, range: [340, 350] },
  { year: '2024', gdp: 375, range: [370, 380] },
  { year: '2025', gdp: 410, range: [400, 420] },
];

export const revenueData = [
  { name: 'Income Tax', value: 22.4, fill: 'hsl(var(--chart-1))', growth: '+9.5%', risk: 'Low' },
  { name: 'Corporate Tax', value: 13.1, fill: 'hsl(var(--chart-2))', growth: '+7.2%', risk: 'Medium' },
  { name: 'GST', value: 20.8, fill: 'hsl(var(--chart-3))', growth: '+11.1%', risk: 'Low' },
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
    { state: 'Maharashtra', gstFy: 245000, gstJun: 22000, perCapita: 215000, gsdpGrowth: 6.8 },
    { state: 'Karnataka', gstFy: 185000, gstJun: 16500, perCapita: 240000, gsdpGrowth: 7.2 },
    { state: 'Gujarat', gstFy: 155000, gstJun: 14200, perCapita: 205000, gsdpGrowth: 8.1 }
  ],
  efficiency: [
    { state: 'Gujarat', metric: 'Ease of Biz', value: 'Rank 1', rank: 'Top' },
    { state: 'Karnataka', metric: 'Innovation Index', value: 'Rank 1', rank: 'Top' }
  ]
};

export const portfolioData = {
  stocks: [{ name: 'Reliance Industries', symbol: 'RELIANCE', quantity: 50, value: 145000, change: "+1.2%", changeValue: 1740, taxClassification: 'LTCG' }],
  mutualFunds: [{ name: 'Parag Parikh Flexi Cap', nav: 72.50, units: 1379, value: 100000, change: "+0.8%", changeValue: 800, taxClassification: 'LTCG' }],
  fixedDeposits: [{ bank: 'HDFC Bank', value: 200000, interestRate: '7.1%', maturityDate: '2026-05-10' }],
  digitalGold: [{ grams: 50, value: 350000 }],
  bonds: [{ name: 'GOI 7.26% 2033', value: 100000 }],
  emergencyFund: [{ account: 'Savings Account', value: 250000 }]
};

export const dummyFtidData = JSON.stringify([{ "transaction_id": "a1b2", "amount": 12500.50, "location": { "latitude": 19.07, "longitude": 72.87 } }]);

export const economicIndicatorsData = [
  { label: 'GDP (Nominal)', value: '₹324L Cr', change: '~$3.9T', icon: Landmark, trend: 'up', color: 'text-foreground', group: 'Growth', definition: 'Total market value.', source: 'FTID flows.', relevance: 'Primary measure.', limitations: 'Average value.' }
];

export const schemes = [{ icon: Landmark, title: "PMAY Urban Expansion", description: "Allocation for housing." }];
export const subsidyDetailsData = [{ title: 'Food Subsidy', amount: 203420, description: 'NFSA implementation.', icon: Utensils, color: "hsl(var(--chart-1))" }];
export const governmentBalanceSheetDataProjected = { assets: [], liabilities: [] };
export const subsidies = [
  { id: 'sub_1', name: 'Food Subsidy (NFSA)', status: 'Active', amount: 600, icon: Utensils, sourceMinistry: 'Dept. of Food', timeline: 'Monthly on 5th', eligibility: 'BPL Card Holder', ftidVerified: true },
  { id: 'sub_2', name: 'Health Insurance (PM-JAY)', status: 'Active', amount: 416, icon: HeartPulse, sourceMinistry: 'NHA', timeline: 'Coverage Active', eligibility: 'SECC 2011', ftidVerified: true },
];
export const donationData = [{ id: 1, election: 'Lok Sabha 2024', donor: 'Future Gaming', party: 'DMK', amount: 5090000000 }];
