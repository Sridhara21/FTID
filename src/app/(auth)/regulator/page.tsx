"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, ShieldCheck, Activity, Shield, TrendingUp, TrendingDown, Server, Network } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";
import { ScenarioRunButton } from "@/components/shared/ScenarioRunButton";
import { useScenario } from "@/components/ScenarioContext";
import { InstitutionalReadinessBanner } from "@/components/shared/v2/InstitutionalReadinessBanner";
import { ConnectivityIndicator } from "@/components/shared/v2/ConnectivityIndicator";
import { useCountry } from "@/components/CountryContext";

export default function RegulatorMainPage() {
  const { scenario } = useScenario();
  const { country } = useCountry();

  const isDefaultSpike = scenario.activeEvent === "MSME_DEFAULT_SPIKE";
  const isLiquidityInjection = scenario.activeEvent === "LIQUIDITY_INJECTION";
  const isEconomicSlowdown = scenario.activeEvent === "ECONOMIC_SLOWDOWN";
  const isFraudOutbreak = scenario.activeEvent === "FRAUD_OUTBREAK";

  // National Stability Score calculations
  const baseStability = 82;
  const stabilityIndex = isDefaultSpike 
    ? baseStability - 8 
    : isEconomicSlowdown 
    ? baseStability - 12 
    : isLiquidityInjection 
    ? baseStability + 6 
    : baseStability;

  // Other metrics
  const fraudExposureBase = 2.1;
  const fraudExposure = isFraudOutbreak ? 8.5 : isEconomicSlowdown ? 4.2 : fraudExposureBase;

  const systemicRiskBase = 12.4;
  const systemicRisk = isDefaultSpike ? 28.5 : isEconomicSlowdown ? 34.2 : isLiquidityInjection ? 8.1 : systemicRiskBase;

  const liquidityHealthBase = 88.5;
  const liquidityHealth = isLiquidityInjection ? 98.2 : isEconomicSlowdown ? 72.4 : liquidityHealthBase;

  // EWS Entity Status
  const entities = [
    {
      name: "Apex Cooperative Bank",
      type: "Cooperative Bank",
      npaRatio: isDefaultSpike ? "5.4%" : "2.1%",
      liquidityBuffer: isEconomicSlowdown ? "110%" : "135%",
      tier1CAR: "11.2%",
      status: isDefaultSpike ? "Watchlist" : "Healthy",
      color: isDefaultSpike ? "text-amber-400" : "text-emerald-400"
    },
    {
      name: "Indus Micro-Finance",
      type: "Alternative Micro-Lender",
      npaRatio: isDefaultSpike ? "8.7%" : isEconomicSlowdown ? "6.2%" : "3.2%",
      liquidityBuffer: isEconomicSlowdown ? "95%" : "120%",
      tier1CAR: isDefaultSpike ? "9.8%" : "12.4%",
      status: isDefaultSpike ? "Critical" : isEconomicSlowdown ? "Watchlist" : "Healthy",
      color: isDefaultSpike ? "text-rose-400" : isEconomicSlowdown ? "text-amber-400" : "text-emerald-400"
    },
    {
      name: "Sovereign Trust Bank",
      type: "Scheduled Commercial Bank",
      npaRatio: "1.4%",
      liquidityBuffer: "165%",
      tier1CAR: "14.8%",
      status: "Healthy",
      color: "text-emerald-400"
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* Institutional Readiness Header */}
      <InstitutionalReadinessBanner
        portalName="Regulator Portal"
        purpose="Where is the next systemic threat emerging and is the banking sector stable?"
        dataSources={[`${country.central_bank} Core Banking reports`, "Gateway Switches", "Credit Bureau Registries", "Alternative Lender Capital reserves"]}
        intelligenceGenerated={["National Stability Score", "Systemic Risk Index", "Fraud Exposure Index"]}
        decisionEnabled="Regulator triggers reserve adjustments, injects liquidity, or flags distressed lending nodes"
        legacyProcess="Regulator relies on retrospectively submitted quarterly sheets and post-facto audit reports, leaving them blind to emerging defaults or systemic contagion risks."
        ftidProcess="Regulator monitors live credit performance, triggers stress simulations, and receives automated warning alerts."
      />

      {/* Connectivity Indicator */}
      <ConnectivityIndicator
        upstream={["Bank Dashboard", "Government command center"]}
        downstream={["Auditor Portal", "Executive Decisions center"]}
      />

      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
              National Financial Stability Command Center
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Financial Stability Intelligence</h1>
        </div>
        <div>
          <ScenarioRunButton />
        </div>
      </header>

      {/* 4 explainable metric cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <V2MetricWidget 
          title="National Stability Score" 
          value={stabilityIndex} 
          trend={stabilityIndex >= baseStability ? "up" : "down"}
          trendValue={Math.abs(stabilityIndex - baseStability)}
          progress={stabilityIndex}
          explanation="Aggregate measure of macroeconomic resilience and banking sector health." 
          dataSources={[country.open_finance_framework, country.tax_system, `${country.central_bank} Reporting`]}
          contributors={[
            { label: `${country.tax_system} Compliance Velocity`, type: "positive" },
            { label: "MSME Default Rate Spike", type: isDefaultSpike ? "negative" : "positive" },
            { label: "Liquidity Reserves Health", type: isLiquidityInjection ? "positive" : "negative" }
          ]}
        />
        <V2MetricWidget 
          title="Fraud Exposure Index" 
          value={`${fraudExposure}/10`} 
          trend={fraudExposure > fraudExposureBase ? "up" : "down"}
          trendValue={Math.abs(fraudExposure - fraudExposureBase) * 10}
          progress={fraudExposure * 10}
          explanation="Real-time probability of systemic fraud clusters across financial entities." 
          dataSources={["Payment Gateway Registry", "FIU Intelligence"]}
          contributors={[
            { label: "Coordinated mule account detection", type: isFraudOutbreak ? "negative" : "positive" },
            { label: `Secure ${country.digital_identity} authentication rate`, type: "positive" }
          ]}
        />
        <V2MetricWidget 
          title="Systemic Concentration Risk" 
          value={`${systemicRisk.toFixed(1)}%`} 
          trend={systemicRisk > systemicRiskBase ? "up" : "down"}
          trendValue={Math.abs(systemicRisk - systemicRiskBase)}
          progress={systemicRisk * 2.5}
          explanation="Calculated vulnerability to cascading defaults across interconnected institutions." 
          dataSources={["Interbank Settlement Hub", "Core Banking L2"]}
          contributors={[
            { label: "Alternative Lender-to-Bank credit exposure", type: "negative" },
            { label: "High liquidity buffer coverage", type: "positive" }
          ]}
        />
        <V2MetricWidget 
          title="Liquidity Health Score" 
          value={`${liquidityHealth.toFixed(1)}%`} 
          trend={liquidityHealth >= liquidityHealthBase ? "up" : "down"}
          trendValue={Math.abs(liquidityHealth - liquidityHealthBase)}
          progress={liquidityHealth}
          explanation="Aggregated liquidity coverage ratio across all scheduled commercial banks." 
          dataSources={[`${country.central_bank} Liquidity Window`, "Treasury Registry"]}
          contributors={[
            { label: "Emergency Repo Facility usage", type: isLiquidityInjection ? "positive" : "positive" },
            { label: "Deposit run rate indicator", type: isEconomicSlowdown ? "negative" : "positive" }
          ]}
        />
      </div>

      {/* EWS Table & Stability Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-[#0a1520] border-cyan-900/30 h-full">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-cyan-400" />
                Early Warning System (EWS) Dashboard
              </CardTitle>
              <CardDescription className="text-slate-400">
                Real-time health markers for monitored commercial institutions and alternative lenders
              </CardDescription>
            </CardHeader>
            <CardContent className="border-t border-cyan-900/20 pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-[#050c14] text-xs uppercase text-slate-400 font-bold border-b border-cyan-900/40">
                    <tr>
                      <th className="p-3">Institution</th>
                      <th className="p-3">Net NPA Ratio</th>
                      <th className="p-3">Liquidity Buffer</th>
                      <th className="p-3">Tier-1 CAR</th>
                      <th className="p-3 text-right">Supervisory Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40">
                    {entities.map((ent, i) => (
                      <tr key={i} className="hover:bg-cyan-950/10 transition-colors">
                        <td className="p-3">
                          <div className="font-bold text-white">{ent.name}</div>
                          <div className="text-[10px] text-slate-500 font-mono">{ent.type}</div>
                        </td>
                        <td className="p-3 font-mono">{ent.npaRatio}</td>
                        <td className="p-3 font-mono">{ent.liquidityBuffer}</td>
                        <td className="p-3 font-mono">{ent.tier1CAR}</td>
                        <td className={`p-3 text-right font-black ${ent.color}`}>
                          {ent.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <V2InsightsFeed 
            title="Supervisory Intelligence Alerts" 
            items={[
              { 
                icon: AlertCircle, 
                color: isFraudOutbreak ? "text-rose-400" : "text-amber-400", 
                bg: isFraudOutbreak ? "bg-rose-400/10" : "bg-amber-400/10", 
                text: isFraudOutbreak 
                  ? "CRITICAL: Multiple digital wallet nodes showing coordinated rapid-outflow cycles. Anti-money laundering filters deployed."
                  : `Warning: High correlation detected between regional ${country.tax_system} revenue drops and cooperative bank watchlist alerts.` 
              },
              { 
                icon: ShieldCheck, 
                color: "text-emerald-400", 
                bg: "bg-emerald-400/10", 
                text: "Real-time audit validation: All outstanding trade credit guarantees are fully covered by verified smart contract reserves." 
              }
            ]}
          />
        </div>
      </div>

    </div>
  );
}