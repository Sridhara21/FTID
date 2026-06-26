"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, Shield, TrendingUp, TrendingDown, AlertCircle, FileText, Database, ShieldCheck, Zap, Network, Users } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";
import { useScenario } from "@/components/ScenarioContext";
import { InstitutionalReadinessBanner } from "@/components/shared/v2/InstitutionalReadinessBanner";
import { ConnectivityIndicator } from "@/components/shared/v2/ConnectivityIndicator";

export default function InstitutionMainPage() {
  const { scenario } = useScenario();

  const isDefaultSpike = scenario.activeEvent === "MSME_DEFAULT_SPIKE";
  const isLiquidityInjection = scenario.activeEvent === "LIQUIDITY_INJECTION";
  const isEconomicSlowdown = scenario.activeEvent === "ECONOMIC_SLOWDOWN";

  // Dynamic values based on active event
  const trustScoreBase = 842;
  const trustScore = isDefaultSpike ? trustScoreBase - 48 : isEconomicSlowdown ? trustScoreBase - 25 : isLiquidityInjection ? trustScoreBase + 18 : trustScoreBase;

  const stressIndexBase = 14.2;
  const stressIndex = isDefaultSpike ? stressIndexBase + 28.5 : isEconomicSlowdown ? stressIndexBase + 15.0 : isLiquidityInjection ? stressIndexBase - 6.2 : stressIndexBase;

  const npaRiskBase = 2.1;
  const npaRisk = isDefaultSpike ? npaRiskBase + 4.8 : isEconomicSlowdown ? npaRiskBase + 2.5 : isLiquidityInjection ? npaRiskBase - 0.9 : npaRiskBase;

  const exposureBase = 32.5; // Concentration %
  const exposure = isDefaultSpike ? exposureBase + 8.5 : exposureBase;

  // Sector stress distribution based on scenario
  const sectors = [
    { 
      sector: "MSME Manufacturing", 
      exposure: "₹820 Cr", 
      concentration: "26.4%", 
      risk: isDefaultSpike ? "CRITICAL" : isEconomicSlowdown ? "High" : "Moderate", 
      color: isDefaultSpike ? "text-rose-400" : isEconomicSlowdown ? "text-amber-400" : "text-amber-400" 
    },
    { 
      sector: "Commercial Real Estate", 
      exposure: "₹1,200 Cr", 
      concentration: "38.7%", 
      risk: isEconomicSlowdown ? "High" : "Moderate", 
      color: isEconomicSlowdown ? "text-rose-400" : "text-amber-400" 
    },
    { 
      sector: "Retail Unsecured Credit", 
      exposure: "₹450 Cr", 
      concentration: "14.5%", 
      risk: isDefaultSpike ? "Moderate" : "Low", 
      color: isDefaultSpike ? "text-amber-400" : "text-emerald-400" 
    },
    { 
      sector: "Agri-Infrastructure", 
      exposure: "₹630 Cr", 
      concentration: "20.4%", 
      risk: "Low", 
      color: "text-emerald-400" 
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* Institutional Readiness Header */}
      <InstitutionalReadinessBanner
        portalName="NBFC Portal"
        purpose="What is my active portfolio risk, stress distribution, and concentration bounds?"
        dataSources={["NBFC Core Ledger", "RBI Reporting Switch", "TReDS Activity logs"]}
        intelligenceGenerated={["Institutional Trust Scores", "Portfolio Stress Index", "NPA Projections"]}
        decisionEnabled="NBFC risk team allocates capital reserves, restricts sector exposure, or hedges portfolio holdings"
        legacyProcess="NBFC monitors portfolio default signals post-facto with a 30 to 90 day lag, resulting in delayed provisioning and high concentration risks."
        ftidProcess="NBFC receives real-time stress indicators, simulates liquidity requirements, and dynamically adjust risk-weights."
      />

      {/* Connectivity Indicator */}
      <ConnectivityIndicator
        upstream={["Bank Underwriting Hub"]}
        downstream={["Regulator Supervisory Console", "Executive Outcomes Page"]}
      />

      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
              NBFC & Alternative Lending Control Center
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Institution Dashboard</h1>
        </div>
      </header>

      {/* 4 explainable metric cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <V2MetricWidget 
          title="Institutional Trust Score" 
          value={trustScore} 
          trend={trustScore > trustScoreBase ? "up" : "down"}
          trendValue={Math.abs(trustScore - trustScoreBase) / 10}
          progress={trustScore / 10}
          explanation="Cryptographically verified trust score derived from historical NPA data, capital adequacy, and regulatory compliance." 
          dataSources={["Account Aggregator", "RBI CIBIL", "Auditor Ledger"]}
          contributors={[
            { label: "High Tier-1 Capital", type: "positive" },
            { label: "Sector Stress Variance", type: isDefaultSpike ? "negative" : "positive" }
          ]}
        />
        <V2MetricWidget 
          title="Portfolio Stress Index" 
          value={`${stressIndex.toFixed(1)}%`} 
          trend={stressIndex > stressIndexBase ? "up" : "down"}
          trendValue={Math.abs(stressIndex - stressIndexBase)}
          progress={stressIndex * 2}
          explanation="Real-time macro stress test indicator modeling the resilience of your current outstanding credit facilities." 
          dataSources={["GSTN Signals", "TReDS Activity", "UPI Flow Velocity"]}
          contributors={[
            { label: "Supplier defaults", type: isDefaultSpike ? "negative" : "positive" },
            { label: "Invoice settlement delay", type: isEconomicSlowdown ? "negative" : "positive" }
          ]}
        />
        <V2MetricWidget 
          title="NPA Risk Projection" 
          value={`${npaRisk.toFixed(1)}%`} 
          trend={npaRisk > npaRiskBase ? "up" : "down"}
          trendValue={Math.abs(npaRisk - npaRiskBase)}
          progress={npaRisk * 10}
          explanation="Forward-looking model predicting the 90-day probability of default across the portfolio." 
          dataSources={["Credit Bureau", "GSTN Transactions"]}
          contributors={[
            { label: "Macro cash squeeze", type: isEconomicSlowdown ? "negative" : "positive" },
            { label: "Automated recovery setups", type: "positive" }
          ]}
          action={npaRisk > 4 ? "Trigger emergency provisioning allocation." : "Risk is within normal limits."}
        />
        <V2MetricWidget 
          title="Sector Concentration Index" 
          value={`${exposure.toFixed(1)}%`} 
          trend={exposure > exposureBase ? "up" : "down"}
          trendValue={Math.abs(exposure - exposureBase)}
          progress={exposure * 2}
          explanation="Risk concentration index measuring exposure limits in single sector dependencies." 
          dataSources={["Internal Ledger", "Regulatory Caps"]}
          contributors={[
            { label: "Commercial Real Estate exposure", type: "negative" },
            { label: "Sovereign-backed MSME share", type: "positive" }
          ]}
          action={exposure > 35 ? "Rebalance portfolio to stay within 30% cap." : "Concentration limits healthy."}
        />
      </div>

      {/* Portfolio Stress Distribution Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-[#0a1520] border-cyan-900/30 h-full">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                Portfolio Stress & Concentration Distribution
              </CardTitle>
              <CardDescription className="text-slate-400">
                Sectoral concentration and live credit performance indicators
              </CardDescription>
            </CardHeader>
            <CardContent className="border-t border-cyan-900/20 pt-6">
              <div className="space-y-4">
                {sectors.map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-cyan-950/20 rounded border border-cyan-900/30 transition-all hover:bg-cyan-950/30">
                    <div>
                      <div className="text-white font-medium flex items-center gap-2">
                        <span>{item.sector}</span>
                        <span className="text-[10px] px-1.5 py-0.5 bg-[#020810] border border-cyan-900/40 text-cyan-400 font-mono rounded">
                          {item.concentration} Share
                        </span>
                      </div>
                      <div className="text-xs text-slate-400">Total Outstanding: {item.exposure}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-black tracking-wider ${item.color}`}>
                        {item.risk}
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">
                        FTID Verified via GSTN
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <V2InsightsFeed 
            title="Risk Mitigation feed" 
            items={[
              { 
                icon: AlertCircle, 
                color: isDefaultSpike ? "text-rose-400" : "text-amber-400", 
                bg: isDefaultSpike ? "bg-rose-400/10" : "bg-amber-400/10", 
                text: isDefaultSpike 
                  ? "Warning: MSME concentration limit breached. Automated lending rules have paused new originations in manufacturing."
                  : "Warning: High correlation detected between automotive parts manufacturing defaults and regional GST revenue drops." 
              },
              { 
                icon: ShieldCheck, 
                color: "text-emerald-400", 
                bg: "bg-emerald-400/10", 
                text: "Capital adequacy (Tier-1 CAR) verified by smart auditor contracts. Current buffer is 16.2% against regulatory requirement of 15.0%." 
              }
            ]}
          />
        </div>
      </div>

    </div>
  );
}