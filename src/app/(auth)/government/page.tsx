"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, Landmark, TrendingUp } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";
import { ScenarioRunButton } from "@/components/shared/ScenarioRunButton";
import { useScenario } from "@/components/ScenarioContext";
import { DemoGuide } from "@/components/shared/DemoGuide";
import { IndiaMapSVG } from "@/components/shared/v2/IndiaMapSVG";

export default function GovernmentMainPage() {
  const { scenario } = useScenario();
  const isImpacted = scenario.isActive && scenario.currentStep >= 7;

  const gdpGrowth = isImpacted ? 7.8 : 6.5;
  const taxCompliance = isImpacted ? 91.2 : 82.5;
  const msmeActivity = isImpacted ? 124.5 : 88.0;
  const formalization = isImpacted ? 68.4 : 64.2;

  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-indigo-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-indigo-900/30 text-indigo-400 text-[10px] font-bold tracking-widest uppercase rounded">
                Economic Intelligence Layer
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
              <Landmark className="w-8 h-8 text-indigo-400" />
              Government Dashboard
            </h1>
            <p className="text-sm text-emerald-400 mt-2 font-mono flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> 
              KEY QUESTION: "What is happening in the economy?"
            </p>
          </div>
          <div>
            <ScenarioRunButton />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <V2MetricWidget 
            title="GDP Activity Index" 
            value={gdpGrowth} 
            trend={isImpacted ? "up" : "down"} 
            trendValue={isImpacted ? 1.3 : 0.2}
            progress={gdpGrowth * 10}
            explanation="Live macroeconomic output proxy based on UPI + GSTN velocity." 
          />
          <V2MetricWidget 
            title="Tax Participation Rate" 
            value={taxCompliance} 
            trend={isImpacted ? "up" : "up"} 
            trendValue={isImpacted ? 8.7 : 1.1}
            progress={taxCompliance}
            explanation="Percentage of corporate entities matching expected advance tax outflows." 
          />
          <V2MetricWidget 
            title="MSME Growth Indicator" 
            value={msmeActivity} 
            trend={isImpacted ? "up" : "down"} 
            trendValue={isImpacted ? 36.5 : 4.2}
            progress={msmeActivity > 100 ? 100 : msmeActivity}
            explanation="Relative index of B2B transactions in the micro and small sector (Baseline=100)." 
          />
          <V2MetricWidget 
            title="Subsidy Efficiency Index" 
            value={formalization} 
            trend="up" 
            trendValue={isImpacted ? 4.2 : 0.5}
            progress={formalization}
            explanation="Precision targeting metric for DBT (Direct Benefit Transfers) based on leakages." 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="bg-[#0a1520] border-indigo-900/30 h-full">
              <CardHeader className="flex flex-row items-start justify-between pb-2">
                <div>
                  <CardTitle className="text-white">National Policy Heatmap</CardTitle>
                  <CardDescription className="text-slate-400">Live sectoral impact of current fiscal and monetary regimes</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="px-2 py-1 rounded bg-indigo-900/30 border border-indigo-500/30 text-xs text-indigo-300 font-mono flex items-center gap-2 cursor-pointer hover:bg-indigo-900/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Tier 3 Cities
                  </div>
                  <div className="px-2 py-1 rounded bg-slate-800/50 border border-slate-700 text-xs text-slate-400 font-mono cursor-pointer hover:bg-slate-800">
                    Target: MSME
                  </div>
                </div>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center border-t border-indigo-900/20 p-6 relative">
                <IndiaMapSVG />
              </CardContent>
            </Card>
          </div>
          <div>
            <V2InsightsFeed 
              title="Fiscal Intelligence" 
              items={[
                { icon: Landmark, color: "text-emerald-400", bg: "bg-emerald-400/10", text: "Direct Benefit Transfer (DBT) leakage reduced by 14% this quarter due to precise Aadhar-UPI routing." },
                { icon: AlertCircle, color: "text-amber-400", bg: "bg-amber-400/10", text: "Advance Tax collection lagging by 4% in Tier-2 manufacturing zones. Recommend targeted stimulus." },
                { icon: TrendingUp, color: "text-cyan-400", bg: "bg-cyan-400/10", text: "GST compliance rate hit an all-time high of 94.2% following the deployment of automated e-invoicing reconciliation." }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}