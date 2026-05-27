const fs = require('fs');

const primaryPersonas = [
  {
    fullName: "Ananya Iyer",
    pan: "PNGND1694Z",
    aadhaar: "419679142020",
    phoneNumber: "9876543210",
    persona: "Salaried IT Prof.",
    tier: "Tier1",
    creditScore: 785,
    incomeAnnual: 1750000,
    flowHistory: [760, 770, 775, 785],
    spendingBreakdown: { food: 8000, housing: 25000, shopping: 15000, utilities: 5000 },
    investments: [{ name: "Equity Stocks", value: 500000 }, { name: "Mutual Funds", value: 300000 }],
    transactions: [
      { description: "Salary Credit", amount: 145000, classification: "Income", originInstitution: "HCL Tech", destinationInstitution: "FTID Wallet" },
      { description: "Rent Payment", amount: -25000, classification: "Housing", originInstitution: "FTID Wallet", destinationInstitution: "Owner Node" }
    ]
  },
  {
    fullName: "Prithviraj Chauhan",
    pan: "HPGBT9246V",
    aadhaar: "403393833964",
    phoneNumber: "9876543211",
    persona: "Sales Executive",
    tier: "Tier2",
    creditScore: 640,
    incomeAnnual: 850000,
    flowHistory: [620, 630, 635, 640],
    spendingBreakdown: { food: 12000, transport: 15000, housing: 15000 },
    investments: [{ name: "Fixed Deposit", value: 100000 }],
    transactions: [{ description: "Fuel Expense", amount: -2000, classification: "Transport", originInstitution: "FTID Wallet", destinationInstitution: "BPCL" }]
  },
  {
    fullName: "Savitri Devi Kumari",
    pan: "CPLDH2769D",
    aadhaar: "390892054116",
    phoneNumber: "9876543212",
    persona: "SHG Member",
    tier: "Tier3_Rural",
    creditScore: 450,
    incomeAnnual: 180000,
    flowHistory: [440, 445, 448, 450],
    spendingBreakdown: { food: 4000, education: 2000 },
    investments: [],
    transactions: [{ description: "SHG Grant", amount: 5000, classification: "Income", originInstitution: "Welfare Dept", destinationInstitution: "FTID Wallet" }]
  }
];

const genericNames = [
  "Venkataramaiah Goud", "Raju Kumar Sahu", "Usha Srivastava", "Anil Mishra", "Priya Ramachandran",
  "Vikas Bhat", "Sudhir Naik", "Nitin Joshi", "Ramakrishna Das", "Kanchana Devi",
  "Rehan Ali", "Manjula Rao", "Anita Kumari Jha", "Bharat Rana", "Rukminibai Gaikwad",
  "Santosh Paswan", "Divya Menon", "Laxmibai Patil", "Aruna Desai", "Bijay Nayak",
  "Vikram Gupta", "Arjun Reddy", "Sushma Singh", "Hanumanthu Reddy", "Bhagyalakshmi Rao",
  "Tanya Malhotra", "Prakash Yadav", "Jagdish Patel", "Arjun Krishnaswamy", "Pradeep Kapoor",
  "Rohan Malhotra", "Siddharth Rao", "Deepa Nair", "Mahesh Jain", "Kabir Sharma",
  "Karthik Subramanian", "Tulsiram Sahu", "Abdul Salam Malik", "Vinod Singhal", "Swathi Krishnan",
  "Santosh Nair", "Meghna Pillai", "Phulwati Yadav", "Vimala Singh", "Hemant Soni",
  "Ajay Srivastava", "Ravi Shankar Dubey", "Shilpa Verma", "Mihir Joshi", "Navya Menon",
  "Vivek Sinha", "Snehal Joshi", "Kishore Jalan", "Harish Sharma", "Saroja Devi",
  "Aarav Singh", "Satish Patil", "Ramchandra Lodhi", "Keya Ghosh", "Dinesh Verma",
  "Shankar Tiwari", "Shivraj Patil", "Kamala Bai Thakur", "Bharat Singh", "Dev Pillai",
  "Annapurna Das", "Poornima Joshi", "Venkatesh Naidu", "Meenakshi Sundaram", "Manish Kumar",
  "Padmaja Menon", "Ajay Kumar Bind", "Narasimhaiah Reddy", "Arvind Batra", "Kailash Meena",
  "Vasantha Lakshmi", "Feroz Ahmed Khan", "Gaurav Sen", "Ishita Sharma", "Kiran Deshmukh",
  "Maya Deshpande", "Sunil Gavaskar", "Kapil Dev", "Sachin Tendulkar", "Rahul Dravid",
  "Virat Kohli", "Rohit Sharma", "MS Dhoni", "Jasprit Bumrah", "Hardik Pandya",
  "Shubman Gill", "Rishabh Pant", "Ravindra Jadeja", "KL Rahul", "Shreyas Iyer",
  "Mohammed Shami", "Suryakumar Yadav", "Kuldeep Yadav", "Axar Patel", "Arshdeep Singh"
];

