"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, User, Wallet, Building2, Fingerprint, ShieldCheck, TrendingUp, HelpCircle, Activity } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";
import { useScenario } from "@/components/ScenarioContext";
import { InstitutionalReadinessBanner } from "@/components/shared/v2/InstitutionalReadinessBanner";
import { ConnectivityIndicator } from "@/components/shared/v2/ConnectivityIndicator";

export default function CitizenMainPage() {
  const { scenario } = useScenario();
  
  // Scenarios affect scores
  const isEconomicSlowdown = scenario.activeEvent === "ECONOMIC_SLOWDOWN";
  const isFraudOutbreak = scenario.activeEvent === "FRAUD_OUTBREAK";
  const isSubsidyExpansion = scenario.activeEvent === "SUBSIDY_EXPANSION";

  const epiBase = 85;
  const epi = isEconomicSlowdown ? epiBase - 4 : isSubsidyExpansion ? epiBase + 5 : epiBase;
  
  const liquidAssetsBase = 38000;
  const liquidAssets = isEconomicSlowdown ? liquidAssetsBase - 5000 : isSubsidyExpansion ? liquidAssetsBase + 12000 : liquidAssetsBase;

  const debtBurdenBase = 45;
  const debtBurden = isEconomicSlowdown ? debtBurdenBase + 8 : debtBurdenBase;

  const scamRiskBase = 2.1;
  const scamRisk = isFraudOutbreak ? 8.5 : scamRiskBase;

  return (
    <div className="space-y-6">
      
      {/* Institutional Readiness Header */}
      <InstitutionalReadinessBanner
        portalName="Citizen Portal"
        purpose="Am I financially healthy and are my digital credentials secure?"
        dataSources={["Account Aggregator", "UPI Registry", "Credit Bureau", "UIDAI Aadhaar logs"]}
        intelligenceGenerated={["Economic Participation Index", "Scam Exposure Risk", "Savings Resilience Index"]}
        decisionEnabled="Citizen authorizes credit checks, reviews subscription mandates, and secures Aadhaar logs"
        legacyProcess="Citizen manually gathers physical bank statements, submits paper copies to lenders, and remains unaware of identity usage or subscription leaks."
        ftidProcess="Citizen manages real-time cryptographic consent requests, instantly proves cash flow health via Account Aggregator, and tracks digital footprint exposure."
      />

      {/* Connectivity Indicator */}
      <ConnectivityIndicator
        upstream={["User Consent Registry", "UPI Payments Switch"]}
        downstream={["Business Portal (Vendor Trust)", "Bank Underwriting Node"]}
      />

      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-emerald-900/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-emerald-900/30 text-emerald-400 text-[10px] font-bold tracking-widest uppercase rounded">
              Personal Financial Operating System
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <User className="w-8 h-8 text-emerald-400" />
            Citizen Dashboard
          </h1>
        </div>
      </header>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <V2MetricWidget 
          title="Economic Participation Index" 
          value={epi} 
          trend={epi > epiBase ? "up" : "up"} 
          trendValue={epi > epiBase ? 8.2 : 1.1}
          progress={epi}
          explanation="Measures active involvement in formal digital economy services." 
          dataSources={["Account Aggregator", "UPI Activity", "Tax Filings"]}
          contributors={[
            { label: "Consistent UPI Savings", type: "positive" },
            { label: "Active Tax Filing", type: "positive" },
            { label: "Limited Credit History", type: "negative" }
          ]}
          action="Apply for Sovereign-Backed Micro-investment."
        />
        <V2MetricWidget 
          title="Debt Burden Ratio" 
          value={`${debtBurden}%`} 
          trend={debtBurden > debtBurdenBase ? "up" : "down"} 
          trendValue={debtBurden > debtBurdenBase ? 13.0 : 2.5}
          progress={debtBurden}
          explanation="Proportion of monthly income committed to debt obligations." 
          dataSources={["Credit Bureau", "Bank Statement (AA)"]}
          contributors={[
            { label: "Home Loan EMI obligations", type: "negative" },
            { label: "No unsecured personal loans", type: "positive" }
          ]}
          action={debtBurden > 50 ? "Restructure debt immediately." : "Maintain current repayment schedule."}
        />
        <V2MetricWidget 
          title="Savings Resilience" 
          value={`₹${liquidAssets.toLocaleString()}`} 
          trend={liquidAssets > liquidAssetsBase ? "up" : "down"} 
          trendValue={liquidAssets > liquidAssetsBase ? 18.4 : 1.2}
          progress={liquidAssets / 1000}
          explanation="Ability to withstand financial shocks based on liquid reserves." 
          dataSources={["Bank Statement (AA)", "Mutual Fund Central"]}
          contributors={[
            { label: "3 Months Emergency Fund", type: "positive" },
            { label: "Recent Medical Outflow", type: "negative" }
          ]}
          action="Shift ₹5,000 from Savings to Liquid Mutual Fund."
        />
        <V2MetricWidget 
          title="Scam Exposure Risk" 
          value={`${scamRisk}/10`} 
          trend={scamRisk > scamRiskBase ? "up" : "down"} 
          trendValue={scamRisk > scamRiskBase ? 53.3 : 12.0}
          progress={scamRisk * 10}
          explanation="Risk of current digital footprint encountering malicious network nodes." 
          dataSources={["Telecom Data", "UPI Fraud Registry"]}
          contributors={[
            { label: "No risky UPI mandates", type: "positive" },
            { label: "Regional Phishing Spike", type: scamRisk > 5 ? "negative" : "positive" }
          ]}
          action={scamRisk > 5 ? "Review recent SMS links and freeze unknown UPI IDs." : "Low risk detected."}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          
          {/* AI Advisor Block */}
          <Card className="bg-[#0a1520] border-emerald-900/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-400" />
                Sovereign AI Financial Advisor
              </CardTitle>
              <CardDescription className="text-slate-400">
                Actionable advice tailored to your economic participation index and local conditions
              </CardDescription>
            </CardHeader>
            <CardContent className="border-t border-emerald-900/20 pt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 bg-[#050c14] border border-slate-800 rounded">
                  <span className="text-emerald-400 font-bold block mb-1">Recommended Budget</span>
                  <span className="text-slate-300">Allocate 50% basic needs, 30% savings resilience, 20% liquid investments. Keep UPI spending velocity uniform to stabilize trust scoring.</span>
                </div>
                <div className="p-3 bg-[#050c14] border border-slate-800 rounded">
                  <span className="text-emerald-400 font-bold block mb-1">Debt Reduction Plan</span>
                  <span className="text-slate-300">Consolidate high-interest micro-finance loans into a single prime bank facility (backed by your Account Aggregator flow history).</span>
                </div>
                <div className="p-3 bg-[#050c14] border border-slate-800 rounded">
                  <span className="text-emerald-400 font-bold block mb-1">Savings Forecast</span>
                  <span className="text-slate-300">Projected savings expected to grow to ₹78,000 in Q3, increasing shock resilience to a safe 5.2 months.</span>
                </div>
                <div className="p-3 bg-[#050c14] border border-slate-800 rounded">
                  <span className="text-emerald-400 font-bold block mb-1">Subsidy Eligibility</span>
                  <span className="text-slate-300">
                    {isSubsidyExpansion 
                      ? "Eligible: State Interest Subvention Scheme (3% relief). Application pre-filled via Aadhaar profile." 
                      : "Standard criteria met. No new special interest subsidies active."}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Consent Hub */}
          <Card className="bg-[#0a1520] border-emerald-900/30">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-white">Account Aggregator Consent Hub</CardTitle>
                <CardDescription className="text-slate-400">Manage who has access to your financial state</CardDescription>
              </div>
              <div className="px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                1 Pending Request
              </div>
            </CardHeader>
            <CardContent className="border-t border-emerald-900/20 pt-6">
              <div className="bg-[#050c14] border border-slate-800 rounded-xl overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-white text-lg flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-slate-400" />
                        HDFC Bank Ltd.
                      </h4>
                      <p className="text-sm text-slate-400 mt-1">Requesting access to your <strong className="text-white">GST Returns</strong> and <strong className="text-white">Bank Statements</strong> for <strong className="text-white">MSME Working Capital Loan Assessment</strong>.</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Duration</div>
                      <div className="text-sm font-mono text-cyan-400">One-Time Pull</div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                     <button className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded font-bold transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)] flex justify-center items-center gap-2">
                       <Fingerprint className="w-4 h-4" /> Cryptographically Approve
                     </button>
                     <button className="px-6 py-2 border border-slate-700 hover:bg-slate-800 text-slate-300 rounded font-bold transition-colors">
                       Deny
                     </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <V2InsightsFeed 
            title="Financial Health & Actions" 
            items={[
              { icon: ShieldCheck, color: "text-emerald-400", bg: "bg-emerald-400/10", text: "Your Aadhaar footprint is secure. No unauthorized authentication requests detected in the last 30 days." },
              { icon: AlertCircle, color: "text-amber-400", bg: "bg-amber-400/10", text: "Subscription alert: 3 new recurring UPI mandates detected. Review your active auto-pays." },
              { icon: TrendingUp, color: "text-cyan-400", bg: "bg-cyan-400/10", text: "Based on your steady savings rate, you are pre-approved for a sovereign-backed micro-investment plan." }
            ]}
          />
        </div>
      </div>
    </div>
  );
}