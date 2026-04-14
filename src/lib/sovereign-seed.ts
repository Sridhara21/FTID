/**
 * @fileOverview Sovereign Seed Registry for Prototype Personas.
 * This file contains the master list of exactly 100 personas for the FTID prototype.
 */

export interface SeedPersona {
  fullName: string;
  pan: string;
  aadhaar: string;
  email: string;
  persona: string;
  tier: 'Tier1' | 'Tier2' | 'Tier3_Rural';
  creditScore: number;
  incomeAnnual: number;
  flowHistory: number[];
  transactions: any[];
  investments: any[];
  spendingBreakdown: Record<string, number>;
}

const generateSeedData = (): SeedPersona[] => {
  const primaryPersonas: SeedPersona[] = [
    {
      fullName: "Ananya Iyer",
      pan: "PNGND1694Z",
      aadhaar: "419679142020",
      email: "ananya.iyer@ftid.in",
      persona: "Salaried IT Prof.",
      tier: "Tier1",
      creditScore: 785,
      incomeAnnual: 1750000,
      flowHistory: [760, 770, 775, 785],
      spendingBreakdown: { food: 8000, housing: 25000, shopping: 15000, utilities: 5000 },
      investments: [{ name: "Equity Stocks", value: 500000 }, { name: "Mutual Funds", value: 300000 }],
      transactions: [
        { id: 't1_1', description: "Salary Credit", amount: 145000, classification: "Income", originInstitution: "HCL Tech", destinationInstitution: "ICICI Bank" },
        { id: 't1_2', description: "Rent Payment", amount: -25000, classification: "Housing", originInstitution: "ICICI Bank", destinationInstitution: "Owner Node" }
      ]
    },
    {
      fullName: "Prithviraj Chauhan",
      pan: "HPGBT9246V",
      aadhaar: "403393833964",
      email: "prithviraj.c@ftid.in",
      persona: "Sales Executive",
      tier: "Tier2",
      creditScore: 640,
      incomeAnnual: 850000,
      flowHistory: [620, 630, 635, 640],
      spendingBreakdown: { food: 12000, transport: 15000, housing: 15000 },
      investments: [{ name: "Fixed Deposit", value: 100000 }],
      transactions: [{ id: 't2_1', description: "Fuel Expense", amount: -2000, classification: "Transport", originInstitution: "HDFC Bank", destinationInstitution: "BPCL" }]
    },
    {
      fullName: "Savitri Devi Kumari",
      pan: "CPLDH2769D",
      aadhaar: "390892054116",
      email: "savitri.dk@ftid.in",
      persona: "SHG Member",
      tier: "Tier3_Rural",
      creditScore: 450,
      incomeAnnual: 180000,
      flowHistory: [440, 445, 448, 450],
      spendingBreakdown: { food: 4000, education: 2000 },
      investments: [],
      transactions: [{ id: 't3_1', description: "SHG Grant", amount: 5000, classification: "Income", originInstitution: "Welfare Dept", destinationInstitution: "Rural Bank" }]
    },
    {
      fullName: "Siya Nair",
      pan: "OIHWR0555Z",
      aadhaar: "656600409173",
      email: "siya.nair@ftid.in",
      persona: "Freelance Designer",
      tier: "Tier1",
      creditScore: 710,
      incomeAnnual: 1200000,
      flowHistory: [690, 700, 705, 710],
      spendingBreakdown: { software: 5000, coworking: 10000 },
      investments: [{ name: "Sovereign Bond", value: 50000 }],
      transactions: [{ id: 't4_1', description: "Client Payment", amount: 80000, classification: "Income", originInstitution: "Upwork", destinationInstitution: "Kotak Bank" }]
    },
    {
      fullName: "Ramesh Malhotra",
      pan: "ZPYYZ2723K",
      aadhaar: "763530455618",
      email: "ramesh.m@ftid.in",
      persona: "Small Biz Owner",
      tier: "Tier2",
      creditScore: 680,
      incomeAnnual: 950000,
      flowHistory: [660, 670, 675, 680],
      spendingBreakdown: { inventory: 40000, rent: 20000 },
      investments: [{ name: "Gold", value: 200000 }],
      transactions: [{ id: 't5_1', description: "Business Sale", amount: 15000, classification: "Income", originInstitution: "POS Terminal", destinationInstitution: "SBI Business" }]
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

  const personaTypes = ["Farmer (Systemic)", "Auto Driver", "Teacher", "Logistics Lead", "Healthcare Worker", "Rural Artisan", "Urban Tech Lead", "Gig Economy Partner"];
  const tiers: ('Tier1' | 'Tier2' | 'Tier3_Rural')[] = ["Tier1", "Tier2", "Tier3_Rural"];

  const fullList = [...primaryPersonas];

  genericNames.forEach((name, i) => {
    if (fullList.length >= 100) return;
    const tier = tiers[i % tiers.length];
    const score = 400 + (i * 5) % 450;
    const idx = i + 6;
    fullList.push({
      fullName: name,
      pan: `ABCDE${1040 + i}F`,
      aadhaar: `99990000${1040 + i}`,
      email: `${name.toLowerCase().replace(/\s+/g, '.')}@ftid.in`,
      persona: personaTypes[i % personaTypes.length],
      tier: tier,
      creditScore: score,
      incomeAnnual: tier === 'Tier1' ? 1800000 : tier === 'Tier2' ? 850000 : 250000,
      flowHistory: [score - 10, score - 5, score - 2, score],
      spendingBreakdown: { food: 5000, essentials: 10000 },
      investments: [{ name: "Sovereign Gold Bond", value: 25000 }],
      transactions: [{ 
        id: `t${idx}_1`, 
        description: "Institutional Credit", 
        amount: 15000, 
        classification: "Income", 
        originInstitution: "Direct Benefit Node", 
        destinationInstitution: "FTID Wallet" 
      }]
    });
  });

  return fullList;
};

export const sovereignRegistry: SeedPersona[] = generateSeedData();

export const getPersonaByKeys = (pan: string, aadhaar: string): SeedPersona | null => {
  const panInput = pan?.toUpperCase().trim();
  const aadhaarInput = aadhaar?.replace(/[-\s]/g, '').trim();
  return sovereignRegistry.find(p => (panInput && p.pan === panInput) || (aadhaarInput && p.aadhaar === aadhaarInput)) || null;
};