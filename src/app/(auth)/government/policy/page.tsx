"use client";

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

        </div>
      </div>
    </div>
  );
}
