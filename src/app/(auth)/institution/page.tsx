"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, Shield, TrendingUp, AlertCircle, FileText, Database, ShieldCheck, Zap, Network, Users } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";

export default function InstitutionMainPage() {
  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
                NBFC & Alternative Lending Control Center
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Institution Dashboard</h1>
            <p className="text-sm text-emerald-400 mt-2 font-mono flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> 
              KEY QUESTION: "What is my portfolio risk?"
            </p>
          </div>
        </header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
<V2MetricWidget title="Institutional Trust Score" value={842} trend="up" explanation="Cryptographically verified trust score derived from historical NPA data, capital adequacy, and regulatory compliance." />
<V2MetricWidget title="Portfolio Stress Index" value={14.2} trend="down" explanation="Real-time macro stress test indicator modeling the resilience of your current outstanding credit facilities." />
<V2MetricWidget title="NPA Risk Projection" value={2.1} trend="down" explanation="Forward-looking AI model predicting the 90-day probability of default across the MSME portfolio." />
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<Card className="bg-[#0a1520] border-cyan-900/30 h-full">
<CardHeader>
<CardTitle className="text-white">Portfolio Stress Distribution</CardTitle>
<CardDescription className="text-slate-400">Sector-wise breakdown of emerging credit risk</CardDescription>
</CardHeader>
<CardContent className="border-t border-cyan-900/20 pt-6">
  <div className="space-y-4">
    {[
      { sector: "Retail & Consumer", exposure: "₹450 Cr", risk: "Low", color: "text-emerald-400" },
      { sector: "MSME Manufacturing", exposure: "₹820 Cr", risk: "Moderate", color: "text-amber-400" },
      { sector: "Commercial Real Estate", exposure: "₹1,200 Cr", risk: "High", color: "text-rose-400" },
      { sector: "Agri-Tech & Supply", exposure: "₹340 Cr", risk: "Low", color: "text-emerald-400" }
    ].map((item, i) => (
      <div key={i} className="flex justify-between items-center p-3 bg-cyan-950/20 rounded border border-cyan-900/30">
        <div>
          <div className="text-white font-medium">{item.sector}</div>
          <div className="text-xs text-slate-400">Exposure: {item.exposure}</div>
        </div>
        <div className={`text-sm font-bold ${item.color}`}>
          {item.risk} Risk
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