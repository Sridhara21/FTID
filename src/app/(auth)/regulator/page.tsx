"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";
import { ScenarioRunButton } from "@/components/shared/ScenarioRunButton";
import { DemoGuide } from "@/components/shared/DemoGuide";
import { useScenario } from "@/components/ScenarioContext";

export default function RegulatorMainPage() {
  const { scenario } = useScenario();

  // Scenario impact logic (Step 8: Regulator dashboard updates)
  const isImpacted = scenario.isActive && scenario.currentStep >= 8;

  const stabilityIndex = isImpacted ? 94.2 : 89.4;
  const fraudExposure = isImpacted ? 12.1 : 18.5;
  const economicTrust = isImpacted ? 88.7 : 81.2;
  const systemicRisk = isImpacted ? 2.5 : 14.2;

  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
                National Financial Stability Command Center
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Regulator Dashboard</h1>
            <p className="text-sm text-emerald-400 mt-2 font-mono flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> 
              KEY QUESTION: "Where is the next financial threat emerging?"
            </p>
          </div>
          <div>
            <ScenarioRunButton />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <V2MetricWidget 
            title="National Stability Index" 
            value={stabilityIndex} 
            trend={isImpacted ? "up" : "down"} 
            trendValue={isImpacted ? 4.8 : 1.2}
            progress={stabilityIndex}
            explanation="Aggregate measure of macroeconomic resilience and institutional solvency." 
          />
          <V2MetricWidget 
            title="Fraud Exposure Index" 
            value={fraudExposure} 
            trend={isImpacted ? "down" : "up"} 
            trendValue={isImpacted ? 6.4 : 2.1}
            progress={fraudExposure * 2} // visual scaling
            explanation="Real-time probability of systemic fraud clusters across the network." 
          />
          <V2MetricWidget 
            title="Economic Trust Index" 
            value={economicTrust} 
            trend="up" 
            trendValue={isImpacted ? 7.5 : 0.5}
            progress={economicTrust}
            explanation="Sentiment and reliability score based on inter-bank and citizen activity." 
          />
          <V2MetricWidget 
            title="Systemic Risk Score" 
            value={systemicRisk} 
            trend={isImpacted ? "down" : "up"} 
            trendValue={isImpacted ? 11.7 : 2.1}
            progress={systemicRisk * 5}
            explanation="Calculated vulnerability to cascading defaults across interconnected institutions. Click for detailed forensic breakdown." 
            href="/regulator/systemic-risk"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="bg-[#0a1520] border-cyan-900/30 h-full">
              <CardHeader>
                <CardTitle className="text-white">National Threat Matrix</CardTitle>
                <CardDescription className="text-slate-400">Live surveillance of systemic risks and sectoral vulnerabilities</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center border-t border-cyan-900/20 relative overflow-hidden">
                {/* Simulated threat matrix visualization */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#0a1520] to-[#0a1520]"></div>
                
                <div className="grid grid-cols-3 gap-4 w-full h-full p-4 relative z-10">
                  <div className={`border rounded p-4 flex flex-col justify-center items-center transition-colors ${isImpacted ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-rose-500/50 bg-rose-500/10'}`}>
                    <span className="text-xs text-slate-400 uppercase">Shadow Banking Risk</span>
                    <span className={`text-2xl font-bold mt-2 ${isImpacted ? 'text-emerald-400' : 'text-rose-400'}`}>{isImpacted ? 'Low' : 'Critical'}</span>
                  </div>
                  <div className="border border-cyan-500/30 bg-cyan-500/10 rounded p-4 flex flex-col justify-center items-center">
                    <span className="text-xs text-slate-400 uppercase">Cross-Border Flows</span>
                    <span className="text-2xl font-bold text-cyan-400 mt-2">Nominal</span>
                  </div>
                  <div className={`border rounded p-4 flex flex-col justify-center items-center transition-colors ${isImpacted ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-amber-500/50 bg-amber-500/10'}`}>
                    <span className="text-xs text-slate-400 uppercase">MSME Default Probability</span>
                    <span className={`text-2xl font-bold mt-2 ${isImpacted ? 'text-emerald-400' : 'text-amber-400'}`}>{isImpacted ? 'Decreasing' : 'Elevated'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <V2InsightsFeed 
              title="Supervisory Alerts" 
              items={[
                { icon: AlertCircle, color: "text-rose-400", bg: "bg-rose-400/10", text: "CRITICAL: Shadow banking liquidity gap expanding. 3 NBFCs showing coordinated stress signals." },
                { icon: ShieldCheck, color: "text-emerald-400", bg: "bg-emerald-400/10", text: "Inter-bank settlement queue cleared successfully within 8ms tolerance." },
                { icon: Activity, color: "text-cyan-400", bg: "bg-cyan-400/10", text: "New node integration: 'FinTech Corp X' successfully onboarded to the Account Aggregator framework." }
              ]}
            />
          </div>
        </div>
      </div>
      <DemoGuide nextStopUrl="/regulator/ews" label="Early Warning System" />
    </div>
  );
}