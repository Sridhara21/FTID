"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, TrendingUp, AlertTriangle, ShieldCheck, ArrowRight, Wallet, Landmark, Activity, CheckCircle2 } from "lucide-react";

export default function CitizenAiAdvisorPage() {
  const [analyzing, setAnalyzing] = useState(true);
  const [strategyExecuted, setStrategyExecuted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnalyzing(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const executeStrategy = async () => {
    setStrategyExecuted(true);
    // In a real system, this would fire an event to the global SSE Event Bus.
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'LOAN_RESTRUCTURE',
        entity: 'CITIZEN_WALLET',
        msg: 'Citizen 7843 executed AI debt consolidation strategy. Interbank lending signaled.',
        impact: ['Bank Liquidity', 'Credit Bureau'],
        risk: 'LOW'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-cyan-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <Bot className="h-3 w-3" />
            CITIZEN PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">AI Financial Copilot</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"What is the single best action to improve my financial health today?"</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Situation & Analysis */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800/50 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Live Portfolio Diagnostics
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {analyzing ? (
                <div className="h-40 flex flex-col items-center justify-center space-y-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
                  <p className="text-xs text-cyan-500 font-mono tracking-widest uppercase animate-pulse">Running IndiaStack Diagnostics...</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-emerald-950/20 rounded-lg border border-emerald-900/30">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Financial Health Score</div>
                      <div className="text-2xl font-black text-emerald-500">84/100</div>
                      <div className="text-[10px] text-slate-400 mt-2">Top 12% nationally</div>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Debt Burden</div>
                      <div className="text-2xl font-black text-rose-500">₹4.25L</div>
                      <div className="text-[10px] text-slate-400 mt-2">24% APR avg</div>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Savings Forecast</div>
                      <div className="text-2xl font-black text-cyan-400">₹14.2L</div>
                      <div className="text-[10px] text-slate-400 mt-2">Projected end of year</div>
                    </div>
                    <div className="p-4 bg-amber-950/20 rounded-lg border border-amber-900/30">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Scam Risk</div>
                      <div className="text-2xl font-black text-amber-500">Low</div>
                      <div className="text-[10px] text-slate-400 mt-2">No dark-web footprint</div>
                    </div>
                    <div className="p-4 bg-indigo-950/20 rounded-lg border border-indigo-900/30 lg:col-span-2">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Economic Participation Index</div>
                      <div className="text-2xl font-black text-indigo-400">0.82 (High)</div>
                      <div className="text-[10px] text-slate-400 mt-2">Strong formal market contribution</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">AI Findings</h4>
                    <div className="flex items-start gap-3 p-3 bg-rose-950/20 rounded border border-rose-900/30">
                      <AlertTriangle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-slate-300"><strong className="text-rose-400">Inefficient Debt Structure:</strong> You are paying 24% APR on ₹1.2L credit card debt while maintaining ₹3L in low-yield savings (4%).</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-amber-950/20 rounded border border-amber-900/30">
                      <Landmark className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-slate-300"><strong className="text-amber-400">Tax Optimization Leak:</strong> Section 80C limit unutilized by ₹45,000. Projected tax loss: ₹13,500.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recommendation & Action */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-cyan-900/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500"></div>
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Strategic Recommendation
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {!analyzing && (
                <>
                  <div>
                    <p className="text-white font-medium mb-2 text-sm leading-relaxed">
                      "I recommend liquidating ₹1.2L from your primary savings account to instantly clear your high-interest credit card debt. This mathematically guarantees a 20% net yield."
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-800 space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Projected Outcome</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Monthly Interest Saved</span>
                      <span className="text-emerald-400 font-mono font-bold">+ ₹2,400</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Credit Score Impact</span>
                      <span className="text-cyan-400 font-mono font-bold">+ 42 pts</span>
                    </div>
                  </div>

                  {!strategyExecuted ? (
                    <button 
                      onClick={executeStrategy}
                      className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    >
                      Execute Strategy <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4" /> Strategy Executed
                    </div>
                  )}
                  
                  {strategyExecuted && (
                    <p className="text-[10px] text-slate-500 text-center">
                      Event broadcasted to banking network. Credit bureau update triggered.
                    </p>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}