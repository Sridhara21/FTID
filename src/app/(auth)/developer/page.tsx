"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, Shield, TrendingUp, AlertCircle, FileText, Database, ShieldCheck, Zap, Network, Users } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";

export default function DeveloperMainPage() {
  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
                India Stack for FTID
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Dashboard</h1>
            <p className="text-sm text-emerald-400 mt-2 font-mono flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> 
              KEY QUESTION: "How can institutions integrate with FTID?"
            </p>
          </div>
        </header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
<V2MetricWidget title="API Reliability Score" value={99.99} trend="up" explanation="Percentage of successful API calls across all sovereign endpoints over the last 30 days." />
<V2MetricWidget title="Ecosystem Adoption Metrics" value={1250} trend="up" explanation="Number of verified institutions currently routing data through the FTID network." />
<V2MetricWidget title="Integration Success Rate" value={94.5} trend="up" explanation="Ratio of successful sandbox-to-production deployment transitions by registered developers." />
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<Card className="bg-[#0a1520] border-cyan-900/30 h-full">
<CardHeader>
<CardTitle className="text-white">Live API Endpoint Status</CardTitle>
<CardDescription className="text-slate-400">Real-time health of core integration routes</CardDescription>
</CardHeader>
<CardContent className="border-t border-cyan-900/20 pt-6">
  <div className="space-y-4">
    {[
      { endpoint: "/api/v1/auth/institution", status: "Operational", latency: "42ms", color: "text-emerald-400" },
      { endpoint: "/api/v1/credit/underwrite", status: "Operational", latency: "115ms", color: "text-emerald-400" },
      { endpoint: "/api/v1/gateway/clear", status: "Degraded", latency: "840ms", color: "text-amber-400" },
      { endpoint: "/api/v1/auditor/trail", status: "Operational", latency: "65ms", color: "text-emerald-400" }
    ].map((item, i) => (
      <div key={i} className="flex justify-between items-center p-3 bg-cyan-950/20 rounded border border-cyan-900/30">
        <div>
          <div className="text-white font-mono text-sm">{item.endpoint}</div>
          <div className="text-xs text-slate-400">Latency: {item.latency}</div>
        </div>
        <div className={`text-sm font-bold flex items-center gap-2 ${item.color}`}>
          <div className={`w-2 h-2 rounded-full ${item.status === 'Operational' ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`}></div>
          {item.status}
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