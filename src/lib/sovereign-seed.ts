/**
 * @fileOverview Sovereign Seed Registry for Prototype Personas.
 * This file contains the master list of persona data points.
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
  flowHistory: any[];
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
    transactions: [
      { desc: "Zepto", amount: -502, class: "Food", channel: "Paytm" },
      { desc: "Rent Payment", amount: -20425, class: "Housing", channel: "UPI" },
      { desc: "Amazon Purchase", amount: -15956, class: "Shopping", channel: "Kotak Bank" },
      { desc: "SIP Debit", amount: -33007, class: "Investment", channel: "ICICI Bank" },
      { desc: "Salary Credit", amount: 146649, class: "Income", channel: "ICICI Bank" }
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
    transactions: [
      { desc: "Salary Credit", amount: 30511, class: "Income", channel: "ICICI Bank" },
      { desc: "Petrol Pump", amount: -2477, class: "Transport", channel: "Paytm" },
      { desc: "Rent Payment", amount: -8906, class: "Housing", channel: "UPI" },
      { desc: "Amazon Purchase", amount: -10806, class: "Shopping", channel: "Kotak Bank" }
    ],
    investments: [
      { name: "Mutual Fund SIP", type: "MF", value: 295405, taxClass: "LTCG" },
      { name: "Equity Stocks", type: "Stock", value: 282420, taxClass: "LTCG" },
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
      { desc: "SHG Collection", amount: 4264, class: "Income", channel: "ICICI Bank" },
      { desc: "Ration Shop", amount: -392, class: "Food", channel: "Paytm" },
      { desc: "SHG Loan Repayment", amount: -818, class: "Liability", channel: "Axis Bank" }
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
      { desc: "Client Payment", amount: 30181, class: "Income", channel: "HDFC Bank" },
      { desc: "Rent Payment", amount: -26953, class: "Housing", channel: "ICICI Bank" },
      { desc: "Adobe Creative Cloud", amount: -3700, class: "Software", channel: "ICICI Bank" }
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
      { desc: "Business Receipt", amount: 58708, class: "Income", channel: "ICICI Bank" },
      { desc: "Staff Salary", amount: -14471, class: "Business", channel: "HDFC Bank" },
      { desc: "Stock Purchase", amount: -39474, class: "Business", channel: "ICICI Bank" }
    ],
    investments: [
      { name: "Fixed Deposit", type: "FD", value: 340254, taxClass: "STCG" },
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
      { desc: "Mandi Credit", amount: 40266, class: "Income", channel: "Bank of Baroda" },
      { desc: "Fertilizer Purchase", amount: -9178, class: "Business", channel: "UPI" },
      { desc: "PM-KISAN Credit", amount: 2000, class: "Income", channel: "SBI" }
    ],
    investments: [
      { name: "Mutual Fund SIP", type: "MF", value: 123398, taxClass: "LTCG" },
      { name: "Gold", type: "Gold", value: 55837, taxClass: "Exempt" }
    ],
    taxRecords: [
      { source: "Agriculture Income", type: "Income", amount: 216270, verified: true, fy: "2025-26" }
    ]
  }
];

export const getPersonaByKeys = (pan: string, aadhaar: string): SeedPersona | null => {
  return sovereignRegistry.find(p => 
    p.pan.toUpperCase() === pan.toUpperCase() || 
    p.aadhaar === aadhaar
  ) || null;
};
