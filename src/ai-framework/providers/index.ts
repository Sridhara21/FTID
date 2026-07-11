import { BaseMockProvider } from './BaseMockProvider';

export class OpenAIProvider extends BaseMockProvider {
  constructor() {
    super('gpt-4o', 'OpenAI', '1.0.0', 800, 0.015, 'Medium', ['Cloud']);
  }
}

export class ClaudeProvider extends BaseMockProvider {
  constructor() {
    super('claude-3-opus', 'Anthropic Claude', '3.0', 950, 0.015, 'High', ['Cloud']);
  }
}

export class SarvamProvider extends BaseMockProvider {
  constructor() {
    super('sarvam-1', 'Sarvam AI', '1.0', 400, 0.005, 'High', ['Cloud', 'NationalDataCenter']);
  }
  
  supportedLanguages() {
    return ['en', 'hi', 'bn', 'ta', 'te', 'mr', 'gu', 'kn', 'ml', 'pa'];
  }
}

export class MistralProvider extends BaseMockProvider {
  constructor() {
    super('mistral-large', 'Mistral', 'latest', 600, 0.007, 'High', ['Cloud', 'PrivateCloud', 'Hybrid']);
  }
}

export class RuleEngineProvider extends BaseMockProvider {
  constructor() {
    super('rule-engine-v1', 'Deterministic Rule Engine', '1.0', 15, 0.0, 'AirGapped', ['RuleEngine', 'Offline', 'AirGapped']);
  }

  async generate(prompt: string, options?: any) {
    const res = await super.generate(prompt, options);
    res.text = `[RULE ENGINE] Match found for conditions. Action authorized.`;
    res.confidence = 1.0; // Deterministic
    return res;
  }
}

export class GovernmentAIProvider extends BaseMockProvider {
  constructor() {
    super('bharat-llm-1', 'Bharat LLM (Government)', '1.0', 250, 0.0, 'High', ['GovernmentCloud', 'NationalDataCenter']);
  }
}
