"use client";

import { Activity, Network, Truck, TrendingUp, AlertTriangle, Building2, Map, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const taxVelocityData = [
  { time: '08:00', ewayBills: 42000, gstnSyncs: 41500 },
  { time: '10:00', ewayBills: 58000, gstnSyncs: 57000 },
  { time: '12:00', ewayBills: 64000, gstnSyncs: 63500 },
  { time: '14:00', ewayBills: 71000, gstnSyncs: 69000 },
  { time: '16:00', ewayBills: 82000, gstnSyncs: 80500 },
  { time: '18:00', ewayBills: 65000, gstnSyncs: 64500 },
];

export default function GovernmentTax() {
  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Building2 className="h-8 w-8 text-amber-400" />
              Tax & Revenue Intelligence
          </h1>
          <p className="text-amber-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            GSTN CIRCULAR TRADING DETECTION • E-WAY BILL VELOCITY
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-amber-900/50 rounded-full">
            <Activity className="h-4 w-4 text-emerald-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">GSTN Network: Live Sync</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-amber-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500/60 mb-2">E-Way Bills Generated</p>
                      <p className="text-4xl font-bold text-white mb-3">3.2M</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <TrendingUp className="h-3 w-3" /> +14% <span className="text-emerald-500/40 ml-1">VS LAST MONTH</span>
                      </div>
                  </div>
                  <div className="p-3 bg-amber-900/20 rounded-xl border border-amber-900/50">
                      <Truck className="h-5 w-5 text-amber-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-amber-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500/60 mb-2">Circular Trading Suspects</p>
                      <p className="text-4xl font-bold text-rose-400 mb-3">412</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-rose-400">
                          <Network className="h-3 w-3" /> <span className="text-rose-500/40 ml-1">GSTN GRAPH ANALYSIS</span>
                      </div>
                  </div>
                  <div className="p-3 bg-amber-900/20 rounded-xl border border-amber-900/50">
                      <Network className="h-5 w-5 text-amber-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-amber-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500/60 mb-2">Tax Gap Recovered</p>
                      <p className="text-4xl font-bold text-emerald-400 mb-3">₹1,240Cr</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <ShieldCheck className="h-3 w-3" /> <span className="text-emerald-500/40 ml-1">VIA AUTOMATED NOTICES</span>
                      </div>
                  </div>
                  <div className="p-3 bg-amber-900/20 rounded-xl border border-amber-900/50">
                      <ShieldCheck className="h-5 w-5 text-amber-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-8 bg-[#0a1520] border-amber-900/30 h-[400px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle className="text-lg flex items-center gap-2 text-white">
                        <Truck className="h-5 w-5 text-amber-500/70" /> Real-time Economic Velocity (E-Way Bills)
                    </CardTitle>
                    <p className="text-xs text-amber-100/50">Daily volume of goods movement synced against GSTN invoicing data.</p>
                </div>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={taxVelocityData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorEway" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorGst" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#78350f" vertical={false} />
                        <XAxis dataKey="time" stroke="#d97706" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#d97706" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v/1000}k`} />
                        <Tooltip cursor={{stroke: '#78350f'}} contentStyle={{backgroundColor: '#020810', borderColor: '#78350f'}} />
                        <Area type="monotone" dataKey="ewayBills" name="E-Way Bills Active" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#colorEway)" />
                        <Area type="monotone" dataKey="gstnSyncs" name="GSTN Invoice Matches" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorGst)" />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 bg-[#0a1520] border-amber-900/30">
            <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <Network className="h-4 w-4 text-amber-500/70" /> Circular Trading Alerts
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-col gap-3 p-4 bg-[#020810] border border-rose-900/30 border-l-2 border-l-rose-500 rounded-lg cursor-pointer hover:bg-rose-900/20 transition-colors">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-white">Cluster Alpha-9</span>
                        <span className="text-[10px] text-rose-500 uppercase tracking-widest font-bold px-2 py-0.5 bg-rose-500/10 rounded">High Risk</span>
                    </div>
                    <div className="text-xs text-amber-100/60">
                        <p><strong>Entities involved:</strong> 14 shell companies</p>
                        <p className="mt-1 flex items-center gap-1 text-[9px] uppercase tracking-widest text-rose-400/80"><AlertTriangle className="h-3 w-3"/> ITC Claimed: ₹45.2Cr</p>
                    </div>
                    <button className="mt-1 w-full py-2 bg-rose-600/20 hover:bg-rose-600 border border-rose-500/30 hover:border-rose-500 text-white font-bold text-[10px] uppercase tracking-widest rounded transition-colors text-center">
                        Freeze ITCs & Issue Notices
                    </button>
                </div>

                <div className="flex flex-col gap-3 p-4 bg-[#020810] border border-amber-900/30 border-l-2 border-l-amber-500 rounded-lg cursor-pointer hover:bg-amber-900/20 transition-colors">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-white">Node Beta-2</span>
                        <span className="text-[10px] text-amber-500 uppercase tracking-widest font-bold px-2 py-0.5 bg-amber-500/10 rounded">Under Investigation</span>
                    </div>
                    <div className="text-xs text-amber-100/60">
                        <p><strong>Mismatch:</strong> E-way bills generated without IRN.</p>
                        <p className="mt-1 flex items-center gap-1 text-[9px] uppercase tracking-widest text-amber-400/80">Value: ₹2.1Cr</p>
                    </div>
                </div>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}
