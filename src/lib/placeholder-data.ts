
import { CreditCard, Landmark, PiggyBank, Receipt, HandCoins, ShieldCheck, Fuel, Utensils, Wheat, HeartPulse, Building, TrendingUp, TrendingDown, Minus, Rocket, GraduationCap, Factory, Leaf, Magnet, UserRound, Bot, BookOpen, Train, Banknote, Globe, LineChart, Users, Target, ArrowRightLeft, Briefcase, BarChart, Scale, CandlestickChart, Folders, Gem, Shield } from "lucide-react";

export const transactions = [
  {
    id: "txn_1",
    description: "Grocery Store",
    amount: -5000,
    date: "2024-07-20",
    icon: Receipt,
    recipientFtid: "7890-2345-6789",
  },
  {
    id: "txn_2",
    description: "Salary Deposit",
    amount: 50000,
    date: "2024-07-19",
    icon: Landmark,
    senderFtid: "9876-5432-1098"
  },
  {
    id: "txn_3",
    description: "Utility Bill",
    amount: -8000,
    date: "2024-07-18",
    icon: CreditCard,
    recipientFtid: "1122-3344-5566",
  },
  {
    id: "txn_4",
    description: "Savings Transfer",
    amount: -10000,
    date: "2024-07-17",
    icon: PiggyBank,
    recipientFtid: "4589-1234-5678",
  },
];

export const incomeExpenseData = [
  { name: "Jan", income: 50000, expense: 30000 },
  { name: "Feb", income: 52000, expense: 32000 },
  { name: "Mar", income: 55000, expense: 35000 },
  { name: "Apr", income: 53000, expense: 38000 },
  { name: "May", income: 58000, expense: 34000 },
  { name: "Jun", income: 60000, expense: 40000 },
];

export const creditScoreData = {
  score: 780,
  rating: "Excellent",
  summary: "Your score is strong! Keep up the great work on timely payments and low credit utilization.",
  tips: [
    "Pay your bills on time, every time.",
    "Keep your credit utilization ratio below 30%.",
    "Avoid opening multiple new credit accounts at once.",
    "Regularly check your credit report for errors and dispute any inaccuracies.",
    "A mix of credit types (credit cards, loans) can positively impact your score.",
    "Limit requests for new credit to avoid numerous hard inquiries."
  ],
  factors: [
    { name: "Payment History", status: "Excellent", impact: "High", icon: TrendingUp, color: "text-green-400" },
    { name: "Credit Utilization", status: "Good", impact: "High", icon: TrendingUp, color: "text-green-400" },
    { name: "Length of Credit History", status: "Good", impact: "Medium", icon: TrendingUp, color: "text-green-400" },
    { name: "New Credit", status: "Excellent", impact: "Low", icon: Minus, color: "text-yellow-400" },
    { name: "Credit Mix", status: "Fair", impact: "Low", icon: TrendingDown, color: "text-red-400" },
  ],
  history: [
    { month: "Jan", score: 750 },
    { month: "Feb", score: 755 },
    { month: "Mar", score: 765 },
    { month: "Apr", score: 760 },
    { month: "May", score: 775 },
    { month: "Jun", score: 780 },
  ]
};

export const subsidies = [
  { id: "sub_1", name: "Food Subsidy (NFSA)", status: "Active", amount: 600, icon: Utensils },
  { id: "sub_2", name: "Health Insurance (PM-JAY)", status: "Active", amount: 416, icon: HeartPulse },
  { id: "sub_3", name: "LPG Subsidy (Ujjwala)", status: "Active", amount: 200, icon: Fuel },
  { id: "sub_4", name: "Housing Subsidy (PMAY)", status: "Inactive", amount: 0, icon: Building },
  { id: "sub_5", name: "Fertilizer Subsidy (PM-PRANAM)", status: "Active", amount: 1200, icon: Wheat },
];

export const gdpData = [
  { year: "2020", gdp: 250 },
  { year: "2021", gdp: 275 },
  { year: "2022", gdp: 305 },
  { year: "2023", gdp: 340 },
  { year: "2024", gdp: 375 },
  { year: "2025", gdp: 410 },
  { year: "2026", gdp: 450 },
];

