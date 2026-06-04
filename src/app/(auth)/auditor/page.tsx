"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, Shield, TrendingUp, AlertCircle, FileText, Database, ShieldCheck, Zap, Network, Users } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";

export default function AuditorMainPage() {
  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
                Verification & Traceability
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Dashboard</h1>
            <p className="text-sm text-emerald-400 mt-2 font-mono flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> 
              KEY QUESTION: "What requires investigation?"
            </p>
          </div>
        </header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
<V2MetricWidget title="Audit Confidence Score" value={98.7} trend="up" explanation="Cryptographic certainty that reported ledgers match underlying CBDC and UPI flows." />
<V2MetricWidget title="Reconciliation Accuracy" value={99.9} trend="up" explanation="Real-time match rate between institutional balance sheets and national tax filings." />
<V2MetricWidget title="Hidden Liability Indicator" value={1.2} trend="down" explanation="Detected probability of off-balance-sheet exposures or informal debt servicing." />
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<Card className="bg-[#0a1520] border-cyan-900/30 h-full">
<CardHeader>
<CardTitle className="text-white">Live Audit Exceptions</CardTitle>
<CardDescription className="text-slate-400">Anomalies detected across institutional filings</CardDescription>
</CardHeader>
<CardContent className="border-t border-cyan-900/20 pt-6">
  <div className="space-y-4">
    {[
      { id: "AUD-9912", issue: "GST vs Inventory Mismatch", impact: "High", color: "text-amber-400" },
      { id: "AUD-9913", issue: "Unverified Capital Injection", impact: "Critical", color: "text-rose-400" },
      { id: "AUD-9914", issue: "Cross-border Settlement Delay", impact: "Medium", color: "text-cyan-400" }
    ].map((item, i) => (
      <div key={i} className="flex justify-between items-center p-3 bg-cyan-950/20 rounded border border-cyan-900/30">
        <div>
          <div className="text-white font-mono text-sm">{item.id}</div>
          <div className="text-xs text-slate-400">{item.issue}</div>
        </div>
        <div className={`text-sm font-bold ${item.color}`}>
          {item.impact}
        </div>
      </div>
    ))}
  </div>
</CardContent>
</Card>
</div>
<div>
<V2InsightsFeed title="Actionable Intelligence" />
</div>
</div>

      </div>
    </div>
  );
}