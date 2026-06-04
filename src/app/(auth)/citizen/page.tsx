"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, User, Wallet } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";
import { useScenario } from "@/components/ScenarioContext";

export default function CitizenMainPage() {
  const { scenario } = useScenario();
  const isImpacted = scenario.isActive && scenario.currentStep >= 2;

  const healthScore = isImpacted ? 84 : 76;
  const liquidAssets = isImpacted ? 45000 : 38000;
  const creditReadiness = isImpacted ? 81 : 78;

  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-emerald-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-emerald-900/30 text-emerald-400 text-[10px] font-bold tracking-widest uppercase rounded">
                Personal Financial Operating System
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
              <User className="w-8 h-8 text-emerald-400" />
              Citizen Dashboard
            </h1>
            <p className="text-sm text-cyan-400 mt-2 font-mono flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> 
              KEY QUESTION: "Am I financially healthy?"
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <V2MetricWidget 
            title="Financial Health Score" 
            value={healthScore} 
            trend={isImpacted ? "up" : "up"} 
            trendValue={isImpacted ? 10.5 : 2.1}
            progress={healthScore}
            explanation="Aggregate score of savings rate, debt-to-income, and transaction stability." 
          />
          <V2MetricWidget 
            title="Economic Participation Index" 
            value={isImpacted ? 92 : 85} 
            trend={isImpacted ? "up" : "up"} 
            trendValue={isImpacted ? 8.2 : 1.1}
            progress={isImpacted ? 92 : 85}
            explanation="Measures active involvement in formal digital economy services." 
          />
          <V2MetricWidget 
            title="Debt Burden Ratio" 
            value={isImpacted ? 32 : 45} 
            trend={isImpacted ? "down" : "up"} 
            trendValue={isImpacted ? 13.0 : 2.5}
            progress={isImpacted ? 32 : 45}
            explanation="Proportion of monthly income committed to debt obligations." 
          />
          <V2MetricWidget 
            title="Savings Resilience Score" 
            value={liquidAssets} 
            trend={isImpacted ? "up" : "down"} 
            trendValue={isImpacted ? 18.4 : 1.2}
            progress={liquidAssets / 1000}
            explanation="Ability to withstand financial shocks based on liquid reserves." 
          />
          <V2MetricWidget 
            title="Scam Exposure Risk" 
            value={isImpacted ? 2.1 : 4.5} 
            trend={isImpacted ? "down" : "up"} 
            trendValue={isImpacted ? 53.3 : 12.0}
            progress={(isImpacted ? 2.1 : 4.5) * 10}
            explanation="Risk of current digital footprint encountering malicious network nodes." 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="bg-[#0a1520] border-emerald-900/30 h-full">
              <CardHeader>
                <CardTitle className="text-white">Live Transaction Graph</CardTitle>
                <CardDescription className="text-slate-400">Real-time observability of your personal cashflow network</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center border-t border-emerald-900/20 relative">
                {isImpacted && (
                  <div className="absolute inset-0 bg-emerald-900/10 flex flex-col items-center justify-center">
                    <Wallet className="w-12 h-12 text-emerald-400 mb-4 animate-bounce" />
                    <p className="text-lg font-bold text-emerald-400">Direct Benefit Transfer Received</p>
                    <p className="text-sm font-mono text-emerald-500/70">₹7,000 Credited via Sovereign UPI Route</p>
                  </div>
                )}
                {!isImpacted && (
                  <p className="text-emerald-500/50 font-mono text-sm">Awaiting Inbound Transactions...</p>
                )}
              </CardContent>
            </Card>
          </div>
          <div>
            <V2InsightsFeed title="Actionable Financial Advice" />
          </div>
        </div>

      </div>
    </div>
  );
}