export const revenueData = [
    { name: 'Income Tax', value: 22, fill: 'var(--color-income)' },
    { name: 'Corporate Tax', value: 13, fill: 'var(--color-corporate)' },
    { name: 'GST', value: 20, fill: 'var(--color-gst)' },
    { name: 'Customs', value: 5, fill: 'var(--color-customs)' },
    { name: 'Other', value: 4, fill: 'var(--color-other)' },
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
        title: "Food Subsidy",
        amount: "2,03,420",
        description: "Implemented mainly through the National Food Security Act (NFSA), covering distribution of rice, wheat, and coarse grains to ~81 crore beneficiaries.",
        icon: Utensils,
        color: "hsl(var(--chart-1))"
    },
    {
        title: "Fertiliser Subsidy",
        amount: "1,67,887",
        description: "Covers both Urea subsidy and Nutrient-Based Subsidy (NBS) for phosphatic & potassic fertilisers, ensuring farmers get fertilisers at affordable prices.",
        icon: Wheat,
        color: "hsl(var(--chart-2))"
    },
    {
        title: "Petroleum Subsidy",
        amount: "12,100",
        description: "Includes LPG subsidy under the PAHAL Direct Benefit Transfer (DBT) scheme, providing subsidised cooking gas for low-income households.",
        icon: Fuel,
        color: "hsl(var(--chart-3))"
    },
    {
        title: "Interest Subsidy",
        amount: "27,840",
        description: "Support for sectors like education loans, MSMEs, export promotion, and housing through schemes like the Interest Subvention Scheme (ISS).",
        icon: Banknote,
        color: "hsl(var(--chart-4))"
    },
    {
        title: "Other Subsidies",
        amount: "14,969",
        description: "Includes Price Support Scheme (PSS), Market Intervention Scheme (MIS), and subsidies for jute, sugar, and other industrial incentives.",
        icon: Landmark,
        color: "hsl(var(--chart-5))"
    },
];

export const donationData = [
  { id: "don_1", election: "Lok Sabha 2024", donor: "MegaCorp Industries", amount: 12500000, party: "National Party" },
  { id: "don_2", election: "State Assembly 2024", donor: "Global Tech Solutions", amount: 6200000, party: "Regional Party" },
  { id: "don_3", election: "Lok Sabha 2024", donor: "Innovate India LLC", amount: 20000000, party: "Regional Party" },
  { id: "don_4", election: "Municipal Elections", donor: "Local Business Group", amount: 400000, party: "Independent" },
  { id: "don_5", election: "Lok Sabha 2024", donor: "Public Crowdfunding", amount: 41000000, party: "National Party" },
];

export const balanceSheetData = {
  assets: [
    { name: "E-Rupee Wallet", value: 85250 },
    { name: "HDFC Bank Savings", value: 175000 },
    { name: "ICICI Bank Savings", value: 75000 },
    { name: "Fixed Deposits", value: 150000 },
    { name: "Mutual Funds", value: 75000 },
    { name: "Real Estate", value: 1200000 },
  ],
  liabilities: [
    { name: "Credit Card Debt", value: 25000 },
    { name: "Personal Loan", value: 100000 },
    { name: "Student Loan", value: 300000 },
  ],
};

export const governmentBalanceSheetDataProjected = {
    assets: [
        { name: 'Tax Revenue (Net to Centre)', value: 3258520 },
        { name: 'Non-Tax Revenue', value: 600951 },
        { name: 'Recovery of Loans', value: 29000 },
        { name: 'Other Receipts', value: 47000 },
        { name: 'Borrowings and Other Liabilities', value: 1200000 },
    ],
    liabilities: [
        { name: 'On Revenue Account', value: 4000000 },
        { name: 'Interest Payments', value: 1200000 },
        { name: 'Grants in Aid for Creation of Capital Assets', value: 450000 },
        { name: 'On Capital Account', value: 1400000 },
    ],
};

