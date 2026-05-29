"use client";

import { Activity, TrendingDown, AlertTriangle, ShieldCheck, PieChart as PieChartIcon, Search, Building2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const macroStressData = [
  { quarter: 'Q1', npas: 5.2, unemployment: 6.8, inflation: 5.5 },
  { quarter: 'Q2', npas: 5.1, unemployment: 6.5, inflation: 5.8 },
  { quarter: 'Q3', npas: 4.8, unemployment: 7.2, inflation: 6.2 },
  { quarter: 'Q4', npas: 5.4, unemployment: 7.5, inflation: 6.8 },
  { quarter: 'Q1 (Cur)', npas: 6.1, unemployment: 8.1, inflation: 7.2 },
];

export default function GovernmentStress() {
  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Activity className="h-8 w-8 text-amber-400" />
              Macro-Economic Stress Detection
          </h1>
          <p className="text-amber-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            EPFO ANOMALIES • SECTORAL NPA EARLY WARNINGS
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-amber-900/50 rounded-full">
            <AlertTriangle className="h-4 w-4 text-amber-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500/60">System Alert: Level 2 (Monitor)</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-amber-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500/60 mb-2">Avg Sectoral NPAs</p>
                      <p className="text-4xl font-bold text-white mb-3">6.1%</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-rose-400">
                          <TrendingDown className="h-3 w-3" /> +0.7% <span className="text-rose-500/40 ml-1">QoQ INCREASE</span>
                      </div>
                  </div>
                  <div className="p-3 bg-amber-900/20 rounded-xl border border-amber-900/50">
                      <TrendingDown className="h-5 w-5 text-amber-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-amber-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500/60 mb-2">EPFO Contributor Drop</p>
                      <p className="text-4xl font-bold text-amber-400 mb-3">142K</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-amber-400">
                          <AlertTriangle className="h-3 w-3" /> <span className="text-amber-500/40 ml-1">IN REAL ESTATE SECTOR</span>
                      </div>
                  </div>
                  <div className="p-3 bg-amber-900/20 rounded-xl border border-amber-900/50">
                      <Building2 className="h-5 w-5 text-amber-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-amber-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500/60 mb-2">Automated Early Warnings</p>
                      <p className="text-4xl font-bold text-white mb-3">4</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <ShieldCheck className="h-3 w-3" /> <span className="text-emerald-500/40 ml-1">DISPATCHED TO RBI</span>
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
                        <PieChartIcon className="h-5 w-5 text-amber-500/70" /> Composite Economic Stress Index (CESI)
                    </CardTitle>
                    <p className="text-xs text-amber-100/50">Correlating bank NPAs with high-frequency EPFO and GST inflation metrics.</p>
                </div>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={macroStressData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#78350f" vertical={false} />
                        <XAxis dataKey="quarter" stroke="#d97706" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#d97706" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
                        <Tooltip cursor={{stroke: '#78350f'}} contentStyle={{backgroundColor: '#020810', borderColor: '#78350f'}} />
                        <Legend verticalAlign="top" height={36} wrapperStyle={{fontSize: '12px'}} />
                        <Line type="monotone" dataKey="unemployment" name="EPFO Job Losses" stroke="#f59e0b" strokeWidth={3} dot={false} />
                        <Line type="monotone" dataKey="inflation" name="Wholesale Inflation" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                        <Line type="monotone" dataKey="npas" name="Sectoral NPAs" stroke="#f43f5e" strokeWidth={3} dot={{ fill: '#f43f5e' }} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 bg-[#0a1520] border-amber-900/30">
            <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <Search className="h-4 w-4 text-amber-500/70" /> Algorithmic Triggers
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-col gap-3 p-4 bg-[#020810] border border-amber-900/30 border-l-2 border-l-rose-500 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-white">Commercial Real Estate</span>
                        <span className="text-[10px] text-rose-500 uppercase tracking-widest font-bold px-2 py-0.5 bg-rose-500/10 rounded flex items-center gap-1"><AlertTriangle className="h-3 w-3" /> High Risk</span>
                    </div>
                    <p className="text-xs text-amber-100/60">
                        Consecutive 3-month decline in GST cement/steel inputs correlated with a 12% drop in construction EPFO enrollments.
                    </p>
                    <button className="mt-1 w-full py-2 bg-amber-600/20 hover:bg-rose-600 border border-rose-500/30 hover:border-rose-500 text-white font-bold text-[10px] uppercase tracking-widest rounded transition-colors text-center">
                        Propose Policy Intervention
                    </button>
                </div>

                <div className="flex flex-col gap-3 p-4 bg-[#020810] border border-amber-900/30 border-l-2 border-l-emerald-500 rounded-lg opacity-80">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-white">Auto Manufacturing</span>
                        <span className="text-[10px] text-emerald-500 uppercase tracking-widest font-bold px-2 py-0.5 bg-emerald-500/10 rounded">Recovering</span>
                    </div>
                    <p className="text-xs text-amber-100/60">
                        E-way bill velocity up 18% QoQ. NPAs stabilizing. No immediate intervention required.
                    </p>
                </div>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}
