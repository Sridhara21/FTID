"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, Network, TriangleAlert, Building2 } from "lucide-react";
import { EcosystemImpactPanel } from "@/components/shared/observability/EcosystemImpactPanel";
import { DecisionEnginePanel } from "@/components/shared/observability/DecisionEnginePanel";
import { FinancialNetworkGraph } from "@/components/shared/observability/FinancialNetworkGraph";

export default function BankNetworkPage() {
  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
                BANKING PORTAL
              </span>
              <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase tracking-widest animate-pulse">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                Live Node
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Interbank Exposure Graph</h1>
            <p className="text-sm text-cyan-100/60 mt-2 max-w-2xl">
              Interactive mapping of wholesale lending exposures and liquidity contagion vectors.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            
            <Card className="bg-[#0a1520] border-cyan-900/30 overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex justify-between">
                  <span>Live Exposure Topology</span>
                  <Network className="h-4 w-4 text-cyan-400" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <FinancialNetworkGraph className="h-[300px] w-full" />
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Total Interbank Exposure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-cyan-400 flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    ₹18,500 Cr
                  </div>
                  <p className="text-xs text-cyan-400/80 mt-1">Lending to 42 institutions</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Contagion Risk</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-amber-400 flex items-center gap-2">
                    <TriangleAlert className="h-5 w-5" />
                    Moderate
                  </div>
                  <p className="text-xs text-amber-400/80 mt-1">Due to NBFC Sector Stress</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Critical Connections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-rose-400 flex items-center gap-2">
                    <Link className="h-5 w-5" />
                    3 Nodes
                  </div>
                  <p className="text-xs text-rose-400/80 mt-1">Approaching 80% LCR limit</p>
                </CardContent>
              </Card>
            </div>

            <DecisionEnginePanel 
              primaryQuestion="Is the bank dangerously exposed to a failing counterparty?"
              recommendation="Counterparty 'NBFC-Alpha' is experiencing severe deposit flight and rapid liquidity drain. Our overnight lending exposure is ₹450 Cr."
              impact="Capping exposure prevents potential wholesale default contagion and protects Tier-1 capital ratio."
              confidence={91}
              actionText="Cap Overnight Lending to NBFC-Alpha"
            />
            
          </div>

          <div className="space-y-6">
            <EcosystemImpactPanel 
              upstream={["Counterparty Deposit Flows", "RBI Repo Operations"]}
              dataSources={["RTGS Settlement Network", "CCIL Borrowing Data", "Wholesale Markets"]}
              downstream={["Systemic Regulator Alerts", "Capital Adequacy Ratio", "Credit Rating Agencies"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}