"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Activity, Shield, TrendingUp, TrendingDown, AlertCircle, FileText, 
  Database, ShieldCheck, Zap, Network, CheckCircle2, XCircle, Search, HelpCircle
} from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";
import { useScenario } from "@/components/ScenarioContext";
import { InstitutionalReadinessBanner } from "@/components/shared/v2/InstitutionalReadinessBanner";
import { ConnectivityIndicator } from "@/components/shared/v2/ConnectivityIndicator";

export default function BankMainPage() {
  const { scenario } = useScenario();
  const [selectedApplicant, setSelectedApplicant] = useState("Vardhaman Electronics");

  const isDefaultSpike = scenario.activeEvent === "MSME_DEFAULT_SPIKE";
  const isLiquidityInjection = scenario.activeEvent === "LIQUIDITY_INJECTION";
  const isEconomicSlowdown = scenario.activeEvent === "ECONOMIC_SLOWDOWN";

  // Dynamic portfolio metrics based on active event
  const riskIndexBase = 18.4;
  const riskIndex = isDefaultSpike ? riskIndexBase + 12.5 : isEconomicSlowdown ? riskIndexBase + 6.2 : isLiquidityInjection ? riskIndexBase - 4.1 : riskIndexBase;

  const perfForecastBase = 94.2;
  const perfForecast = isDefaultSpike ? perfForecastBase - 14.5 : isEconomicSlowdown ? perfForecastBase - 8.1 : isLiquidityInjection ? perfForecastBase + 3.8 : perfForecastBase;

  const exposureBase = 412;
  const exposure = isDefaultSpike ? exposureBase + 85 : isEconomicSlowdown ? exposureBase + 40 : isLiquidityInjection ? exposureBase - 50 : exposureBase;

  const lcrBase = 135.5;
  const lcr = isLiquidityInjection ? lcrBase + 25.0 : isEconomicSlowdown ? lcrBase - 15.5 : lcrBase;

  // Applicant Mock Data
  const applicants: Record<string, {
    name: string;
    type: string;
    requestedAmount: string;
    purpose: string;
    gstScore: number;
    cashflowStability: number;
    buyerTrustScore: number;
    macroExposureRisk: number;
    recommendedDecision: "Approved" | "Refer" | "Declined";
    interestRate: string;
    rationale: string[];
    sources: string[];
  }> = {
    "Vardhaman Electronics": {
      name: "Vardhaman Electronics",
      type: "MSME Vendor (Tier-2)",
      requestedAmount: "₹2.5 Crores",
      purpose: "Working Capital & Inventory",
      gstScore: isDefaultSpike ? 68 : isEconomicSlowdown ? 75 : 94,
      cashflowStability: isEconomicSlowdown ? 60 : isLiquidityInjection ? 98 : 88,
      buyerTrustScore: isDefaultSpike ? 55 : 85,
      macroExposureRisk: isDefaultSpike ? 85 : isEconomicSlowdown ? 75 : 30,
      recommendedDecision: isDefaultSpike ? "Declined" : isEconomicSlowdown ? "Refer" : "Approved",
      interestRate: isEconomicSlowdown ? "12.5% (Risk Premium)" : "8.75% (Prime)",
      rationale: isDefaultSpike ? [
        "Systemic Default Spike detected in Tier-2 manufacturing sectors.",
        "GST filing latency has deteriorated to 18 days (past due threshold).",
        "Buyer trust score dropped due to anchor buyer credit downgrade."
      ] : isEconomicSlowdown ? [
        "Cashflow volatility has increased over the last 60 days.",
        "Satisfactory debt servicing record but narrow reserve cushion.",
        "Recommend manual review with enhanced collateral terms."
      ] : [
        "99.4% on-time GST filing streak over past 24 months.",
        "Deterministic Account Aggregator analysis proves positive monthly cashflow surplus of 2.4x EMI.",
        "Supplier and anchor buyer transaction loops are closed and verified."
      ],
      sources: ["Account Aggregator", "GSTN API", "TReDS Platform", "Credit Bureau"]
    },
    "Apex Automotive Components": {
      name: "Apex Automotive Components",
      type: "Large Scale Supplier (Tier-1)",
      requestedAmount: "₹12.0 Crores",
      purpose: "CAPEX Expansion",
      gstScore: isEconomicSlowdown ? 82 : 98,
      cashflowStability: isEconomicSlowdown ? 78 : 95,
      buyerTrustScore: 92,
      macroExposureRisk: isEconomicSlowdown ? 60 : 25,
      recommendedDecision: isEconomicSlowdown ? "Refer" : "Approved",
      interestRate: "8.25%",
      rationale: [
        "Anchor supplier status for Tata Motors & Mahindra Auto.",
        "Robust receivables invoice collateral registered on TReDS.",
        "Low systemic volatility; cash flow is secure."
      ],
      sources: ["Account Aggregator", "TReDS Ledger", "GSTN", "MCA Filings"]
    },
    "Indus Logistics": {
      name: "Indus Logistics",
      type: "Service Provider",
      requestedAmount: "₹85 Lakhs",
      purpose: "Fleet Electrification",
      gstScore: 90,
      cashflowStability: isDefaultSpike ? 70 : 89,
      buyerTrustScore: 80,
      macroExposureRisk: isDefaultSpike ? 45 : 35,
      recommendedDecision: "Approved",
      interestRate: "9.20%",
      rationale: [
        "Recurring long-term contracts verified through GST invoices.",
        "Average UPI Auto-pay failure rate at 0% over 18 months.",
        "Supports ESG compliance framework (E-mobility subsidy qualified)."
      ],
      sources: ["Account Aggregator", "UPI Autopay Registry", "GSTN"]
    }
  };

  const applicant = applicants[selectedApplicant] || applicants["Vardhaman Electronics"];

  return (
    <div className="space-y-6">
      
      {/* Institutional Readiness Header */}
      <InstitutionalReadinessBanner
        portalName="Bank Portal"
        purpose="Can this MSME be safely financed based on verifiable digital public infrastructure signals?"
        dataSources={["GST Returns", "AA Consent Flow", "TReDS Receivables", "Credit Bureau Registers"]}
        intelligenceGenerated={["Underwriting Risk Grades", "Approval Probabilities", "Recommended Credit Limits"]}
        decisionEnabled="Bank credit officer approves working capital, sets risk premium rates, or refers for manual review"
        legacyProcess="Bank collects physical paper statements, spends 5 to 14 days processing files manually, and relies on static CIBIL reports that fail to detect active business distress."
        ftidProcess="Bank executes instant underwriting APIs matching real-time GST streaks, UPI velocity, and closed supplier loops in less than 8 milliseconds."
      />

      {/* Connectivity Indicator */}
      <ConnectivityIndicator
        upstream={["Citizen Consent Portal", "Business Signals Ledger", "Gateway Switch"]}
        downstream={["NBFC Portfolio Aggregator", "Regulator Stability Monitor"]}
      />

      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
              Credit and Risk Command Center
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Bank Dashboard</h1>
        </div>
      </header>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <V2MetricWidget 
          title="Portfolio Risk Index" 
          value={`${riskIndex.toFixed(1)}%`} 
          trend={riskIndex > riskIndexBase ? "up" : "down"} 
          trendValue={Math.abs(riskIndex - riskIndexBase)}
          progress={riskIndex * 2}
          explanation="Aggregated probability of default across the current outstanding loan book." 
          dataSources={["Credit Bureau", "GSTN", "National NPA Registry"]}
          contributors={[
            { label: "MSME delinquencies", type: isDefaultSpike ? "negative" : "positive" },
            { label: "Retail loan performance", type: "positive" }
          ]}
        />
        <V2MetricWidget 
          title="Loan Performance Forecast" 
          value={`${perfForecast.toFixed(1)}%`} 
          trend={perfForecast > perfForecastBase ? "up" : "down"} 
          trendValue={Math.abs(perfForecast - perfForecastBase)}
          progress={perfForecast}
          explanation="Projected on-time repayment rate for the next quarter based on macro indicators." 
          dataSources={["Account Aggregator", "Macro Economic Models"]}
          contributors={[
            { label: "Inflation-adjusted cashflows", type: isEconomicSlowdown ? "negative" : "positive" },
            { label: "UPI auto-pay health", type: "positive" }
          ]}
        />
        <V2MetricWidget 
          title="Credit Exposure Score" 
          value={exposure} 
          trend={exposure > exposureBase ? "up" : "down"} 
          trendValue={Math.abs(exposure - exposureBase) / 10}
          progress={exposure / 10}
          explanation="Total systemic exposure to high-risk sectors normalized against tier-1 capital." 
          dataSources={["RBI Database", "Internal Core Banking"]}
          contributors={[
            { label: "MSME default correlation", type: isDefaultSpike ? "negative" : "positive" },
            { label: "Retail exposure buffer", type: "positive" }
          ]}
        />
        <V2MetricWidget 
          title="Liquidity Coverage Ratio" 
          value={`${lcr.toFixed(1)}%`} 
          trend={lcr > lcrBase ? "up" : "down"} 
          trendValue={Math.abs(lcr - lcrBase)}
          progress={lcr / 2}
          explanation="Ratio of high-quality liquid assets to total net cash outflows over 30 days." 
          dataSources={["Treasury Desk", "Sovereign Bond Hold"]}
          contributors={[
            { label: "Central Bank Injector", type: isLiquidityInjection ? "positive" : "positive" },
            { label: "Short term credit draws", type: "negative" }
          ]}
        />
      </div>

      {/* Underwriting Engine & Applicant Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#0a1520] border-cyan-900/30">
            <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  Lending Decision & Underwriting Explainer
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Real-time underwriting analysis based on digital public infrastructure signals
                </CardDescription>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                {Object.keys(applicants).map((name) => (
                  <button
                    key={name}
                    onClick={() => setSelectedApplicant(name)}
                    className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                      selectedApplicant === name 
                        ? "bg-cyan-500 text-black shadow-[0_0_10px_rgba(6,182,212,0.4)]" 
                        : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </CardHeader>
            <CardContent className="border-t border-cyan-900/20 pt-6 space-y-6">
              
              {/* Applicant Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#050c14] border border-slate-800 p-4 rounded-lg">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Applicant</span>
                  <h3 className="text-lg font-black text-white">{applicant.name}</h3>
                  <p className="text-xs text-slate-400 font-mono mt-1">{applicant.type}</p>
                </div>
                <div className="flex md:justify-end gap-6">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">Req. Amount</span>
                    <span className="text-lg font-bold text-white font-mono">{applicant.requestedAmount}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">Interest Rate</span>
                    <span className="text-lg font-bold text-cyan-400 font-mono">{applicant.interestRate}</span>
                  </div>
                </div>
              </div>

              {/* Score Explainer Radar Mockup */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {[
                  { label: "GST Compliance", score: applicant.gstScore, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
                  { label: "Cashflow Stability", score: applicant.cashflowStability, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
                  { label: "Buyer Trust Loop", score: applicant.buyerTrustScore, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" },
                  { label: "Macro Resilience", score: 100 - applicant.macroExposureRisk, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30" }
                ].map((bar, i) => (
                  <div key={i} className={`p-3 bg-[#050c14] border ${bar.border} rounded-lg flex flex-col justify-between`}>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">{bar.label}</span>
                    <div className="flex justify-between items-end mt-2">
                      <span className={`text-xl font-mono font-bold ${bar.color}`}>{bar.score}%</span>
                      <div className="w-16 bg-slate-900 h-1.5 rounded-full overflow-hidden mb-1">
                        <div className={`h-full ${bar.color.replace('text', 'bg')}`} style={{ width: `${bar.score}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommendation Banner */}
              <div className={`p-4 border rounded-xl flex items-start gap-4 ${
                applicant.recommendedDecision === "Approved" 
                  ? "bg-emerald-950/20 border-emerald-500/30" 
                  : applicant.recommendedDecision === "Refer"
                  ? "bg-amber-950/20 border-amber-500/30"
                  : "bg-rose-950/20 border-rose-500/30"
              }`}>
                <div className="mt-0.5">
                  {applicant.recommendedDecision === "Approved" && <CheckCircle2 className="w-6 h-6 text-emerald-400" />}
                  {applicant.recommendedDecision === "Refer" && <HelpCircle className="w-6 h-6 text-amber-400" />}
                  {applicant.recommendedDecision === "Declined" && <XCircle className="w-6 h-6 text-rose-400" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-bold text-slate-400">FTID Underwriting recommendation</span>
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${
                      applicant.recommendedDecision === "Approved" ? "bg-emerald-500/20 text-emerald-400" :
                      applicant.recommendedDecision === "Refer" ? "bg-amber-500/20 text-amber-400" :
                      "bg-rose-500/20 text-rose-400"
                    }`}>{applicant.recommendedDecision}</span>
                  </div>
                  
                  <div className="mt-3 space-y-2">
                    {applicant.rationale.map((r, i) => (
                      <div key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap gap-2 items-center">
                    <span className="text-[10px] uppercase font-bold text-slate-500 flex items-center gap-1">
                      <Database className="w-3.5 h-3.5" /> Verifiable Data Sources:
                    </span>
                    {applicant.sources.map((src, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 rounded">
                        {src}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>

        <div>
          <V2InsightsFeed 
            title="Real-time Risk Alerts" 
            items={[
              { 
                icon: AlertCircle, 
                color: isDefaultSpike ? "text-rose-400" : "text-amber-400", 
                bg: isDefaultSpike ? "bg-rose-400/10" : "bg-amber-400/10", 
                text: isDefaultSpike 
                  ? "CRITICAL: Systemic default cascade triggers automated risk filters for all Tier-2/Tier-3 MSME suppliers." 
                  : "Warning: High correlation detected between regional GST revenue drops in Maharashtra and automotive parts manufacturing defaults." 
              },
              { 
                icon: ShieldCheck, 
                color: "text-emerald-400", 
                bg: "bg-emerald-400/10", 
                text: "Verification complete. 12,400 trade invoices cryptographically validated via ONDC and TReDS ledger in last 24 hours." 
              }
            ]}
          />
        </div>
      </div>

    </div>
  );
}