"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ShieldAlert, TrendingDown, ArrowRightLeft, DollarSign } from "lucide-react";
import { EcosystemImpactPanel } from "@/components/shared/observability/EcosystemImpactPanel";
import { DecisionEnginePanel } from "@/components/shared/observability/DecisionEnginePanel";

export default function BusinessCashflowPage() {
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
            <h1 className="text-3xl font-black text-white tracking-tight">AI Cashflow Observatory</h1>
            <p className="text-sm text-cyan-100/60 mt-2 max-w-2xl">
              Predictive insolvency monitoring and liquidity runway analysis for MSME health tracking.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Liquidity Runway</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-rose-400 flex items-center gap-2">
                    <TrendingDown className="h-5 w-5" />
                    14 Days
                  </div>
                  <p className="text-xs text-rose-400/80 mt-1">Critical threshold breached</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Revenue Forecast</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-emerald-400">
                    ₹1.4 Cr
                  </div>
                  <p className="text-xs text-emerald-400/80 mt-1">Expected Q3 Earnings</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Collection Delay</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-cyan-400 flex items-center gap-2">
                    <ArrowRightLeft className="h-5 w-5" />
                    DSO 45
                  </div>
                  <p className="text-xs text-cyan-400/80 mt-1">Industry avg: 30 days</p>
                </CardContent>
              </Card>
            </div>

            <DecisionEnginePanel 
              primaryQuestion="Can this business survive the next 30 days without external liquidity injection?"
              recommendation="Cash reserves are critically low due to delayed receivables from upstream vendors. Recommend immediate short-term working capital approval."
              impact="Prevents default on upcoming tax obligations and preserves 45 dependent supply chain nodes."
              confidence={92}
              actionText="Approve Emergency Liquidity Bridge"
            />
            
          </div>

          <div className="space-y-6">
            <EcosystemImpactPanel 
              upstream={["Vendor Payment Delays", "Raw Material Price Spikes"]}
              dataSources={["GST API (e-Invoices)", "Banking Account Aggregator (AA)", "CBDC Wallet Feed"]}
              downstream={["Bank NPA Risk", "Tax Revenue Shortfall", "Supplier Defaults"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}