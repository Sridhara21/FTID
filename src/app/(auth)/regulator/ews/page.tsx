"use client";

import { useState, useEffect } from "react";
import { Activity, AlertTriangle, Crosshair, Radar, Loader2, ArrowRight } from "lucide-react";

export default function EWSEngine() {
  const [alerts, setAlerts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEWS = async () => {
      try {
        const res = await fetch('/api/v1/regulator/ews');
        const json = await res.json();
        if (json.success) {
          setAlerts(json.data.alerts);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEWS();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-rose-400" />
          <h1 className="text-2xl font-black text-white uppercase tracking-tight">National Early Warning Engine</h1>
        </div>
        <p className="text-slate-400 font-mono text-sm max-w-2xl">
          Predictive systemic risk matrix. Scanning millions of micro-transactions to forecast macro-level stress fractures before they occur.
        </p>
      </div>

      {isLoading ? (
        <div className="w-full flex flex-col items-center justify-center p-24 border border-rose-900/30 bg-rose-950/10 rounded-xl gap-4">
          <Radar className="w-12 h-12 text-rose-500 animate-spin-slow" />
          <span className="text-rose-400 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
            <Loader2 className="w-3 h-3 animate-spin" /> Fetching real-time telemetry from EWS backend...
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {alerts.map((alert, idx) => (
            <div key={idx} className="bg-[#0a1520] border border-rose-900/30 p-6 rounded-xl flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
              
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-950/50 border border-rose-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-rose-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-white uppercase tracking-tight">{alert.type}</span>
                    <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest">{alert.id}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Confidence</span>
                  <span className="text-lg font-black text-white tabular-nums">{alert.confidence}%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex flex-col gap-1 p-3 bg-slate-900/50 rounded border border-white/5">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Impact Region</span>
                  <span className="text-xs text-slate-300 font-mono">{alert.region}</span>
                </div>
                <div className="flex flex-col gap-1 p-3 bg-slate-900/50 rounded border border-white/5">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Vector Sector</span>
                  <span className="text-xs text-slate-300 font-mono">{alert.sector}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">AI Threat Analysis</span>
                <p className="text-sm text-slate-400 leading-relaxed font-mono">
                  {alert.description}
                </p>
              </div>

              <div className="mt-4 p-4 border border-rose-500/20 bg-rose-950/20 rounded flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-rose-500 font-bold uppercase tracking-widest flex items-center gap-1">
                    <Crosshair className="w-3 h-3" /> Recommended Action
                  </span>
                  <span className="text-xs text-rose-100 font-mono">{alert.action}</span>
                </div>
                <button className="h-8 px-3 bg-rose-600 hover:bg-rose-500 text-white rounded text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center gap-1">
                  Execute <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
