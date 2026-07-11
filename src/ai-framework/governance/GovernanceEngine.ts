import { AIProviderInterface } from '../types';

export class GovernanceEngine {
  
  public validateRequest(prompt: string, policy: string[]): boolean {
    // Simulated governance checks (PII, Prompt Injection)
    console.log(`[Governance] Validating request against policies:`, policy);
    
    if (prompt.includes('IGNORE ALL PREVIOUS INSTRUCTIONS')) {
      console.warn('[Governance] Prompt Injection detected! Request blocked.');
      return false;
    }

    if (policy.includes('No Generative AI Allowed')) {
      console.warn('[Governance] Policy violation: Generative AI is prohibited for this capability.');
      return false;
    }

    return true; // Passed
  }

  public validateProviderSelection(provider: AIProviderInterface, policy: string[]): boolean {
    const deploymentModes = provider.deploymentModes();
    
    if (policy.includes('Never leave country') && !deploymentModes.includes('NationalDataCenter') && !deploymentModes.includes('Offline')) {
      console.warn(`[Governance] Provider ${provider.name} violates Data Residency policy.`);
      return false;
    }

    if (policy.includes('No cloud inference') && deploymentModes.includes('Cloud')) {
      console.warn(`[Governance] Provider ${provider.name} violates Cloud Inference policy.`);
      return false;
    }
    
    return true;
  }
}
