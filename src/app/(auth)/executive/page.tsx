"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  ShieldAlert, Landmark, CheckCircle, Compass, ShieldCheck, 
  TrendingUp, Activity, HelpCircle, ArrowRight, Database, Award, CheckSquare, Server
} from "lucide-react";
import { useScenario } from "@/components/ScenarioContext";
import { InstitutionalReadinessBanner } from "@/components/shared/v2/InstitutionalReadinessBanner";
import { ConnectivityIndicator } from "@/components/shared/v2/ConnectivityIndicator";
import { useCountry } from "@/components/CountryContext";

export default function ExecutiveShowcasePage() {
  const { scenario } = useScenario();
  const { country } = useCountry();
  const [activeQuestion, setActiveQuestion] = useState("fraud");

  const isDefaultSpike = scenario.activeEvent === "MSME_DEFAULT_SPIKE";
  const isLiquidityInjection = scenario.activeEvent === "LIQUIDITY_INJECTION";
  const isEconomicSlowdown = scenario.activeEvent === "ECONOMIC_SLOWDOWN";

  const answers = {
    fraud: {
      title: "1. Can FTID Reduce Fraud?",
      metrics: [
        { label: "Sovereign Identity Matches", value: "99.9%", desc: `Direct ${country.digital_identity} verification` },
        { label: "Mule Account Incidence", value: "-84% Reduction", desc: `${country.payment_networks.primary} wallet isolation rules` },
        { label: "Verification Latency", value: "8 ms", desc: "Real-time cryptographically signed assertions" }
      ],
      body: `Yes. By utilizing real-time cryptographic transaction assertions, FTID binds bank transactions directly to e-invoicing and identity registries. Mule accounts are isolated instantly during the payment gateway step, avoiding retroactive manual tracing.`,
      sources: [`${country.payment_networks.primary} Central Switch`, `${country.digital_identity} logs`, "Financial Intelligence Unit"]
    },
    lending: {
      title: "2. Can FTID Improve MSME Lending?",
      metrics: [
        { label: "Credit Approvals Rate", value: "+32% Expansion", desc: "Cashflow-based MSME credit" },
        { label: "Underwriting Time (TAT)", value: "Instant", desc: "Replaced 5-day manual reviews" },
        { label: "Portfolio Default (NPA)", value: "1.4%", desc: `Real-time ${country.tax_system} compliance thresholds` }
      ],
      body: "Yes. Underwriting decisions transition from paper-based retrospective audits to real-time cashflow matching. Proving exact liquidity runway (6.2 Mo verified) and vendor trust loops allows banks to safely finance uncollateralized MSMEs.",
      sources: [country.open_finance_framework, `${country.tax_system} e-Invoices`, "Supply Chain Finance"]
    },
    compliance: {
      title: "3. Can FTID Improve Compliance?",
      metrics: [
        { label: "Match Reconciliation Accuracy", value: "99.8%", desc: `${country.tax_system}-to-Bank statement matching` },
        { label: "Manual Audit Overhead", value: "-90% Savings", desc: "Continuous smart contract audits" },
        { label: "Audit Readiness Speed", value: "Continuous", desc: "Zero post-facto sampling needed" }
      ],
      body: `Yes. Continuous ZK-proof matching replaces annual auditing sampling. Smart auditor contracts instantly flag ${country.tax_system} filing mismatch exceptions, capturing off-balance-sheet exposures at transaction time.`,
      sources: ["Sovereign Audit Ledger", "Corporate Registry", `${country.tax_system} API`]
    },
    inclusion: {
      title: "4. Can FTID Expand Financial Inclusion?",
      metrics: [
        { label: "Rural Credit Reach", value: "2.4x Increase", desc: "Tier-2 & Tier-3 credit exposure" },
        { label: "Sovereign Micro-investments", value: "+4.2M Users", desc: "Small-ticket investment onboarding" },
        { label: "Cost to Onboard", value: `${new Intl.NumberFormat('en-US', { style: 'currency', currency: country.currency, maximumFractionDigits: 2 }).format(0.02)} / citizen`, desc: "DPI-backed digital consent" }
      ],
      body: `Yes. Digitizing identity verification via ${country.digital_identity} consent and tokenizing ${country.payment_networks.primary} cash flows lowers credit onboarding costs to near zero, bringing credit-invisible citizens and remote micro-vendors into the formal grid.`,
      sources: [country.digital_identity, `${country.payment_networks.primary} Registry`, "Agriculture Database"]
    }
  };

  const current = answers[activeQuestion as keyof typeof answers];

  return (
    <div className="space-y-6">
      
      {/* Institutional Readiness Header */}
      <InstitutionalReadinessBanner
        portalName="Executive Dashboard"
        purpose="How does the FTID protocol reduce fraud, improve lending, automate compliance, and expand inclusion?"
        dataSources={["Ecosystem aggregate reports", "ZK audit registers", `National ${country.payment_networks.primary} switch`]}
        intelligenceGenerated={["Fraud reduction ratios", "MSME credit expansion rates", "Compliance savings indicators"]}
        decisionEnabled="Bank Executives and Sovereign Evaluators review pilot readiness, sandbox path, and deployment outcomes"
        legacyProcess="Executives evaluate ecosystem performance using quarterly surveys and lagging manual data audits."
        ftidProcess="Executives observe real-time consolidated KPIs verified across all previous demo steps."
      />

      {/* Connectivity Indicator */}
      <ConnectivityIndicator
        upstream={["Auditor Trail Ledger"]}
        downstream={["Stakeholder Pilot Committee"]}
      />

      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-indigo-900/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-indigo-900/30 text-indigo-400 text-[10px] font-bold tracking-widest uppercase rounded flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" /> INSTITUTIONAL SHOWCASE DECISION CORE
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Executive Dashboard</h1>
        </div>
      </header>

      {/* Question Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { id: "fraud", label: "Reduce Fraud", icon: ShieldAlert },
          { id: "lending", label: "Improve Lending", icon: Landmark },
          { id: "compliance", label: "Improve Compliance", icon: CheckCircle },
          { id: "inclusion", label: "Expand Inclusion", icon: Compass }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveQuestion(tab.id)}
            className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${
              activeQuestion === tab.id 
                ? "bg-slate-900 border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
                : "bg-[#0a1520]/80 border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            <tab.icon className="w-5 h-5 text-indigo-400" />
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold block">Objective</span>
              <span className="font-bold text-xs text-white">{tab.label}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Answer Panel & Evidence Board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-[#0a1520] border-indigo-900/30 h-full">
            <CardHeader>
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-400" />
                {current.title}
              </CardTitle>
              <CardDescription className="text-slate-400">
                Detailed outcomes validated during the guided demo sequence
              </CardDescription>
            </CardHeader>
            <CardContent className="border-t border-indigo-900/20 pt-6 space-y-6">
              
              {/* Outcome Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 bg-[#050c14] border border-slate-800 rounded-lg">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">{m.desc}</span>
                    <span className="text-xl font-black text-white font-mono">{m.value}</span>
                    <span className="text-indigo-300 block mt-1">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Demo Rationale:</h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-[#050c14] p-4 rounded-lg border border-slate-800/80">
                  {current.body}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2 items-center text-xs">
                <span className="text-[10px] uppercase font-bold text-slate-500 flex items-center gap-1">
                  <Database className="w-3.5 h-3.5" /> Cited Data Sources:
                </span>
                {current.sources.map((s, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 rounded">
                    {s}
                  </span>
                ))}
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Institutional Evidence Panel */}
        <div>
          <Card className="bg-[#0a1520] border-indigo-900/30 h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <Server className="w-5 h-5 text-indigo-400" />
                Institutional Evidence Panel
              </CardTitle>
              <CardDescription className="text-slate-400">
                Strategic readiness checklist for {country.name}'s financial ecosystem
              </CardDescription>
            </CardHeader>
            <CardContent className="border-t border-indigo-900/20 pt-6 flex-grow flex flex-col justify-between text-xs space-y-6">
              
              <div className="space-y-4">
                {[
                  { title: "Institutional Readiness", status: "Functional Prototype Ready", done: true },
                  { title: "Startup Incorporation", status: "Incorporation Planned Q3", done: true },
                  { title: "Validation Discussions", status: "Banking Discussions Initiated", done: true },
                  { title: "Pilot Readiness", status: "POC Architecture Ready", done: true },
                  { title: "Deployment Path", status: "Regulatory Sandbox Candidate", done: true }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start py-2 border-b border-slate-800/40">
                    <div>
                      <span className="text-slate-400 block font-bold text-xs">{item.title}</span>
                      <span className="text-slate-500 font-mono text-[10px] mt-0.5 block">{item.status}</span>
                    </div>
                    <span className="text-emerald-400 font-black font-mono">
                      {item.done ? "✓" : "○"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-indigo-950/20 border border-indigo-900/30 rounded p-4 text-indigo-300 leading-normal flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  FTID acts as a unified Financial Intelligence Infrastructure built directly on top of {country.name}'s Digital Public Infrastructure, enabling zero-trust credit underwriting and proactive stability monitoring.
                </span>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  );
}
