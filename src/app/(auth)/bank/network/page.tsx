"use client";

import { Network, Activity, AlertTriangle, ShieldCheck, MapPin, Repeat } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const fundFlowData = [
  { time: '09:00', domesticRTGS: 450, crossBorder: 120 },
  { time: '11:00', domesticRTGS: 680, crossBorder: 150 },
  { time: '13:00', domesticRTGS: 840, crossBorder: 210 },
  { time: '15:00', domesticRTGS: 720, crossBorder: 180 },
  { time: '17:00', domesticRTGS: 350, crossBorder: 90 },
];

export default function BankNetworkAnalysis() {
  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Network className="h-8 w-8 text-blue-400" />
              Network Flow Analysis
          </h1>
          <p className="text-blue-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            RTGS / NEFT FUND TRAILS • COUNTERPARTY EXPOSURE
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-blue-900/50 rounded-full">
            <Activity className="h-4 w-4 text-blue-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500/60">Node Connectivity: 100%</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-blue-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500/60 mb-2">Fund Velocity (RTGS)</p>
                      <p className="text-4xl font-bold text-white mb-3">₹4.2T</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <Activity className="h-3 w-3" /> <span className="text-blue-500/40 ml-1">CLEARED TODAY</span>
                      </div>
                  </div>
                  <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-900/50">
                      <Repeat className="h-5 w-5 text-blue-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-blue-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500/60 mb-2">Counterparty Risk Index</p>
                      <p className="text-4xl font-bold text-emerald-400 mb-3">Low</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <ShieldCheck className="h-3 w-3" /> <span className="text-blue-500/40 ml-1">NO EXPOSURE BREACHES</span>
                      </div>
                  </div>
                  <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-900/50">
                      <ShieldCheck className="h-5 w-5 text-blue-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-blue-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500/60 mb-2">Anomalous Transfers</p>
                      <p className="text-4xl font-bold text-amber-400 mb-3">18</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-amber-400">
                          <AlertTriangle className="h-3 w-3" /> <span className="text-amber-500/60 ml-1">FLAGGED FOR AML REVIEW</span>
                      </div>
                  </div>
                  <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-900/50">
                      <AlertTriangle className="h-5 w-5 text-blue-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-8 bg-[#0a1520] border-blue-900/30 h-[400px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle className="text-lg flex items-center gap-2 text-white">
                        <Activity className="h-5 w-5 text-blue-500/70" /> Settlement Flow Density
                    </CardTitle>
                    <p className="text-xs text-blue-100/50">Intraday domestic vs cross-border settlement volumes through the central switch.</p>
                </div>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={fundFlowData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorDom" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorCross" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" vertical={false} />
                        <XAxis dataKey="time" stroke="#3b82f6" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#3b82f6" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v}B`} />
                        <Tooltip cursor={{stroke: '#1e3a8a'}} contentStyle={{backgroundColor: '#020810', borderColor: '#1e3a8a'}} />
                        <Area type="monotone" dataKey="domesticRTGS" name="Domestic RTGS (₹ Billions)" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorDom)" />
                        <Area type="monotone" dataKey="crossBorder" name="Cross-Border Swift" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorCross)" />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 bg-[#0a1520] border-blue-900/30">
            <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-500/70" /> High-Value Node Alerts
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-col gap-3 p-4 bg-[#020810] border border-blue-900/30 border-l-2 border-l-amber-500 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-white">Corp Node 'Zeus'</span>
                        <span className="text-[10px] text-amber-500 uppercase tracking-widest font-bold px-2 py-0.5 bg-amber-500/10 rounded flex items-center gap-1"><AlertTriangle className="h-3 w-3" /> AML Flag</span>
                    </div>
                    <div className="text-xs text-blue-100/60">
                        <p><strong>Vector:</strong> Circular transfers (A → B → C → A) detected within 20 mins.</p>
                        <p className="mt-1 flex items-center gap-1 text-[9px] uppercase tracking-widest text-blue-400/80">Value: ₹12.5Cr</p>
                    </div>
                    <button className="mt-1 w-full py-2 bg-blue-600/20 hover:bg-amber-600 border border-amber-500/30 hover:border-amber-500 text-white font-bold text-[10px] uppercase tracking-widest rounded transition-colors text-center">
                        Isolate Node
                    </button>
                </div>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}
