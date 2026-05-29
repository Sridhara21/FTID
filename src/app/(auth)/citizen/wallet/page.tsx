
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert, Activity, Target, Network, AlertTriangle, BrainCircuit, ShieldCheck, TrendingUp, BarChart3, Fingerprint, Lock, Zap } from "lucide-react";
import { AIPulseIntelligence } from "@/components/shared/observability/AIPulseIntelligence";
import { TrustScoreWidget } from "@/components/shared/observability/TrustScoreWidget";
import { LiveTransactionStream } from "@/components/shared/observability/LiveTransactionStream";
import { FinancialNetworkGraph } from "@/components/shared/observability/FinancialNetworkGraph";
import { BottomIntelligenceRibbon } from "@/components/shared/observability/BottomIntelligenceRibbon";


export default function CitizenwalletPage() {
  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      {/* Dynamic Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
                CITIZEN INFRASTRUCTURE
              </span>
              <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase tracking-widest animate-pulse">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                Live Node
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">CBDC + Smart Wallet</h1>
            <p className="text-sm text-cyan-100/60 mt-2 max-w-2xl">
              Advanced observability module rendering real-time telemetry for: <span className="text-cyan-400 font-medium">programmable transaction simulation, smart routing</span>.
            </p>
          </div>
        </header>

        {/* Core Observability Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <FinancialNetworkGraph className="h-[350px]" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AIPulseIntelligence 
                title="AI Operations Reasoning"
                primaryInsight="System detects active operations related to programmable transaction simulation."
                secondaryInsights={[
                  "Behavioral analysis indicates expected usage patterns.",
                  "Anomaly detection engine running at 99.9% confidence."
                ]}
                riskLevel="MEDIUM"
              />
              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader>
                  <CardTitle className="text-xs font-bold uppercase tracking-widest text-white flex justify-between">
                    <span>Active Telemetry</span>
                    <Activity className="h-4 w-4 text-cyan-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  " + specItems.map(item => '<div className="space-y-1"><div className="flex justify-between text-xs"><span className="text-slate-400 capitalize">' + item + '</span><span className="text-cyan-400 font-mono">{(Math.random() * 100).toFixed(1)}%</span></div><div className="h-1 bg-cyan-900/30 rounded-full overflow-hidden"><div className="h-full bg-cyan-500 rounded-full" style={{ width: (Math.random() * 100) + "%" }}></div></div></div>').join('') + "
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <TrustScoreWidget 
              score={80} 
              entityName="Module Trust Index"
            />
            <LiveTransactionStream className="h-[400px]" />
          </div>
        </div>
        
        {/* Module Specific Mocks */}
        <Card className="bg-[#0a1520] border-cyan-900/30">
          <CardHeader>
            <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Institutional Security Verification
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-400 leading-relaxed">
              This node operates under the strict guidelines of the FTID RegTech framework. All data is cryptographically secured, immutable, and subject to continuous automated audit trails. The Unified Trust Engine validates all internal pathways.
            </p>
          </CardContent>
        </Card>

      </div>
      
      {/* <BottomIntelligenceRibbon /> */}
    </div>
  );
}
