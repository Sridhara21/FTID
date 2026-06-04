"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, ArrowUpRight, AlertTriangle, Building2 } from "lucide-react";
import { EcosystemImpactPanel } from "@/components/shared/observability/EcosystemImpactPanel";
import { DecisionEnginePanel } from "@/components/shared/observability/DecisionEnginePanel";

export default function RegulatorTrustPage() {
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
              <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase tracking-widest animate-pulse">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                Live Node
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">National Financial Trust Engine</h1>
            <p className="text-sm text-cyan-100/60 mt-2 max-w-2xl">
              Real-time monitoring of institutional reliability, fintech trust scores, and network integrity.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Avg Institution Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-emerald-400 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
                    92/100
                  </div>
                  <p className="text-xs text-emerald-400/80 mt-1">System-wide integrity is stable</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Fintech Upgrade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-cyan-400 flex items-center gap-2">
                    <ArrowUpRight className="h-5 w-5" />
                    +12 Entities
                  </div>
                  <p className="text-xs text-cyan-400/80 mt-1">Moved to L1 Trust Tier</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">License Revocations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-amber-400 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    2 Pending
                  </div>
                  <p className="text-xs text-amber-400/80 mt-1">Due to severe compliance failure</p>
                </CardContent>
              </Card>
            </div>

            <DecisionEnginePanel 
              primaryQuestion="Should 'Fintech-Omega' be downgraded from L1 to L2 Trust Tier?"
              recommendation="Entity has demonstrated repeated data consent violations and higher-than-average API failure rates in the Developer Sandbox."
              impact="Downgrade revokes direct CBDC settlement privileges, protecting consumer funds and maintaining ecosystem integrity."
              confidence={97}
              actionText="Execute Automated Trust Downgrade"
            />
            
          </div>

          <div className="space-y-6">
            <EcosystemImpactPanel 
              upstream={["Developer Portal Compliance", "Auditor Recon Reports"]}
              dataSources={["Consent Manager Logs", "API Gateway Metrics", "Consumer Grievance DB"]}
              downstream={["Bank Lending Networks", "Citizen App Visibility", "Gateway API Access"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