export const governmentBalanceSheetDataFy2526 = {
    assets: [
        { name: 'Tax Revenue (Net to Centre)', value: 2837409 },
        { name: 'Non-Tax Revenue', value: 583000 },
        { name: 'Recovery of Loans', value: 29000 },
        { name: 'Other Receipts', value: 47000 },
        { name: 'Borrowings and Other Liabilities', value: 1568936 },
    ],
    liabilities: [
        { name: 'Interest Payments', value: 1276338 },
        { name: 'Grants in Aid for Creation of Capital Assets', value: 427192 },
        { name: 'Capital Account Expenditure', value: 1121090 },
        { name: 'Revenue Account Expenditure (excl. interest & grants)', value: 2240725 },
    ],
};


export const schemes = [
    {
      icon: Building,
      title: 'PMAY Urban Expansion',
      description: '₹736 crore has been allocated for affordable housing in Uttar Pradesh under the Pradhan Mantri Awas Yojana.',
    },
    {
      icon: ShieldCheck,
      title: '₹20,000 Crore Infrastructure Guarantee Fund',
      description: 'The government is establishing a ₹20,000 crore fund to support infrastructure investments by covering non-commercial risks.',
    },
    {
      icon: Bot,
      title: 'SUMAN SAKHI Chatbot',
      description: 'Madhya Pradesh is launching an AI-based chatbot, providing 24/7 maternal and reproductive health information to women via WhatsApp.',
    },
    {
      icon: Factory,
      title: 'Kalamkari Garment Cluster',
      description: 'Maharashtra is developing a Kalamkari garment cluster to train rural women in traditional garment-making, promoting self-employment.',
    },
    {
      icon: Wheat,
      title: 'Prime Minister Dhan-Dhaanya Krishi Yojana',
      description: 'This scheme aims to support 1.7 crore farmers in 100 districts with low agricultural productivity through targeted measures.',
    },
    {
      icon: Rocket,
      title: 'Digital Agriculture Mission (DAM)',
      description: 'The government is promoting the use of digital tools and technologies to enhance agricultural sustainability and productivity.',
    },
    {
      icon: UserRound,
      title: 'UIDAI Biometric Update',
      description: 'Biometric updates for children aged 0-5 and 15-17 are being conducted to ensure accurate records for accessing educational and welfare services.',
    },
    {
      icon: GraduationCap,
      title: 'PM Internship Scheme',
      description: 'The scheme offers 12-month internships in top companies across various sectors, aiming to provide 1 crore internships over the next five years.',
    },
    {
      icon: Leaf,
      title: 'Carbon Capture Incentives',
      description: 'Financial support will be provided for carbon capture projects, aiming to reduce emissions while maintaining coal as a key energy source.',
    },
    {
      icon: Magnet,
      title: 'Rare Earth Magnet Manufacturing',
      description: 'Fiscal incentives will be offered to encourage the local production of rare-earth magnets, which are essential for electric vehicles and renewable energy sectors.',
    },
  ];


export const userProfileData = {
    name: "Ravi",
    email: "ravi@email.com",
    address: "45, MG Road, Bangalore, 560001",
    ftid: "2398-6501-4775",
    fallback: "R"
};


export const dummyFtidData = JSON.stringify([
  {"transaction_id":"a1b2c3d4","timestamp":"2023-10-26T10:00:00Z","amount":12500.50,"currency":"INR","merchant_name":"SuperBazaar","merchant_category":"Groceries","location":{"latitude":19.0760,"longitude":72.8777}},
  {"transaction_id":"e5f6g7h8","timestamp":"20ल23-10-26T12:30:00Z","amount":2100.00,"currency":"INR","merchant_name":"Chai Point","merchant_category":"Food & Drink","location":{"latitude":19.0765,"longitude":72.8780}},
  {"transaction_id":"i9j0k1l2","timestamp":"2023-10-26T15:45:00Z","amount":41500.00,"currency":"INR","merchant_name":"Digital World","merchant_category":"Electronics","location":{"latitude":19.0780,"longitude":72.8800}}
], null, 2);


