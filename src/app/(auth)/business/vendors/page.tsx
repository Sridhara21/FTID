"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users2, ShieldAlert, Network, Store } from "lucide-react";
import { EcosystemImpactPanel } from "@/components/shared/observability/EcosystemImpactPanel";
import { DecisionEnginePanel } from "@/components/shared/observability/DecisionEnginePanel";

export default function BusinessVendorsPage() {
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
            <h1 className="text-3xl font-black text-white tracking-tight">Vendor Trust Network</h1>
            <p className="text-sm text-cyan-100/60 mt-2 max-w-2xl">
              Real-time supplier trust scoring, concentration risk, and shell entity detection.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Vendor Reliability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-emerald-400 flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5" />
                    84/100
                  </div>
                  <p className="text-xs text-emerald-400/80 mt-1">High network integrity</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Concentration Risk</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-amber-400 flex items-center gap-2">
                    <Network className="h-5 w-5" />
                    42%
                  </div>
                  <p className="text-xs text-amber-400/80 mt-1">Dependent on Top 3 vendors</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Shell Entity Flags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-rose-400 flex items-center gap-2">
                    <Store className="h-5 w-5" />
                    1 Entity
                  </div>
                  <p className="text-xs text-rose-400/80 mt-1">Suspicious corporate structure</p>
                </CardContent>
              </Card>
            </div>

            <DecisionEnginePanel 
              primaryQuestion="Is the supply chain secure against vendor collapse or compliance fraud?"
              recommendation="Vendor 'Apex Materials Ltd' exhibits characteristics of a shell entity (0 employees, overlapping director PANs). Additionally, concentration risk is dangerously high."
              impact="Freezing onboarding of 'Apex Materials Ltd' avoids potential AML flags from the Regulator and protects GST ITC eligibility."
              confidence={94}
              actionText="Freeze Suspicious Vendor Account"
            />
            
          </div>

          <div className="space-y-6">
            <EcosystemImpactPanel 
              upstream={["Vendor Corporate Filings", "Director KYC (PAN/Aadhaar)"]}
              dataSources={["MCA Database", "EPFO (Employee Counts)", "Bank Fraud Registry"]}
              downstream={["Supply Chain Disruption", "Business Compliance Score", "Regulator EWS"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}