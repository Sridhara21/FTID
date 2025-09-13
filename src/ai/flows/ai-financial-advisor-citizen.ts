'use server';
/**
 * @fileOverview An AI financial advisor for citizens. It provides basic budgeting advice and personalized savings tips based on FTID transaction history.
 *
 * - getFinancialAdvice - A function that provides financial advice.
 * - FinancialAdviceInput - The input type for the getFinancialAdvice function.
 * - FinancialAdviceOutput - The return type for the getFinancialAdvice function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FinancialAdviceInputSchema = z.object({
  transactionHistory: z.string().describe('The FTID transaction history of the citizen.'),
  income: z.number().describe('The monthly income of the citizen.'),
  expenses: z.number().describe('The monthly expenses of the citizen.'),
});
export type FinancialAdviceInput = z.infer<typeof FinancialAdviceInputSchema>;

const FinancialAdviceOutputSchema = z.object({
  budgetingAdvice: z.string().describe('Basic budgeting advice for the citizen.'),
  savingsTips: z.string().describe('Personalized savings tips for the citizen based on their transaction history.'),
});
export type FinancialAdviceOutput = z.infer<typeof FinancialAdviceOutputSchema>;

export async function getFinancialAdvice(input: FinancialAdviceInput): Promise<FinancialAdviceOutput> {
  return financialAdviceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'financialAdvicePrompt',
  input: {schema: FinancialAdviceInputSchema},
  output: {schema: FinancialAdviceOutputSchema},
  prompt: `You are an AI financial advisor providing advice to citizens based on their FTID transaction history.

  Provide basic budgeting advice and personalized savings tips based on the following information:

  Transaction History: {{{transactionHistory}}}
  Income: {{{income}}}
  Expenses: {{{expenses}}}

  Budgeting Advice:
  Savings Tips: `,
});

const financialAdviceFlow = ai.defineFlow(
  {
    name: 'financialAdviceFlow',
    inputSchema: FinancialAdviceInputSchema,
    outputSchema: FinancialAdviceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
