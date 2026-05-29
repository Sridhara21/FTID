"use client";

import { Briefcase, TrendingUp, Activity, PieChart as PieChartIcon, Landmark, CircleDollarSign } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const assetAllocation = [
  { name: 'Mutual Funds (Equity)', value: 450000, color: '#06b6d4' },
  { name: 'Direct Stocks', value: 210000, color: '#3b82f6' },
  { name: 'Sovereign Gold Bonds', value: 150000, color: '#f59e0b' },
  { name: 'Provident Fund (EPF)', value: 380000, color: '#10b981' },
  { name: 'Fixed Deposits', value: 100000, color: '#8b5cf6' },
];

export default function CitizenPortfolio() {
  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-cyan-400" />
              Unified Investments Portfolio
          </h1>
          <p className="text-cyan-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            FEDERATED ASSET TRACKING VIA ACCOUNT AGGREGATOR
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-emerald-900/50 rounded-full">
            <Activity className="h-4 w-4 text-emerald-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">Live Market Sync</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-cyan-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/60 mb-2">Total Net Worth</p>
                      <p className="text-4xl font-bold text-white mb-3">₹12.9L</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <TrendingUp className="h-3 w-3" /> +14.2% <span className="text-cyan-500/40 ml-1">XIRR (ANNUALIZED)</span>
                      </div>
                  </div>
                  <div className="p-3 bg-cyan-900/20 rounded-xl border border-cyan-900/50">
                      <Briefcase className="h-5 w-5 text-cyan-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-cyan-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/60 mb-2">Today's Returns</p>
                      <p className="text-4xl font-bold text-emerald-400 mb-3">+₹4,250</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <Activity className="h-3 w-3" /> <span className="text-cyan-500/40 ml-1">ACROSS 12 ASSETS</span>
                      </div>
                  </div>
                  <div className="p-3 bg-cyan-900/20 rounded-xl border border-cyan-900/50">
                      <CircleDollarSign className="h-5 w-5 text-cyan-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-cyan-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/60 mb-2">Connected Brokers</p>
                      <p className="text-4xl font-bold text-white mb-3">4</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-cyan-400">
                          <Landmark className="h-3 w-3" /> <span className="text-cyan-500/40 ml-1">ZERODHA, GROWW, EPFO</span>
                      </div>
                  </div>
                  <div className="p-3 bg-cyan-900/20 rounded-xl border border-cyan-900/50">
                      <Landmark className="h-5 w-5 text-cyan-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-8 bg-[#0a1520] border-cyan-900/30 h-[400px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle className="text-lg flex items-center gap-2 text-white">
                        <PieChartIcon className="h-5 w-5 text-cyan-500/70" /> Asset Allocation
                    </CardTitle>
                    <p className="text-xs text-cyan-100/50">Aggregated view of all investments linked via PAN and Udyam.</p>
                </div>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={assetAllocation}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={110}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                            {assetAllocation.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip 
                            contentStyle={{backgroundColor: '#020810', borderColor: '#0891b2', borderRadius: '8px'}}
                            itemStyle={{color: '#fff'}}
                            formatter={(value: number) => `₹${(value/100000).toFixed(1)}L`}
                        />
                        <Legend verticalAlign="bottom" height={36} wrapperStyle={{fontSize: '11px', color: '#cbd5e1'}} />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 bg-[#0a1520] border-cyan-900/30">
            <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <Activity className="h-4 w-4 text-cyan-500/70" /> Recent Market Activity
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-col gap-3 p-4 bg-[#020810] border border-cyan-900/30 border-l-2 border-l-cyan-500 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-white">SIP Executed</span>
                        <span className="text-[10px] text-cyan-500 uppercase tracking-widest font-bold">Auto-Pay</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <div className="text-xs text-cyan-100/60">
                            <p><strong>Fund:</strong> Parag Parikh Flexi Cap</p>
                            <p className="mt-1">Deducted from HDFC via e-Mandate</p>
                        </div>
                        <p className="text-sm font-bold text-cyan-400">₹15,000</p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 p-4 bg-[#020810] border border-emerald-900/30 border-l-2 border-l-emerald-500 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-white">Dividend Received</span>
                        <span className="text-[10px] text-emerald-500 uppercase tracking-widest font-bold">Credited</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <div className="text-xs text-emerald-100/60">
                            <p><strong>Stock:</strong> ITC Limited</p>
                            <p className="mt-1">Settled in Central Bank Wallet</p>
                        </div>
                        <p className="text-sm font-bold text-emerald-400">+₹1,240</p>
                    </div>
                </div>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}
