/**
 * @fileOverview Sovereign Seed Registry for Prototype Personas.
 * This file contains the master list of 100 people data points.
 * During registration, the app checks if an entered PAN/Aadhaar matches a record here.
 */

export interface SeedPersona {
  fullName: string;
  pan: string;
  aadhaar: string;
  email: string;
  creditScore: number;
  transactions: any[];
  investments: any[];
  taxRecords: any[];
}

export const sovereignRegistry: SeedPersona[] = [
  {
    fullName: "Ravi Kumar",
    pan: "ABCDE1234F",
    aadhaar: "123456789012",
    email: "ravi.kumar@ftid.in",
    creditScore: 820,
    transactions: [
      { description: "Verified HDFC Salary Credit", amount: 125000, type: "cbdc_transfer", classification: "Primary Income", originInstitution: "Infosys Ltd", destinationInstitution: "FTID Wallet" },
      { description: "Zomato — Food Order", amount: -1250, type: "essential", classification: "Leisure", originInstitution: "FTID Wallet", destinationInstitution: "Zomato Node" }
    ],
    investments: [
      { name: "Reliance Industries", type: "Stock", value: 435000, taxClass: "LTCG" },
      { name: "HDFC Bank", type: "Stock", value: 400000, taxClass: "LTCG" }
    ],
    taxRecords: [
      { source: "Employment (TDS Form 16)", type: "Income", amount: 1500000, verified: true, fy: "2025-26" },
      { source: "Standard Deduction", type: "Deduction", amount: 75000, verified: true, fy: "2025-26" }
    ]
  },
  {
    fullName: "Anjali Sharma",
    pan: "WXYZP9876Q",
    aadhaar: "987654321098",
    email: "anjali.sharma@ftid.in",
    creditScore: 745,
    transactions: [
      { description: "Freelance Payment — UI Design", amount: 45000, type: "cbdc_transfer", classification: "Consulting Income", originInstitution: "Design Studio", destinationInstitution: "FTID Wallet" },
      { description: "Rent Payment — HSR Layout", amount: -22000, type: "essential", classification: "Housing", originInstitution: "FTID Wallet", destinationInstitution: "Landlord Node" }
    ],
    investments: [
      { name: "Parag Parikh Flexi Cap", type: "Mutual Fund", value: 120000, taxClass: "LTCG" },
      { name: "Digital Gold", type: "Gold", value: 50000, taxClass: "Exempt" }
    ],
    taxRecords: [
      { source: "Consulting (Form 26AS)", type: "Income", amount: 540000, verified: true, fy: "2025-26" },
      { source: "80C (EPF/LIC)", type: "Deduction", amount: 150000, verified: true, fy: "2025-26" }
    ]
  }
  // To reach 100 people, continue adding objects following this schema.
];

export const getPersonaByKeys = (pan: string, aadhaar: string): SeedPersona | null => {
  return sovereignRegistry.find(p => 
    p.pan.toUpperCase() === pan.toUpperCase() || 
    p.aadhaar === aadhaar
  ) || null;
};
