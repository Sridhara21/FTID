"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, Landmark, Percent, TrendingUp, TrendingDown, Users } from "lucide-react";
import { DemoGuide } from "@/components/shared/DemoGuide";
import { ScenarioRunButton } from "@/components/shared/ScenarioRunButton";

export default function PolicySimulatorPage() {
  const [gstRate, setGstRate] = useState(18);
  const [interestRate, setInterestRate] = useState(6.5);
  const [subsidy, setSubsidy] = useState(500);
  const [liquidity, setLiquidity] = useState(2000);

  // Simulated Outputs based on sliders
  const gdpGrowth = (6.5 + (subsidy / 2000) + (liquidity / 5000) - ((interestRate - 6.5) * 0.8) - ((gstRate - 18) * 0.3)).toFixed(1);
  const inflation = (5.2 + (subsidy / 1500) + (liquidity / 4000) - ((interestRate - 6.5) * 0.5)).toFixed(1);
  const msmeActivity = (100 + (subsidy / 50) + (liquidity / 100) - ((interestRate - 6.5) * 5) - ((gstRate - 18) * 2)).toFixed(0);
  const taxRevenue = (150000 + ((gstRate - 18) * 5000) + ((parseFloat(gdpGrowth) - 6.5) * 2000)).toFixed(0);

  // Deriving Winners and Losers dynamically
  const isLoosePolicy = interestRate < 6.5 || liquidity > 2500;
  const isHighTax = gstRate > 18;

  const winners = isLoosePolicy ? ["Retail Borrowers", "MSMEs", "Real Estate"] : (isHighTax ? ["Sovereign Treasury"] : ["Savers", "Fixed Income Inst."]);
  const losers = isLoosePolicy ? ["Fixed Income Inst.", "Currency Valuation"] : (isHighTax ? ["Retail Consumers", "MSME Margins"] : ["Highly Leveraged Corporates"]);

  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-indigo-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-indigo-900/30 text-indigo-400 text-[10px] font-bold tracking-widest uppercase rounded">
                ECONOMIC LABORATORY
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
              National Policy Simulator
            </h1>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Live observability of macroeconomic impact. Adjust fiscal and monetary levers to simulate instantaneous ripple effects across the sovereign grid.
            </p>
          </div>
          <div className="flex gap-4">
            <ScenarioRunButton />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Inputs Section */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="bg-[#0a1520] border-indigo-900/30">
              <CardHeader>
                <CardTitle className="text-white text-lg">Policy Levers</CardTitle>
                <CardDescription className="text-slate-400">Adjust macroeconomic inputs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2"><Percent className="w-3 h-3"/> Average GST Rate</label>
                    <span className="text-indigo-400 font-bold">{gstRate}%</span>
                  </div>
                  <input type="range" min="5" max="28" step="1" value={gstRate} onChange={(e) => setGstRate(Number(e.target.value))} className="w-full accent-indigo-500" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2"><Landmark className="w-3 h-3"/> Repo / Interest Rate</label>
                    <span className="text-indigo-400 font-bold">{interestRate}%</span>
                  </div>
                  <input type="range" min="4" max="10" step="0.25" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full accent-indigo-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2"><Activity className="w-3 h-3"/> Subsidy Allocation (Cr)</label>
                    <span className="text-indigo-400 font-bold">₹{subsidy}</span>
                  </div>
                  <input type="range" min="0" max="5000" step="100" value={subsidy} onChange={(e) => setSubsidy(Number(e.target.value))} className="w-full accent-indigo-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2"><Activity className="w-3 h-3"/> Liquidity Injection (Cr)</label>
                    <span className="text-indigo-400 font-bold">₹{liquidity}</span>
                  </div>
                  <input type="range" min="0" max="10000" step="500" value={liquidity} onChange={(e) => setLiquidity(Number(e.target.value))} className="w-full accent-indigo-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Outputs Section */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#0a1520] border border-indigo-900/30 rounded-xl p-4 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">GDP Growth</span>
                <span className="text-2xl font-black text-emerald-400">{gdpGrowth}%</span>
              </div>
              <div className="bg-[#0a1520] border border-indigo-900/30 rounded-xl p-4 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Inflation Core</span>
                <span className={`text-2xl font-black ${parseFloat(inflation) > 6 ? 'text-rose-400' : 'text-amber-400'}`}>{inflation}%</span>
              </div>
              <div className="bg-[#0a1520] border border-indigo-900/30 rounded-xl p-4 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">MSME Activity</span>
                <span className="text-2xl font-black text-cyan-400">{msmeActivity}</span>
              </div>
              <div className="bg-[#0a1520] border border-indigo-900/30 rounded-xl p-4 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Tax Est (Cr)</span>
                <span className="text-2xl font-black text-emerald-400">₹{parseFloat(taxRevenue).toLocaleString()}</span>
              </div>
            </div>

            <Card className="bg-[#0a1520] border-indigo-900/30">
              <CardHeader>
                <CardTitle className="text-white text-lg">Impact Distribution Analysis</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-4">
                  <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-lg p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" /> Economic Winners
                    </p>
                    <ul className="space-y-2">
                      {winners.map(w => (
                        <li key={w} className="text-sm text-emerald-300 font-mono bg-emerald-950/40 px-2 py-1 rounded">{w}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-rose-950/20 border border-rose-900/30 rounded-lg p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-3 flex items-center gap-2">
                      <TrendingDown className="w-4 h-4" /> Economic Losers
                    </p>
                    <ul className="space-y-2">
                      {losers.map(l => (
                        <li key={l} className="text-sm text-rose-300 font-mono bg-rose-950/40 px-2 py-1 rounded">{l}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#020810] border border-indigo-900/30 rounded-lg p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4" /> Employment & Regional
                    </p>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Job Creation (Est)</span> <span className="text-cyan-400">+{((parseFloat(gdpGrowth) - 6.0) * 120000).toLocaleString()}</span></div>
                        <div className="w-full bg-slate-800 rounded-full h-1"><div className="bg-cyan-500 h-1 rounded-full" style={{ width: `${Math.min(100, Math.max(10, (parseFloat(gdpGrowth) - 5)*20))}%` }}></div></div>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed mt-4 pt-4 border-t border-indigo-900/30">
                        {isLoosePolicy ? "Regional disparity dropping. Tier-2 and Tier-3 manufacturing clusters showing highest elasticity to subsidy injections." : "Capital migrating to Tier-1 financial hubs. Regional manufacturing entering consolidation phase."}
                      </p>
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>

          </div>
        </div>
      </div>
      <DemoGuide nextStopUrl="/bank/underwriting" label="Bank Underwriting" />
    </div>
  );
}