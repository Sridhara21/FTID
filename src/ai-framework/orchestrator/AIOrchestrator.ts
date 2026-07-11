import { AIProviderInterface, AIExplainabilityContext, AIEvaluationContext, AIResponse } from '../types';
import { EvaluationEngine } from '../evaluation/EvaluationEngine';
import { GovernanceEngine } from '../governance/GovernanceEngine';
import { OpenAIProvider, ClaudeProvider, GeminiProvider, SarvamProvider, MistralProvider, DeepSeekProvider, RuleEngineProvider, GovernmentAIProvider } from '../providers';

export class AIOrchestrator {
  private providers: Map<string, AIProviderInterface> = new Map();
  private evaluationEngine: EvaluationEngine;
  private governanceEngine: GovernanceEngine;

  constructor() {
    this.evaluationEngine = new EvaluationEngine();
    this.governanceEngine = new GovernanceEngine();
    
    // Register mock providers
    this.registerProvider(new OpenAIProvider());
    this.registerProvider(new ClaudeProvider());
    this.registerProvider(new SarvamProvider());
    this.registerProvider(new MistralProvider());
    this.registerProvider(new RuleEngineProvider());
    this.registerProvider(new GovernmentAIProvider());
  }

  private registerProvider(provider: AIProviderInterface) {
    this.providers.set(provider.id, provider);
  }

  public getAvailableProviders(): AIProviderInterface[] {
    return Array.from(this.providers.values());
  }

  public async execute(
    prompt: string, 
    preferredProviderId: string, 
    fallbackProviderIds: string[], 
    policies: string[]
  ): Promise<{ response: AIResponse, evaluation: AIEvaluationContext, explainability: AIExplainabilityContext }> {
    
    // 1. Governance check on prompt
    if (!this.governanceEngine.validateRequest(prompt, policies)) {
      throw new Error("Request blocked by AI Governance Engine.");
    }

    const providerOrder = [preferredProviderId, ...fallbackProviderIds];
    
    for (const providerId of providerOrder) {
      const provider = this.providers.get(providerId);
      if (!provider) continue;

      // 2. Governance check on provider capabilities/deployment
      if (!this.governanceEngine.validateProviderSelection(provider, policies)) {
        console.log(`[Orchestrator] Skipping ${provider.name} due to policy restrictions.`);
        continue;
      }

      try {
        console.log(`[Orchestrator] Routing inference to ${provider.name}...`);
        const fallbackUsed = providerId !== preferredProviderId;
        
        // 3. Execution
        const response = await provider.generate(prompt);
        
        // 4. Evaluation & Explainability Generation
        const evaluation = this.evaluationEngine.evaluateResponse(
          response,
          provider.name,
          provider.id,
          "hash-1234",
          policies.join(', '),
          fallbackUsed
        );

        if (!evaluation.governanceChecksPassed) {
           console.warn(`[Orchestrator] Response from ${provider.name} failed governance. Trying fallback...`);
           continue; // Try next fallback
        }

        const explainability: AIExplainabilityContext = {
          modelUsed: provider.id,
          confidence: response.confidence,
          reasoning: response.reasoning || "Standard model reasoning applied.",
          signalsConsidered: response.supportingSignals || [],
          dataSources: response.dataSources || [],
          recommendedAction: "Proceed based on model analysis.",
          riskLevel: evaluation.riskLevel,
          fallbackUsed: fallbackUsed ? provider.name : null,
          generatedAt: new Date().toISOString(),
          validationStatus: evaluation.safetyScore > 0.98 ? 'Auto-Approved' : 'Pending Review',
          humanOversight: policies.includes('Human Review Required') ? 'Mandatory' : 'Optional'
        };

        return { response, evaluation, explainability };
      } catch (error) {
        console.error(`[Orchestrator] Provider ${provider.name} failed:`, error);
        // Let loop continue to fallback
      }
    }

    throw new Error("All AI providers and fallbacks failed or were restricted by governance.");
  }
}
