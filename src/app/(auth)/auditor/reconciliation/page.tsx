"use client";

import { Database, TrendingUp, CheckCircle2, Activity, FileCheck, Network, Lock, Search } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const auditData = [
  { day: '1st', matched: 12000, flagged: 15 },
  { day: '5th', matched: 18000, flagged: 22 },
  { day: '10th', matched: 25000, flagged: 10 },
  { day: '15th', matched: 45000, flagged: 8 },
  { day: '20th', matched: 30000, flagged: 35 },
  { day: '25th', matched: 52000, flagged: 12 },
];

export default function AuditorReconciliation() {
  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Database className="h-8 w-8 text-indigo-400" />
              Continuous Audit (CA) Node
          </h1>
          <p className="text-indigo-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            BLOCKCHAIN-BACKED LEDGERS • CRYPTOGRAPHIC MATCHING
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-emerald-900/50 rounded-full">
            <Lock className="h-4 w-4 text-emerald-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">Ledger Integrity: Verified</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-indigo-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-500/60 mb-2">Total Blocks Audited</p>
                      <p className="text-4xl font-bold text-white mb-3">1.2M</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <TrendingUp className="h-3 w-3" /> <span className="text-emerald-500/40 ml-1">UP TO DATE (T-0)</span>
                      </div>
                  </div>
                  <div className="p-3 bg-indigo-900/20 rounded-xl border border-indigo-900/50">
                      <Database className="h-5 w-5 text-indigo-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-indigo-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-500/60 mb-2">Match Rate (Auto)</p>
                      <p className="text-4xl font-bold text-indigo-400 mb-3">99.8%</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-indigo-400">
                          <CheckCircle2 className="h-3 w-3" /> <span className="text-indigo-500/40 ml-1">CRYPTOGRAPHIC SYNC</span>
                      </div>
                  </div>
                  <div className="p-3 bg-indigo-900/20 rounded-xl border border-indigo-900/50">
                      <FileCheck className="h-5 w-5 text-indigo-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-indigo-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-500/60 mb-2">Anomalies Detected</p>
                      <p className="text-4xl font-bold text-amber-400 mb-3">102</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-amber-400">
                          <Activity className="h-3 w-3" /> <span className="text-amber-500/60 ml-1">QUEUED FOR INVESTIGATION</span>
                      </div>
                  </div>
                  <div className="p-3 bg-indigo-900/20 rounded-xl border border-indigo-900/50">
                      <Network className="h-5 w-5 text-indigo-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-8 bg-[#0a1520] border-indigo-900/30 h-[400px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle className="text-lg flex items-center gap-2 text-white">
                        <Activity className="h-5 w-5 text-indigo-500/70" /> Real-time Ledger Reconciliation
                    </CardTitle>
                    <p className="text-xs text-indigo-100/50">Comparing reported GSTN volume against actual CBDC on-chain settlement flows.</p>
                </div>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={auditData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorMatch" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#818cf8" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#818cf8" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorFlag" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.5}/>
                                <stop offset="95%" stopColor="#fbbf24" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#312e81" vertical={false} />
                        <XAxis dataKey="day" stroke="#6366f1" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#6366f1" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v/1000}k`} />
                        <Tooltip cursor={{stroke: '#312e81'}} contentStyle={{backgroundColor: '#020810', borderColor: '#312e81'}} />
                        <Area type="monotone" dataKey="matched" name="Matched Txs" stroke="#818cf8" strokeWidth={2} fillOpacity={1} fill="url(#colorMatch)" />
                        <Area type="monotone" dataKey="flagged" name="Flagged Discrepancies" stroke="#fbbf24" strokeWidth={3} fillOpacity={1} fill="url(#colorFlag)" />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 bg-[#0a1520] border-indigo-900/30">
            <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <Search className="h-4 w-4 text-indigo-500/70" /> Immutable Audit Trail
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-col gap-3 p-4 bg-[#020810] border border-indigo-900/30 border-l-2 border-l-indigo-500 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-mono font-bold text-indigo-300">0x8a92...f4e1</span>
                        <span className="text-[10px] text-emerald-500 uppercase tracking-widest font-bold px-2 py-0.5 bg-emerald-500/10 rounded">Validated</span>
                    </div>
                    <div className="text-xs text-indigo-100/60">
                        <p><strong>Hash:</strong> SHA-256 Checksum Match</p>
                        <p className="mt-1 flex items-center gap-1 text-[9px] uppercase tracking-widest text-indigo-400/80">Source: GSTN Node 4</p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 p-4 bg-[#020810] border border-amber-900/30 border-l-2 border-l-amber-500 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-mono font-bold text-amber-300">0x3b11...9c2a</span>
                        <span className="text-[10px] text-amber-500 uppercase tracking-widest font-bold px-2 py-0.5 bg-amber-500/10 rounded">Mismatch</span>
                    </div>
                    <div className="text-xs text-indigo-100/60">
                        <p><strong>Error:</strong> Reported value exceeds CBDC settlement flow by ₹4.2M.</p>
                        <p className="mt-1 flex items-center gap-1 text-[9px] uppercase tracking-widest text-amber-400/80">Source: Corporate Node</p>
                    </div>
                    <button className="mt-1 w-full py-2 bg-indigo-600/20 hover:bg-amber-600 border border-amber-500/30 hover:border-amber-500 text-white font-bold text-[10px] uppercase tracking-widest rounded transition-colors text-center">
                        Request Proof
                    </button>
                </div>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}
