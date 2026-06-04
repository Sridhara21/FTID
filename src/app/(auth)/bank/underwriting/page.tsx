"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSignature, ShieldCheck, CheckSquare, Coins, ArrowUpRight } from "lucide-react";
import { EcosystemImpactPanel } from "@/components/shared/observability/EcosystemImpactPanel";
import { DecisionEnginePanel } from "@/components/shared/observability/DecisionEnginePanel";
import { useScenario } from "@/components/ScenarioContext";
import { DemoGuide } from "@/components/shared/DemoGuide";
import { motion } from "framer-motion";

export default function BankUnderwritingPage() {
  const { scenario } = useScenario();
  const isImpacted = scenario.isActive && scenario.currentStep >= 5;

  return (
    <div className={`min-h-screen ${isImpacted ? "bg-[#051515]" : "bg-[#020810]"} text-slate-200 pb-20 relative overflow-hidden transition-colors duration-1000`}>
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] ${isImpacted ? "bg-emerald-900/20" : "bg-cyan-900/10"} blur-[120px] rounded-full pointer-events-none z-0 transition-colors duration-1000`}></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
                BANKING PORTAL
              </span>
              <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase tracking-widest animate-pulse">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                {isImpacted ? "Subsidy Macro Inflow Detected" : "Live Underwriting Node"}
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">AI Underwriting Engine</h1>
            <p className="text-sm text-cyan-100/60 mt-2 max-w-2xl">
              SME credit decisioning powered by live GST, vendor health, and systemic cashflow data.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Risk Grade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-emerald-400 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
                    AA+
                  </div>
                  <p className="text-xs text-emerald-400/80 mt-1">Excellent repayment history</p>
                </CardContent>
              </Card>

              <Card className={`bg-[#0a1520] transition-colors ${isImpacted ? "border-emerald-500/50" : "border-cyan-900/30"}`}>
                <CardHeader className="pb-2">
                  <CardTitle className={`text-[10px] font-bold uppercase tracking-widest ${isImpacted ? "text-emerald-400" : "text-slate-400"}`}>Approval Probability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-black flex items-center gap-2 ${isImpacted ? "text-emerald-300" : "text-emerald-400"}`}>
                    <CheckSquare className="h-5 w-5" />
                    {isImpacted ? "98%" : "94%"}
                  </div>
                  <p className={`text-xs mt-1 ${isImpacted ? "text-emerald-400" : "text-emerald-400/80"}`}>
                    {isImpacted ? "Boosted by Macro Injection" : "Auto-approval eligible"}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#0a1520] border-cyan-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Portfolio Risk Index</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-emerald-400 flex items-center gap-2">
                    <FileSignature className="h-5 w-5" />
                    {isImpacted ? "1.2%" : "3.4%"}
                  </div>
                  <p className="text-xs text-emerald-400/80 mt-1">Overall default risk down</p>
                </CardContent>
              </Card>
              
              <Card className={`bg-[#0a1520] transition-colors ${isImpacted ? "border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]" : "border-cyan-900/30"}`}>
                <CardHeader className="pb-2">
                  <CardTitle className={`text-[10px] font-bold uppercase tracking-widest ${isImpacted ? "text-emerald-400" : "text-slate-400"}`}>Recommended Loan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-black flex items-center gap-2 ${isImpacted ? "text-emerald-300" : "text-cyan-400"}`}>
                    {isImpacted ? <ArrowUpRight className="h-5 w-5" /> : <Coins className="h-5 w-5" />}
                    {isImpacted ? "₹3.5 Cr" : "₹2.5 Cr"}
                  </div>
                  <p className={`text-xs mt-1 ${isImpacted ? "text-emerald-400" : "text-cyan-400/80"}`}>
                    {isImpacted ? "+₹1.0 Cr Limit Extension" : "Backed by live invoices"}
                  </p>
                </CardContent>
              </Card>
            </div>

            {isImpacted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <DecisionEnginePanel 
                  primaryQuestion="Should this SME's credit limit be automatically extended?"
                  recommendation="Macro liquidity injection has deposited massive volume directly into this sector's connected wallets, drastically improving systemic debt-to-equity ratios."
                  impact="Auto-extending the credit limit to ₹3.5 Cr will capture premium yield while the borrower's default risk sits at an all-time low (1.2%)."
                  confidence={99}
                  actionText="Auto-Extend Limit to ₹3.5 Cr"
                />
              </motion.div>
            ) : (
              <DecisionEnginePanel 
                primaryQuestion="Should this SME working capital loan be approved?"
                recommendation="Borrower exhibits robust cashflow stability and 100% vendor trust score. GST data verifies an 18% YoY revenue increase."
                impact="Expands SME credit portfolio by ₹2.5 Cr with an expected default probability of < 3.4%."
                confidence={94}
                actionText="Issue Loan Disbursement"
              />
            )}
            
          </div>

          <div className="space-y-6">
            <EcosystemImpactPanel 
              upstream={isImpacted ? ["Government Treasury", "SME Cashflow Monitor"] : ["Business Invoices", "Business Tax Filings", "Vendor Trust API"]}
              dataSources={isImpacted ? ["National Subsidy Ledger", "RTGS Settlement"] : ["GSTN API", "Account Aggregator", "CIBIL Commercial"]}
              downstream={isImpacted ? ["SME Business Expansion", "Local Employment Rates", "Macro Inflation"] : ["Business Liquidity Runway", "Government GDP Tracker", "Regulator Systemic Risk"]}
            />
          </div>
        </div>
      </div>
      <DemoGuide nextStopUrl="/auditor/trails" label="Auditor Trail" />
    </div>
  );
}