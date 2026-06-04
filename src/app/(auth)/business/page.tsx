"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, Building2, TrendingUp } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";
import { useScenario } from "@/components/ScenarioContext";

export default function BusinessMainPage() {
  const { scenario } = useScenario();
  const isImpacted = scenario.isActive && scenario.currentStep >= 4;

  const revenue = isImpacted ? 450000 : 380000;
  const cashPosition = isImpacted ? 120000 : 85000;
  const creditReadiness = isImpacted ? 92 : 74;
  const growthForecast = isImpacted ? 18.5 : 12.2;

  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-blue-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-[10px] font-bold tracking-widest uppercase rounded">
                MSME Financial Operating System
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
              <Building2 className="w-8 h-8 text-blue-400" />
              Business Dashboard
            </h1>
            <p className="text-sm text-blue-400 mt-2 font-mono flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> 
              KEY QUESTION: "Can my business survive and grow?"
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <V2MetricWidget 
            title="Monthly Revenue (₹)" 
            value={revenue} 
            trend={isImpacted ? "up" : "up"} 
            trendValue={isImpacted ? 18.4 : 3.2}
            progress={revenue / 10000}
            explanation="Real-time aggregation of inward GSTN invoices and payment gateway settlements." 
          />
          <V2MetricWidget 
            title="Cash Position (₹)" 
            value={cashPosition} 
            trend={isImpacted ? "up" : "down"} 
            trendValue={isImpacted ? 41.1 : 2.5}
            progress={cashPosition / 2000}
            explanation="Total liquidity available across current accounts and short-term deposits." 
          />
          <V2MetricWidget 
            title="Credit Readiness Score" 
            value={creditReadiness} 
            trend={isImpacted ? "up" : "up"} 
            trendValue={isImpacted ? 24.3 : 1.1}
            progress={creditReadiness}
            explanation="Institutional likelihood of immediate loan approval based on verified cash flow." 
          />
          <V2MetricWidget 
            title="Growth Forecast" 
            value={growthForecast} 
            trend={isImpacted ? "up" : "down"} 
            trendValue={isImpacted ? 5.2 : 1.1}
            progress={growthForecast * 4}
            explanation="Predictive YoY growth based on current macro-economic velocity and order book." 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="bg-[#0a1520] border-blue-900/30 h-full">
              <CardHeader>
                <CardTitle className="text-white">Cash Flow Velocity</CardTitle>
                <CardDescription className="text-slate-400">Live observability of inbound revenue and working capital</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center border-t border-blue-900/20 relative">
                {isImpacted ? (
                  <div className="absolute inset-0 bg-emerald-900/10 flex flex-col items-center justify-center">
                     <TrendingUp className="w-12 h-12 text-emerald-400 mb-4 animate-bounce" />
                     <p className="text-lg font-bold text-emerald-400">Unprecedented Consumer Demand</p>
                     <p className="text-sm font-mono text-emerald-500/70">Point-of-sale volume up 18% in last 4 hours</p>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-end justify-between px-4 pb-4">
                     {/* Static Bar Chart Mock */}
                     {[40, 30, 45, 60, 50, 65, 55].map((h, i) => (
                       <div key={i} className="w-10 bg-blue-500/30 rounded-t-sm border-t-2 border-blue-400" style={{ height: `${h}%` }}></div>
                     ))}
                  </div>
                )}
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