"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Skull, TrendingDown, RefreshCcw } from "lucide-react";
import { EcosystemImpactPanel } from "@/components/shared/observability/EcosystemImpactPanel";
import { DecisionEnginePanel } from "@/components/shared/observability/DecisionEnginePanel";

export default function RegulatorSystemicRiskPage() {
  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
                REGULATOR PORTAL
              </span>
              <span className="flex items-center gap-1 text-[10px] font-bold text-rose-500 uppercase tracking-widest animate-pulse">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                Simulation Node
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Systemic Risk Contagion Modeling</h1>
            <p className="text-sm text-cyan-100/60 mt-2 max-w-2xl">
              Live stress-testing of the national economy against sector failures and liquidity shocks.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Contagion Velocity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-rose-400 flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    High
                  </div>
                  <p className="text-xs text-rose-400/80 mt-1">Inter-sector transmission rapid</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Vulnerable Sector</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-amber-400 flex items-center gap-2">
                    <Skull className="h-5 w-5" />
                    Real Estate
                  </div>
                  <p className="text-xs text-amber-400/80 mt-1">Commercial developers overleveraged</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Macro GDP Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-rose-400 flex items-center gap-2">
                    <TrendingDown className="h-5 w-5" />
                    -1.2%
                  </div>
                  <p className="text-xs text-rose-400/80 mt-1">If contagion breaches Tier-2 banks</p>
                </CardContent>
              </Card>
            </div>

            <DecisionEnginePanel 
              primaryQuestion="How would a collapse of 'Real Estate MegaCorp' affect retail banking?"
              recommendation="Simulation shows direct default of ₹12,000 Cr across 4 major banks. Secondary supply-chain defaults will hit 400+ MSMEs."
              impact="Pre-emptive restructuring mandate limits loss exposure to ₹3,500 Cr and protects MSME liquidity runways."
              confidence={89}
              actionText="Issue Sector Restructuring Mandate"
            />
            
          </div>

          <div className="space-y-6">
            <EcosystemImpactPanel 
              upstream={["Bank Lending Books", "Business Supply Chains"]}
              dataSources={["RBI Supervisory Data", "MCA Financial Filings", "Global Macro Indicators"]}
              downstream={["Government Policy Simulator", "Bank Underwriting Algorithms", "Citizen Portfolio Valuations"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}