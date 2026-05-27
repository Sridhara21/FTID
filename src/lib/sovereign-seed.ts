
/**
 * @fileOverview Sovereign Seed Registry for Prototype Personas.
 * This file contains the master list of exactly 100 personas for the FTID prototype.
 */

export interface SeedPersona {
  fullName: string;
  pan: string;
  aadhaar: string;
  phoneNumber: string;
  persona: string;
  tier: 'Tier1' | 'Tier2' | 'Tier3_Rural';
  creditScore: number;
  incomeAnnual: number;
  flowHistory: number[];
  transactions: any[];
  investments: any[];
  spendingBreakdown: Record<string, number>;
}

export const sovereignRegistry: SeedPersona[] = [
  {
    "fullName": "Ananya Iyer",
    "pan": "PNGND1694Z",
    "aadhaar": "419679142020",
    "phoneNumber": "9876543210",
    "persona": "Salaried IT Prof.",
    "tier": "Tier1",
    "creditScore": 785,
    "incomeAnnual": 1750000,
    "flowHistory": [
      760,
      770,
      775,
      785
    ],
    "spendingBreakdown": {
      "food": 8000,
      "housing": 25000,
      "shopping": 15000,
      "utilities": 5000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 500000
      },
      {
        "name": "Mutual Funds",
        "value": 300000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 145000,
        "classification": "Income",
        "originInstitution": "HCL Tech",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Rent Payment",
        "amount": -25000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Owner Node"
      }
    ]
  },
  {
    "fullName": "Prithviraj Chauhan",
    "pan": "HPGBT9246V",
    "aadhaar": "403393833964",
    "phoneNumber": "9876543211",
    "persona": "Sales Executive",
    "tier": "Tier2",
    "creditScore": 640,
    "incomeAnnual": 850000,
    "flowHistory": [
      620,
      630,
      635,
      640
    ],
    "spendingBreakdown": {
      "food": 12000,
      "transport": 15000,
      "housing": 15000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 100000
      }
    ],
    "transactions": [
      {
        "description": "Fuel Expense",
        "amount": -2000,
        "classification": "Transport",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "BPCL"
      }
    ]
  },
  {
    "fullName": "Savitri Devi Kumari",
    "pan": "CPLDH2769D",
    "aadhaar": "390892054116",
    "phoneNumber": "9876543212",
    "persona": "SHG Member",
    "tier": "Tier3_Rural",
    "creditScore": 450,
    "incomeAnnual": 180000,
    "flowHistory": [
      440,
      445,
      448,
      450
    ],
    "spendingBreakdown": {
      "food": 4000,
      "education": 2000
    },
    "investments": [],
    "transactions": [
      {
        "description": "SHG Grant",
        "amount": 5000,
        "classification": "Income",
        "originInstitution": "Welfare Dept",
        "destinationInstitution": "FTID Wallet"
      }
    ]
  },
  {
    "fullName": "Venkataramaiah Goud",
    "pan": "ABCDE1040F",
    "aadhaar": "999900001040",
    "phoneNumber": "9810000000",
    "persona": "Farmer",
    "tier": "Tier1",
    "creditScore": 400,
    "incomeAnnual": 1800000,
    "flowHistory": [
      385,
      392,
      398,
      400
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 400000
      },
      {
        "name": "Mutual Funds",
        "value": 250000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 120000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Raju Kumar Sahu",
    "pan": "ABCDE1041F",
    "aadhaar": "999900001041",
    "phoneNumber": "9910078423",
    "persona": "Auto Driver",
    "tier": "Tier2",
    "creditScore": 405,
    "incomeAnnual": 855000,
    "flowHistory": [
      390,
      397,
      403,
      405
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 152000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 65500,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Usha Srivastava",
    "pan": "ABCDE1042F",
    "aadhaar": "999900001042",
    "phoneNumber": "8810156846",
    "persona": "Teacher",
    "tier": "Tier3_Rural",
    "creditScore": 410,
    "incomeAnnual": 254000,
    "flowHistory": [
      395,
      402,
      408,
      410
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 8200,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Anil Mishra",
    "pan": "ABCDE1043F",
    "aadhaar": "999900001043",
    "phoneNumber": "7710235269",
    "persona": "Logistics Lead",
    "tier": "Tier1",
    "creditScore": 415,
    "incomeAnnual": 1845000,
    "flowHistory": [
      400,
      407,
      413,
      415
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 415000
      },
      {
        "name": "Mutual Funds",
        "value": 253000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 123000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Priya Ramachandran",
    "pan": "ABCDE1044F",
    "aadhaar": "999900001044",
    "phoneNumber": "9110313692",
    "persona": "Healthcare Worker",
    "tier": "Tier2",
    "creditScore": 420,
    "incomeAnnual": 870000,
    "flowHistory": [
      405,
      412,
      418,
      420
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 158000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 67000,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Vikas Bhat",
    "pan": "ABCDE1045F",
    "aadhaar": "999900001045",
    "phoneNumber": "9810392115",
    "persona": "Rural Artisan",
    "tier": "Tier3_Rural",
    "creditScore": 425,
    "incomeAnnual": 260000,
    "flowHistory": [
      410,
      417,
      423,
      425
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 8500,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Sudhir Naik",
    "pan": "ABCDE1046F",
    "aadhaar": "999900001046",
    "phoneNumber": "9910470538",
    "persona": "Urban Tech Lead",
    "tier": "Tier1",
    "creditScore": 430,
    "incomeAnnual": 1890000,
    "flowHistory": [
      415,
      422,
      428,
      430
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 430000
      },
      {
        "name": "Mutual Funds",
        "value": 256000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 126000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Nitin Joshi",
    "pan": "ABCDE1047F",
    "aadhaar": "999900001047",
    "phoneNumber": "8810548961",
    "persona": "Gig Economy Partner",
    "tier": "Tier2",
    "creditScore": 435,
    "incomeAnnual": 885000,
    "flowHistory": [
      420,
      427,
      433,
      435
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 164000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 68500,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Ramakrishna Das",
    "pan": "ABCDE1048F",
    "aadhaar": "999900001048",
    "phoneNumber": "7710627384",
    "persona": "Farmer",
    "tier": "Tier3_Rural",
    "creditScore": 440,
    "incomeAnnual": 266000,
    "flowHistory": [
      425,
      432,
      438,
      440
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 8800,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Kanchana Devi",
    "pan": "ABCDE1049F",
    "aadhaar": "999900001049",
    "phoneNumber": "9110705807",
    "persona": "Auto Driver",
    "tier": "Tier1",
    "creditScore": 445,
    "incomeAnnual": 1935000,
    "flowHistory": [
      430,
      437,
      443,
      445
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 445000
      },
      {
        "name": "Mutual Funds",
        "value": 259000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 129000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Rehan Ali",
    "pan": "ABCDE1050F",
    "aadhaar": "999900001050",
    "phoneNumber": "9810784230",
    "persona": "Teacher",
    "tier": "Tier2",
    "creditScore": 450,
    "incomeAnnual": 900000,
    "flowHistory": [
      435,
      442,
      448,
      450
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 170000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 70000,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Manjula Rao",
    "pan": "ABCDE1051F",
    "aadhaar": "999900001051",
    "phoneNumber": "9910862653",
    "persona": "Logistics Lead",
    "tier": "Tier3_Rural",
    "creditScore": 455,
    "incomeAnnual": 272000,
    "flowHistory": [
      440,
      447,
      453,
      455
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 9100,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Anita Kumari Jha",
    "pan": "ABCDE1052F",
    "aadhaar": "999900001052",
    "phoneNumber": "8810941076",
    "persona": "Healthcare Worker",
    "tier": "Tier1",
    "creditScore": 460,
    "incomeAnnual": 1980000,
    "flowHistory": [
      445,
      452,
      458,
      460
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 460000
      },
      {
        "name": "Mutual Funds",
        "value": 262000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 132000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Bharat Rana",
    "pan": "ABCDE1053F",
    "aadhaar": "999900001053",
    "phoneNumber": "7711019499",
    "persona": "Rural Artisan",
    "tier": "Tier2",
    "creditScore": 465,
    "incomeAnnual": 915000,
    "flowHistory": [
      450,
      457,
      463,
      465
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 176000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 71500,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Rukminibai Gaikwad",
    "pan": "ABCDE1054F",
    "aadhaar": "999900001054",
    "phoneNumber": "9111097922",
    "persona": "Urban Tech Lead",
    "tier": "Tier3_Rural",
    "creditScore": 470,
    "incomeAnnual": 278000,
    "flowHistory": [
      455,
      462,
      468,
      470
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 9400,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Santosh Paswan",
    "pan": "ABCDE1055F",
    "aadhaar": "999900001055",
    "phoneNumber": "9811176345",
    "persona": "Gig Economy Partner",
    "tier": "Tier1",
    "creditScore": 475,
    "incomeAnnual": 2025000,
    "flowHistory": [
      460,
      467,
      473,
      475
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 475000
      },
      {
        "name": "Mutual Funds",
        "value": 265000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 135000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Divya Menon",
    "pan": "ABCDE1056F",
    "aadhaar": "999900001056",
    "phoneNumber": "9911254768",
    "persona": "Farmer",
    "tier": "Tier2",
    "creditScore": 480,
    "incomeAnnual": 930000,
    "flowHistory": [
      465,
      472,
      478,
      480
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 182000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 73000,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Laxmibai Patil",
    "pan": "ABCDE1057F",
    "aadhaar": "999900001057",
    "phoneNumber": "8811333191",
    "persona": "Auto Driver",
    "tier": "Tier3_Rural",
    "creditScore": 485,
    "incomeAnnual": 284000,
    "flowHistory": [
      470,
      477,
      483,
      485
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 9700,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Aruna Desai",
    "pan": "ABCDE1058F",
    "aadhaar": "999900001058",
    "phoneNumber": "7711411614",
    "persona": "Teacher",
    "tier": "Tier1",
    "creditScore": 490,
    "incomeAnnual": 2070000,
    "flowHistory": [
      475,
      482,
      488,
      490
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 490000
      },
      {
        "name": "Mutual Funds",
        "value": 268000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 138000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Bijay Nayak",
    "pan": "ABCDE1059F",
    "aadhaar": "999900001059",
    "phoneNumber": "9111490037",
    "persona": "Logistics Lead",
    "tier": "Tier2",
    "creditScore": 495,
    "incomeAnnual": 945000,
    "flowHistory": [
      480,
      487,
      493,
      495
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 188000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 74500,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Vikram Gupta",
    "pan": "ABCDE1060F",
    "aadhaar": "999900001060",
    "phoneNumber": "9811568460",
    "persona": "Healthcare Worker",
    "tier": "Tier3_Rural",
    "creditScore": 500,
    "incomeAnnual": 290000,
    "flowHistory": [
      485,
      492,
      498,
      500
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 10000,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Arjun Reddy",
    "pan": "ABCDE1061F",
    "aadhaar": "999900001061",
    "phoneNumber": "9911646883",
    "persona": "Rural Artisan",
    "tier": "Tier1",
    "creditScore": 505,
    "incomeAnnual": 2115000,
    "flowHistory": [
      490,
      497,
      503,
      505
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 505000
      },
      {
        "name": "Mutual Funds",
        "value": 271000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 141000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Sushma Singh",
    "pan": "ABCDE1062F",
    "aadhaar": "999900001062",
    "phoneNumber": "8811725306",
    "persona": "Urban Tech Lead",
    "tier": "Tier2",
    "creditScore": 510,
    "incomeAnnual": 960000,
    "flowHistory": [
      495,
      502,
      508,
      510
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 194000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 76000,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Hanumanthu Reddy",
    "pan": "ABCDE1063F",
    "aadhaar": "999900001063",
    "phoneNumber": "7711803729",
    "persona": "Gig Economy Partner",
    "tier": "Tier3_Rural",
    "creditScore": 515,
    "incomeAnnual": 296000,
    "flowHistory": [
      500,
      507,
      513,
      515
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 10300,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Bhagyalakshmi Rao",
    "pan": "ABCDE1064F",
    "aadhaar": "999900001064",
    "phoneNumber": "9111882152",
    "persona": "Farmer",
    "tier": "Tier1",
    "creditScore": 520,
    "incomeAnnual": 2160000,
    "flowHistory": [
      505,
      512,
      518,
      520
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 520000
      },
      {
        "name": "Mutual Funds",
        "value": 274000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 144000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Tanya Malhotra",
    "pan": "ABCDE1065F",
    "aadhaar": "999900001065",
    "phoneNumber": "9811960575",
    "persona": "Auto Driver",
    "tier": "Tier2",
    "creditScore": 525,
    "incomeAnnual": 975000,
    "flowHistory": [
      510,
      517,
      523,
      525
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 200000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 77500,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Prakash Yadav",
    "pan": "ABCDE1066F",
    "aadhaar": "999900001066",
    "phoneNumber": "9912038998",
    "persona": "Teacher",
    "tier": "Tier3_Rural",
    "creditScore": 530,
    "incomeAnnual": 302000,
    "flowHistory": [
      515,
      522,
      528,
      530
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 10600,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Jagdish Patel",
    "pan": "ABCDE1067F",
    "aadhaar": "999900001067",
    "phoneNumber": "8812117421",
    "persona": "Logistics Lead",
    "tier": "Tier1",
    "creditScore": 535,
    "incomeAnnual": 2205000,
    "flowHistory": [
      520,
      527,
      533,
      535
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 535000
      },
      {
        "name": "Mutual Funds",
        "value": 277000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 147000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Arjun Krishnaswamy",
    "pan": "ABCDE1068F",
    "aadhaar": "999900001068",
    "phoneNumber": "7712195844",
    "persona": "Healthcare Worker",
    "tier": "Tier2",
    "creditScore": 540,
    "incomeAnnual": 990000,
    "flowHistory": [
      525,
      532,
      538,
      540
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 206000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 79000,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Pradeep Kapoor",
    "pan": "ABCDE1069F",
    "aadhaar": "999900001069",
    "phoneNumber": "9112274267",
    "persona": "Rural Artisan",
    "tier": "Tier3_Rural",
    "creditScore": 545,
    "incomeAnnual": 308000,
    "flowHistory": [
      530,
      537,
      543,
      545
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 10900,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Rohan Malhotra",
    "pan": "ABCDE1070F",
    "aadhaar": "999900001070",
    "phoneNumber": "9812352690",
    "persona": "Urban Tech Lead",
    "tier": "Tier1",
    "creditScore": 550,
    "incomeAnnual": 2250000,
    "flowHistory": [
      535,
      542,
      548,
      550
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 550000
      },
      {
        "name": "Mutual Funds",
        "value": 280000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 150000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Siddharth Rao",
    "pan": "ABCDE1071F",
    "aadhaar": "999900001071",
    "phoneNumber": "9912431113",
    "persona": "Gig Economy Partner",
    "tier": "Tier2",
    "creditScore": 555,
    "incomeAnnual": 1005000,
    "flowHistory": [
      540,
      547,
      553,
      555
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 212000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 80500,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Deepa Nair",
    "pan": "ABCDE1072F",
    "aadhaar": "999900001072",
    "phoneNumber": "8812509536",
    "persona": "Farmer",
    "tier": "Tier3_Rural",
    "creditScore": 560,
    "incomeAnnual": 314000,
    "flowHistory": [
      545,
      552,
      558,
      560
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 11200,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Mahesh Jain",
    "pan": "ABCDE1073F",
    "aadhaar": "999900001073",
    "phoneNumber": "7712587959",
    "persona": "Auto Driver",
    "tier": "Tier1",
    "creditScore": 565,
    "incomeAnnual": 2295000,
    "flowHistory": [
      550,
      557,
      563,
      565
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 565000
      },
      {
        "name": "Mutual Funds",
        "value": 283000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 153000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Kabir Sharma",
    "pan": "ABCDE1074F",
    "aadhaar": "999900001074",
    "phoneNumber": "9112666382",
    "persona": "Teacher",
    "tier": "Tier2",
    "creditScore": 570,
    "incomeAnnual": 1020000,
    "flowHistory": [
      555,
      562,
      568,
      570
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 218000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 82000,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Karthik Subramanian",
    "pan": "ABCDE1075F",
    "aadhaar": "999900001075",
    "phoneNumber": "9812744805",
    "persona": "Logistics Lead",
    "tier": "Tier3_Rural",
    "creditScore": 575,
    "incomeAnnual": 320000,
    "flowHistory": [
      560,
      567,
      573,
      575
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 11500,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Tulsiram Sahu",
    "pan": "ABCDE1076F",
    "aadhaar": "999900001076",
    "phoneNumber": "9912823228",
    "persona": "Healthcare Worker",
    "tier": "Tier1",
    "creditScore": 580,
    "incomeAnnual": 2340000,
    "flowHistory": [
      565,
      572,
      578,
      580
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 580000
      },
      {
        "name": "Mutual Funds",
        "value": 286000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 156000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Abdul Salam Malik",
    "pan": "ABCDE1077F",
    "aadhaar": "999900001077",
    "phoneNumber": "8812901651",
    "persona": "Rural Artisan",
    "tier": "Tier2",
    "creditScore": 585,
    "incomeAnnual": 1035000,
    "flowHistory": [
      570,
      577,
      583,
      585
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 224000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 83500,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Vinod Singhal",
    "pan": "ABCDE1078F",
    "aadhaar": "999900001078",
    "phoneNumber": "7712980074",
    "persona": "Urban Tech Lead",
    "tier": "Tier3_Rural",
    "creditScore": 590,
    "incomeAnnual": 326000,
    "flowHistory": [
      575,
      582,
      588,
      590
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 11800,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Swathi Krishnan",
    "pan": "ABCDE1079F",
    "aadhaar": "999900001079",
    "phoneNumber": "9113058497",
    "persona": "Gig Economy Partner",
    "tier": "Tier1",
    "creditScore": 595,
    "incomeAnnual": 2385000,
    "flowHistory": [
      580,
      587,
      593,
      595
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 595000
      },
      {
        "name": "Mutual Funds",
        "value": 289000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 159000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Santosh Nair",
    "pan": "ABCDE1080F",
    "aadhaar": "999900001080",
    "phoneNumber": "9813136920",
    "persona": "Farmer",
    "tier": "Tier2",
    "creditScore": 600,
    "incomeAnnual": 1050000,
    "flowHistory": [
      585,
      592,
      598,
      600
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 230000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 85000,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Meghna Pillai",
    "pan": "ABCDE1081F",
    "aadhaar": "999900001081",
    "phoneNumber": "9913215343",
    "persona": "Auto Driver",
    "tier": "Tier3_Rural",
    "creditScore": 605,
    "incomeAnnual": 332000,
    "flowHistory": [
      590,
      597,
      603,
      605
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 12100,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Phulwati Yadav",
    "pan": "ABCDE1082F",
    "aadhaar": "999900001082",
    "phoneNumber": "8813293766",
    "persona": "Teacher",
    "tier": "Tier1",
    "creditScore": 610,
    "incomeAnnual": 2430000,
    "flowHistory": [
      595,
      602,
      608,
      610
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 610000
      },
      {
        "name": "Mutual Funds",
        "value": 292000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 162000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Vimala Singh",
    "pan": "ABCDE1083F",
    "aadhaar": "999900001083",
    "phoneNumber": "7713372189",
    "persona": "Logistics Lead",
    "tier": "Tier2",
    "creditScore": 615,
    "incomeAnnual": 1065000,
    "flowHistory": [
      600,
      607,
      613,
      615
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 236000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 86500,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Hemant Soni",
    "pan": "ABCDE1084F",
    "aadhaar": "999900001084",
    "phoneNumber": "9113450612",
    "persona": "Healthcare Worker",
    "tier": "Tier3_Rural",
    "creditScore": 620,
    "incomeAnnual": 338000,
    "flowHistory": [
      605,
      612,
      618,
      620
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 12400,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Ajay Srivastava",
    "pan": "ABCDE1085F",
    "aadhaar": "999900001085",
    "phoneNumber": "9813529035",
    "persona": "Rural Artisan",
    "tier": "Tier1",
    "creditScore": 625,
    "incomeAnnual": 2475000,
    "flowHistory": [
      610,
      617,
      623,
      625
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 625000
      },
      {
        "name": "Mutual Funds",
        "value": 295000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 165000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Ravi Shankar Dubey",
    "pan": "ABCDE1086F",
    "aadhaar": "999900001086",
    "phoneNumber": "9913607458",
    "persona": "Urban Tech Lead",
    "tier": "Tier2",
    "creditScore": 630,
    "incomeAnnual": 1080000,
    "flowHistory": [
      615,
      622,
      628,
      630
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 242000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 88000,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Shilpa Verma",
    "pan": "ABCDE1087F",
    "aadhaar": "999900001087",
    "phoneNumber": "8813685881",
    "persona": "Gig Economy Partner",
    "tier": "Tier3_Rural",
    "creditScore": 635,
    "incomeAnnual": 344000,
    "flowHistory": [
      620,
      627,
      633,
      635
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 12700,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Mihir Joshi",
    "pan": "ABCDE1088F",
    "aadhaar": "999900001088",
    "phoneNumber": "7713764304",
    "persona": "Farmer",
    "tier": "Tier1",
    "creditScore": 640,
    "incomeAnnual": 2520000,
    "flowHistory": [
      625,
      632,
      638,
      640
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 640000
      },
      {
        "name": "Mutual Funds",
        "value": 298000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 168000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Navya Menon",
    "pan": "ABCDE1089F",
    "aadhaar": "999900001089",
    "phoneNumber": "9113842727",
    "persona": "Auto Driver",
    "tier": "Tier2",
    "creditScore": 645,
    "incomeAnnual": 1095000,
    "flowHistory": [
      630,
      637,
      643,
      645
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 248000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 89500,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Vivek Sinha",
    "pan": "ABCDE1090F",
    "aadhaar": "999900001090",
    "phoneNumber": "9813921150",
    "persona": "Teacher",
    "tier": "Tier3_Rural",
    "creditScore": 650,
    "incomeAnnual": 350000,
    "flowHistory": [
      635,
      642,
      648,
      650
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 13000,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Snehal Joshi",
    "pan": "ABCDE1091F",
    "aadhaar": "999900001091",
    "phoneNumber": "9913999573",
    "persona": "Logistics Lead",
    "tier": "Tier1",
    "creditScore": 655,
    "incomeAnnual": 2565000,
    "flowHistory": [
      640,
      647,
      653,
      655
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 655000
      },
      {
        "name": "Mutual Funds",
        "value": 301000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 171000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Kishore Jalan",
    "pan": "ABCDE1092F",
    "aadhaar": "999900001092",
    "phoneNumber": "8814077996",
    "persona": "Healthcare Worker",
    "tier": "Tier2",
    "creditScore": 660,
    "incomeAnnual": 1110000,
    "flowHistory": [
      645,
      652,
      658,
      660
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 254000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 91000,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Harish Sharma",
    "pan": "ABCDE1093F",
    "aadhaar": "999900001093",
    "phoneNumber": "7714156419",
    "persona": "Rural Artisan",
    "tier": "Tier3_Rural",
    "creditScore": 665,
    "incomeAnnual": 356000,
    "flowHistory": [
      650,
      657,
      663,
      665
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 13300,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Saroja Devi",
    "pan": "ABCDE1094F",
    "aadhaar": "999900001094",
    "phoneNumber": "9114234842",
    "persona": "Urban Tech Lead",
    "tier": "Tier1",
    "creditScore": 670,
    "incomeAnnual": 2610000,
    "flowHistory": [
      655,
      662,
      668,
      670
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 670000
      },
      {
        "name": "Mutual Funds",
        "value": 304000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 174000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Aarav Singh",
    "pan": "ABCDE1095F",
    "aadhaar": "999900001095",
    "phoneNumber": "9814313265",
    "persona": "Gig Economy Partner",
    "tier": "Tier2",
    "creditScore": 675,
    "incomeAnnual": 1125000,
    "flowHistory": [
      660,
      667,
      673,
      675
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 260000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 92500,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Satish Patil",
    "pan": "ABCDE1096F",
    "aadhaar": "999900001096",
    "phoneNumber": "9914391688",
    "persona": "Farmer",
    "tier": "Tier3_Rural",
    "creditScore": 680,
    "incomeAnnual": 362000,
    "flowHistory": [
      665,
      672,
      678,
      680
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 13600,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Ramchandra Lodhi",
    "pan": "ABCDE1097F",
    "aadhaar": "999900001097",
    "phoneNumber": "8814470111",
    "persona": "Auto Driver",
    "tier": "Tier1",
    "creditScore": 685,
    "incomeAnnual": 2655000,
    "flowHistory": [
      670,
      677,
      683,
      685
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 685000
      },
      {
        "name": "Mutual Funds",
        "value": 307000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 177000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Keya Ghosh",
    "pan": "ABCDE1098F",
    "aadhaar": "999900001098",
    "phoneNumber": "7714548534",
    "persona": "Teacher",
    "tier": "Tier2",
    "creditScore": 690,
    "incomeAnnual": 1140000,
    "flowHistory": [
      675,
      682,
      688,
      690
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 266000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 94000,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Dinesh Verma",
    "pan": "ABCDE1099F",
    "aadhaar": "999900001099",
    "phoneNumber": "9114626957",
    "persona": "Logistics Lead",
    "tier": "Tier3_Rural",
    "creditScore": 695,
    "incomeAnnual": 368000,
    "flowHistory": [
      680,
      687,
      693,
      695
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 13900,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Shankar Tiwari",
    "pan": "ABCDE1100F",
    "aadhaar": "999900001100",
    "phoneNumber": "9814705380",
    "persona": "Healthcare Worker",
    "tier": "Tier1",
    "creditScore": 700,
    "incomeAnnual": 2700000,
    "flowHistory": [
      685,
      692,
      698,
      700
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 700000
      },
      {
        "name": "Mutual Funds",
        "value": 310000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 180000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Shivraj Patil",
    "pan": "ABCDE1101F",
    "aadhaar": "999900001101",
    "phoneNumber": "9914783803",
    "persona": "Rural Artisan",
    "tier": "Tier2",
    "creditScore": 705,
    "incomeAnnual": 1155000,
    "flowHistory": [
      690,
      697,
      703,
      705
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 272000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 95500,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Kamala Bai Thakur",
    "pan": "ABCDE1102F",
    "aadhaar": "999900001102",
    "phoneNumber": "8814862226",
    "persona": "Urban Tech Lead",
    "tier": "Tier3_Rural",
    "creditScore": 710,
    "incomeAnnual": 374000,
    "flowHistory": [
      695,
      702,
      708,
      710
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 14200,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Bharat Singh",
    "pan": "ABCDE1103F",
    "aadhaar": "999900001103",
    "phoneNumber": "7714940649",
    "persona": "Gig Economy Partner",
    "tier": "Tier1",
    "creditScore": 715,
    "incomeAnnual": 2745000,
    "flowHistory": [
      700,
      707,
      713,
      715
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 715000
      },
      {
        "name": "Mutual Funds",
        "value": 313000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 183000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Dev Pillai",
    "pan": "ABCDE1104F",
    "aadhaar": "999900001104",
    "phoneNumber": "9115019072",
    "persona": "Farmer",
    "tier": "Tier2",
    "creditScore": 720,
    "incomeAnnual": 1170000,
    "flowHistory": [
      705,
      712,
      718,
      720
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 278000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 97000,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Annapurna Das",
    "pan": "ABCDE1105F",
    "aadhaar": "999900001105",
    "phoneNumber": "9815097495",
    "persona": "Auto Driver",
    "tier": "Tier3_Rural",
    "creditScore": 725,
    "incomeAnnual": 380000,
    "flowHistory": [
      710,
      717,
      723,
      725
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 14500,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Poornima Joshi",
    "pan": "ABCDE1106F",
    "aadhaar": "999900001106",
    "phoneNumber": "9915175918",
    "persona": "Teacher",
    "tier": "Tier1",
    "creditScore": 730,
    "incomeAnnual": 2790000,
    "flowHistory": [
      715,
      722,
      728,
      730
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 730000
      },
      {
        "name": "Mutual Funds",
        "value": 316000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 186000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Venkatesh Naidu",
    "pan": "ABCDE1107F",
    "aadhaar": "999900001107",
    "phoneNumber": "8815254341",
    "persona": "Logistics Lead",
    "tier": "Tier2",
    "creditScore": 735,
    "incomeAnnual": 1185000,
    "flowHistory": [
      720,
      727,
      733,
      735
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 284000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 98500,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Meenakshi Sundaram",
    "pan": "ABCDE1108F",
    "aadhaar": "999900001108",
    "phoneNumber": "7715332764",
    "persona": "Healthcare Worker",
    "tier": "Tier3_Rural",
    "creditScore": 740,
    "incomeAnnual": 386000,
    "flowHistory": [
      725,
      732,
      738,
      740
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 14800,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Manish Kumar",
    "pan": "ABCDE1109F",
    "aadhaar": "999900001109",
    "phoneNumber": "9115411187",
    "persona": "Rural Artisan",
    "tier": "Tier1",
    "creditScore": 745,
    "incomeAnnual": 2835000,
    "flowHistory": [
      730,
      737,
      743,
      745
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 745000
      },
      {
        "name": "Mutual Funds",
        "value": 319000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 189000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Padmaja Menon",
    "pan": "ABCDE1110F",
    "aadhaar": "999900001110",
    "phoneNumber": "9815489610",
    "persona": "Urban Tech Lead",
    "tier": "Tier2",
    "creditScore": 750,
    "incomeAnnual": 1200000,
    "flowHistory": [
      735,
      742,
      748,
      750
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 290000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 100000,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Ajay Kumar Bind",
    "pan": "ABCDE1111F",
    "aadhaar": "999900001111",
    "phoneNumber": "9915568033",
    "persona": "Gig Economy Partner",
    "tier": "Tier3_Rural",
    "creditScore": 755,
    "incomeAnnual": 392000,
    "flowHistory": [
      740,
      747,
      753,
      755
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 15100,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Narasimhaiah Reddy",
    "pan": "ABCDE1112F",
    "aadhaar": "999900001112",
    "phoneNumber": "8815646456",
    "persona": "Farmer",
    "tier": "Tier1",
    "creditScore": 760,
    "incomeAnnual": 2880000,
    "flowHistory": [
      745,
      752,
      758,
      760
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 760000
      },
      {
        "name": "Mutual Funds",
        "value": 322000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 192000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Arvind Batra",
    "pan": "ABCDE1113F",
    "aadhaar": "999900001113",
    "phoneNumber": "7715724879",
    "persona": "Auto Driver",
    "tier": "Tier2",
    "creditScore": 765,
    "incomeAnnual": 1215000,
    "flowHistory": [
      750,
      757,
      763,
      765
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 296000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 101500,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Kailash Meena",
    "pan": "ABCDE1114F",
    "aadhaar": "999900001114",
    "phoneNumber": "9115803302",
    "persona": "Teacher",
    "tier": "Tier3_Rural",
    "creditScore": 770,
    "incomeAnnual": 398000,
    "flowHistory": [
      755,
      762,
      768,
      770
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 15400,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Vasantha Lakshmi",
    "pan": "ABCDE1115F",
    "aadhaar": "999900001115",
    "phoneNumber": "9815881725",
    "persona": "Logistics Lead",
    "tier": "Tier1",
    "creditScore": 775,
    "incomeAnnual": 2925000,
    "flowHistory": [
      760,
      767,
      773,
      775
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 775000
      },
      {
        "name": "Mutual Funds",
        "value": 325000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 195000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Feroz Ahmed Khan",
    "pan": "ABCDE1116F",
    "aadhaar": "999900001116",
    "phoneNumber": "9915960148",
    "persona": "Healthcare Worker",
    "tier": "Tier2",
    "creditScore": 780,
    "incomeAnnual": 1230000,
    "flowHistory": [
      765,
      772,
      778,
      780
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 302000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 103000,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Gaurav Sen",
    "pan": "ABCDE1117F",
    "aadhaar": "999900001117",
    "phoneNumber": "8816038571",
    "persona": "Rural Artisan",
    "tier": "Tier3_Rural",
    "creditScore": 785,
    "incomeAnnual": 404000,
    "flowHistory": [
      770,
      777,
      783,
      785
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 15700,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Ishita Sharma",
    "pan": "ABCDE1118F",
    "aadhaar": "999900001118",
    "phoneNumber": "7716116994",
    "persona": "Urban Tech Lead",
    "tier": "Tier1",
    "creditScore": 790,
    "incomeAnnual": 2970000,
    "flowHistory": [
      775,
      782,
      788,
      790
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 790000
      },
      {
        "name": "Mutual Funds",
        "value": 328000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 198000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Kiran Deshmukh",
    "pan": "ABCDE1119F",
    "aadhaar": "999900001119",
    "phoneNumber": "9116195417",
    "persona": "Gig Economy Partner",
    "tier": "Tier2",
    "creditScore": 795,
    "incomeAnnual": 1245000,
    "flowHistory": [
      780,
      787,
      793,
      795
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 308000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 104500,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Maya Deshpande",
    "pan": "ABCDE1120F",
    "aadhaar": "999900001120",
    "phoneNumber": "9816273840",
    "persona": "Farmer",
    "tier": "Tier3_Rural",
    "creditScore": 800,
    "incomeAnnual": 410000,
    "flowHistory": [
      785,
      792,
      798,
      800
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 16000,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Sunil Gavaskar",
    "pan": "ABCDE1121F",
    "aadhaar": "999900001121",
    "phoneNumber": "9916352263",
    "persona": "Auto Driver",
    "tier": "Tier1",
    "creditScore": 805,
    "incomeAnnual": 3015000,
    "flowHistory": [
      790,
      797,
      803,
      805
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 805000
      },
      {
        "name": "Mutual Funds",
        "value": 331000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 201000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Kapil Dev",
    "pan": "ABCDE1122F",
    "aadhaar": "999900001122",
    "phoneNumber": "8816430686",
    "persona": "Teacher",
    "tier": "Tier2",
    "creditScore": 810,
    "incomeAnnual": 1260000,
    "flowHistory": [
      795,
      802,
      808,
      810
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 314000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 106000,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Sachin Tendulkar",
    "pan": "ABCDE1123F",
    "aadhaar": "999900001123",
    "phoneNumber": "7716509109",
    "persona": "Logistics Lead",
    "tier": "Tier3_Rural",
    "creditScore": 815,
    "incomeAnnual": 416000,
    "flowHistory": [
      800,
      807,
      813,
      815
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 16300,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Rahul Dravid",
    "pan": "ABCDE1124F",
    "aadhaar": "999900001124",
    "phoneNumber": "9116587532",
    "persona": "Healthcare Worker",
    "tier": "Tier1",
    "creditScore": 820,
    "incomeAnnual": 3060000,
    "flowHistory": [
      805,
      812,
      818,
      820
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 820000
      },
      {
        "name": "Mutual Funds",
        "value": 334000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 204000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Virat Kohli",
    "pan": "ABCDE1125F",
    "aadhaar": "999900001125",
    "phoneNumber": "9816665955",
    "persona": "Rural Artisan",
    "tier": "Tier2",
    "creditScore": 825,
    "incomeAnnual": 1275000,
    "flowHistory": [
      810,
      817,
      823,
      825
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 320000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 107500,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Rohit Sharma",
    "pan": "ABCDE1126F",
    "aadhaar": "999900001126",
    "phoneNumber": "9916744378",
    "persona": "Urban Tech Lead",
    "tier": "Tier3_Rural",
    "creditScore": 830,
    "incomeAnnual": 422000,
    "flowHistory": [
      815,
      822,
      828,
      830
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 16600,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "MS Dhoni",
    "pan": "ABCDE1127F",
    "aadhaar": "999900001127",
    "phoneNumber": "8816822801",
    "persona": "Gig Economy Partner",
    "tier": "Tier1",
    "creditScore": 835,
    "incomeAnnual": 3105000,
    "flowHistory": [
      820,
      827,
      833,
      835
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 835000
      },
      {
        "name": "Mutual Funds",
        "value": 337000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 207000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Jasprit Bumrah",
    "pan": "ABCDE1128F",
    "aadhaar": "999900001128",
    "phoneNumber": "7716901224",
    "persona": "Farmer",
    "tier": "Tier2",
    "creditScore": 840,
    "incomeAnnual": 1290000,
    "flowHistory": [
      825,
      832,
      838,
      840
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 326000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 109000,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Hardik Pandya",
    "pan": "ABCDE1129F",
    "aadhaar": "999900001129",
    "phoneNumber": "9116979647",
    "persona": "Auto Driver",
    "tier": "Tier3_Rural",
    "creditScore": 845,
    "incomeAnnual": 428000,
    "flowHistory": [
      830,
      837,
      843,
      845
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 16900,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Shubman Gill",
    "pan": "ABCDE1130F",
    "aadhaar": "999900001130",
    "phoneNumber": "9817058070",
    "persona": "Teacher",
    "tier": "Tier1",
    "creditScore": 400,
    "incomeAnnual": 3150000,
    "flowHistory": [
      385,
      392,
      398,
      400
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 850000
      },
      {
        "name": "Mutual Funds",
        "value": 340000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 210000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Rishabh Pant",
    "pan": "ABCDE1131F",
    "aadhaar": "999900001131",
    "phoneNumber": "9917136493",
    "persona": "Logistics Lead",
    "tier": "Tier2",
    "creditScore": 405,
    "incomeAnnual": 1305000,
    "flowHistory": [
      390,
      397,
      403,
      405
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 332000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 110500,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Ravindra Jadeja",
    "pan": "ABCDE1132F",
    "aadhaar": "999900001132",
    "phoneNumber": "8817214916",
    "persona": "Healthcare Worker",
    "tier": "Tier3_Rural",
    "creditScore": 410,
    "incomeAnnual": 434000,
    "flowHistory": [
      395,
      402,
      408,
      410
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 17200,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "KL Rahul",
    "pan": "ABCDE1133F",
    "aadhaar": "999900001133",
    "phoneNumber": "7717293339",
    "persona": "Rural Artisan",
    "tier": "Tier1",
    "creditScore": 415,
    "incomeAnnual": 3195000,
    "flowHistory": [
      400,
      407,
      413,
      415
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 865000
      },
      {
        "name": "Mutual Funds",
        "value": 343000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 213000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  },
  {
    "fullName": "Shreyas Iyer",
    "pan": "ABCDE1134F",
    "aadhaar": "999900001134",
    "phoneNumber": "9117371762",
    "persona": "Urban Tech Lead",
    "tier": "Tier2",
    "creditScore": 420,
    "incomeAnnual": 1320000,
    "flowHistory": [
      405,
      412,
      418,
      420
    ],
    "spendingBreakdown": {
      "food": 15000,
      "housing": 18000,
      "transport": 8000,
      "shopping": 5000
    },
    "investments": [
      {
        "name": "Fixed Deposit",
        "value": 338000
      },
      {
        "name": "Sovereign Gold Bond",
        "value": 50000
      }
    ],
    "transactions": [
      {
        "description": "Business Credit",
        "amount": 112000,
        "classification": "Income",
        "originInstitution": "Client Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "EMI Payment",
        "amount": -18000,
        "classification": "Housing",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Finance Node"
      }
    ]
  },
  {
    "fullName": "Mohammed Shami",
    "pan": "ABCDE1135F",
    "aadhaar": "999900001135",
    "phoneNumber": "9817450185",
    "persona": "Gig Economy Partner",
    "tier": "Tier3_Rural",
    "creditScore": 425,
    "incomeAnnual": 440000,
    "flowHistory": [
      410,
      417,
      423,
      425
    ],
    "spendingBreakdown": {
      "food": 6000,
      "transport": 2000,
      "utilities": 1500,
      "education": 1000
    },
    "investments": [],
    "transactions": [
      {
        "description": "DBT Subsidy Flow",
        "amount": 17500,
        "classification": "Income",
        "originInstitution": "Welfare Dept Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Ration Shop",
        "amount": -1500,
        "classification": "Food",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Merchant Node"
      }
    ]
  },
  {
    "fullName": "Suryakumar Yadav",
    "pan": "ABCDE1136F",
    "aadhaar": "999900001136",
    "phoneNumber": "9917528608",
    "persona": "Farmer",
    "tier": "Tier1",
    "creditScore": 430,
    "incomeAnnual": 3240000,
    "flowHistory": [
      415,
      422,
      428,
      430
    ],
    "spendingBreakdown": {
      "food": 12000,
      "housing": 35000,
      "shopping": 20000,
      "utilities": 8000,
      "transport": 10000
    },
    "investments": [
      {
        "name": "Equity Stocks",
        "value": 880000
      },
      {
        "name": "Mutual Funds",
        "value": 346000
      }
    ],
    "transactions": [
      {
        "description": "Salary Credit",
        "amount": 216000,
        "classification": "Income",
        "originInstitution": "Corporate Node",
        "destinationInstitution": "FTID Wallet"
      },
      {
        "description": "Credit Card Bill",
        "amount": -45000,
        "classification": "Shopping",
        "originInstitution": "FTID Wallet",
        "destinationInstitution": "Bank Node"
      }
    ]
  }
];

export const getPersonaByKeys = (pan: string, aadhaar: string): SeedPersona | null => {
  const panInput = pan?.toUpperCase().trim();
  const aadhaarInput = aadhaar?.replace(/[-s]/g, '').trim();
  return sovereignRegistry.find(p => (panInput && p.pan === panInput) || (aadhaarInput && p.aadhaar === aadhaarInput)) || null;
};
