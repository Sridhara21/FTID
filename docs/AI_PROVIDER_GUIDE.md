# AI Provider Implementation Guide

This guide outlines how to integrate a new AI provider into the Sovereign AI Intelligence Framework (SAIF).

## 1. Implement the `AIProviderInterface`

Every provider must implement the `AIProviderInterface` found in `src/ai-framework/types/index.ts`.

```typescript
export interface AIProviderInterface {
  id: string;
  name: string;
  version: string;
  deploymentModes: () => DeploymentMode[];
  generate: (prompt: string, context?: any) => Promise<AIResponse>;
  healthCheck: () => Promise<boolean>;
  getPrivacyRating: () => PrivacyRating;
}
```

## 2. Deployment Modes
Providers must declare their supported deployment modes. This is critical for the `GovernanceEngine` to enforce Data Residency policies.
- `Cloud`: Public API (e.g., OpenAI API)
- `NationalDataCenter`: Sovereign cloud (e.g., Azure Govt, AWS GovCloud, Local Sovereign Cloud)
- `Offline`: Air-gapped / Edge inference
- `Deterministic`: Non-AI Rule Engine

## 3. Registering the Provider
Once the class is implemented, instantiate it in the `AIOrchestrator`:

```typescript
// src/ai-framework/orchestrator/AIOrchestrator.ts
this.registerProvider(new MyNewSovereignProvider());
```

## 4. Configuring Capability Profiles
To use the new provider, update the target country's configuration in `src/config/countries.ts`:

```typescript
aiProfile: {
  preferredProvider: "my-new-sovereign-provider",
  fallbackProvider: "rule-engine-v1",
  // ...
}
```

## Security Note
Do not hardcode API keys. Production deployments must use the Sovereign Key Management Service injected securely at runtime via the `IntelligenceFabric`.
