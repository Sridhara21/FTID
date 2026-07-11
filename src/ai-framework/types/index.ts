export interface AIProviderInterface {
  id: string;
  name: string;
  version: string;

  // Capabilities
  generate(prompt: string, options?: any): Promise<AIResponse>;
  chat(messages: any[], options?: any): Promise<AIResponse>;
  reason(prompt: string, context: any): Promise<AIResponse>;
  summarize(text: string): Promise<AIResponse>;
  extract(text: string, schema: any): Promise<AIResponse>;
  score(text: string, criteria: any): Promise<AIResponse>;
  classify(text: string, categories: string[]): Promise<AIResponse>;
  embed(text: string): Promise<number[]>;
  moderate(text: string): Promise<ModerationResponse>;
  stream(prompt: string, onToken: (token: string) => void): Promise<void>;

  // Metadata & Health
  healthCheck(): Promise<boolean>;
  costEstimate(tokens: number): number;
  latency(): number; // Expected latency in ms
  capabilities(): string[];
  supportedLanguages(): string[];
  supportedModels(): string[];
  privacyLevel(): PrivacyRating;
  deploymentModes(): DeploymentMode[];
}

export type PrivacyRating = 'High' | 'Medium' | 'Low' | 'Offline' | 'AirGapped';
export type DeploymentMode = 'Cloud' | 'PrivateCloud' | 'GovernmentCloud' | 'NationalDataCenter' | 'Hybrid' | 'Offline' | 'AirGapped' | 'PrivateGPU' | 'LocalLLM' | 'RuleEngine' | 'NoAI';

export interface AIResponse {
  text: string;
  confidence: number;
  latencyMs: number;
  modelUsed: string;
  provider: string;
  dataResidency: string;
  tokenUsage: number;
  reasoning?: string;
  supportingSignals?: string[];
  dataSources?: string[];
}

export interface ModerationResponse {
  flagged: boolean;
  categories: Record<string, boolean>;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
}

export interface AIEvaluationContext {
  inferenceId: string;
  provider: string;
  model: string;
  promptHash: string;
  inferenceTimeMs: number;
  confidence: number;
  fallbackUsed: boolean;
  policyApplied: string;
  reviewer?: string;
  auditSignature: string;
  riskLevel: string;
  hallucinationScore: number;
  safetyScore: number;
  explainabilityScore: number;
  governanceChecksPassed: boolean;
}

export interface AIExplainabilityContext {
  modelUsed: string;
  confidence: number;
  reasoning: string;
  signalsConsidered: string[];
  dataSources: string[];
  recommendedAction: string;
  riskLevel: string;
  fallbackUsed: string | null;
  generatedAt: string;
  validationStatus: 'Pending Review' | 'Auto-Approved' | 'Rejected' | 'Manual Override';
  humanOversight: 'Mandatory' | 'Optional' | 'None';
}
