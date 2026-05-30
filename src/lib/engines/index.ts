export interface PolicyInputs {
  gstRate: number;
  corporateTax: number;
  subsidyAllocation: number;
  msmeCredit: number;
  infraSpending: number;
}

export interface PolicyOutputs {
  gdpGrowth: number;
  employmentChange: number;
  govRevenue: number;
  inflation: number;
  msmeGrowth: number;
  formalization: number;
}

export function simulatePolicy(inputs: PolicyInputs): PolicyOutputs {
  // Base scenario defaults
  const baseGDP = 6.5;
  const baseEmployment = 1.2;
  const baseRevenue = 15.0; // ₹ Lakh Crores
  const baseInflation = 4.2;
  const baseMSME = 5.0;
  const baseFormalization = 45.0; // %

  // Sensitivities (simplified linear modifiers)
  const gstModifier = (inputs.gstRate - 18) * 0.1; // Lower GST boosts GDP but lowers revenue
  const taxModifier = (inputs.corporateTax - 25) * 0.15;
  const subsidyModifier = (inputs.subsidyAllocation - 50000) / 10000;
  const creditModifier = (inputs.msmeCredit - 100000) / 20000;
  const infraModifier = (inputs.infraSpending - 200000) / 50000;

  return {
    gdpGrowth: Number((baseGDP - gstModifier - taxModifier + subsidyModifier * 0.05 + creditModifier * 0.1 + infraModifier * 0.2).toFixed(2)),
    employmentChange: Number((baseEmployment - taxModifier * 0.5 + creditModifier * 0.2 + infraModifier * 0.3).toFixed(2)),
    govRevenue: Number((baseRevenue + (inputs.gstRate - 18) * 0.5 + (inputs.corporateTax - 25) * 0.4 - subsidyModifier * 0.1 - infraModifier * 0.1).toFixed(2)),
    inflation: Number((baseInflation + subsidyModifier * 0.1 + infraModifier * 0.15 - gstModifier * 0.5).toFixed(2)),
    msmeGrowth: Number((baseMSME + creditModifier * 0.8 + subsidyModifier * 0.4 - taxModifier).toFixed(2)),
    formalization: Number((baseFormalization + (18 - inputs.gstRate) * 0.2 + creditModifier * 0.5).toFixed(1))
  };
}

export interface UnderwritingInputs {
  revenue: number;
  cashflow: number;
  gstActivity: number;
  vendorReliability: number;
  historicalPayments: number;
  trustScore: number;
}

export interface UnderwritingOutputs {
  creditScore: number;
  riskRating: 'AAA' | 'AA' | 'A' | 'BBB' | 'BB' | 'B' | 'C' | 'D';
  eligibility: boolean;
  suggestedAmount: number;
  defaultProbability: number;
  decision: 'Approved' | 'Conditional Approval' | 'Rejected';
  explanation: string;
}

export function runUnderwriting(inputs: UnderwritingInputs): UnderwritingOutputs {
  let score = 300; // Base score
  
  // Calculate synthetic score
  score += (inputs.revenue / 1000000) * 50;
  score += (inputs.cashflow / 100000) * 100;
  score += (inputs.gstActivity / 100) * 150;
  score += (inputs.vendorReliability / 100) * 100;
  score += (inputs.historicalPayments / 100) * 100;
  score += (inputs.trustScore / 100) * 100;
  
  score = Math.min(Math.max(score, 300), 900); // Bound between 300-900

  let decision: UnderwritingOutputs['decision'] = 'Rejected';
  let eligibility = false;
  let suggestedAmount = 0;
  let riskRating: UnderwritingOutputs['riskRating'] = 'D';

  if (score >= 750) {
    decision = 'Approved';
    eligibility = true;
    suggestedAmount = inputs.revenue * 0.2; // 20% of revenue
    riskRating = 'AAA';
  } else if (score >= 600) {
    decision = 'Conditional Approval';
    eligibility = true;
    suggestedAmount = inputs.revenue * 0.1;
    riskRating = 'BBB';
  } else {
    decision = 'Rejected';
    eligibility = false;
    suggestedAmount = 0;
    riskRating = 'C';
  }

  const defaultProbability = Number(((900 - score) / 600 * 100).toFixed(1));

  return {
    creditScore: Math.round(score),
    riskRating,
    eligibility,
    suggestedAmount: Math.round(suggestedAmount),
    defaultProbability: Math.min(defaultProbability, 99.9),
    decision,
    explanation: `Application ${decision.toLowerCase()}. The enterprise achieved a systemic score of ${Math.round(score)}/900. GST Activity (${inputs.gstActivity}%) and Trust Score (${inputs.trustScore}) strongly influenced this rating, predicting a default probability of ${defaultProbability}%.`
  };
}
