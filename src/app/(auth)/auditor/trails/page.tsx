"use client";

import { Database, Link2, CheckCircle2, ShieldCheck, HardDrive, RefreshCw } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const trailVolumeData = [
  { hour: '08:00', cbdc: 45000, upi: 120000, aa: 35000 },
  { hour: '10:00', cbdc: 68000, upi: 250000, aa: 42000 },
  { hour: '12:00', cbdc: 84000, upi: 310000, aa: 55000 },
  { hour: '14:00', cbdc: 72000, upi: 280000, aa: 48000 },
  { hour: '16:00', cbdc: 95000, upi: 350000, aa: 62000 },
];

export default function AuditorTrails() {
  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Database className="h-8 w-8 text-indigo-400" />
              Automated Ledger Trails
          </h1>
          <p className="text-indigo-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            IMMUTABLE LOGGING • BLOCKCHAIN VERIFICATION • HASH INTEGRITY
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-emerald-900/50 rounded-full">
            <CheckCircle2 className="h-4 w-4 text-emerald-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">Hashing Active</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-indigo-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-500/60 mb-2">Daily Blocks Written</p>
                      <p className="text-4xl font-bold text-white mb-3">14,204</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <HardDrive className="h-3 w-3" /> <span className="text-indigo-500/40 ml-1">1.2 TB STORAGE UTILIZED</span>
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
                      <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-500/60 mb-2">Hash Integrity Score</p>
                      <p className="text-4xl font-bold text-emerald-400 mb-3">100%</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <ShieldCheck className="h-3 w-3" /> <span className="text-indigo-500/40 ml-1">NO FORKS DETECTED</span>
                      </div>
                  </div>
                  <div className="p-3 bg-indigo-900/20 rounded-xl border border-indigo-900/50">
                      <Link2 className="h-5 w-5 text-indigo-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-indigo-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-500/60 mb-2">Sync Latency</p>
                      <p className="text-4xl font-bold text-white mb-3">42<span className="text-xl text-indigo-500/50">ms</span></p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-indigo-400">
                          <RefreshCw className="h-3 w-3" /> <span className="text-indigo-500/40 ml-1">P99 ACROSS ALL NODES</span>
                      </div>
                  </div>
                  <div className="p-3 bg-indigo-900/20 rounded-xl border border-indigo-900/50">
                      <RefreshCw className="h-5 w-5 text-indigo-400" />
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
                        <HardDrive className="h-5 w-5 text-indigo-500/70" /> Transaction Hashing Volume
                    </CardTitle>
                    <p className="text-xs text-indigo-100/50">Breakdown of logs committed to the immutable trail per subsystem.</p>
                </div>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={trailVolumeData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#312e81" vertical={false} />
                        <XAxis dataKey="hour" stroke="#818cf8" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#818cf8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v/1000}k`} />
                        <Tooltip cursor={{fill: '#312e81', opacity: 0.4}} contentStyle={{backgroundColor: '#020810', borderColor: '#818cf8', fontSize: '12px'}} />
                        <Legend verticalAlign="top" height={36} wrapperStyle={{fontSize: '12px'}} />
                        <Bar dataKey="upi" name="UPI Meta" stackId="a" fill="#4f46e5" radius={[0, 0, 0, 0]} />
                        <Bar dataKey="cbdc" name="CBDC Ledger" stackId="a" fill="#818cf8" radius={[0, 0, 0, 0]} />
                        <Bar dataKey="aa" name="Consent Logs" stackId="a" fill="#c7d2fe" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 bg-[#0a1520] border-indigo-900/30">
            <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <Database className="h-4 w-4 text-indigo-500/70" /> Live Block Inspector
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-col gap-2 p-3 bg-[#020810] border border-indigo-900/30 border-l-2 border-l-indigo-500 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-mono font-bold text-indigo-400">Block #892,110</span>
                        <span className="text-[9px] text-slate-500 font-mono">Just now</span>
                    </div>
                    <div className="text-[10px] text-indigo-100/60 font-mono break-all">
                        Hash: 0x8f2a...91bc<br/>
                        Txns: 1,452 • Size: 2.1MB<br/>
                        Status: <span className="text-emerald-400">Confirmed (3/3 Nodes)</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 p-3 bg-[#020810] border border-indigo-900/30 border-l-2 border-l-indigo-500 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-mono font-bold text-indigo-400">Block #892,109</span>
                        <span className="text-[9px] text-slate-500 font-mono">12s ago</span>
                    </div>
                    <div className="text-[10px] text-indigo-100/60 font-mono break-all">
                        Hash: 0x3d4f...11xz<br/>
                        Txns: 940 • Size: 1.4MB<br/>
                        Status: <span className="text-emerald-400">Confirmed (3/3 Nodes)</span>
                    </div>
                </div>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}
