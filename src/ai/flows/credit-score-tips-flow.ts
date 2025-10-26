'use server';
/**
 * @fileOverview An AI-powered credit score improvement suggestion tool for citizens.
 *
 * - getCreditScoreTips - A function that suggests credit score improvement tips.
 * - CreditScoreTipsInput - The input type for the getCreditScoreTips function.
 * - CreditScoreTipsOutput - The return type for the getCreditScoreTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CreditScoreFactorSchema = z.object({
    name: z.string(),
    status: z.string(),
    impact: z.string(),
});

const CreditScoreTipsInputSchema = z.object({
  score: z.number().describe("The citizen's current credit score."),
  factors: z.array(CreditScoreFactorSchema).describe("The factors affecting the credit score."),
});
export type CreditScoreTipsInput = z.infer<typeof CreditScoreTipsInputSchema>;

const CreditScoreTipsOutputSchema = z.object({
  tips: z.array(z.string()).describe('A list of personalized credit score improvement tips.'),
});
export type CreditScoreTipsOutput = z.infer<typeof CreditScoreTipsOutputSchema>;

export async function getCreditScoreTips(
  input: CreditScoreTipsInput
): Promise<CreditScoreTipsOutput> {
  return creditScoreTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'creditScoreTipsPrompt',
  input: {schema: CreditScoreTipsInputSchema},
  output: {schema: CreditScoreTipsOutputSchema},
  prompt: `You are an AI financial advisor for Indian citizens. Based on the user's credit score and the factors affecting it, provide a few actionable, personalized tips to help them improve their score.

  User's Credit Score Information:
  - Current Score: {{{score}}}
  - Affecting Factors:
  {{#each factors}}
  - Factor: {{name}}, Status: {{status}}, Impact: {{impact}}
  {{/each}}

  Provide a list of 2-3 concise, relevant tips focusing on the areas that need the most improvement.
  `,
});

const creditScoreTipsFlow = ai.defineFlow(
  {
    name: 'creditScoreTipsFlow',
    inputSchema: CreditScoreTipsInputSchema,
    outputSchema: CreditScoreTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
