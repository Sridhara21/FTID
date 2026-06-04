"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, FileText, AlertOctagon, TrendingUp } from "lucide-react";
import { EcosystemImpactPanel } from "@/components/shared/observability/EcosystemImpactPanel";
import { DecisionEnginePanel } from "@/components/shared/observability/DecisionEnginePanel";

export default function BusinessCompliancePage() {
  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
                BUSINESS PORTAL
              </span>
              <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase tracking-widest animate-pulse">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                Live Node
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Real-Time Compliance Observatory</h1>
            <p className="text-sm text-cyan-100/60 mt-2 max-w-2xl">
              Continuous monitoring of GST drift, ROC health, and violation forecasting.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">GST Drift Variance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-amber-400 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    +14.2%
                  </div>
                  <p className="text-xs text-amber-400/80 mt-1">Declared vs settled</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Compliance Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-emerald-400">
                    92/100
                  </div>
                  <p className="text-xs text-emerald-400/80 mt-1">Top 15% in sector</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Business Trust Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-cyan-400 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
                    Tier 1 (High)
                  </div>
                  <p className="text-xs text-cyan-400/80 mt-1">Eligible for fast-track credit</p>
                </CardContent>
              </Card>
            </div>

            <DecisionEnginePanel 
              primaryQuestion="Will this business remain compliant over the next quarter?"
              recommendation="GST Input Tax Credit (ITC) claims show a 14% variance against supplier filings, indicating a potential compliance drift. Schedule automated reconciliation prompt."
              impact="Reduces unexpected tax liabilities and prevents downgrades to Business Trust Score."
              confidence={88}
              actionText="Trigger Automated ITC Reconciliation"
            />
            
          </div>

          <div className="space-y-6">
            <EcosystemImpactPanel 
              upstream={["Vendor Tax Filings", "e-Way Bill Generation"]}
              dataSources={["GSTN Portal", "MCA ROC Database", "Income Tax Department"]}
              downstream={["Bank Lending Rates", "Government Tax Audits", "Partner Trust Engine"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}