const personaTypes = ["Farmer", "Auto Driver", "Teacher", "Logistics Lead", "Healthcare Worker", "Rural Artisan", "Urban Tech Lead", "Gig Economy Partner"];
const tiers = ["Tier1", "Tier2", "Tier3_Rural"];

let allPersons = [...primaryPersonas];

genericNames.forEach((name, i) => {
  if (allPersons.length >= 100) return;
  const tier = tiers[i % tiers.length];
  const score = 400 + (i * 5) % 450;
  
  const phonePrefix = ["98", "99", "88", "77", "91"][i % 5];
  const phoneSuffix = 10000000 + (i * 78423) % 89999999;
  
  let personaObj = {
    fullName: name,
    pan: `ABCDE${1040 + i}F`,
    aadhaar: `99990000${1040 + i}`,
    phoneNumber: `${phonePrefix}${phoneSuffix}`,
    persona: personaTypes[i % personaTypes.length],
    tier: tier,
    creditScore: score,
    incomeAnnual: 0,
    flowHistory: [Math.max(300, score - 15), Math.max(300, score - 8), score - 2, score],
    spendingBreakdown: {},
    investments: [],
    transactions: []
  };

  if (tier === 'Tier1') {
    personaObj.incomeAnnual = 1800000 + (i * 15000);
    personaObj.spendingBreakdown = { food: 12000, housing: 35000, shopping: 20000, utilities: 8000, transport: 10000 };
    personaObj.investments = [
      { name: "Equity Stocks", value: 400000 + (i * 5000) }, 
      { name: "Mutual Funds", value: 250000 + (i * 1000) }
    ];
    personaObj.transactions = [
      { description: "Salary Credit", amount: 120000 + (i * 1000), classification: "Income", originInstitution: "Corporate Node", destinationInstitution: "FTID Wallet" },
      { description: "Credit Card Bill", amount: -45000, classification: "Shopping", originInstitution: "FTID Wallet", destinationInstitution: "Bank Node" }
    ];
  } else if (tier === 'Tier2') {
    personaObj.incomeAnnual = 850000 + (i * 5000);
    personaObj.spendingBreakdown = { food: 15000, housing: 18000, transport: 8000, shopping: 5000 };
    personaObj.investments = [
      { name: "Fixed Deposit", value: 150000 + (i * 2000) },
      { name: "Sovereign Gold Bond", value: 50000 }
    ];
    personaObj.transactions = [
      { description: "Business Credit", amount: 65000 + (i * 500), classification: "Income", originInstitution: "Client Node", destinationInstitution: "FTID Wallet" },
      { description: "EMI Payment", amount: -18000, classification: "Housing", originInstitution: "FTID Wallet", destinationInstitution: "Finance Node" }
    ];
  } else {
    personaObj.incomeAnnual = 250000 + (i * 2000);
    personaObj.spendingBreakdown = { food: 6000, transport: 2000, utilities: 1500, education: 1000 };
    personaObj.investments = [];
    personaObj.transactions = [
      { description: "DBT Subsidy Flow", amount: 8000 + (i * 100), classification: "Income", originInstitution: "Welfare Dept Node", destinationInstitution: "FTID Wallet" },
      { description: "Ration Shop", amount: -1500, classification: "Food", originInstitution: "FTID Wallet", destinationInstitution: "Merchant Node" }
    ];
  }
  allPersons.push(personaObj);
});

const fileContent = `
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

export const sovereignRegistry: SeedPersona[] = ${JSON.stringify(allPersons, null, 2)};

export const getPersonaByKeys = (pan: string, aadhaar: string): SeedPersona | null => {
  const panInput = pan?.toUpperCase().trim();
  const aadhaarInput = aadhaar?.replace(/[-\s]/g, '').trim();
  return sovereignRegistry.find(p => (panInput && p.pan === panInput) || (aadhaarInput && p.aadhaar === aadhaarInput)) || null;
};
`;

fs.writeFileSync('C:\\Users\\user\\3D Objects\\New folder\\FTID\\src\\lib\\sovereign-seed.ts', fileContent);
