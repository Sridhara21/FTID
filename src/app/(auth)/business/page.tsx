"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, Building2, TrendingUp, TrendingDown } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";
import { useScenario } from "@/components/ScenarioContext";
import { InstitutionalReadinessBanner } from "@/components/shared/v2/InstitutionalReadinessBanner";
import { ConnectivityIndicator } from "@/components/shared/v2/ConnectivityIndicator";

export default function BusinessMainPage() {
  const { scenario } = useScenario();
  
  const isDefaultSpike = scenario.activeEvent === "MSME_DEFAULT_SPIKE";
  const isLiquidityInjection = scenario.activeEvent === "LIQUIDITY_INJECTION";
  const isEconomicSlowdown = scenario.activeEvent === "ECONOMIC_SLOWDOWN";

  const liquidityBase = 4.5;
  const liquidity = isLiquidityInjection ? liquidityBase + 2.5 : isEconomicSlowdown ? liquidityBase - 2.0 : liquidityBase;

  const complianceBase = 98;
  const compliance = isDefaultSpike ? complianceBase - 4 : complianceBase;

  const vendorTrustBase = 845;
  const vendorTrust = isDefaultSpike ? vendorTrustBase - 65 : vendorTrustBase;

  const creditReadinessBase = 74;
  const creditReadiness = isLiquidityInjection ? 92 : isDefaultSpike ? 58 : creditReadinessBase;

  return (
    <div className="space-y-6">
      
      {/* Institutional Readiness Header */}
      <InstitutionalReadinessBanner
        portalName="Business Portal"
        purpose="Can my business survive, grow sustainably, and qualify for credit?"
        dataSources={["GSTN e-Invoices", "TReDS Platform", "Account Aggregator", "EPFO Filings"]}
        intelligenceGenerated={["Liquidity Runway", "Vendor Trust Score", "Invoice Quality Ratings"]}
        decisionEnabled="Business owner checks credit readiness, discounts invoices, and diversifies vendor base"
        legacyProcess="Business relies on lagging audit reports, manual working capital worksheets, and slow offline loan applications requiring physical collateral."
        ftidProcess="Business monitors real-time cash runway, tracks supply chain trust scores, and automatically discounts verified invoices on TReDS."
      />

      {/* Connectivity Indicator */}
      <ConnectivityIndicator
        upstream={["Citizen Consent Node", "GSTN Transactions"]}
        downstream={["Bank Underwriting Hub", "Auditor Verification Ledger"]}
      />

      {/* Header */}
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
        </div>
      </header>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <V2MetricWidget 
          title="Liquidity Runway" 
          value={`${liquidity.toFixed(1)} Mo`} 
          trend={liquidity > liquidityBase ? "up" : "down"} 
          trendValue={liquidity > liquidityBase ? 1.7 : 0.5}
          progress={liquidity * 10}
          explanation="Estimated months of operational runway based on cash position and burn rate." 
          dataSources={["Account Aggregator (Bank)", "GSTN (Receivables)"]}
          contributors={[
            { label: "High Cash Reserves", type: "positive" },
            { label: "Delayed Outbound Payments", type: "negative" }
          ]}
          action={liquidity < 3 ? "Immediate invoice discounting required." : "Safe to invest in CAPEX."}
        />
        <V2MetricWidget 
          title="Compliance Health" 
          value={`${compliance}%`} 
          trend={compliance >= complianceBase ? "up" : "down"} 
          trendValue={compliance >= complianceBase ? 3.1 : 1.2}
          progress={compliance}
          explanation="Real-time adherence to statutory obligations, tax remittances, and corporate governance." 
          dataSources={["GSTN", "MCA Filings", "EPFO"]}
          contributors={[
            { label: "On-time GSTR-3B filings", type: "positive" },
            { label: "EPF remittance latency", type: compliance < 95 ? "negative" : "positive" }
          ]}
          action={compliance < 95 ? "Clear pending EPF dues to restore score." : "Maintain current compliance."}
        />
        <V2MetricWidget 
          title="Vendor Trust Score" 
          value={vendorTrust} 
          trend={vendorTrust >= vendorTrustBase ? "up" : "down"} 
          trendValue={vendorTrust >= vendorTrustBase ? 12.4 : 5.2}
          progress={vendorTrust / 10}
          explanation="Reliability of your supply chain partners based on the national ledger." 
          dataSources={["TReDS", "GSTN", "Bank Statements"]}
          contributors={[
            { label: "Reliable Tier-1 Suppliers", type: "positive" },
            { label: "Tier-2 defaults spiking", type: vendorTrust < 800 ? "negative" : "positive" }
          ]}
          action={vendorTrust < 800 ? "Diversify supplier base immediately." : "Current supply chain is highly stable."}
        />
        <V2MetricWidget 
          title="Invoice Quality" 
          value={isDefaultSpike ? "B-" : "A+"} 
          trend={isDefaultSpike ? "down" : "up"} 
          trendValue={isDefaultSpike ? 15.0 : 4.1}
          progress={isDefaultSpike ? 60 : 95}
          explanation="Predictive likelihood of raised invoices settling on time." 
          dataSources={["E-Invoicing Portal", "Buyer Credit Scores"]}
          contributors={[
            { label: "Large corporate buyers", type: "positive" },
            { label: "SME buyer sector stress", type: isDefaultSpike ? "negative" : "positive" }
          ]}
          action="Discount A+ invoices at 1% rate on TReDS."
        />
        <V2MetricWidget 
          title="Credit Readiness" 
          value={creditReadiness} 
          trend={creditReadiness >= creditReadinessBase ? "up" : "down"} 
          trendValue={creditReadiness >= creditReadinessBase ? 24.3 : 18.1}
          progress={creditReadiness}
          explanation="Institutional likelihood of immediate loan approval." 
          dataSources={["Credit Bureau", "AA Cashflow", "GSTN Turnover"]}
          contributors={[
            { label: "Consistent YoY Growth", type: "positive" },
            { label: "Low DPD (Days Past Due)", type: "positive" }
          ]}
          action="Eligible for 50L unsecured credit line."
        />
      </div>

      {/* Visual Graphs & Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-[#0a1520] border-blue-900/30 h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-white">Live Cash Flow & Supply Chain Graph</CardTitle>
              <CardDescription className="text-slate-400">Real-time observability of inbound revenue and working capital health</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center border-t border-blue-900/20 relative p-6">
              {isLiquidityInjection ? (
                <div className="absolute inset-0 bg-emerald-900/10 flex flex-col items-center justify-center">
                   <TrendingUp className="w-12 h-12 text-emerald-400 mb-4 animate-bounce" />
                   <p className="text-lg font-bold text-emerald-400">Subsidy & Liquidity Injected</p>
                   <p className="text-sm font-mono text-emerald-500/70">Working capital expanded by 45% today</p>
                </div>
              ) : isDefaultSpike ? (
                <div className="absolute inset-0 bg-rose-900/10 flex flex-col items-center justify-center">
                   <TrendingDown className="w-12 h-12 text-rose-400 mb-4 animate-bounce" />
                   <p className="text-lg font-bold text-rose-400">Supply Chain Payment Stress Detected</p>
                   <p className="text-sm font-mono text-rose-500/70">3 key buyers have delayed payments by 15+ days</p>
                </div>
              ) : (
                <div className="w-full h-full flex items-end justify-between px-4 pb-4">
                   {[40, 30, 45, 60, 50, 65, 55].map((h, i) => (
                     <div key={i} className="w-10 bg-blue-500/30 rounded-t-sm border-t-2 border-blue-400" style={{ height: `${h}%` }}></div>
                   ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        <div>
          <V2InsightsFeed 
            title="Operational Decisions" 
            items={[
              { icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-400/10", text: "Your Vendor Trust Score improved. You can negotiate 5 days longer payable cycles with suppliers." },
              { icon: AlertCircle, color: "text-amber-400", bg: "bg-amber-400/10", text: "Pending GST mismatch detected with Vendor 'SuperTech Logistics'. Reconcile to prevent compliance score penalty." },
              { icon: Building2, color: "text-cyan-400", bg: "bg-cyan-400/10", text: "Based on A+ Invoice Quality, auto-discounting is enabled on the TReDS platform to free up ₹12.5L." }
            ]}
          />
        </div>
      </div>

    </div>
  );
}