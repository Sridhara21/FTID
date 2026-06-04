"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ArrowUpRight, Network, Target, SlidersHorizontal, Calculator } from "lucide-react";
import { TrustScoreWidget } from "@/components/shared/observability/TrustScoreWidget";
import { AIPulseIntelligence } from "@/components/shared/observability/AIPulseIntelligence";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function PolicyTwin() {
  const [gstRate, setGstRate] = useState(18); // Base 18%
  const [subsidy, setSubsidy] = useState(500); // Base 500k Crores
  const [interestRate, setInterestRate] = useState(6.5); // Base 6.5%
  const [liquidity, setLiquidity] = useState(100); // Base 100k Crores

  // Deterministic economic simulation based on slider inputs
  const simulatedData = useMemo(() => {
    const data = [];
    let currentGdp = 3700; // $3.7T Base
    let currentInflation = 5.2; // Base 5.2%
    let currentTaxRev = 350; // $350B Base
    let currentEmployment = 450; // 450M Base
    
    // Impact multipliers
    const gstImpact = (gstRate - 18) * 0.5; // Higher GST slightly reduces GDP growth, increases Tax
    const subImpact = (subsidy - 500) * 0.1; // Higher Subsidy increases GDP, increases Inflation
    const intImpact = (interestRate - 6.5) * -1.2; // Higher interest reduces GDP and Inflation
    const liqImpact = (liquidity - 100) * 0.05; // Higher liquidity increases GDP and Inflation

    for (let year = 2024; year <= 2030; year++) {
      if (year > 2024) {
        currentGdp += (currentGdp * 0.07) - gstImpact + subImpact + intImpact + liqImpact;
        currentInflation += (subImpact * 0.2) - (intImpact * 0.3) + (liqImpact * 0.1);
        currentTaxRev += (currentTaxRev * 0.08) + (gstImpact * 10);
        currentEmployment += (currentGdp * 0.005) + (liqImpact * 0.2);
      }
      data.push({
        year: year.toString(),
        gdp: parseFloat(currentGdp.toFixed(1)),
        inflation: Math.max(2, parseFloat(currentInflation.toFixed(1))),
        tax: parseFloat(currentTaxRev.toFixed(1)),
        jobs: parseFloat(currentEmployment.toFixed(1))
      });
    }
    return data;
  }, [gstRate, subsidy, interestRate, liquidity]);

  const latest = simulatedData[simulatedData.length - 1];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber-900/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-amber-900/30 text-amber-400 text-[10px] font-bold tracking-widest uppercase rounded">
              GOVERNMENT PORTAL
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase tracking-widest animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              SYSTEM ACTIVE
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Policy Digital Twin</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"What happens if macroeconomic policy changes?"</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* CONTROLS (Left Sidebar) */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="bg-[#0a1520] border-amber-900/40">
            <CardHeader className="pb-3 border-b border-slate-800">
              <CardTitle className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Policy Levers
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span>GST Base Rate</span>
                  <span className="text-amber-400">{gstRate}%</span>
                </div>
                <input type="range" min="5" max="28" value={gstRate} onChange={(e) => setGstRate(Number(e.target.value))} className="w-full accent-amber-500" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span>Subsidy Allocation</span>
                  <span className="text-amber-400">₹{subsidy}k Cr</span>
                </div>
                <input type="range" min="100" max="1500" step="50" value={subsidy} onChange={(e) => setSubsidy(Number(e.target.value))} className="w-full accent-amber-500" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span>Repo Rate</span>
                  <span className="text-amber-400">{interestRate}%</span>
                </div>
                <input type="range" min="4.0" max="9.0" step="0.25" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full accent-amber-500" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span>Liquidity Injection</span>
                  <span className="text-amber-400">₹{liquidity}k Cr</span>
                </div>
                <input type="range" min="0" max="1000" step="10" value={liquidity} onChange={(e) => setLiquidity(Number(e.target.value))} className="w-full accent-amber-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-amber-900/40">
            <CardContent className="p-4 flex gap-3">
              <Calculator className="h-8 w-8 text-slate-500" />
              <div>
                <p className="text-xs text-slate-400">Simulation Target</p>
                <p className="text-sm font-bold text-white">Year 2030 Baseline</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RESULTS & CHARTS (Right) */}
        <div className="lg:col-span-3 space-y-6">
          {/* Output Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-[#05101a] border-slate-800">
              <CardContent className="p-4">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Projected GDP</p>
                <p className="text-2xl font-mono text-white mt-1">${(latest.gdp / 1000).toFixed(2)}T</p>
              </CardContent>
            </Card>
            <Card className="bg-[#05101a] border-slate-800">
              <CardContent className="p-4">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Inflation</p>
                <p className={`text-2xl font-mono mt-1 ${latest.inflation > 6 ? 'text-red-400' : 'text-emerald-400'}`}>{latest.inflation}%</p>
              </CardContent>
            </Card>
            <Card className="bg-[#05101a] border-slate-800">
              <CardContent className="p-4">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Tax Revenue</p>
                <p className="text-2xl font-mono text-amber-400 mt-1">${latest.tax}B</p>
              </CardContent>
            </Card>
            <Card className="bg-[#05101a] border-slate-800">
              <CardContent className="p-4">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Employment</p>
                <p className="text-2xl font-mono text-blue-400 mt-1">{latest.jobs}M</p>
              </CardContent>
            </Card>
          </div>

          {/* Chart */}
          <Card className="bg-[#0a1520] border-amber-900/40 p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-6 flex justify-between">
              <span>GDP vs Inflation Trajectory</span>
              <span className="text-[10px] text-slate-500">Live Simulation</span>
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={simulatedData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="year" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis yAxisId="left" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${(val/1000).toFixed(1)}T`} />
                  <YAxis yAxisId="right" orientation="right" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}%`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff', fontSize: '12px' }}
                    labelStyle={{ color: '#94a3b8', marginBottom: '4px' }}
                  />
                  <Line yAxisId="left" type="monotone" dataKey="gdp" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4, fill: '#f59e0b', strokeWidth: 0 }} />
                  <Line yAxisId="right" type="monotone" dataKey="inflation" stroke="#ef4444" strokeWidth={2} dot={{ r: 3, fill: '#ef4444', strokeWidth: 0 }} />
                  <ReferenceLine yAxisId="right" y={6} stroke="#ef4444" strokeDasharray="3 3" opacity={0.3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* AI insights matching the simulation */}
          <AIPulseIntelligence 
            title="Macroeconomic AI Analysis"
            primaryInsight={
              latest.inflation > 6 
              ? "Warning: Simulation indicates inflation breaching the RBI upper tolerance threshold of 6%." 
              : "Simulation indicates stable growth within RBI inflation mandates."
            }
            secondaryInsights={[
              `Projected GDP of $${(latest.gdp / 1000).toFixed(2)}T by 2030.`,
              "Tax revenue growth aligns with MSME formalization targets."
            ]}
            riskLevel={latest.inflation > 6 ? "HIGH" : "LOW"}
          />
        </div>
      </div>
    </div>
  );
}
