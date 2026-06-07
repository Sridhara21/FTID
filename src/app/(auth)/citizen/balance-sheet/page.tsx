"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, ArrowRight, TrendingUp, TrendingDown, Home, Car, Landmark, CreditCard, Activity, Target } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useScenario } from "@/components/ScenarioContext";
import { motion } from "framer-motion";

const baseNetWorthData = [
  { month: "Jan", nw: 4200000 },
  { month: "Feb", nw: 4250000 },
  { month: "Mar", nw: 4180000 },
  { month: "Apr", nw: 4350000 },
  { month: "May", nw: 4500000 },
  { month: "Jun", nw: 4820000 }, 
];

const scenarioNetWorthData = [
  ...baseNetWorthData.slice(0, 5),
  { month: "Jun", nw: 4825000 }, // +5000 subsidy
];

export default function CitizenBalanceSheetPage() {
  const [assetReallocated, setAssetReallocated] = useState(false);
  const { scenario } = useScenario();
  const isScenarioActive = scenario.isActive && scenario.activeEvent === "LIQUIDITY_INJECTION";

  const netWorthData = isScenarioActive ? scenarioNetWorthData : baseNetWorthData;

  const handleRebalance = () => {
    setAssetReallocated(true);
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'ASSET_REBALANCED',
        entity: 'CITIZEN_PORTFOLIO',
        msg: 'Citizen shifted ₹5L from Savings to Sovereign Gold Bonds.',
        impact: ['Bank Deposits', 'Govt Treasury'],
        risk: 'LOW'
      })
    }).catch(() => {});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="border-b border-cyan-900/40 pb-6 flex justify-between items-end">
        <div>
          <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded mb-2 flex items-center gap-2 w-max">
            <Wallet className="h-3 w-3" />
            CITIZEN PORTAL
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">National Balance Sheet</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Is my wealth structured for long-term sovereign growth?"</span>
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Total Net Worth</div>
            <div className={`text-3xl font-black transition-colors duration-500 ${isScenarioActive ? 'text-emerald-300' : 'text-emerald-400'}`}>
               {isScenarioActive ? "₹48.25 Lakh" : "₹48.2 Lakh"}
            </div>
            {isScenarioActive && (
               <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-emerald-400 font-bold tracking-widest mt-1">
                  + ₹5,000 SUBSIDY RECEIVED
               </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Assets & Liabilities */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Card className={`bg-[#05101a] border-slate-800 transition-all ${isScenarioActive ? 'border-emerald-900/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : ''}`}>
              <CardHeader className="border-b border-slate-800 pb-3">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  Assets ({isScenarioActive ? "₹65.45L" : "₹65.4L"})
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Home className="h-4 w-4 text-emerald-500" /> Real Estate
                  </div>
                  <span className="font-mono text-emerald-400">₹45.0L</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Landmark className="h-4 w-4 text-emerald-500" /> Sovereign Bonds
                  </div>
                  <span className="font-mono text-emerald-400">₹12.4L</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Wallet className="h-4 w-4 text-emerald-500" /> Liquid Cash
                  </div>
                  <span className={`font-mono transition-colors ${isScenarioActive ? 'text-emerald-300 font-bold' : 'text-emerald-400'}`}>
                    {isScenarioActive ? "₹8.05L" : "₹8.0L"}
                  </span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#05101a] border-slate-800">
              <CardHeader className="border-b border-slate-800 pb-3">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400">Liabilities (₹17.2L)</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Home className="h-4 w-4 text-rose-500" /> Mortgage
                  </div>
                  <span className="font-mono text-rose-400">₹14.5L</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Car className="h-4 w-4 text-rose-500" /> Auto Loan
                  </div>
                  <span className="font-mono text-rose-400">₹2.3L</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CreditCard className="h-4 w-4 text-rose-500" /> Credit Cards
                  </div>
                  <span className="font-mono text-rose-400">₹0.4L</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-[#05101a] border-slate-800">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" /> Trajectory
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={netWorthData}>
                  <defs>
                    <linearGradient id="colorNw" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="month" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} domain={['dataMin - 200000', 'dataMax + 200000']} tickFormatter={(val) => `₹${(val/100000).toFixed(0)}L`} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }} itemStyle={{ color: '#10b981' }} formatter={(value: number) => [`₹${(value/100000).toFixed(2)}L`, 'Net Worth']} />
                  <Area type="monotone" dataKey="nw" stroke="#10b981" fillOpacity={1} fill="url(#colorNw)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Action Pane */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-[#05101a] border-cyan-900/50">
            <CardHeader className="border-b border-slate-800 pb-4">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                <Target className="h-4 w-4" />
                Wealth Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Key Finding</p>
                <p className="text-sm text-slate-300">You hold ₹8.0L in liquid cash, exceeding the 6-month emergency fund rule by ₹5L. This cash is losing purchasing power due to 5.2% inflation.</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recommended Action</p>
                <p className="text-sm text-white font-medium">Rebalance ₹5L excess cash into Sovereign Gold Bonds (SGBs) for inflation-hedged growth.</p>
              </div>

              {!assetReallocated ? (
                <button onClick={handleRebalance} className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  Execute Rebalance <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-full py-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-500 font-bold tracking-widest uppercase text-xs rounded-lg flex items-center justify-center gap-2">
                  <Activity className="h-4 w-4" /> Rebalance Settled
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}