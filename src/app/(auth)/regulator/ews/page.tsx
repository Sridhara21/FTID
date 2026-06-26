"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertOctagon, TrendingDown, TrendingUp, Activity, MapPin, Target, ShieldAlert, Zap } from "lucide-react";
import { useScenario } from "@/components/ScenarioContext";
import { DemoGuide } from "@/components/shared/DemoGuide";

export default function RegulatorEWSPage() {
  const { scenario } = useScenario();
  const isImpacted = scenario.isActive && scenario.demoStep >= 5;

  const threats = [
    {
      id: "TR-882",
      name: "Cooperative Bank Deposit Hemorrhage",
      region: "Western Cluster (Maharashtra & Gujarat)",
      severity: isImpacted ? "Moderate" : "Critical",
      sector: "Tier-3 Cooperative Banking",
      impact: isImpacted ? "₹1,200 Cr (Stabilizing due to liquidity injection)" : "₹4,500 Cr (Immediate Flight Risk)",
      action: isImpacted ? "Monitor Reserve Ratio Daily" : "Deploy Emergency Liquidity Backstop",
      color: isImpacted ? "amber" : "rose"
    },
    {
      id: "TR-904",
      name: "UPI Mule Network Proliferation",
      region: "Eastern Corridor",
      severity: "High",
      sector: "Retail Payments",
      impact: "₹850 Cr (Laundering Risk)",
      action: "Freeze Suspect Nodes & Initiate Graph Audit",
      color: "orange"
    },
    {
      id: "TR-911",
      name: "Agri-Loan Synthetic Default Ring",
      region: "Northern Belt",
      severity: "Moderate",
      sector: "Agricultural Credit",
      impact: "₹320 Cr (Asset Quality Degradation)",
      action: "Cross-Reference with Remote Sensing Crop Data",
      color: "amber"
    }
  ];

  return (
    <div className={`min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden transition-colors duration-1000`}>
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-rose-900/10 blur-[120px] rounded-full pointer-events-none z-0 transition-colors duration-1000`}></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-rose-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-rose-900/30 text-rose-400 text-[10px] font-bold tracking-widest uppercase rounded">
                COMMAND CENTER
              </span>
              <span className={`flex items-center gap-1 text-[10px] font-bold ${isImpacted ? "text-amber-400" : "text-rose-500"} uppercase tracking-widest animate-pulse`}>
                <div className={`w-1.5 h-1.5 rounded-full ${isImpacted ? "bg-amber-400" : "bg-rose-500"}`}></div>
                {isImpacted ? "Monitoring Systemic Recalibration" : "Multiple Active Threats"}
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Early Warning System (EWS)</h1>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Live threat detection engine identifying systemic banking stress, massive fraud clusters, and liquidity crises before they propagate.
            </p>
          </div>
        </header>

        <div className="grid gap-6">
          {threats.map((threat) => (
            <Card key={threat.id} className={`bg-[#0a1520] border-${threat.color}-900/30 overflow-hidden relative group`}>
              <div className={`absolute top-0 left-0 w-1 h-full bg-${threat.color}-500`}></div>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className={`text-xs font-bold text-${threat.color}-400 mb-1 flex items-center gap-2`}>
                          <ShieldAlert className="w-4 h-4" /> 
                          {threat.id} • SEVERITY: {threat.severity.toUpperCase()}
                        </div>
                        <h3 className="text-xl font-bold text-white">{threat.name}</h3>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-slate-500 text-xs font-bold uppercase mb-1">Region</p>
                        <p className="flex items-center gap-2 text-slate-300"><MapPin className="w-4 h-4 text-cyan-500" /> {threat.region}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs font-bold uppercase mb-1">Affected Sector</p>
                        <p className="flex items-center gap-2 text-slate-300"><Target className="w-4 h-4 text-emerald-500" /> {threat.sector}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`md:w-1/3 p-4 rounded-lg bg-${threat.color}-950/20 border border-${threat.color}-900/30 flex flex-col justify-center space-y-3`}>
                    <div>
                      <p className={`text-xs font-bold uppercase text-${threat.color}-400 mb-1`}>Estimated Impact</p>
                      <p className="text-lg font-mono text-white">{threat.impact}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-cyan-400 mb-1 flex items-center gap-1">
                        <Zap className="w-3 h-3" /> Recommended Action
                      </p>
                      <p className="text-sm text-slate-200">{threat.action}</p>
                    </div>
                  </div>
                  
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <DemoGuide nextStopUrl="/regulator/graph" label="Financial Graph" />
    </div>
  );
}