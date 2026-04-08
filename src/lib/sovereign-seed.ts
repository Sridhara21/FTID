
/**
 * @fileOverview Sovereign Seed Registry for Prototype Personas.
 * This file contains the master list of persona data points provided by the user.
 */

export interface SeedPersona {
  fullName: string;
  pan: string;
  aadhaar: string;
  email: string;
  persona: string;
  tier: string;
  creditScore: number;
  incomeAnnual: number;
  flowHistory: number[];
  transactions: any[];
  investments: any[];
  bankAccounts: any[];
  spendingBreakdown?: Record<string, number>;
  liabilities?: any[];
  welfare?: any[];
}

export const sovereignRegistry: SeedPersona[] = [
  {
    fullName: "Ananya Iyer",
    pan: "PNGND1694Z",
    aadhaar: "419679142020",
    email: "ananya.iyer@ftid.in",
    persona: "Salaried IT Professional",
    tier: "Tier1",
    creditScore: 539,
    incomeAnnual: 1759794,
    flowHistory: [589, 580, 567, 556, 552, 539],
    bankAccounts: [{ bank: "ICICI Bank", balance: 238484 }],
    transactions: [
      { date: "2026-03-01", desc: "Zepto", amount: -502, class: "Food", channel: "Paytm" },
      { date: "2026-03-02", desc: "Rent Payment", amount: -20425, class: "Housing", channel: "UPI" },
      { date: "2026-03-06", desc: "Amazon Purchase", amount: -15956, class: "Shopping", channel: "Kotak Bank" }
    ],
    investments: [
      { name: "Mutual Fund SIP", type: "MF", value: 1290189, taxClass: "LTCG" },
      { name: "Equity Stocks", type: "Stock", value: 1574073, taxClass: "LTCG" },
      { name: "Gold", type: "Gold", value: 873422, taxClass: "Exempt" }
    ]
  },
  {
    fullName: "Prithviraj Chauhan",
    pan: "HPGBT9246V",
    aadhaar: "403393833964",
    email: "prithviraj.c@ftid.in",
    persona: "Sales Executive",
    tier: "Tier2",
    creditScore: 528,
    incomeAnnual: 673738,
    flowHistory: [535, 532, 527, 528, 526, 528],
    bankAccounts: [{ bank: "ICICI Bank", balance: 33813 }],
    transactions: [
      { date: "2026-03-01", desc: "Mobile Recharge", amount: -310, class: "Utilities", channel: "PhonePe" },
      { date: "2026-03-11", desc: "Rent Payment", amount: -8906, class: "Housing", channel: "UPI" },
      { date: "2026-03-19", desc: "Salary Credit", amount: 30511, class: "Income", channel: "ICICI Bank" }
    ],
    investments: [
      { name: "Mutual Fund SIP", type: "MF", value: 295405, taxClass: "LTCG" },
      { name: "Gold", type: "Gold", value: 326112, taxClass: "Exempt" }
    ]
  },
  {
    fullName: "Savitri Devi Kumari",
    pan: "CPLDH2769D",
    aadhaar: "390892054116",
    email: "savitri.devi@ftid.in",
    persona: "Self Help Group Member",
    tier: "Tier3_Rural",
    creditScore: 322,
    incomeAnnual: 138235,
    flowHistory: [323, 320, 318, 319, 323, 322],
    bankAccounts: [{ bank: "SBI", balance: 2244 }],
    transactions: [
      { date: "2026-03-04", desc: "SHG Collection", amount: 4264, class: "Income", channel: "ICICI Bank" },
      { date: "2026-03-24", desc: "Ration Shop", amount: -392, class: "Food", channel: "Paytm" }
    ],
    investments: [{ name: "Gold", type: "Gold", value: 13195, taxClass: "Exempt" }],
    welfare: [{ scheme: "PM-KISAN", annual_amount: 6000, status: "Active" }]
  },
  {
    fullName: "Siya Nair",
    pan: "OIHWR0555Z",
    aadhaar: "656600409173",
    email: "siya.nair@ftid.in",
    persona: "Freelance Designer",
    tier: "Tier1",
    creditScore: 563,
    incomeAnnual: 577282,
    flowHistory: [524, 529, 539, 545, 559, 563],
    bankAccounts: [{ bank: "Kotak Bank", balance: 252646 }],
    transactions: [
      { date: "2026-03-06", desc: "Client Payment", amount: 30181, class: "Income", channel: "HDFC Bank" },
      { date: "2026-03-17", desc: "Adobe Creative Cloud", amount: -3700, class: "Software", channel: "ICICI Bank" }
    ],
    investments: [{ name: "Mutual Fund SIP", type: "MF", value: 903881, taxClass: "LTCG" }]
  },
  {
    fullName: "Ramesh Malhotra",
    pan: "ZPYYZ2723K",
    aadhaar: "763530455618",
    email: "ramesh.m@ftid.in",
    persona: "Small Business Owner",
    tier: "Tier2",
    creditScore: 536,
    incomeAnnual: 986555,
    flowHistory: [536, 539, 534, 533, 538, 536],
    bankAccounts: [{ bank: "Axis Bank", balance: 315917 }],
    transactions: [
      { date: "2026-03-06", desc: "Business Receipt", amount: 58708, class: "Income", channel: "ICICI Bank" },
      { date: "2026-03-13", desc: "Stock Purchase", amount: -39474, class: "Business", channel: "ICICI Bank" }
    ],
    investments: [{ name: "Fixed Deposit", type: "FD", value: 340254, taxClass: "Debt" }]
  },
  {
    fullName: "Venkataramaiah Goud",
    pan: "QDQLD9872Q",
    aadhaar: "824964696326",
    email: "venkat.goud@ftid.in",
    persona: "Farmer",
    tier: "Tier3_Rural",
    creditScore: 359,
    incomeAnnual: 216270,
    flowHistory: [308, 316, 321, 332, 345, 359],
    bankAccounts: [{ bank: "Bank of Baroda", balance: 12241 }],
    transactions: [
      { date: "2026-03-01", desc: "Mandi Credit", amount: 40266, class: "Income", channel: "Bank of Baroda" },
      { date: "2026-03-09", desc: "Fertilizer Purchase", amount: -9178, class: "Business", channel: "UPI" }
    ],
    investments: [{ name: "Gold", type: "Gold", value: 55837, taxClass: "Exempt" }],
    welfare: [{ scheme: "PM-KISAN", annual_amount: 6000, status: "Active" }]
  },
  {
    fullName: "Raju Kumar Sahu",
    pan: "SAALG3572S",
    aadhaar: "682830706083",
    email: "raju.sahu@ftid.in",
    persona: "Auto Driver",
    tier: "Tier3_Rural",
    creditScore: 374,
    incomeAnnual: 230113,
    flowHistory: [408, 402, 395, 391, 378, 374],
    bankAccounts: [{ bank: "Axis Bank", balance: 7154 }],
    transactions: [
      { date: "2026-03-01", desc: "Fare Credit - Uber", amount: 7646, class: "Income", channel: "SBI" },
      { date: "2026-03-28", desc: "Insurance Premium", amount: -999, class: "Insurance", channel: "Paytm" }
    ],
    investments: [{ name: "Gold", type: "Gold", value: 16300, taxClass: "Exempt" }]
  },
  {
    fullName: "Usha Srivastava",
    pan: "MTGSV0528H",
    aadhaar: "405107368262",
    email: "usha.s@ftid.in",
    persona: "School Teacher",
    tier: "Tier2",
    creditScore: 707,
    incomeAnnual: 504130,
    flowHistory: [673, 679, 683, 688, 702, 707],
    bankAccounts: [{ bank: "SBI", balance: 87377 }],
    transactions: [
      { date: "2026-03-07", desc: "Salary Credit", amount: 25964, class: "Income", channel: "PNB" },
      { date: "2026-03-19", desc: "Rent Payment", amount: -15898, class: "Housing", channel: "Google Pay" }
    ],
    investments: [{ name: "NPS", type: "NPS", value: 61202, taxClass: "Exempt" }]
  },
  {
    fullName: "Anil Mishra",
    pan: "YZRPV5598V",
    aadhaar: "564742052996",
    email: "anil.m@ftid.in",
    persona: "Sales Executive",
    tier: "Tier2",
    creditScore: 574,
    incomeAnnual: 405270,
    flowHistory: [534, 538, 551, 559, 570, 574],
    bankAccounts: [{ bank: "Kotak Bank", balance: 67378 }],
    transactions: [
      { date: "2026-03-26", desc: "Salary Credit", amount: 41883, class: "Income", channel: "ICICI Bank" },
      { date: "2026-03-12", desc: "Rent Payment", amount: -15858, class: "Housing", channel: "PhonePe" }
    ],
    investments: [{ name: "Gold", type: "Gold", value: 116380, taxClass: "Exempt" }]
  },
  {
    fullName: "Priya Ramachandran",
    pan: "PGWKH8991G",
    aadhaar: "877381229877",
    email: "priya.r@ftid.in",
    persona: "Salaried IT Professional",
    tier: "Tier1",
    creditScore: 800,
    incomeAnnual: 1517778,
    flowHistory: [802, 799, 800, 799, 795, 800],
    bankAccounts: [{ bank: "HDFC Bank", balance: 273891 }],
    transactions: [
      { date: "2026-03-14", desc: "Rent Payment", amount: -47784, class: "Housing", channel: "UPI" },
      { date: "2026-03-01", desc: "SIP Debit", amount: -54542, class: "Investment", channel: "HDFC Bank" }
    ],
    investments: [{ name: "Mutual Fund SIP", type: "MF", value: 2004335, taxClass: "LTCG" }]
  },
  {
    fullName: "Vikas Bhat",
    pan: "SEHMW8576X",
    aadhaar: "611425015377",
    email: "vikas.b@ftid.in",
    persona: "Sales Executive",
    tier: "Tier2",
    creditScore: 625,
    incomeAnnual: 517231,
    flowHistory: [625, 623, 620, 623, 622, 625],
    bankAccounts: [{ bank: "Axis Bank", balance: 62050 }],
    transactions: [
      { date: "2026-03-03", desc: "Incentive Credit", amount: 10329, class: "Income", channel: "ICICI Bank" },
      { date: "2026-03-23", desc: "Insurance Premium", amount: -4278, class: "Insurance", channel: "ICICI Bank" }
    ],
    investments: [{ name: "Equity Stocks", type: "Stock", value: 317316, taxClass: "LTCG" }]
  },
  {
    fullName: "Sudhir Naik",
    pan: "IPVAD5980F",
    aadhaar: "315630676378",
    email: "sudhir.n@ftid.in",
    persona: "Sales Executive",
    tier: "Tier2",
    creditScore: 497,
    incomeAnnual: 335579,
    flowHistory: [517, 512, 508, 505, 502, 497],
    bankAccounts: [{ bank: "ICICI Bank", balance: 61168 }],
    transactions: [
      { date: "2026-03-01", desc: "Incentive Credit", amount: 10073, class: "Income", channel: "ICICI Bank" },
      { date: "2026-03-24", desc: "Insurance Premium", amount: -2943, class: "Insurance", channel: "Paytm" }
    ],
    investments: [{ name: "Mutual Fund SIP", type: "MF", value: 488113, taxClass: "LTCG" }]
  },
  {
    fullName: "Nitin Joshi",
    pan: "MWOCP5245R",
    aadhaar: "256444374528",
    email: "nitin.j@ftid.in",
    persona: "Sales Executive",
    tier: "Tier2",
    creditScore: 605,
    incomeAnnual: 387854,
    flowHistory: [612, 606, 613, 622, 616, 605],
    bankAccounts: [{ bank: "Axis Bank", balance: 88435 }],
    transactions: [
      { date: "2026-03-20", desc: "Salary Credit", amount: 32024, class: "Income", channel: "ICICI Bank" },
      { date: "2026-03-02", desc: "Rent Payment", amount: -8172, class: "Housing", channel: "ICICI Bank" }
    ],
    investments: [{ name: "Gold", type: "Gold", value: 145311, taxClass: "Exempt" }]
  },
  {
    fullName: "Ramakrishna Das",
    pan: "SVDCT6187T",
    aadhaar: "430361114970",
    email: "ram.das@ftid.in",
    persona: "Auto Driver",
    tier: "Tier3_Rural",
    creditScore: 344,
    incomeAnnual: 273693,
    flowHistory: [394, 380, 368, 363, 349, 344],
    bankAccounts: [{ bank: "Bank of Baroda", balance: 15037 }],
    transactions: [
      { date: "2026-03-01", desc: "Fare Credit - Uber", amount: 10227, class: "Income", channel: "Axis Bank" },
      { date: "2026-03-06", desc: "Rent Payment", amount: -5734, class: "Housing", channel: "PhonePe" }
    ],
    investments: [{ name: "Equity Stocks", type: "Stock", value: 170632, taxClass: "LTCG" }]
  },
  {
    fullName: "Kanchana Devi",
    pan: "EWJBK1424A",
    aadhaar: "881848325324",
    email: "kanchana.d@ftid.in",
    persona: "Self Help Group Member",
    tier: "Tier3_Rural",
    creditScore: 412,
    incomeAnnual: 82766,
    flowHistory: [377, 383, 385, 394, 403, 412],
    bankAccounts: [{ bank: "SBI", balance: 18619 }],
    transactions: [
      { date: "2026-03-05", desc: "SHG Collection", amount: 2194, class: "Income", channel: "Axis Bank" },
      { date: "2026-03-04", desc: "Rent Payment", amount: -1529, class: "Housing", channel: "PhonePe" }
    ],
    investments: [{ name: "Gold", type: "Gold", value: 46329, taxClass: "Exempt" }]
  },
  {
    fullName: "Rehan Ali",
    pan: "RCWXH9109R",
    aadhaar: "696694218888",
    email: "rehan.ali@ftid.in",
    persona: "Freelance Designer",
    tier: "Tier1",
    creditScore: 578,
    incomeAnnual: 618381,
    flowHistory: [580, 568, 572, 567, 578, 578],
    bankAccounts: [{ bank: "Axis Bank", balance: 100455 }],
    transactions: [
      { date: "2026-03-07", desc: "Client Payment", amount: 53942, class: "Income", channel: "ICICI Bank" },
      { date: "2026-03-03", desc: "Rent Payment", amount: -37632, class: "Housing", channel: "UPI" }
    ],
    investments: [{ name: "Mutual Fund SIP", type: "MF", value: 475646, taxClass: "LTCG" }]
  },
  {
    fullName: "Manjula Rao",
    pan: "CWNYS1216A",
    aadhaar: "575242550217",
    email: "manjula.r@ftid.in",
    persona: "School Teacher",
    tier: "Tier2",
    creditScore: 588,
    income_annual: 445279,
    flowHistory: [638, 631, 626, 613, 599, 588],
    bankAccounts: [{ bank: "PNB", balance: 112243 }],
    transactions: [
      { date: "2026-03-02", desc: "Tuition Income", amount: 11513, class: "Income", channel: "UPI" },
      { date: "2026-03-22", desc: "Rent Payment", amount: -14142, class: "Housing", channel: "UPI" }
    ],
    investments: [{ name: "Equity Stocks", type: "Stock", value: 300595, taxClass: "LTCG" }]
  },
  {
    fullName: "Anita Kumari Jha",
    pan: "COEMV9320A",
    aadhaar: "302271992838",
    email: "anita.j@ftid.in",
    persona: "School Teacher",
    tier: "Tier2",
    creditScore: 600,
    incomeAnnual: 491168,
    flowHistory: [553, 558, 571, 585, 596, 600],
    bankAccounts: [{ bank: "SBI", balance: 33956 }],
    transactions: [
      { date: "2026-03-08", desc: "Salary Credit", amount: 29867, class: "Income", channel: "Kotak Bank" },
      { date: "2026-03-08", desc: "School Fee Payment", amount: -7388, class: "Education", channel: "PhonePe" }
    ],
    investments: [{ name: "Gold", type: "Gold", value: 267120, taxClass: "Exempt" }]
  },
  {
    fullName: "Bharat Rana",
    pan: "KGFCF2899Q",
    aadhaar: "725856894957",
    email: "bharat.r@ftid.in",
    persona: "Small Business Owner",
    tier: "Tier2",
    creditScore: 670,
    incomeAnnual: 751451,
    flowHistory: [656, 660, 664, 670, 674, 670],
    bankAccounts: [{ bank: "HDFC Bank", balance: 162088 }],
    transactions: [
      { date: "2026-03-01", desc: "Business Receipt", amount: 41110, class: "Income", channel: "ICICI Bank" },
      { date: "2026-03-05", desc: "Rent Payment", amount: -10956, class: "Housing", channel: "UPI" }
    ],
    investments: [{ name: "Equity Stocks", type: "Stock", value: 595820, taxClass: "LTCG" }]
  },
  {
    fullName: "Rukminibai Gaikwad",
    pan: "TVCNO3995I",
    aadhaar: "941239166514",
    email: "rukmini.g@ftid.in",
    persona: "Self Help Group Member",
    tier: "Tier3_Rural",
    creditScore: 212,
    incomeAnnual: 164526,
    flowHistory: [254, 246, 237, 223, 216, 212],
    bankAccounts: [{ bank: "SBI", balance: 3217 }],
    transactions: [
      { date: "2026-03-03", desc: "Handicraft Sale", amount: 4199, class: "Income", channel: "UPI" },
      { date: "2026-03-21", desc: "Rent Payment", amount: -2064, class: "Housing", channel: "PhonePe" }
    ],
    investments: [{ name: "Mutual Fund SIP", type: "MF", value: 223502, taxClass: "LTCG" }]
  },
  {
    fullName: "Santosh Paswan",
    pan: "IZYTB2625A",
    aadhaar: "444839204198",
    email: "santosh.p@ftid.in",
    persona: "Auto Driver",
    tier: "Tier3_Rural",
    creditScore: 410,
    incomeAnnual: 213300,
    flowHistory: [378, 385, 391, 398, 406, 410],
    bankAccounts: [{ bank: "SBI", balance: 16751 }],
    transactions: [
      { date: "2026-03-06", desc: "Fare Credit - Ola", amount: 6975, class: "Income", channel: "Kotak Bank" },
      { date: "2026-03-11", desc: "Rent Payment", amount: -3990, class: "Housing", channel: "Google Pay" }
    ],
    investments: [{ name: "Mutual Fund SIP", type: "MF", value: 361412, taxClass: "LTCG" }]
  },
  {
    fullName: "Divya Menon",
    pan: "SEMWM4819F",
    aadhaar: "656609084591",
    email: "divya.m@ftid.in",
    persona: "Salaried IT Professional",
    tier: "Tier1",
    creditScore: 795,
    income_annual: 2616396,
    flowHistory: [788, 794, 795, 792, 793, 795],
    bankAccounts: [{ bank: "Axis Bank", balance: 507753 }],
    transactions: [
      { date: "2026-03-02", desc: "Salary Credit", amount: 56002, class: "Income", channel: "HDFC Bank" },
      { date: "2026-03-09", desc: "Rent Payment", amount: -21754, class: "Housing", channel: "ICICI Bank" }
    ],
    investments: [{ name: "Equity Stocks", type: "Stock", value: 2176159, taxClass: "LTCG" }]
  },
  {
    fullName: "Laxmibai Patil",
    pan: "DUWPD8582E",
    aadhaar: "890864186586",
    email: "laxmi.p@ftid.in",
    persona: "Self Help Group Member",
    tier: "Tier3_Rural",
    creditScore: 376,
    incomeAnnual: 121636,
    flowHistory: [424, 414, 408, 399, 387, 376],
    bankAccounts: [{ bank: "SBI", balance: 14075 }],
    transactions: [
      { date: "2026-03-11", desc: "SHG Collection", amount: 2426, class: "Income", channel: "Axis Bank" },
      { date: "2026-03-21", desc: "Rent Payment", amount: -1548, class: "Housing", channel: "UPI" }
    ],
    investments: [{ name: "Equity Stocks", type: "Stock", value: 104529, taxClass: "LTCG" }]
  },
  {
    fullName: "Aruna Desai",
    pan: "ZAVEO1106T",
    aadhaar: "390908056298",
    email: "aruna.d@ftid.in",
    persona: "School Teacher",
    tier: "Tier2",
    creditScore: 686,
    incomeAnnual: 612190,
    flowHistory: [666, 670, 673, 677, 680, 686],
    bankAccounts: [{ bank: "Kotak Bank", balance: 116803 }],
    transactions: [
      { date: "2026-03-12", desc: "Tuition Income", amount: 11807, class: "Income", channel: "Google Pay" },
      { date: "2026-03-08", desc: "Rent Payment", amount: -12326, class: "Housing", channel: "UPI" }
    ],
    investments: [{ name: "Mutual Fund SIP", type: "MF", value: 669733, taxClass: "LTCG" }]
  }
];

export const getPersonaByKeys = (pan: string, aadhaar: string): SeedPersona | null => {
  const panInput = pan?.toUpperCase().trim();
  const aadhaarInput = aadhaar?.replace(/[-\s]/g, '').trim();
  
  return sovereignRegistry.find(p => 
    (panInput && p.pan.toUpperCase() === panInput) || 
    (aadhaarInput && p.aadhaar === aadhaarInput)
  ) || null;
};
