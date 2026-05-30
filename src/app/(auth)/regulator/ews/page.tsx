"use client";
import { AlertTriangle, TrendingDown, Activity, ShieldAlert, Zap } from "lucide-react";

export default function EarlyWarningEngine() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-600 mb-2 font-sans tracking-tight">
          National Early Warning Engine
        </h1>
        <p className="text-slate-400 font-mono text-sm">Predictive Risk & Stress Forecasting Matrix</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#020810]/50 border border-rose-900/40 rounded-xl p-6 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4">
            <span className="px-2 py-1 bg-rose-950/50 text-rose-400 text-[10px] font-mono rounded border border-rose-900/50 uppercase tracking-wider">Critical</span>
          </div>
          <AlertTriangle className="w-8 h-8 text-rose-500 mb-4" />
          <h3 className="text-lg font-medium text-slate-200 mb-1">MSME Liquidity Stress</h3>
          <p className="text-sm text-slate-400 mb-4">Textile sector MSMEs in Gujarat showing severe cashflow deterioration over trailing 30 days.</p>
          
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-500">Confidence</span>
              <span className="text-cyan-400">94.2%</span>
            </div>
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-500">Impact Radius</span>
              <span className="text-rose-400">₹850 Cr Exposure</span>
            </div>
          </div>
          
          <button className="w-full py-2 bg-rose-950/30 hover:bg-rose-900/50 border border-rose-900/50 rounded-lg text-rose-300 text-sm font-mono transition-colors">
            Trigger Credit Intervention
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#020810]/50 border border-amber-900/40 rounded-xl p-6 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="px-2 py-1 bg-amber-950/50 text-amber-400 text-[10px] font-mono rounded border border-amber-900/50 uppercase tracking-wider">Warning</span>
          </div>
          <TrendingDown className="w-8 h-8 text-amber-500 mb-4" />
          <h3 className="text-lg font-medium text-slate-200 mb-1">Tax Compliance Deterioration</h3>
          <p className="text-sm text-slate-400 mb-4">Tier-2 construction vendors showing 40% drop in timely GST filings in Q3.</p>
          
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-500">Confidence</span>
              <span className="text-cyan-400">88.5%</span>
            </div>
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-500">Impact Radius</span>
              <span className="text-amber-400">High Deficit Risk</span>
            </div>
          </div>
          
          <button className="w-full py-2 bg-amber-950/30 hover:bg-amber-900/50 border border-amber-900/50 rounded-lg text-amber-300 text-sm font-mono transition-colors">
            Dispatch Audit Notices
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-[#020810]/50 border border-rose-900/40 rounded-xl p-6 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="px-2 py-1 bg-rose-950/50 text-rose-400 text-[10px] font-mono rounded border border-rose-900/50 uppercase tracking-wider">Critical</span>
          </div>
          <ShieldAlert className="w-8 h-8 text-rose-500 mb-4" />
          <h3 className="text-lg font-medium text-slate-200 mb-1">Mule Account Outbreak</h3>
          <p className="text-sm text-slate-400 mb-4">Predictive detection of mass-account creation exhibiting classic mule topology.</p>
          
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-500">Confidence</span>
              <span className="text-cyan-400">99.1%</span>
            </div>
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-500">Impact Radius</span>
              <span className="text-rose-400">12,000+ Accounts</span>
            </div>
          </div>
          
          <button className="w-full py-2 bg-rose-950/30 hover:bg-rose-900/50 border border-rose-900/50 rounded-lg text-rose-300 text-sm font-mono transition-colors">
            Freeze Sub-Network
          </button>
        </div>
      </div>
    </div>
  );
}
