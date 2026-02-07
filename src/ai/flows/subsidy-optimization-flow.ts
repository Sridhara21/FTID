'use server';

/**
 * @fileOverview An AI-powered subsidy optimization tool for government users.
 *
 * - optimizeSubsidies - A function that suggests an optimized subsidy distribution.
 * - SubsidyOptimizationInput - The input type for the optimizeSubsidies function.
 * - SubsidyOptimizationOutput - The return type for the optimizeSubsidies function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SubsidyOptimizationInputSchema = z.object({
  currentDistribution: z
    .string()
    .describe('The current subsidy distribution as a JSON string. Values are in Crores of INR.'),
  economicGoals: z
    .string()
    .describe(
      'The primary economic goals for the subsidy optimization (e.g., "Reduce poverty", "Boost agriculture").'
    ),
  budgetConstraints: z
    .number()
    .describe('The total budget available for subsidies in Crores of INR.'),
});
export type SubsidyOptimizationInput = z.infer<
  typeof SubsidyOptimizationInputSchema
>;

const SubsidyOptimizationOutputSchema = z.object({
  optimizedDistribution: z
    .string()
    .describe(
      'The optimized subsidy distribution as a JSON string, with the same structure as the input distribution. Each item should have a name and a numeric value in Crores of INR.'
    ),
  recommendationSummary: z
    .string()
    .describe(
      'A summary explaining the reasoning behind the recommended changes.'
    ),
    expectedGdpImpact: z.string().describe('The estimated impact on GDP growth (e.g., "+0.2%").'),
    expectedEmploymentImpact: z.string().describe('The estimated impact on employment (e.g., "+150,000 jobs").'),
    leakageReductionEstimate: z.string().describe('The estimated reduction in subsidy leakage (e.g., "5-7%").'),
});
export type SubsidyOptimizationOutput = z.infer<
  typeof SubsidyOptimizationOutputSchema
>;

export async function optimizeSubsidies(
  input: SubsidyOptimizationInput
): Promise<SubsidyOptimizationOutput> {
  return subsidyOptimizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'subsidyOptimizationPrompt',
  input: {schema: SubsidyOptimizationInputSchema},
  output: {schema: SubsidyOptimizationOutputSchema},
  prompt: `You are an expert economist advising the Indian government on how to optimize their subsidy distribution for the fiscal year 2025-26.

Analyze the current distribution and recommend an optimized allocation based on the stated economic goals and budget constraints. The values are in Crores of INR.

Current Distribution:
{{{currentDistribution}}}

Economic Goals:
"{{{economicGoals}}}"

Total Budget Constraints:
₹{{{budgetConstraints}}} Crores

Provide an 'optimizedDistribution' in JSON format as an array of objects, where each object has 'name' (string) and 'value' (number, in Crores). The sum of 'value' in the 'optimizedDistribution' must exactly match the 'budgetConstraints'. 
Also provide a 'recommendationSummary' explaining your reasoning in detail.
Finally, provide realistic estimates for 'expectedGdpImpact', 'expectedEmploymentImpact', and 'leakageReductionEstimate' based on your recommended changes.
`,
});

const subsidyOptimizationFlow = ai.defineFlow(
  {
    name: 'subsidyOptimizationFlow',
    inputSchema: SubsidyOptimizationInputSchema,
    outputSchema: SubsidyOptimizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
