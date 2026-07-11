type EventCallback = (payload: any) => void | Promise<void>;

export class IntelligenceFabric {
  private static instance: IntelligenceFabric;
  private listeners: Map<string, EventCallback[]> = new Map();

  private constructor() {}

  public static getInstance(): IntelligenceFabric {
    if (!IntelligenceFabric.instance) {
      IntelligenceFabric.instance = new IntelligenceFabric();
    }
    return IntelligenceFabric.instance;
  }

  public subscribe(eventType: string, callback: EventCallback) {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, []);
    }
    this.listeners.get(eventType)?.push(callback);
  }

  public unsubscribe(eventType: string, callback: EventCallback) {
    if (this.listeners.has(eventType)) {
      const filtered = this.listeners.get(eventType)!.filter(cb => cb !== callback);
      this.listeners.set(eventType, filtered);
    }
  }

  public async publish(eventType: string, payload: any) {
    console.log(`[FABRIC] Event Dispatched: ${eventType}`);
    const eventListeners = this.listeners.get(eventType) || [];
    
    // Fire all listeners asynchronously so the publisher isn't blocked
    const promises = eventListeners.map(async (cb) => {
      try {
        await cb(payload);
      } catch (error) {
        console.error(`[FABRIC] Error in listener for ${eventType}:`, error);
      }
    });

    await Promise.allSettled(promises);
  }
}

export const Fabric = IntelligenceFabric.getInstance();

export const StandardEvents = {
  CITIZEN_VERIFIED: 'CitizenVerified',
  BUSINESS_RISK_UPDATED: 'BusinessRiskUpdated',
  CREDIT_SCORE_CALCULATED: 'CreditScoreCalculated',
  FRAUD_ALERT_RAISED: 'FraudAlertRaised',
  POLICY_CHANGED: 'PolicyChanged',
  SCENARIO_EXECUTED: 'ScenarioExecuted',
  TAX_BEHAVIOR_UPDATED: 'TaxBehaviorUpdated',
  OPEN_FINANCE_CONSENT_GRANTED: 'OpenFinanceConsentGranted',
  AI_INFERENCE_COMPLETED: 'AIInferenceCompleted',
  TRUST_SCORE_UPDATED: 'TrustScoreUpdated',
  ECONOMIC_INDICATOR_CHANGED: 'EconomicIndicatorChanged'
} as const;
