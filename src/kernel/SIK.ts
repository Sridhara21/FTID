import { Fabric, StandardEvents } from './IntelligenceFabric';

/**
 * Sovereign Intelligence Kernel (SIK)
 * The core runtime that orchestrates all intelligence engines via the Intelligence Fabric.
 */
export class SovereignIntelligenceKernel {
  private static instance: SovereignIntelligenceKernel;

  private constructor() {
    this.initializeKernel();
  }

  public static getInstance(): SovereignIntelligenceKernel {
    if (!SovereignIntelligenceKernel.instance) {
      SovereignIntelligenceKernel.instance = new SovereignIntelligenceKernel();
    }
    return SovereignIntelligenceKernel.instance;
  }

  private initializeKernel() {
    console.log('[SIK] Initializing Sovereign Intelligence Kernel...');
    
    // Subscribe to standard national events
    Fabric.subscribe(StandardEvents.FRAUD_ALERT_RAISED, this.handleFraudAlert.bind(this));
    Fabric.subscribe(StandardEvents.CREDIT_SCORE_CALCULATED, this.handleCreditScore.bind(this));
    Fabric.subscribe(StandardEvents.POLICY_CHANGED, this.handlePolicyChange.bind(this));
    
    console.log('[SIK] Kernel initialized. Listening to Intelligence Fabric.');
  }

  // --- Handlers ---
  
  private async handleFraudAlert(payload: any) {
    console.log(`[SIK] Processing Fraud Alert for entity: ${payload.entityId}`);
    // Future: Delegate to Risk Engine & Policy Engine
  }

  private async handleCreditScore(payload: any) {
    console.log(`[SIK] Processing new Credit Score: ${payload.score} for ${payload.citizenId}`);
    // Future: Inform Analytics Engine
  }

  private async handlePolicyChange(payload: any) {
    console.log(`[SIK] Global Policy Update: ${payload.policyId}`);
    // Future: Re-run Scenarios via National Digital Twin
  }

  // --- Public APIs for UI/Portals to trigger SIK manually if needed ---
  
  public dispatch(eventType: string, payload: any) {
    Fabric.publish(eventType, payload);
  }
}

export const SIK = SovereignIntelligenceKernel.getInstance();
