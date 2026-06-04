"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSearch, AlertTriangle, Fingerprint, SearchX } from "lucide-react";
import { EcosystemImpactPanel } from "@/components/shared/observability/EcosystemImpactPanel";
import { DecisionEnginePanel } from "@/components/shared/observability/DecisionEnginePanel";

export default function BusinessInvoicesPage() {
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
            <h1 className="text-3xl font-black text-white tracking-tight">Smart Invoice Intelligence Engine</h1>
            <p className="text-sm text-cyan-100/60 mt-2 max-w-2xl">
              Advanced duplicate detection, forgery scoring, and invoice risk assessment.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Duplicate Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-rose-400 flex items-center gap-2">
                    <SearchX className="h-5 w-5" />
                    4.2%
                  </div>
                  <p className="text-xs text-rose-400/80 mt-1">Elevated above 1% baseline</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Fraud Probability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-cyan-400 flex items-center gap-2">
                    <Fingerprint className="h-5 w-5" />
                    0.8%
                  </div>
                  <p className="text-xs text-cyan-400/80 mt-1">Nominal forgery risk</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Invoice Risk</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-amber-400 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Moderate
                  </div>
                  <p className="text-xs text-amber-400/80 mt-1">Driven by duplicate clusters</p>
                </CardContent>
              </Card>
            </div>

            <DecisionEnginePanel 
              primaryQuestion="Are these invoices legitimate and safe to process for accounts payable?"
              recommendation="Invoice mismatch frequency increased 22% over 30 days, indicating rising compliance risk. 14 duplicate invoices from Supplier ID: 8942 detected."
              impact="Quarantining these invoices prevents ₹12.5L in duplicate payouts and maintains clean GST reconciliation."
              confidence={96}
              actionText="Quarantine High-Risk Invoices"
            />
            
          </div>

          <div className="space-y-6">
            <EcosystemImpactPanel 
              upstream={["Supplier Invoicing Systems", "e-Invoicing API"]}
              dataSources={["GST Invoice Registry", "Optical Character Recognition (OCR)", "Historical Payouts"]}
              downstream={["Accounts Payable", "Cashflow Runway", "Auditor Reconciliation"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}