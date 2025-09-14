'use server';
/**
 * @fileOverview An AI-powered tax saving suggestion tool for citizens.
 *
 * - getTaxSavingTips - A function that suggests tax-saving tips.
 * - TaxSavingTipsInput - The input type for the getTaxSavingTips function.
 * - TaxSavingTipsOutput - The return type for the getTaxSavingTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TaxSavingTipsInputSchema = z.object({
  annualIncome: z.number().describe('The annual income of the citizen.'),
  deductions: z.number().describe('The current total deductions of the citizen.'),
  taxableIncome: z.number().describe('The calculated taxable income.'),
});
export type TaxSavingTipsInput = z.infer<typeof TaxSavingTipsInputSchema>;

const TaxSavingTipsOutputSchema = z.object({
  tips: z.array(z.string()).describe('A list of personalized tax-saving tips.'),
});
export type TaxSavingTipsOutput = z.infer<typeof TaxSavingTipsOutputSchema>;

export async function getTaxSavingTips(
  input: TaxSavingTipsInput
): Promise<TaxSavingTipsOutput> {
  return taxSavingTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'taxSavingTipsPrompt',
  input: {schema: TaxSavingTipsInputSchema},
  output: {schema: TaxSavingTipsOutputSchema},
  prompt: `You are an AI tax advisor for Indian citizens. Based on the user's financial information, provide a few actionable, personalized tax-saving tips under the Indian Income Tax laws. Focus on common deductions they might be missing.

  User's Financial Information:
  - Annual Income: {{{annualIncome}}}
  - Current Deductions: {{{deductions}}}
  - Taxable Income: {{{taxableIncome}}}

  Provide a list of 2-3 concise, relevant tips.
  `,
});

const taxSavingTipsFlow = ai.defineFlow(
  {
    name: 'taxSavingTipsFlow',
    inputSchema: TaxSavingTipsInputSchema,
    outputSchema: TaxSavingTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
