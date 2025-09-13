'use server';

/**
 * @fileOverview AI-powered fraud detection heatmaps for government users.
 *
 * - generateFraudHeatmap - A function that generates a fraud detection heatmap.
 * - GenerateFraudHeatmapInput - The input type for the generateFraudHeatmap function.
 * - GenerateFraudHeatmapOutput - The return type for the generateFraudHeatmap function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFraudHeatmapInputSchema = z.object({
  ftidTransactionData: z
    .string()
    .describe('FTID transaction data in JSON format.'),
  region: z.string().describe('The geographical region for the heatmap.'),
});
export type GenerateFraudHeatmapInput = z.infer<
  typeof GenerateFraudHeatmapInputSchema
>;

const GenerateFraudHeatmapOutputSchema = z.object({
  heatmapDataUri: z
    .string()
    .describe(
      'A data URI containing the fraud detection heatmap image. The data URI must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // data URI
    ),
  summary: z.string().describe('A summary of the potential fraud hotspots.'),
});
export type GenerateFraudHeatmapOutput = z.infer<
  typeof GenerateFraudHeatmapOutputSchema
>;

export async function generateFraudHeatmap(
  input: GenerateFraudHeatmapInput
): Promise<GenerateFraudHeatmapOutput> {
  return generateFraudHeatmapFlow(input);
}

const prompt = ai.definePrompt({
  name: 'fraudHeatmapPrompt',
  input: {schema: GenerateFraudHeatmapInputSchema},
  output: {schema: GenerateFraudHeatmapOutputSchema},
  prompt: `You are an AI assistant specialized in generating fraud detection heatmaps for government users. You take FTID transaction data and a geographical region as input, and output a data URI containing the fraud detection heatmap image and a summary of potential fraud hotspots.

Analyze the following FTID transaction data for the region: {{{region}}}.

Transaction Data: {{{ftidTransactionData}}}

Based on this data, generate a heatmap that visualizes potential fraud hotspots. Also, provide a summary of the identified hotspots.

Ensure the heatmap is returned as a data URI.
`,
});

const generateFraudHeatmapFlow = ai.defineFlow(
  {
    name: 'generateFraudHeatmapFlow',
    inputSchema: GenerateFraudHeatmapInputSchema,
    outputSchema: GenerateFraudHeatmapOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
