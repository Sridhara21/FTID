"use client";
<<<<<<< HEAD

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ArrowUpRight, Network, Target } from "lucide-react";
import { TrustScoreWidget } from "@/components/shared/observability/TrustScoreWidget";
import { AIPulseIntelligence } from "@/components/shared/observability/AIPulseIntelligence";

export default function Page() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* 1. Who uses this page? & 2. What decision is made here? */}
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
          <h1 className="text-3xl font-black text-white tracking-tight">Policy Simulator</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"What happens if policy changes?"</span>
          </p>
        </div>
      </div>

      {/* 3. What intelligence/data is displayed? */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <Card className="bg-[#0a1520] border-amber-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">GDP Impact</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-amber-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-amber-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0a1520] border-amber-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Revenue Impact</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-amber-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-amber-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0a1520] border-amber-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Employment Impact</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-amber-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-amber-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 4. What action can be taken? */}
        <div className="lg:col-span-2 space-y-6">
          <AIPulseIntelligence 
            title="AI System Analysis"
            primaryInsight="Real-time telemetry active for Policy Simulator."
            secondaryInsights={[
              "Data feeds synchronized and verified.",
              "Awaiting action sequence."
            ]}
            riskLevel="LOW"
          />

          <Card className="bg-[#0a1520] border-amber-900/40">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <Target className="h-4 w-4 text-amber-400" />
                Module Capabilities & Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors">GST Simulator</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors">Repo Rate Simulator</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors">Subsidy Simulator</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 5. Which other FTID systems are affected? */}
        <div className="space-y-6">
          <TrustScoreWidget 
            score={999} 
            entityName="Module Integrity"
          />

          <Card className="bg-[#0a1520] border-amber-900/40">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <Network className="h-4 w-4 text-amber-400" />
                Connected Systems
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">

                  <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-slate-300">Regulator</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Active Node</span>
                  </div>
            </CardContent>
          </Card>
=======

import { useState, useEffect } from "react";
import { HandCoins, Activity, BarChart3, Settings2, Loader2 } from "lucide-react";
import { PolicyInputs, PolicyOutputs } from "@/lib/engines";

export default function PolicyTwin() {
  const [inputs, setInputs] = useState<PolicyInputs>({
    gstRate: 18,
    corporateTax: 25,
    subsidyAllocation: 50000,
    msmeCredit: 100000,
    infraSpending: 200000
  });

  const [outputs, setOutputs] = useState<PolicyOutputs | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Use a debounce for calling API
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(timer);
  }, [inputs]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/v1/government/policy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs)
      });
      const json = await res.json();
      if (json.success) setOutputs(json.data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSlider = (key: keyof PolicyInputs, value: number) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <HandCoins className="h-6 w-6 text-amber-400" />
          <h1 className="text-2xl font-black text-white uppercase tracking-tight">Policy Digital Twin</h1>
        </div>
        <p className="text-slate-400 font-mono text-sm max-w-2xl">
          Macroeconomic Simulator. Adjust policy levers below to predict systemic impact on growth and formalization.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Inputs */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="p-5 border border-slate-800 bg-[#0a1520] rounded-xl flex flex-col gap-6 relative">
            <h2 className="text-sm font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
              <Settings2 className="h-4 w-4 text-amber-500" /> Policy Levers
            </h2>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Mean GST Rate</span>
                <span className="text-amber-400">{inputs.gstRate}%</span>
              </div>
              <input type="range" min="5" max="28" value={inputs.gstRate} onChange={e => handleSlider('gstRate', Number(e.target.value))} className="w-full accent-amber-500" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Corporate Tax</span>
                <span className="text-amber-400">{inputs.corporateTax}%</span>
              </div>
              <input type="range" min="15" max="35" value={inputs.corporateTax} onChange={e => handleSlider('corporateTax', Number(e.target.value))} className="w-full accent-amber-500" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Subsidy Allocation (Cr)</span>
                <span className="text-amber-400">₹{inputs.subsidyAllocation}</span>
              </div>
              <input type="range" min="10000" max="100000" step="5000" value={inputs.subsidyAllocation} onChange={e => handleSlider('subsidyAllocation', Number(e.target.value))} className="w-full accent-amber-500" />
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">MSME Credit Target (Cr)</span>
                <span className="text-amber-400">₹{inputs.msmeCredit}</span>
              </div>
              <input type="range" min="50000" max="200000" step="10000" value={inputs.msmeCredit} onChange={e => handleSlider('msmeCredit', Number(e.target.value))} className="w-full accent-amber-500" />
            </div>
          </div>
        </div>

        {/* Right Column: Outputs */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
          
          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-[#020810]/60 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-xl border border-amber-900/30">
              <Loader2 className="w-8 h-8 text-amber-500 animate-spin mb-2" />
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest">Running Simulation...</span>
            </div>
          )}

          <div className="p-5 border border-slate-800 bg-[#0a1520] rounded-xl flex flex-col justify-between group">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">GDP Growth Prediction</span>
            <div className="flex items-end gap-2 mt-4">
              <span className="text-4xl font-black text-amber-400 tabular-nums">
                {outputs ? outputs.gdpGrowth.toFixed(2) : '--'}%
              </span>
              {outputs && outputs.gdpGrowth > 6.5 ? <span className="text-emerald-500 text-sm font-bold mb-1">+Acc</span> : <span className="text-rose-500 text-sm font-bold mb-1">-Dec</span>}
            </div>
          </div>
          
          <div className="p-5 border border-slate-800 bg-[#0a1520] rounded-xl flex flex-col justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Formalization Index</span>
            <div className="flex items-end gap-2 mt-4">
              <span className="text-4xl font-black text-emerald-400 tabular-nums">
                {outputs ? outputs.formalization.toFixed(1) : '--'}%
              </span>
              <span className="text-slate-400 text-sm font-bold mb-1 font-mono">of GDP</span>
            </div>
          </div>

          <div className="p-5 border border-slate-800 bg-[#0a1520] rounded-xl flex flex-col justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Gov Revenue (Lakh Cr)</span>
            <div className="flex items-end gap-2 mt-4">
              <span className="text-4xl font-black text-white tabular-nums">
                ₹{outputs ? outputs.govRevenue.toFixed(2) : '--'}
              </span>
            </div>
          </div>

          <div className="p-5 border border-slate-800 bg-[#0a1520] rounded-xl flex flex-col justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Predicted Inflation</span>
            <div className="flex items-end gap-2 mt-4">
              <span className="text-4xl font-black text-rose-400 tabular-nums">
                {outputs ? outputs.inflation.toFixed(2) : '--'}%
              </span>
            </div>
          </div>

>>>>>>> 90ce4baaf6ae78fb544f5305ef97fc98895aed59
        </div>
      </div>
    </div>
  );
}
