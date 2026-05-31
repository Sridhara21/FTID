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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-purple-900/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-[10px] font-bold tracking-widest uppercase rounded">
              INSTITUTION PORTAL
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase tracking-widest animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              SYSTEM ACTIVE
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Alternative Underwriting</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"Can underserved borrowers be funded safely?"</span>
          </p>
        </div>
      </div>

      {/* 3. What intelligence/data is displayed? */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <Card className="bg-[#0a1520] border-purple-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Cashflow Metrics</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-purple-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0a1520] border-purple-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Risk Recommendation</p>
                <p className="text-xl font-mono text-white">Live Data</p>
              </div>
              <div className="p-1.5 bg-purple-900/30 rounded-lg">
                <Activity className="h-4 w-4 text-purple-400" />
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
            primaryInsight="Real-time telemetry active for Alternative Underwriting."
            secondaryInsights={[
              "Data feeds synchronized and verified.",
              "Awaiting action sequence."
            ]}
            riskLevel="LOW"
          />

          <Card className="bg-[#0a1520] border-purple-900/40">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <Target className="h-4 w-4 text-purple-400" />
                Module Capabilities & Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">Alternative Credit Engine</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">Cashflow-Based Lending</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
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

          <Card className="bg-[#0a1520] border-purple-900/40">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <Network className="h-4 w-4 text-purple-400" />
                Connected Systems
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">

                  <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-slate-300">Citizen</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Active Node</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-slate-300">Business</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Active Node</span>
                  </div>
            </CardContent>
          </Card>
        </div>
=======

import { useState } from "react";
import { FileText, Calculator, Loader2, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { UnderwritingInputs, UnderwritingOutputs } from "@/lib/engines";

export default function MSMEUnderwriting() {
  const [inputs, setInputs] = useState<UnderwritingInputs>({
    revenue: 5000000,
    cashflow: 250000,
    gstActivity: 85,
    vendorReliability: 90,
    historicalPayments: 95,
    trustScore: 78
  });

  const [outputs, setOutputs] = useState<UnderwritingOutputs | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const runEngine = async () => {
    setIsLoading(true);
    setOutputs(null);
    try {
      const res = await fetch('/api/v1/institution/underwriting', {
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

  const handleInput = (key: keyof UnderwritingInputs, value: string) => {
    setInputs(prev => ({ ...prev, [key]: Number(value) }));
  };

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-violet-400" />
          <h1 className="text-2xl font-black text-white uppercase tracking-tight">Alt Credit Engine</h1>
        </div>
        <p className="text-slate-400 font-mono text-sm max-w-2xl">
          Evaluate MSME loan requests using synthetic GST, cashflow, and Trust Network data. No collateral required.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Inputs */}
        <div className="flex flex-col gap-4 bg-[#0a1520] border border-slate-800 rounded-xl p-6">
          <h2 className="text-sm font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2 mb-4">
            <Calculator className="h-4 w-4 text-violet-500" /> Input Parameters
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-slate-400 uppercase">Annual Revenue (₹)</label>
              <input type="number" value={inputs.revenue} onChange={e => handleInput('revenue', e.target.value)} className="bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white font-mono text-sm focus:border-violet-500 focus:outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-slate-400 uppercase">Avg Monthly Cashflow (₹)</label>
              <input type="number" value={inputs.cashflow} onChange={e => handleInput('cashflow', e.target.value)} className="bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white font-mono text-sm focus:border-violet-500 focus:outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-slate-400 uppercase">GST Compliance (%)</label>
              <input type="number" min="0" max="100" value={inputs.gstActivity} onChange={e => handleInput('gstActivity', e.target.value)} className="bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white font-mono text-sm focus:border-violet-500 focus:outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-slate-400 uppercase">Vendor Reliability (0-100)</label>
              <input type="number" min="0" max="100" value={inputs.vendorReliability} onChange={e => handleInput('vendorReliability', e.target.value)} className="bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white font-mono text-sm focus:border-violet-500 focus:outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-slate-400 uppercase">Repayment History (0-100)</label>
              <input type="number" min="0" max="100" value={inputs.historicalPayments} onChange={e => handleInput('historicalPayments', e.target.value)} className="bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white font-mono text-sm focus:border-violet-500 focus:outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-slate-400 uppercase">Network Trust Score</label>
              <input type="number" min="0" max="100" value={inputs.trustScore} onChange={e => handleInput('trustScore', e.target.value)} className="bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white font-mono text-sm focus:border-violet-500 focus:outline-none" />
            </div>
          </div>

          <button 
            onClick={runEngine} 
            disabled={isLoading}
            className="mt-4 w-full bg-violet-600 hover:bg-violet-500 text-white font-bold uppercase tracking-widest text-xs py-3 rounded flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Run Underwriting Engine"}
          </button>
        </div>

        {/* Right: Outputs */}
        <div className="bg-[#0a1520] border border-slate-800 rounded-xl p-6 flex flex-col relative overflow-hidden min-h-[300px]">
          {isLoading && (
            <div className="absolute inset-0 bg-[#020810]/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
              <Loader2 className="w-8 h-8 text-violet-500 animate-spin mb-4" />
              <span className="text-violet-400 font-mono text-xs uppercase tracking-widest">Evaluating Risk Model...</span>
            </div>
          )}

          {!isLoading && !outputs && (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-500 font-mono text-xs text-center p-8">
              <FileText className="w-12 h-12 mb-4 opacity-20" />
              Awaiting payload to run institutional underwriting model...
            </div>
          )}

          {outputs && (
            <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Synthetic Score</span>
                  <span className="text-5xl font-black text-white tabular-nums">{outputs.creditScore}</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Decision</span>
                  {outputs.decision === 'Approved' && <span className="flex items-center gap-1 text-emerald-400 font-bold"><CheckCircle2 className="w-4 h-4" /> {outputs.decision}</span>}
                  {outputs.decision === 'Conditional Approval' && <span className="flex items-center gap-1 text-amber-400 font-bold"><AlertCircle className="w-4 h-4" /> {outputs.decision}</span>}
                  {outputs.decision === 'Rejected' && <span className="flex items-center gap-1 text-rose-400 font-bold"><XCircle className="w-4 h-4" /> {outputs.decision}</span>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6 flex-1">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Risk Rating</span>
                  <span className="text-2xl font-black text-violet-400 font-mono">{outputs.riskRating}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Default Prob</span>
                  <span className="text-2xl font-black text-slate-300 font-mono">{outputs.defaultProbability}%</span>
                </div>
                <div className="flex flex-col gap-1 col-span-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Suggested Line of Credit</span>
                  <span className="text-3xl font-black text-emerald-400 tabular-nums">₹{outputs.suggestedAmount.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                <p className="text-xs font-mono text-slate-400 leading-relaxed">
                  <strong className="text-violet-400">AI EXPLANATION:</strong> {outputs.explanation}
                </p>
              </div>
            </div>
          )}
        </div>
>>>>>>> 90ce4baaf6ae78fb544f5305ef97fc98895aed59
      </div>
    </div>
  );
}
