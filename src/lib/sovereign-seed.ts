/**
 * @fileOverview Sovereign Seed Registry for Prototype Personas.
 * This file contains the master list of persona data points provided by the user.
 * During registration, the app checks if an entered PAN/Aadhaar matches a record here.
 */

export interface SeedPersona {
  fullName: string;
  pan: string;
  aadhaar: string;
  email: string;
  creditScore: number;
  incomeAnnual: number;
  transactions: any[];
  investments: any[];
  taxRecords: any[];
  flowHistory: number[];
  spendingBreakdown?: Record<string, number>;
  liabilities?: any[];
}

export const sovereignRegistry: SeedPersona[] = [
  {
    fullName: "Ananya Iyer",
    pan: "PNGND1694Z",
    aadhaar: "419679142020",
    email: "ananya.iyer@ftid.in",
    creditScore: 539,
    incomeAnnual: 1759794,
    flowHistory: [589, 580, 567, 556, 552, 539],
    spendingBreakdown: { food: 8988, housing: 20425, shopping: 63622, transport: 8066, utilities: 4532, investment: 87856, insurance: 16226 },
    transactions: [
      { date: "2026-03-01", desc: "Zepto", amount: -502, class: "Food", channel: "Paytm" },
      { date: "2026-03-02", desc: "Rent Payment", amount: -20425, class: "Housing", channel: "UPI" },
      { date: "2026-03-06", desc: "Amazon Purchase", amount: -15956, class: "Shopping", channel: "Kotak Bank" },
      { date: "2026-03-21", desc: "SIP Debit", amount: -33007, class: "Investment", channel: "ICICI Bank" },
      { date: "2026-03-28", desc: "Uber", amount: -1167, class: "Transport", channel: "Google Pay" }
    ],
    investments: [
      { name: "Mutual Fund SIP", type: "MF", value: 1290189, taxClass: "LTCG" },
      { name: "Equity Stocks", type: "Stock", value: 1574073, taxClass: "LTCG" },
      { name: "Gold", type: "Gold", value: 873422, taxClass: "Exempt" }
    ],
    taxRecords: [
      { source: "Employment (TDS Form 16)", type: "Income", amount: 1759794, verified: true, fy: "2025-26" },
      { source: "Standard Deduction", type: "Deduction", amount: 75000, verified: true, fy: "2025-26" }
    ]
  },
  {
    fullName: "Prithviraj Chauhan",
    pan: "HPGBT9246V",
    aadhaar: "403393833964",
    email: "prithviraj.c@ftid.in",
    creditScore: 528,
    incomeAnnual: 673738,
    flowHistory: [535, 532, 527, 528, 526, 528],
    spendingBreakdown: { utilities: 310, food: 3309, transport: 16968, insurance: 2890, business: 4606, housing: 8906, shopping: 10806 },
    transactions: [
      { date: "2026-03-01", desc: "Mobile Recharge", amount: -310, class: "Utilities", channel: "PhonePe" },
      { date: "2026-03-06", desc: "Petrol Pump", amount: -2477, class: "Transport", channel: "Paytm" },
      { date: "2026-03-11", desc: "Rent Payment", amount: -8906, class: "Housing", channel: "UPI" },
      { date: "2026-03-19", desc: "Salary Credit", amount: 30511, class: "Income", channel: "ICICI Bank" },
      { date: "2026-03-27", desc: "Amazon Purchase", amount: -10806, class: "Shopping", channel: "Kotak Bank" }
    ],
    investments: [
      { name: "Mutual Fund SIP", type: "MF", value: 295405, taxClass: "LTCG" },
      { name: "Gold", type: "Gold", value: 326112, taxClass: "Exempt" }
    ],
    taxRecords: [
      { source: "Sales Performance", type: "Income", amount: 673738, verified: true, fy: "2025-26" }
    ]
  },
  {
    fullName: "Savitri Devi Kumari",
    pan: "CPLDH2769D",
    aadhaar: "390892054116",
    email: "savitri.devi@ftid.in",
    creditScore: 322,
    incomeAnnual: 138235,
    flowHistory: [323, 320, 318, 319, 323, 322],
    transactions: [
      { date: "2026-03-04", desc: "SHG Collection", amount: 4264, class: "Income", channel: "ICICI Bank" },
      { date: "2026-03-10", desc: "SHG Loan Repayment", amount: -818, class: "Liability", channel: "Axis Bank" },
      { date: "2026-03-24", desc: "Ration Shop", amount: -392, class: "Food", channel: "Paytm" }
    ],
    investments: [
      { name: "Mutual Fund SIP", type: "MF", value: 98896, taxClass: "LTCG" },
      { name: "Gold", type: "Gold", value: 13195, taxClass: "Exempt" }
    ],
    taxRecords: [
      { source: "SHG Income", type: "Income", amount: 138235, verified: true, fy: "2025-26" }
    ]
  },
  {
    fullName: "Siya Nair",
    pan: "OIHWR0555Z",
    aadhaar: "656600409173",
    email: "siya.nair@ftid.in",
    creditScore: 563,
    incomeAnnual: 577282,
    flowHistory: [524, 529, 539, 545, 559, 563],
    transactions: [
      { date: "2026-03-06", desc: "Client Payment", amount: 30181, class: "Income", channel: "HDFC Bank" },
      { date: "2026-03-17", desc: "Adobe Creative Cloud", amount: -3700, class: "Software", channel: "ICICI Bank" },
      { date: "2026-03-26", desc: "Rent Payment", amount: -26953, class: "Housing", channel: "ICICI Bank" }
    ],
    investments: [
      { name: "Mutual Fund SIP", type: "MF", value: 903881, taxClass: "LTCG" },
      { name: "Equity Stocks", type: "Stock", value: 45022, taxClass: "LTCG" }
    ],
    taxRecords: [
      { source: "Freelance Income", type: "Income", amount: 577282, verified: true, fy: "2025-26" }
    ]
  },
  {
    fullName: "Ramesh Malhotra",
    pan: "ZPYYZ2723K",
    aadhaar: "763530455618",
    email: "ramesh.m@ftid.in",
    creditScore: 536,
    incomeAnnual: 986555,
    flowHistory: [536, 539, 534, 533, 538, 536],
    transactions: [
      { date: "2026-03-01", desc: "Rent Payment", amount: -19017, class: "Housing", channel: "ICICI Bank" },
      { date: "2026-03-06", desc: "Business Receipt", amount: 58708, class: "Income", channel: "ICICI Bank" },
      { date: "2026-03-13", desc: "Stock Purchase", amount: -39474, class: "Business", channel: "ICICI Bank" }
    ],
    investments: [
      { name: "Fixed Deposit", type: "FD", value: 340254, taxClass: "Debt" },
      { name: "Equity Stocks", type: "Stock", value: 791149, taxClass: "LTCG" }
    ],
    taxRecords: [
      { source: "Business Revenue", type: "Income", amount: 986555, verified: true, fy: "2025-26" }
    ]
  },
  {
    fullName: "Venkataramaiah Goud",
    pan: "QDQLD9872Q",
    aadhaar: "824964696326",
    email: "venkat.goud@ftid.in",
    creditScore: 359,
    incomeAnnual: 216270,
    flowHistory: [308, 316, 321, 332, 345, 359],
    transactions: [
      { date: "2026-03-01", desc: "Mandi Credit", amount: 40266, class: "Income", channel: "Bank of Baroda" },
      { date: "2026-03-09", desc: "Fertilizer Purchase", amount: -9178, class: "Business", channel: "UPI" },
      { date: "2026-03-13", desc: "PM-KISAN Credit", amount: 2000, class: "Income", channel: "SBI" }
    ],
    investments: [
      { name: "Mutual Fund SIP", type: "MF", value: 123398, taxClass: "LTCG" },
      { name: "Gold", type: "Gold", value: 55837, taxClass: "Exempt" }
    ],
    taxRecords: [
      { source: "Agriculture Income", type: "Income", amount: 216270, verified: true, fy: "2025-26" }
    ]
  }
  // ... more personas can be added here following the same pattern
];

export const getPersonaByKeys = (pan: string, aadhaar: string): SeedPersona | null => {
  const panInput = pan.toUpperCase().trim();
  const aadhaarInput = aadhaar.replace(/[-\s]/g, '').trim();
  
  return sovereignRegistry.find(p => 
    p.pan.toUpperCase() === panInput || 
    p.aadhaar === aadhaarInput
  ) || null;
};
