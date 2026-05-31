"use client";

import { ShieldCheck, Activity, LineChart, Globe, Zap, CheckCircle2, PlayCircle, Loader2 } from "lucide-react";
import { useState } from "react";

export default function NationalDashboard() {
  const [simulationState, setSimulationState] = useState<{ step: number; isRunning: boolean; logs: string[] }>({
    step: 0,
    isRunning: false,
    logs: []
  });

  const runSimulation = async () => {
    setSimulationState({ step: 0, isRunning: true, logs: [] });
    
    const steps = [
      "Citizen receives DBT subsidy",
      "CBDC Wallet updated",
      "Business receives payment",
      "Smart Invoice generated",
      "Compliance checks triggered",
      "Enterprise Trust scores updated",
      "Bank evaluates SME loan request",
      "Institution approves credit",
      "Government GDP & Tax updates",
      "Regulator receives systemic risk updates"
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setSimulationState(prev => ({
        step: i + 1,
        isRunning: i < steps.length - 1,
        logs: [...prev.logs, steps[i]]
      }));
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-rose-400" />
            <h1 className="text-2xl font-black text-white uppercase tracking-tight">Control Room of India</h1>
          </div>
          <p className="text-slate-400 font-mono text-sm max-w-2xl">
            National Financial Intelligence Infrastructure. Live systemic aggregation across 8 ecosystem nodes.
          </p>
        </div>
        
        <button 
          onClick={runSimulation}
          disabled={simulationState.isRunning}
          className="bg-rose-600 hover:bg-rose-500 disabled:bg-rose-900/50 disabled:text-rose-400/50 text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-colors border border-rose-500/20"
        >
          {simulationState.isRunning ? <Loader2 className="w-4 h-4 animate-spin" /> : <PlayCircle className="w-4 h-4" />}
          Run National Economic Scenario
        </button>
      </div>

      {simulationState.logs.length > 0 && (
        <div className="bg-[#0a1520] border border-rose-900/50 rounded-xl p-4 flex flex-col gap-2">
          <h3 className="text-[10px] font-bold text-rose-500 uppercase tracking-widest flex items-center gap-2 mb-2">
            <Zap className="w-3 h-3" /> Live Simulation Telemetry
          </h3>
          <div className="flex flex-wrap gap-2">
            {simulationState.logs.map((log, idx) => (
              <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-950/30 border border-rose-900/50 rounded text-xs font-mono text-rose-200 animate-in fade-in slide-in-from-left-4">
                <CheckCircle2 className="w-3 h-3 text-rose-500" /> {log}
              </span>
            ))}
            {simulationState.isRunning && (
              <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span> Processing...
              </span>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Core Indices */}
        <div className="bg-[#0a1520] border border-slate-800 p-5 rounded-xl flex flex-col gap-3">
          <div className="flex items-center gap-2 text-rose-400">
            <Activity className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Financial Stability Index</span>
          </div>
          <span className="text-4xl font-black text-white tabular-nums">94.2<span className="text-sm text-slate-500 font-medium">/100</span></span>
        </div>
        
        <div className="bg-[#0a1520] border border-slate-800 p-5 rounded-xl flex flex-col gap-3">
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">National Trust Score</span>
          </div>
          <span className="text-4xl font-black text-white tabular-nums">88.5<span className="text-sm text-slate-500 font-medium">/100</span></span>
        </div>

        <div className="bg-[#0a1520] border border-slate-800 p-5 rounded-xl flex flex-col gap-3">
          <div className="flex items-center gap-2 text-cyan-400">
            <LineChart className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Live GDP Pulse</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-black text-white tabular-nums">+7.2%</span>
            <span className="text-xs text-emerald-500 font-bold mb-1">↑ 0.4%</span>
          </div>
        </div>

        <div className="bg-[#0a1520] border border-slate-800 p-5 rounded-xl flex flex-col gap-3">
          <div className="flex items-center gap-2 text-amber-400">
            <Globe className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Economy Formalization</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-black text-white tabular-nums">54.8%</span>
            <span className="text-xs text-emerald-500 font-bold mb-1">↑ 2.1%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
        <div className="bg-[#0a1520] border border-rose-900/30 p-6 rounded-xl flex flex-col gap-4">
           <h3 className="text-[10px] font-bold text-rose-400 uppercase tracking-widest border-b border-rose-900/30 pb-2">Critical Systemic Alerts</h3>
           <div className="flex flex-col gap-3">
              <div className="p-3 bg-rose-950/20 border border-rose-900/50 rounded flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">MSME Liquidity Stress</span>
                  <span className="text-xs text-slate-400 font-mono">Pune Auto-Belt (Cascading defaults detected)</span>
                </div>
                <span className="text-rose-500 text-xs font-bold uppercase tracking-widest px-2 py-1 bg-rose-950/50 rounded border border-rose-500/20">Action Req</span>
              </div>
              <div className="p-3 bg-rose-950/20 border border-rose-900/50 rounded flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">Circular Trading Anomaly</span>
                  <span className="text-xs text-slate-400 font-mono">Textile Export Sector (14 entities flagged)</span>
                </div>
                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest px-2 py-1 bg-amber-950/50 rounded border border-amber-500/20">Monitoring</span>
              </div>
           </div>
        </div>
        
        <div className="bg-[#0a1520] border border-slate-800 p-6 rounded-xl flex flex-col gap-4">
           <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2">Active Network Subsystems</h3>
           <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center p-2">
                 <span className="text-sm text-slate-300 font-mono">CBDC Gateway</span>
                 <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Online</span>
              </div>
              <div className="flex justify-between items-center p-2">
                 <span className="text-sm text-slate-300 font-mono">Policy Digital Twin</span>
                 <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Online</span>
              </div>
              <div className="flex justify-between items-center p-2">
                 <span className="text-sm text-slate-300 font-mono">National Financial Graph</span>
                 <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Online</span>
              </div>
              <div className="flex justify-between items-center p-2">
                 <span className="text-sm text-slate-300 font-mono">Alt Credit Underwriting Node</span>
                 <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Online</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
