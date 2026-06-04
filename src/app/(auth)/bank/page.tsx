"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, Shield, TrendingUp, AlertCircle, FileText, Database, ShieldCheck, Zap, Network, Users } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";

export default function BankMainPage() {
  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
                Credit and Risk Command Center
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Bank Dashboard</h1>
            <p className="text-sm text-emerald-400 mt-2 font-mono flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> 
              KEY QUESTION: "Should I lend to this entity?"
            </p>
          </div>
        </header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<V2MetricWidget title="Portfolio Risk Index" value={18.4} trend="down" explanation="Aggregated probability of default across the current outstanding loan book." />
<V2MetricWidget title="Loan Performance Forecast" value={94.2} trend="up" explanation="Projected on-time repayment rate for the next quarter based on macro indicators." />
<V2MetricWidget title="Credit Exposure Score" value={412} trend="up" explanation="Total systemic exposure to high-risk sectors normalized against tier-1 capital." />
<V2MetricWidget title="Liquidity Coverage Ratio" value={135.5} trend="up" explanation="Ratio of high-quality liquid assets to total net cash outflows over 30 days." />
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<Card className="bg-[#0a1520] border-cyan-900/30 h-full">
<CardHeader>
<CardTitle className="text-white">Active Loan Book Performance</CardTitle>
<CardDescription className="text-slate-400">Sectoral allocation and projected repayment velocity</CardDescription>
</CardHeader>
<CardContent className="border-t border-cyan-900/20 pt-6">
  <div className="space-y-4">
    {[
      { sector: "Retail Unsecured", amount: "₹4,500 Cr", status: "Performing", perf: "98.2%", color: "text-emerald-400" },
      { sector: "MSME Working Capital", amount: "₹8,200 Cr", status: "Watchlist", perf: "91.5%", color: "text-amber-400" },
      { sector: "Corporate Term", amount: "₹12,400 Cr", status: "Performing", perf: "99.1%", color: "text-emerald-400" }
    ].map((item, i) => (
      <div key={i} className="flex justify-between items-center p-3 bg-cyan-950/20 rounded border border-cyan-900/30">
        <div>
          <div className="text-white font-medium">{item.sector}</div>
          <div className="text-xs text-slate-400">Disbursed: {item.amount}</div>
        </div>
        <div className="text-right">
          <div className={`text-sm font-bold ${item.color}`}>{item.status}</div>
          <div className="text-xs font-mono text-cyan-400/70">Repayment: {item.perf}</div>
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