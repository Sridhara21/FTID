"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, UserX, BrainCircuit, Activity } from "lucide-react";
import { EcosystemImpactPanel } from "@/components/shared/observability/EcosystemImpactPanel";
import { DecisionEnginePanel } from "@/components/shared/observability/DecisionEnginePanel";

export default function BankFraudPage() {
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
            <h1 className="text-3xl font-black text-white tracking-tight">Institutional Fraud Intelligence</h1>
            <p className="text-sm text-cyan-100/60 mt-2 max-w-2xl">
              Cross-bank mule detection, synthetic identity scoring, and behavioral anomaly flagging.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Mule Cluster Risk</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-rose-400 flex items-center gap-2">
                    <UserX className="h-5 w-5" />
                    High
                  </div>
                  <p className="text-xs text-rose-400/80 mt-1">14 accounts exhibiting circular flow</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Synthetic Identity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-amber-400 flex items-center gap-2">
                    <BrainCircuit className="h-5 w-5" />
                    12%
                  </div>
                  <p className="text-xs text-amber-400/80 mt-1">Aadhaar/PAN mismatch velocity</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Behavioral Anomaly</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-emerald-400 flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Normal
                  </div>
                  <p className="text-xs text-emerald-400/80 mt-1">Retail onboarding behavior expected</p>
                </CardContent>
              </Card>
            </div>

            <DecisionEnginePanel 
              primaryQuestion="Should the bank freeze these 14 newly boarded retail accounts?"
              recommendation="Accounts demonstrate 98% correlation with a known synthetic identity syndicate operating out of Tier-2 regions. Circular rapid transfers detected."
              impact="Freezing avoids ₹4.2 Cr in potential outward money laundering and protects regulatory compliance rating."
              confidence={98}
              actionText="Execute Batch Debit Block"
            />
            
          </div>

          <div className="space-y-6">
            <EcosystemImpactPanel 
              upstream={["Citizen eKYC Onboarding", "Aadhaar Auth Services"]}
              dataSources={["Cross-Bank Fraud Registry (RBI)", "NPCI Transaction Velocity", "Telecom Geolocation"]}
              downstream={["Gateway Payment Blocking", "Regulator EWS Alert", "Police Cyber Cell (FIR)"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}