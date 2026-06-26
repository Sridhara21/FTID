"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, Landmark, TrendingUp, TrendingDown, RefreshCw, Zap, Shield, Play, HelpCircle } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";
import { ScenarioRunButton } from "@/components/shared/ScenarioRunButton";
import { useScenario } from "@/components/ScenarioContext";
import { IndiaMapSVG } from "@/components/shared/v2/IndiaMapSVG";
import { InstitutionalReadinessBanner } from "@/components/shared/v2/InstitutionalReadinessBanner";
import { ConnectivityIndicator } from "@/components/shared/v2/ConnectivityIndicator";

export default function GovernmentMainPage() {
  const { scenario, triggerEvent, clearEvent } = useScenario();
  
  // Local simulator controls that override or augment the scenario
  const [selectedSector, setSelectedSector] = useState("All");
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const isDefaultSpike = scenario.activeEvent === "MSME_DEFAULT_SPIKE";
  const isLiquidityInjection = scenario.activeEvent === "LIQUIDITY_INJECTION";
  const isEconomicSlowdown = scenario.activeEvent === "ECONOMIC_SLOWDOWN";
  const isSubsidyExpansion = scenario.activeEvent === "SUBSIDY_EXPANSION" || activePolicy === "SUBSIDY";

  // Dynamic GDP calculation
  const gdpBase = 6.8;
  const gdpGrowth = isEconomicSlowdown 
    ? gdpBase - 2.1 
    : isSubsidyExpansion 
    ? gdpBase + 1.2 
    : isLiquidityInjection 
    ? gdpBase + 0.8 
    : gdpBase;

  // Tax Participation Rate
  const taxBase = 84.5;
  const taxCompliance = isEconomicSlowdown 
    ? taxBase - 6.2 
    : activePolicy === "GST_AUDIT" 
    ? taxBase + 8.1 
    : taxBase;

  // MSME Growth Indicator
  const msmeBase = 100;
  const msmeActivity = isDefaultSpike 
    ? msmeBase - 22.0 
    : isEconomicSlowdown 
    ? msmeBase - 12.5 
    : isSubsidyExpansion 
    ? msmeBase + 18.2 
    : msmeBase;

  // Subsidy Efficiency Index
  const formalizationBase = 72.4;
  const formalization = isSubsidyExpansion 
    ? formalizationBase + 11.5 
    : isDefaultSpike 
    ? formalizationBase - 5.0 
    : formalizationBase;

  // Simulator Policy Effects Outputs
  const getPolicyOutputs = () => {
    switch (activePolicy) {
      case "SUBSIDY":
        return { gdp: "+1.2%", inflation: "+0.3%", employment: "+4.5%", revenue: "-₹1,200 Cr (Subvention Expense)", msme: "+18.2%" };
      case "LIQUIDITY":
        return { gdp: "+0.8%", inflation: "+0.6%", employment: "+2.1%", revenue: "Neutral", msme: "+9.5%" };
      case "GST_AUDIT":
        return { gdp: "-0.2% (Short-term Friction)", inflation: "Neutral", employment: "Neutral", revenue: "+₹4,200 Cr (Compliance Boost)", msme: "-2.4% (Informal Squeeze)" };
      default:
        return { gdp: "Baseline", inflation: "Baseline", employment: "Baseline", revenue: "Baseline", msme: "Baseline" };
    }
  };

  const outputs = getPolicyOutputs();

  const handlePolicyTrigger = (policy: string) => {
    setActivePolicy(policy);
    if (policy === "SUBSIDY") {
      triggerEvent("SUBSIDY_EXPANSION");
    } else if (policy === "LIQUIDITY") {
      triggerEvent("LIQUIDITY_INJECTION");
    }
  };

  const handleReset = () => {
    setActivePolicy(null);
    clearEvent();
  };

  return (
    <div className="space-y-6">
      
      {/* Institutional Readiness Header */}
      <InstitutionalReadinessBanner
        portalName="Government Portal"
        purpose="What is happening in the national economy and how do active policy regimes alter growth indicators?"
        dataSources={["GSTN tax streams", "FASTag Toll Switch", "PFMS Subsidies", "NPCI UPI Volume"]}
        intelligenceGenerated={["GDP Activity Proxy", "Tax Compliance Index", "MSME Growth Indexes", "DBT Target Precision"]}
        decisionEnabled="Ministry of Finance allocates emergency interest subvention schemes or adjusts tax compliance audits"
        legacyProcess="Government relies on quarterly or annual GDP surveys and manual tax reconciliation logs, resulting in delayed fiscal policy interventions."
        ftidProcess="Government observes live transaction indices, simulates interest/tax policies, and verifies DBT efficiency."
      />

      {/* Connectivity Indicator */}
      <ConnectivityIndicator
        upstream={["Gateway Transaction Switch", "Sovereign Tax Filings"]}
        downstream={["Regulator Supervisory Console", "Executive Outcome Center"]}
      />

      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-indigo-900/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-indigo-900/30 text-indigo-400 text-[10px] font-bold tracking-widest uppercase rounded">
              National Economic Intelligence Layer
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <Landmark className="w-8 h-8 text-indigo-400" />
            Government Command Center
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <ScenarioRunButton />
          {(scenario.isActive || activePolicy) && (
            <button 
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-bold rounded transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset Pulse
            </button>
          )}
        </div>
      </header>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <V2MetricWidget 
          title="GDP Activity Proxy" 
          value={`${gdpGrowth.toFixed(1)}%`} 
          trend={gdpGrowth >= gdpBase ? "up" : "down"} 
          trendValue={Math.abs(gdpGrowth - gdpBase)}
          progress={gdpGrowth * 10}
          explanation="Live macroeconomic output proxy calculated from aggregate UPI, GSTN, and Toll Collection velocity." 
          dataSources={["UPI Registry", "GSTN", "FASTag Tolls"]}
          contributors={[
            { label: "B2B UPI Volume", type: "positive" },
            { label: "Retail trade slowdown", type: isEconomicSlowdown ? "negative" : "positive" }
          ]}
        />
        <V2MetricWidget 
          title="Tax Compliance Index" 
          value={`${taxCompliance.toFixed(1)}%`} 
          trend={taxCompliance >= taxBase ? "up" : "down"} 
          trendValue={Math.abs(taxCompliance - taxBase)}
          progress={taxCompliance}
          explanation="Percentage of registered corporate entities matching forecasted advance tax obligations on time." 
          dataSources={["GSTN API", "Income Tax Dept"]}
          contributors={[
            { label: "GST automated matching", type: "positive" },
            { label: "Liquidity crunch default", type: isEconomicSlowdown ? "negative" : "positive" }
          ]}
        />
        <V2MetricWidget 
          title="MSME Growth Index" 
          value={msmeActivity.toFixed(0)} 
          trend={msmeActivity >= msmeBase ? "up" : "down"} 
          trendValue={Math.abs(msmeActivity - msmeBase) / 10}
          progress={msmeActivity > 120 ? 100 : msmeActivity}
          explanation="Relative index of verified B2B transactions in the micro and small sector (Baseline=100)." 
          dataSources={["TReDS Platform", "GSTN Invoices"]}
          contributors={[
            { label: "Tier-1 anchor orders", type: "positive" },
            { label: "Supply chain payment locks", type: isDefaultSpike ? "negative" : "positive" }
          ]}
          action={isDefaultSpike ? "Deploy Emergency Interest Subvention Scheme." : "Maintain baseline support."}
        />
        <V2MetricWidget 
          title="DBT Target Precision" 
          value={`${formalization.toFixed(1)}%`} 
          trend={formalization >= formalizationBase ? "up" : "down"} 
          trendValue={Math.abs(formalization - formalizationBase)}
          progress={formalization}
          explanation="Precision targeting score of Direct Benefit Transfers based on digital profile verification." 
          dataSources={["Aadhaar Registry", "PFMS", "NPCI Mapping"]}
          contributors={[
            { label: "Verification filters", type: "positive" },
            { label: "Regional database lag", type: isDefaultSpike ? "negative" : "positive" }
          ]}
        />
      </div>

      {/* Policy Simulator Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          
          <Card className="bg-[#0a1520] border-indigo-900/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-indigo-400" />
                National Policy Simulator
              </CardTitle>
              <CardDescription className="text-slate-400">
                Simulate policy interventions to observe projected real-time economic adjustments
              </CardDescription>
            </CardHeader>
            <CardContent className="border-t border-indigo-900/20 pt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    id: "SUBSIDY",
                    title: "MSME Interest Subvention",
                    desc: "Provide 3% interest subsidy to GST-compliant MSMEs.",
                    impact: "Boosts MSME Index & DBT precision, increases GDP growth.",
                    actionText: "Deploy Subsidy"
                  },
                  {
                    id: "LIQUIDITY",
                    title: "Emergency Credit Line",
                    desc: "Unlock ₹50,000 Crore bank credit guarantee scheme.",
                    impact: "Drastically lowers Portfolio Risk, stabilizes cash reserves.",
                    actionText: "Inject Capital"
                  },
                  {
                    id: "GST_AUDIT",
                    title: "Compliance Audit Rate",
                    desc: "Increase automated invoice matching checks via ONDC.",
                    impact: "Improves Tax Compliance, tightens informal transactions.",
                    actionText: "Optimize Auditing"
                  }
                ].map((policy) => (
                  <div 
                    key={policy.id} 
                    className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                      activePolicy === policy.id
                        ? "bg-indigo-950/20 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                        : "bg-[#050c14] border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{policy.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-3">{policy.desc}</p>
                      <div className="bg-[#020810] p-2 rounded text-[10px] text-indigo-300 font-mono mb-4 leading-normal">
                        <strong>Impact Profile:</strong> {policy.impact}
                      </div>
                    </div>
                    <button
                      onClick={() => handlePolicyTrigger(policy.id)}
                      disabled={activePolicy === policy.id}
                      className={`w-full py-2 rounded text-xs font-bold transition-all flex justify-center items-center gap-1.5 ${
                        activePolicy === policy.id
                          ? "bg-indigo-500/20 text-indigo-300 cursor-not-allowed border border-indigo-500/30"
                          : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_10px_rgba(99,102,241,0.3)]"
                      }`}
                    >
                      <Play className="w-3 h-3" /> {policy.actionText}
                    </button>
                  </div>
                ))}
              </div>

              {activePolicy && (
                <div className="p-4 bg-[#050c14] border border-indigo-500/30 rounded-lg space-y-3 font-mono text-xs animate-in slide-in-from-top-2 duration-300">
                  <div className="text-indigo-400 font-bold">// Projected System Adjustments:</div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    <div>
                      <span className="text-slate-500 block text-[9px] uppercase font-bold">GDP Impact</span>
                      <span className="text-white font-bold">{outputs.gdp}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[9px] uppercase font-bold">Inflation</span>
                      <span className="text-white font-bold">{outputs.inflation}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[9px] uppercase font-bold">Employment</span>
                      <span className="text-white font-bold">{outputs.employment}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[9px] uppercase font-bold">Fiscal Budget</span>
                      <span className="text-white font-bold">{outputs.revenue}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[9px] uppercase font-bold">MSME Index</span>
                      <span className="text-white font-bold">{outputs.msme}</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Geographic Heatmap */}
          <Card className="bg-[#0a1520] border-indigo-900/30">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-white">National Activity Heatmap</CardTitle>
                <CardDescription className="text-slate-400">
                  Real-time transaction mapping based on digital public infrastructure (DPI)
                </CardDescription>
              </div>
              <div className="flex gap-2">
                {["All", "Tier-1", "Tier-2/3"].map((sec) => (
                  <button
                    key={sec}
                    onClick={() => setSelectedSector(sec)}
                    className={`px-2.5 py-1 text-xs font-bold rounded border ${
                      selectedSector === sec 
                        ? "bg-indigo-900/40 border-indigo-500/40 text-indigo-300"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {sec}
                  </button>
                ))}
              </div>
            </CardHeader>
            <CardContent className="h-[280px] flex items-center justify-center border-t border-indigo-900/20 p-6 relative">
              <IndiaMapSVG />
            </CardContent>
          </Card>

        </div>
        <div>
          <V2InsightsFeed 
            title="Economic Observability Feed" 
            items={[
              { 
                icon: Landmark, 
                color: "text-emerald-400", 
                bg: "bg-emerald-400/10", 
                text: "Direct Benefit Transfer (DBT) target accuracy achieved 99.1% in experimental blocks via Aadhaar profile matching." 
              },
              { 
                icon: AlertCircle, 
                color: isDefaultSpike ? "text-rose-400" : "text-amber-400", 
                bg: isDefaultSpike ? "bg-rose-400/10" : "bg-amber-400/10", 
                text: isDefaultSpike 
                  ? "Alert: Secondary supplier default propagation threatens localized employment rates in electronics hubs." 
                  : "Warning: High correlation detected between regional GST revenue drops in Maharashtra and automotive parts manufacturing defaults." 
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}