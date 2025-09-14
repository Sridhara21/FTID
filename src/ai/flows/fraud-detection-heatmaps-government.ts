'use server';

/**
 * @fileOverview AI-powered fraud detection analysis for government users.
 *
 * - analyzeFraudData - A function that analyzes transaction data for fraud.
 * - FraudAnalysisInput - The input type for the analyzeFraudData function.
 * - FraudAnalysisOutput - The return type for the analyzeFraudData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FraudAnalysisInputSchema = z.object({
  ftidTransactionData: z
    .string()
    .describe('FTID transaction data in JSON format.'),
  region: z.string().describe('The geographical region for the analysis.'),
});
export type FraudAnalysisInput = z.infer<
  typeof FraudAnalysisInputSchema
>;

const FraudAnalysisOutputSchema = z.object({
  region: z.string().describe('The geographical region analyzed.'),
  totalTransactionsAnalyzed: z.number().describe('The total number of transactions analyzed.'),
  suspiciousTransactionCount: z.number().describe('The number of transactions flagged as potentially fraudulent.'),
  hotspots: z.array(z.object({
    location: z.string().describe('A specific location (e.g., city, district) identified as a hotspot.'),
    riskLevel: z.string().describe('The assessed risk level (e.g., High, Medium, Low).'),
    reason: z.string().describe('The reason for identifying this location as a hotspot.'),
  })).describe('A list of identified fraud hotspots.'),
  summary: z.string().describe('A summary of the potential fraud patterns and recommendations.'),
});
export type FraudAnalysisOutput = z.infer<
  typeof FraudAnalysisOutputSchema
>;

export async function analyzeFraudData(
  input: FraudAnalysisInput
): Promise<FraudAnalysisOutput> {
  return fraudAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'fraudAnalysisPrompt',
  input: {schema: FraudAnalysisInputSchema},
  output: {schema: FraudAnalysisOutputSchema},
  prompt: `You are an AI assistant specialized in analyzing financial transaction data for fraud detection for government users. You take FTID transaction data and a geographical region as input, and output a structured analysis of potential fraud.

Analyze the following FTID transaction data for the region: {{{region}}}.

Transaction Data: {{{ftidTransactionData}}}

Based on this data, identify potential fraud hotspots, count the number of suspicious transactions, and provide a summary of your findings. A transaction is suspicious if it has anomalies in amount, frequency, or location. A hotspot is a location with a high concentration of suspicious transactions.

Return a structured JSON object with the analysis.
`,
});

const fraudAnalysisFlow = ai.defineFlow(
  {
    name: 'fraudAnalysisFlow',
    inputSchema: FraudAnalysisInputSchema,
    outputSchema: FraudAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    // The prompt might not count the transactions, so we'll do it here.
    try {
        const data = JSON.parse(input.ftidTransactionData);
        output!.totalTransactionsAnalyzed = data.length;
    } catch(e) {
        output!.totalTransactionsAnalyzed = 0;
    }
    return output!;
  }
);
