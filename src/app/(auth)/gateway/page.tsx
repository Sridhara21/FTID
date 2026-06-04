"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, Network, TrendingUp } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";
import { useScenario } from "@/components/ScenarioContext";

export default function GatewayMainPage() {
  const { scenario } = useScenario();
  const isImpacted = scenario.isActive && scenario.currentStep >= 6;

  const throughput = isImpacted ? 14200 : 8500;
  const successRate = isImpacted ? 99.1 : 99.8;
  const settlementVol = isImpacted ? 8450 : 3200;
  const networkHealth = isImpacted ? 85 : 99;

  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-purple-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-[10px] font-bold tracking-widest uppercase rounded">
                National Payment Infrastructure
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
              <Network className="w-8 h-8 text-purple-400" />
              Gateway Dashboard
            </h1>
            <p className="text-sm text-emerald-400 mt-2 font-mono flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> 
              KEY QUESTION: "Is the payment infrastructure healthy?"
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <V2MetricWidget 
            title="Transactions Per Second (TPS)" 
            value={throughput} 
            trend={isImpacted ? "up" : "up"} 
            trendValue={isImpacted ? 67.0 : 4.5}
            progress={throughput / 150}
            explanation="Live packet volume clearing through the sovereign switch." 
          />
          <V2MetricWidget 
            title="Success Rate" 
            value={successRate} 
            trend={isImpacted ? "down" : "up"} 
            trendValue={isImpacted ? 0.7 : 0.1}
            progress={successRate}
            explanation="Percentage of transactions clearing without technical drops." 
          />
          <V2MetricWidget 
            title="Settlement Vol (Cr/hr)" 
            value={settlementVol} 
            trend={isImpacted ? "up" : "down"} 
            trendValue={isImpacted ? 164.0 : 2.4}
            progress={settlementVol / 100}
            explanation="Total monetary value currently moving through the ledger." 
          />
          <V2MetricWidget 
            title="Network Health Score" 
            value={networkHealth} 
            trend={isImpacted ? "down" : "up"} 
            trendValue={isImpacted ? 14.1 : 0.5}
            progress={networkHealth}
            explanation="Aggregate infrastructure stability and API response latency." 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="bg-[#0a1520] border-purple-900/30 h-full">
              <CardHeader>
                <CardTitle className="text-white">Live Node Latency</CardTitle>
                <CardDescription className="text-slate-400">Real-time observability of switch capacity</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center border-t border-purple-900/20 relative">
                {isImpacted ? (
                  <div className="absolute inset-0 bg-amber-900/10 flex flex-col items-center justify-center">
                    <TrendingUp className="w-12 h-12 text-amber-400 mb-4 animate-bounce" />
                    <p className="text-lg font-bold text-amber-400">Capacity Strain Detected</p>
                    <p className="text-sm font-mono text-amber-500/70">Massive concurrent API calls resulting from macro injection</p>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col justify-end px-4 pb-4 gap-2">
                     {/* Static Line Mock */}
                     <div className="flex items-end gap-1 h-32">
                       {[20, 25, 22, 28, 24, 21, 26, 23, 27, 25, 22, 26].map((h, i) => (
                         <div key={i} className="flex-1 bg-purple-500/30 rounded-t-sm" style={{ height: `${h}%` }}></div>
                       ))}
                     </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          <div>
            <V2InsightsFeed title="API Alerts" />
          </div>
        </div>

      </div>
    </div>
  );
}