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
    .describe('The current subsidy distribution as a JSON string.'),
  economicGoals: z
    .string()
    .describe(
      'The primary economic goals for the subsidy optimization (e.g., "Reduce poverty", "Boost agriculture").'
    ),
  budgetConstraints: z
    .number()
    .describe('The total budget available for subsidies.'),
});
export type SubsidyOptimizationInput = z.infer<
  typeof SubsidyOptimizationInputSchema
>;

const SubsidyOptimizationOutputSchema = z.object({
  optimizedDistribution: z
    .string()
    .describe(
      'The optimized subsidy distribution as a JSON string, with the same structure as the input distribution.'
    ),
  recommendationSummary: z
    .string()
    .describe(
      'A summary explaining the reasoning behind the recommended changes.'
    ),
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
  prompt: `You are an expert economist advising a government on how to optimize their subsidy distribution.

Analyze the current distribution and recommend an optimized allocation based on the stated economic goals and budget constraints.

Current Distribution:
{{{currentDistribution}}}

Economic Goals:
"{{{economicGoals}}}"

Total Budget Constraints:
{{{budgetConstraints}}}

Provide an 'optimizedDistribution' in the same JSON format as the input, ensuring the total value matches the budget constraint. Also provide a 'recommendationSummary' explaining your reasoning in detail.
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
