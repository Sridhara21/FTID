"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, User, Wallet, Building2, Fingerprint, ShieldCheck, TrendingUp } from "lucide-react";
import { V2MetricWidget } from "@/components/shared/v2/V2MetricWidget";
import { V2InsightsFeed } from "@/components/shared/v2/V2InsightsFeed";
import { useScenario } from "@/components/ScenarioContext";

export default function CitizenMainPage() {
  const { scenario } = useScenario();
  const isImpacted = scenario.isActive && scenario.currentStep >= 2;

  const healthScore = isImpacted ? 84 : 76;
  const liquidAssets = isImpacted ? 45000 : 38000;
  const creditReadiness = isImpacted ? 81 : 78;

  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
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
            <p className="text-sm text-cyan-400 mt-2 font-mono flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> 
              KEY QUESTION: "Am I financially healthy?"
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <V2MetricWidget 
            title="Financial Health Score" 
            value={healthScore} 
            trend={isImpacted ? "up" : "up"} 
            trendValue={isImpacted ? 10.5 : 2.1}
            progress={healthScore}
            explanation="Aggregate score of savings rate, debt-to-income, and transaction stability." 
          />
          <V2MetricWidget 
            title="Economic Participation Index" 
            value={isImpacted ? 92 : 85} 
            trend={isImpacted ? "up" : "up"} 
            trendValue={isImpacted ? 8.2 : 1.1}
            progress={isImpacted ? 92 : 85}
            explanation="Measures active involvement in formal digital economy services." 
          />
          <V2MetricWidget 
            title="Debt Burden Ratio" 
            value={isImpacted ? 32 : 45} 
            trend={isImpacted ? "down" : "up"} 
            trendValue={isImpacted ? 13.0 : 2.5}
            progress={isImpacted ? 32 : 45}
            explanation="Proportion of monthly income committed to debt obligations." 
          />
          <V2MetricWidget 
            title="Savings Resilience Score" 
            value={liquidAssets} 
            trend={isImpacted ? "up" : "down"} 
            trendValue={isImpacted ? 18.4 : 1.2}
            progress={liquidAssets / 1000}
            explanation="Ability to withstand financial shocks based on liquid reserves." 
          />
          <V2MetricWidget 
            title="Scam Exposure Risk" 
            value={isImpacted ? 2.1 : 4.5} 
            trend={isImpacted ? "down" : "up"} 
            trendValue={isImpacted ? 53.3 : 12.0}
            progress={(isImpacted ? 2.1 : 4.5) * 10}
            explanation="Risk of current digital footprint encountering malicious network nodes." 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
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
                
                {/* Pending Consent Request */}
                <div className="bg-[#050c14] border border-slate-800 rounded-xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-white text-lg flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-slate-400" />
                          HDFC Bank Ltd.
                        </h4>
                        <p className="text-sm text-slate-400 mt-1">Requesting access to your GST returns and CIBIL data for <strong className="text-white">MSME Working Capital Loan Assessment</strong>.</p>
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

                {/* Active Consents */}
                <div className="mt-8">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Active Data Flows</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded border border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">Income Tax Department</div>
                          <div className="text-xs text-slate-500">Continuous Monitoring • Auto-Filing</div>
                        </div>
                      </div>
                      <button className="text-xs text-rose-400 hover:text-rose-300 font-bold px-3 py-1 bg-rose-500/10 rounded">Revoke</button>
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>
          <div>
            <V2InsightsFeed 
              title="Actionable Financial Advice" 
              items={[
                { icon: ShieldCheck, color: "text-emerald-400", bg: "bg-emerald-400/10", text: "Your Aadhaar footprint is secure. No unauthorized authentication requests detected in the last 30 days." },
                { icon: AlertCircle, color: "text-amber-400", bg: "bg-amber-400/10", text: "Subscription alert: 3 new recurring UPI mandates detected. Review your active auto-pays." },
                { icon: TrendingUp, color: "text-cyan-400", bg: "bg-cyan-400/10", text: "Based on your steady savings rate, you are pre-approved for a sovereign-backed micro-investment plan." }
              ]}
            />
          </div>
        </div>

      </div>
    </div>
  );
}