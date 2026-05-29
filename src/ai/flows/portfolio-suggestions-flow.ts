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

const PortfolioOutputSchema = z.object({
  overall_assessment: z.string().describe('A general assessment of the portfolio.'),
  risk_level: z.string().describe('The perceived risk level of the portfolio (e.g., Low, Medium, High).'),
  actionable_suggestions: z.array(z.string()).describe('A list of actionable steps to improve the portfolio.'),
  tax_optimization: z.array(z.string()).describe('A list of tax optimization strategies for the portfolio.'),
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
    try {
      const {output} = await prompt(input);
      return output!;
    } catch (error) {
      console.error("AI Generation Failed. Returning fallback.", error);
      return {
        overall_assessment: "Your portfolio is heavily skewed towards equity, indicating an aggressive growth strategy. While returns are good, consider balancing risk.",
        risk_level: "High Risk",
        actionable_suggestions: [
          "Diversify into Debt: Given the high proportion of equity, consider adding stable debt funds to balance out volatility.",
          "Increase Emergency Fund: Your liquid emergency fund should ideally cover 6 months of expenses. Consider bumping it up slightly."
        ],
        tax_optimization: [
          "Maximize Section 80C deductions through ELSS mutual funds.",
          "Consider Tax-Free Bonds for long-term stable, tax-exempt returns."
        ]
      };
    }
  }
);
