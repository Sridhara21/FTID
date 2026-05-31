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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-rose-900/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-rose-900/30 text-rose-400 text-[10px] font-bold tracking-widest uppercase rounded">
              REGULATOR PORTAL
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase tracking-widest animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              SYSTEM ACTIVE
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Early Warning System</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"What risks require immediate attention?"</span>
          </p>
        </div>
      </div>

      {/* 3. What intelligence/data is displayed? */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <Card className="bg-[#0a1520] border-rose-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Crisis Alerts</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-rose-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-rose-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0a1520] border-rose-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Fraud Alerts</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-rose-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-rose-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0a1520] border-rose-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Liquidity Alerts</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-rose-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-rose-400" />
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
            primaryInsight="Real-time telemetry active for Early Warning System."
            secondaryInsights={[
              "Data feeds synchronized and verified.",
              "Awaiting action sequence."
            ]}
            riskLevel="LOW"
          />

          <Card className="bg-[#0a1520] border-rose-900/40">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <Target className="h-4 w-4 text-rose-400" />
                Module Capabilities & Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-rose-400 transition-colors">AI Predictions</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-rose-400 transition-colors" />
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-rose-400 transition-colors">Alert Triage</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-rose-400 transition-colors" />
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

          <Card className="bg-[#0a1520] border-rose-900/40">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <Network className="h-4 w-4 text-rose-400" />
                Connected Systems
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">

                  <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-slate-300">Banks</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Active Node</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-slate-300">Auditor</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Active Node</span>
                  </div>
            </CardContent>
          </Card>
        </div>
      </div>
=======

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
>>>>>>> 90ce4baaf6ae78fb544f5305ef97fc98895aed59
    </div>
  );
}
