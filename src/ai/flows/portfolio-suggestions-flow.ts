'use server';
/**
 * @fileOverview An AI-powered portfolio suggestion tool for citizens.
 *
 * - getPortfolioSuggestions - A function that suggests investment portfolio improvements.
 * - PortfolioInput - The input type for the getPortfolioSuggestions function.
 * - PortfolioOutput - The return type for the getPortfolioSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioInputSchema = z.object({
  portfolio: z.string().describe('The user\'s current investment portfolio in JSON format.'),
  totalValue: z.number().describe('The total value of the portfolio.'),
});
export type PortfolioInput = z.infer<typeof PortfolioInputSchema>;

const PortfolioSuggestionSchema = z.object({
    title: z.string().describe('A short, catchy title for the suggestion.'),
    description: z.string().describe('A detailed description of the suggestion and the reasoning behind it.'),
});

const PortfolioOutputSchema = z.object({
  suggestions: z.array(PortfolioSuggestionSchema).describe('A list of personalized portfolio suggestions.'),
});
export type PortfolioOutput = z.infer<typeof PortfolioOutputSchema>;

export async function getPortfolioSuggestions(
  input: PortfolioInput
): Promise<PortfolioOutput> {
  return portfolioSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioSuggestionsPrompt',
  input: {schema: PortfolioInputSchema},
  output: {schema: PortfolioOutputSchema},
  prompt: `You are an AI investment advisor for an Indian citizen. Analyze the user's investment portfolio and provide 2-3 actionable, personalized suggestions for optimization.

  User's Portfolio (Total Value: ₹{{{totalValue}}}):
  {{{portfolio}}}

  Provide a list of suggestions with a title and a detailed description for each. Focus on diversification, risk management, and potential for growth in the Indian market context.
  `,
});

const portfolioSuggestionsFlow = ai.defineFlow(
  {
    name: 'portfolioSuggestionsFlow',
    inputSchema: PortfolioInputSchema,
    outputSchema: PortfolioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