export const economicIndicatorsData = [
    { label: "GDP (Nominal)", value: "₹324L Cr", change: "~$3.9T", icon: Landmark },
    { label: "GNP (Nominal)", value: "₹319L Cr", change: "~$3.8T", icon: Globe },
    { label: "Real GDP Growth", value: "6.5%", change: "Annual", icon: LineChart },
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
        { state: "Maharashtra", gstJun: 30553, gstFy: 359854.70, perCapita: 176678, gsdpGrowth: 7.96 },
        { state: "Karnataka", gstJun: 13409, gstFy: 159563.80, perCapita: 204605, gsdpGrowth: 7.50 },
        { state: "Gujarat", gstJun: 11404, gstFy: 136748.21, perCapita: 272450, gsdpGrowth: 8.94 },
        { state: "Tamil Nadu", gstJun: 10676, gstFy: 131115.43, perCapita: 196309, gsdpGrowth: 9.69 },
        { state: "Haryana", gstJun: 9959, gstFy: 119362.24, perCapita: 194285, gsdpGrowth: 7.55 },
        { state: "Uttar Pradesh", gstJun: 9248, gstFy: 112212.23, perCapita: 93510, gsdpGrowth: 8.51 },
        { state: "Delhi", gstJun: 5610, gstFy: 77002.34, perCapita: 461910, gsdpGrowth: null },
        { state: "West Bengal", gstJun: 5551, gstFy: 66892.28, perCapita: 154120, gsdpGrowth: null },
        { state: "Telangana", gstJun: 5111, gstFy: 62986.63, perCapita: 187912, gsdpGrowth: null },
        { state: "Odisha", gstJun: 5079, gstFy: 60928.44, perCapita: 182548, gsdpGrowth: 10.03 },
        { state: "Goa", gstFy: null, gstJun: null, perCapita: 472070, gsdpGrowth: null },
        { state: "Sikkim", gstFy: null, gstJun: null, perCapita: 463509, gsdpGrowth: null },
        { state: "Chandigarh", gstFy: null, gstJun: null, perCapita: 333932, gsdpGrowth: null },
        { state: "Bihar", gstFy: null, gstJun: null, perCapita: 60337, gsdpGrowth: null },
    ],
    efficiency: [
        { state: "Maharashtra", metric: "Energy Efficiency", value: "80.5%", rank: "Top" },
        { state: "Andhra Pradesh", metric: "Energy Efficiency", value: "79.3%", rank: "Top" },
        { state: "Telangana", metric: "Per Capita NSDP", value: "₹3.87 lakh", rank: "Top" },
    ]
};

export const portfolioData = {
  stocks: [
    { name: "Reliance Industries", symbol: "RELIANCE", quantity: 50, value: 145000, change: "+1.2%", changeValue: 1740 },
    { name: "Tata Consultancy Services", symbol: "TCS", quantity: 100, value: 380000, change: "-0.5%", changeValue: -1900 },
    { name: "HDFC Bank", symbol: "HDFCBANK", quantity: 200, value: 310000, change: "+2.1%", changeValue: 6510 },
  ],
  mutualFunds: [
    { name: "Parag Parikh Flexi Cap Fund", nav: 72.5, units: 1379, value: 100000, change: "+0.8%", changeValue: 800 },
    { name: "UTI Nifty 50 Index Fund", nav: 145.2, units: 1033, value: 150000, change: "+1.1%", changeValue: 1650 },
  ],
  fixedDeposits: [
    { bank: "HDFC Bank", value: 200000, interestRate: "7.1%", maturityDate: "2026-05-10" },
    { bank: "State Bank of India", value: 150000, interestRate: "6.9%", maturityDate: "2025-11-20" },
  ],
  digitalGold: [
    { grams: 50, value: 350000 },
  ],
  bonds: [
    { name: "GOI 7.26% 2033", value: 100000 },
    { name: "NHAI InvIT", value: 50000 },
  ],
  emergencyFund: [
    { account: "Savings Account", value: 250000 },
  ],
};

export const portfolioAiSuggestions = [
    {
        title: "Diversify Your Equity",
        description: "Your portfolio is heavily weighted in large-cap stocks. Consider adding a mid-cap or small-cap mutual fund to capture growth in other market segments."
    },
    {
        title: "Increase Emergency Fund",
        description: "Your current emergency fund covers approximately 4 months of expenses. Financial advisors recommend having 6-12 months of expenses saved for unforeseen circumstances."
    },
    {
        title: "Consider Sovereign Gold Bonds (SGBs)",
        description: "Instead of only holding Digital Gold, look into SGBs. They offer an additional 2.5% annual interest on the issue price and are tax-efficient if held until maturity."
    }
]

    

    





    



    

    