"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, Building2, ServerCrash, Store, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useScenario } from "@/components/ScenarioContext";

export default function RegulatorSystemicRiskPage() {
  const { scenario } = useScenario();
  
  // Dynamic risk score based on scenario
  const isImpacted = scenario.isActive && scenario.currentStep >= 8;
  const currentRiskScore = isImpacted ? 2.5 : 74.2;

  const riskFactors = [
    {
      title: "SBI Exposure limit breach",
      weight: 32,
      icon: Building2,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      border: "border-rose-500/30",
      detail: "Concentrated liquidity risk detected in cross-lending between Tier 1 bank and interconnected NBFCs."
    },
    {
      title: "NBFC Cluster stress",
      weight: 24,
      icon: TriangleAlert,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/30",
      detail: "Three major NBFCs showing identical asset-liability mismatch signatures."
    },
    {
      title: "MSME Delinquency spike",
      weight: 18,
      icon: Store,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "border-orange-500/30",
      detail: "Real-time GSTN data indicates a 14% drop in average working capital runways for manufacturing MSMEs."
    },
    {
      title: "Payment Gateway congestion",
      weight: 14,
      icon: ServerCrash,
      color: "text-rose-400",
      bg: "bg-rose-400/10",
      border: "border-rose-400/30",
      detail: "Node timeout latency exceeding 800ms during peak settlement windows."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rose-900/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-4xl mx-auto p-6 relative z-10 space-y-6">
        <Link href="/regulator" className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 text-sm font-bold transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Command Center
        </Link>
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6 mt-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-rose-900/30 text-rose-400 text-[10px] font-bold tracking-widest uppercase rounded">
                Forensic Drill-Down
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Systemic Risk Score: {currentRiskScore}</h1>
            <p className="text-sm text-slate-400 mt-2">
              Deep-dive analysis into the underlying macroeconomic factors driving current systemic vulnerability.
            </p>
          </div>
        </header>

        <div className="grid gap-6 mt-8">
          <div className="flex items-center gap-3 text-rose-400 font-bold mb-2">
            <AlertCircle className="h-5 w-5" /> 
            <span>Primary Contributing Factors</span>
          </div>

          <div className="space-y-4">
            {riskFactors.map((factor, index) => (
              <Card key={index} className={`bg-[#0a1520] ${factor.border} overflow-hidden relative group`}>
                <div className={`absolute top-0 left-0 w-1.5 h-full ${factor.bg} group-hover:w-full transition-all duration-500 ease-out z-0`}></div>
                <CardContent className="p-6 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${factor.bg} ${factor.border} border`}>
                      <factor.icon className={`h-6 w-6 ${factor.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{factor.title}</h3>
                      <p className="text-sm text-slate-400 mt-1 max-w-lg leading-relaxed">{factor.detail}</p>
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-col items-end">
                    <span className="text-3xl font-black text-white">{factor.weight}%</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Contribution</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-[#050c14] border-emerald-900/30 mt-6 border-dashed">
             <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-emerald-400">Simulation Complete</h4>
                  <p className="text-sm text-slate-400 mt-1">If the scenario engine injects a liquidity package, these weights dynamically recalculate to sub-5% vulnerability.</p>
                </div>
             </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}