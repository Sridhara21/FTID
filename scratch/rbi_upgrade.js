const fs = require('fs');
const path = require('path');

const BASE_DIR = 'C:\\Users\\user\\3D Objects\\New folder\\FTID_Citizen\\src\\app\\(auth)';

const pages = [
  {
    filePath: 'regulator/graph/page.tsx',
    content: `"use client";
import { Network, Search, Filter, ShieldAlert, Layers } from "lucide-react";

export default function NationalGraph() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-2 font-sans tracking-tight">
            National Financial Graph
          </h1>
          <p className="text-slate-400 font-mono text-sm">Live Entity Relationship & Dependency Topography</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-cyan-950/30 border border-cyan-800/50 rounded-lg text-cyan-400 font-mono text-sm hover:bg-cyan-900/40 transition-all">
            <Filter className="w-4 h-4" /> Filter Clusters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[700px]">
        {/* Left: The Graph Simulator */}
        <div className="col-span-8 bg-[#020810]/50 border border-cyan-900/40 rounded-xl p-6 relative overflow-hidden backdrop-blur-md flex items-center justify-center group">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          <svg width="100%" height="100%" viewBox="0 0 800 600" className="absolute z-10">
            {/* Connections */}
            <path d="M400,300 L200,150" stroke="rgba(34,211,238,0.3)" strokeWidth="2" fill="none" className="animate-pulse"/>
            <path d="M400,300 L600,150" stroke="rgba(34,211,238,0.3)" strokeWidth="2" fill="none"/>
            <path d="M400,300 L200,450" stroke="rgba(239,68,68,0.5)" strokeWidth="2" strokeDasharray="5,5" fill="none" className="animate-pulse"/>
            <path d="M400,300 L600,450" stroke="rgba(34,211,238,0.3)" strokeWidth="2" fill="none"/>
            <path d="M200,450 L100,500" stroke="rgba(239,68,68,0.5)" strokeWidth="2" fill="none"/>
            <path d="M200,450 L200,550" stroke="rgba(239,68,68,0.5)" strokeWidth="2" fill="none"/>
            <path d="M600,150 L700,100" stroke="rgba(34,211,238,0.3)" strokeWidth="2" fill="none"/>
            <path d="M200,150 L100,100" stroke="rgba(34,211,238,0.3)" strokeWidth="2" fill="none"/>

            {/* Nodes */}
            <circle cx="400" cy="300" r="30" fill="rgba(6,182,212,0.1)" stroke="#22d3ee" strokeWidth="2"/>
            <circle cx="200" cy="150" r="20" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="2"/>
            <circle cx="600" cy="150" r="20" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="2"/>
            
            {/* Shell Clustering (Red) */}
            <circle cx="200" cy="450" r="25" fill="rgba(239,68,68,0.1)" stroke="#ef4444" strokeWidth="2"/>
            <circle cx="100" cy="500" r="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444" strokeWidth="2"/>
            <circle cx="200" cy="550" r="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444" strokeWidth="2"/>
            
            <circle cx="600" cy="450" r="20" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="2"/>
            <circle cx="700" cy="100" r="15" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="2"/>
            <circle cx="100" cy="100" r="15" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="2"/>
            
            {/* Labels */}
            <text x="400" y="345" fill="#22d3ee" fontSize="12" textAnchor="middle" className="font-mono">Central Bank (HDFC)</text>
            <text x="200" y="190" fill="#3b82f6" fontSize="10" textAnchor="middle" className="font-mono">Vendor A</text>
            <text x="600" y="190" fill="#3b82f6" fontSize="10" textAnchor="middle" className="font-mono">Corporate MSME</text>
            <text x="200" y="495" fill="#ef4444" fontSize="10" textAnchor="middle" className="font-mono">High Risk Entity</text>
            <text x="600" y="490" fill="#10b981" fontSize="10" textAnchor="middle" className="font-mono">Govt Scheme</text>
          </svg>

          {/* Scanner Overlay */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-[scan_3s_ease-in-out_infinite] group-hover:opacity-70 blur-[2px]"></div>
        </div>

        {/* Right: Insight Panel */}
        <div className="col-span-4 flex flex-col gap-6">
          <div className="bg-[#020810]/50 border border-cyan-900/40 rounded-xl p-6 backdrop-blur-md flex-1">
            <h3 className="text-cyan-400 font-mono text-sm mb-4 border-b border-cyan-900/40 pb-2 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-400" /> Active Threat Clusters
            </h3>
            
            <div className="space-y-4">
              <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-red-400 font-mono text-xs font-bold">CLUSTER_ALPHA_7</span>
                  <span className="text-red-500 text-xs px-2 py-0.5 bg-red-950/50 rounded">98% Match</span>
                </div>
                <p className="text-slate-300 text-xs mb-2">Detected 3 shell entities routing ₹42.5Cr through common directors.</p>
                <button className="text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-2">Isolate Nodes</button>
              </div>
              
              <div className="p-3 bg-amber-950/20 border border-amber-900/30 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-amber-400 font-mono text-xs font-bold">VENDOR_RING_3</span>
                  <span className="text-amber-500 text-xs px-2 py-0.5 bg-amber-950/50 rounded">84% Match</span>
                </div>
                <p className="text-slate-300 text-xs mb-2">Circular invoicing detected across 5 unverified GST profiles.</p>
                <button className="text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-2">Inspect Invoices</button>
              </div>
            </div>
          </div>
          
          <div className="bg-[#020810]/50 border border-cyan-900/40 rounded-xl p-6 backdrop-blur-md flex-1">
            <h3 className="text-cyan-400 font-mono text-sm mb-4 border-b border-cyan-900/40 pb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Dependency Mapping
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400 font-mono text-xs">Tier 1 Connections</span>
                <span className="text-cyan-400 font-mono">14,204</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400 font-mono text-xs">Cross-Bank Exposure</span>
                <span className="text-cyan-400 font-mono">₹1,240 Cr</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400 font-mono text-xs">Avg Edge Velocity</span>
                <span className="text-cyan-400 font-mono">1.2ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    filePath: 'regulator/ews/page.tsx',
    content: `"use client";
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
`
  },
  {
    filePath: 'government/policy/page.tsx',
    content: `"use client";
import { SlidersHorizontal, Activity, ArrowRight, Zap, Target } from "lucide-react";

export default function PolicyDigitalTwin() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-600 mb-2 font-sans tracking-tight">
          Policy Digital Twin
        </h1>
        <p className="text-slate-400 font-mono text-sm">Macroeconomic Simulation & Predictive Impact Modeling</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Pane: Policy Levers */}
        <div className="col-span-5 flex flex-col gap-6">
          <div className="bg-[#020810]/50 border border-cyan-900/40 rounded-xl p-6 backdrop-blur-md">
            <h3 className="text-cyan-400 font-mono text-sm mb-6 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" /> Policy Levers
            </h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">GST Base Rate Revision</label>
                  <span className="text-cyan-400 font-mono">16.5%</span>
                </div>
                <input type="range" className="w-full accent-cyan-500 bg-cyan-950" min="10" max="25" defaultValue="16.5" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">MSME Lending Subsidy</label>
                  <span className="text-emerald-400 font-mono">+1.2%</span>
                </div>
                <input type="range" className="w-full accent-emerald-500 bg-emerald-950" min="0" max="5" defaultValue="1.2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">Repo Rate (Simulated)</label>
                  <span className="text-rose-400 font-mono">6.25%</span>
                </div>
                <input type="range" className="w-full accent-rose-500 bg-rose-950" min="4" max="9" defaultValue="6.25" />
              </div>
            </div>
            
            <button className="mt-8 w-full py-3 bg-gradient-to-r from-cyan-900 to-emerald-900 hover:from-cyan-800 hover:to-emerald-800 rounded-lg text-white font-medium flex justify-center items-center gap-2 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <Zap className="w-4 h-4" /> Run Simulation
            </button>
          </div>
        </div>

        {/* Right Pane: Simulated Impact */}
        <div className="col-span-7 bg-[#020810]/50 border border-emerald-900/40 rounded-xl p-6 backdrop-blur-md relative">
          <h3 className="text-emerald-400 font-mono text-sm mb-6 flex items-center gap-2">
            <Target className="w-4 h-4" /> Projected Macro Impact (T+12 Months)
          </h3>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 border border-cyan-900/30 bg-cyan-950/10 rounded-lg">
              <p className="text-xs text-slate-400 font-mono mb-1">GDP Growth Rate</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-slate-200">7.2%</span>
                <span className="text-emerald-400 text-sm font-medium flex items-center"><ArrowRight className="w-3 h-3 rotate-[-45deg]" /> +0.4%</span>
              </div>
            </div>
            <div className="p-4 border border-cyan-900/30 bg-cyan-950/10 rounded-lg">
              <p className="text-xs text-slate-400 font-mono mb-1">Tax Revenue Collection</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-slate-200">₹1.84L Cr</span>
                <span className="text-rose-400 text-sm font-medium flex items-center"><ArrowRight className="w-3 h-3 rotate-[45deg]" /> -1.2%</span>
              </div>
            </div>
            <div className="p-4 border border-cyan-900/30 bg-cyan-950/10 rounded-lg">
              <p className="text-xs text-slate-400 font-mono mb-1">MSME Survival Rate</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-slate-200">92.4%</span>
                <span className="text-emerald-400 text-sm font-medium flex items-center"><ArrowRight className="w-3 h-3 rotate-[-45deg]" /> +3.1%</span>
              </div>
            </div>
            <div className="p-4 border border-cyan-900/30 bg-cyan-950/10 rounded-lg">
              <p className="text-xs text-slate-400 font-mono mb-1">Economy Formalization</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-slate-200">68.5%</span>
                <span className="text-emerald-400 text-sm font-medium flex items-center"><ArrowRight className="w-3 h-3 rotate-[-45deg]" /> +1.8%</span>
              </div>
            </div>
          </div>
          
          <div className="h-48 bg-gradient-to-t from-emerald-900/20 to-transparent border-b border-emerald-500/50 flex items-end relative overflow-hidden">
             {/* Simulated Chart */}
             <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0,80 Q25,60 50,70 T100,20 L100,100 L0,100 Z" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="2" />
               <path d="M0,70 Q25,80 50,50 T100,40" stroke="rgba(239,68,68,0.5)" strokeWidth="2" fill="none" strokeDasharray="2,2"/>
             </svg>
             <span className="absolute bottom-2 left-2 text-[10px] text-emerald-500 font-mono">Formalization Curve</span>
             <span className="absolute top-2 right-2 text-[10px] text-rose-500 font-mono">Informal Sector Decay</span>
          </div>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    filePath: 'citizen/profile/page.tsx',
    content: `"use client";
import { ShieldCheck, User, AlertTriangle, Fingerprint, Activity } from "lucide-react";

export default function CitizenProfile() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-8 font-sans">Citizen Digital Identity</h1>
      
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 flex flex-col gap-6">
          <div className="bg-[#020810]/50 border border-cyan-900/40 rounded-xl p-6 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-500 flex items-center justify-center">
                <User className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Rahul Sharma</h2>
                <p className="text-slate-400 text-sm font-mono">FTID: RS-9281-XXXX</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-cyan-950/20 rounded-lg">
                <span className="text-sm text-slate-300">Financial Health Score</span>
                <span className="text-emerald-400 font-bold text-lg font-mono">785</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-cyan-950/20 rounded-lg">
                <span className="text-sm text-slate-300">Identity Verification</span>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-8">
          <div className="bg-[#020810]/50 border border-rose-900/40 rounded-xl p-6 backdrop-blur-md relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 p-4">
              <Activity className="w-6 h-6 text-rose-500 animate-pulse" />
            </div>
            <h3 className="text-rose-400 font-mono text-lg mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Scam Protection Center
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 border border-rose-900/30 bg-rose-950/10 rounded-lg">
                <p className="text-rose-400 text-sm font-bold mb-1">Active Threat Level</p>
                <p className="text-slate-300 text-xs">Elevated phishing campaigns in your geographical cluster targeting digital wallets.</p>
              </div>
              <div className="p-4 border border-emerald-900/30 bg-emerald-950/10 rounded-lg">
                <p className="text-emerald-400 text-sm font-bold mb-1">Account Safety</p>
                <p className="text-slate-300 text-xs">No anomalous transactions detected in trailing 90 days. Bio-metric lock active.</p>
              </div>
            </div>

            <div className="border-t border-rose-900/20 pt-4">
              <h4 className="text-slate-300 text-sm font-medium mb-3">Recent Security Flags</h4>
              <div className="p-3 bg-rose-950/20 rounded-lg flex items-center justify-between border-l-2 border-rose-500">
                <div>
                  <p className="text-sm text-slate-200">Suspicious SMS Link Detected</p>
                  <p className="text-xs text-slate-500">Blocked by OS-level heuristic scanning. Do not click links from unknown numbers claiming to be Electricity Board.</p>
                </div>
                <span className="text-xs text-rose-400 font-mono">Today, 14:02</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    filePath: 'business/page.tsx',
    content: `"use client";
import { Building2, ShieldCheck, Activity, Award } from "lucide-react";

export default function EnterpriseHub() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-2 font-sans">Enterprise Engine Hub</h1>
      <p className="text-slate-400 mb-8 font-mono text-sm">Corporate telemetry and structural trust indexing.</p>

      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-8 bg-[#020810]/50 border border-blue-900/40 rounded-xl p-6 backdrop-blur-md">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">TechFlow Logistics Pvt Ltd</h2>
              <p className="text-slate-400 text-sm font-mono">CIN: U72900KA2021PTC145</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Enterprise Trust Score</p>
              <div className="flex items-center justify-end gap-2">
                <Award className="w-6 h-6 text-emerald-400" />
                <span className="text-4xl font-bold text-emerald-400 font-mono">942</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-blue-950/20 border border-blue-900/30 rounded-lg text-center">
              <p className="text-xs text-slate-400 mb-2">GST Compliance</p>
              <p className="text-xl text-slate-200 font-mono">100%</p>
            </div>
            <div className="p-4 bg-blue-950/20 border border-blue-900/30 rounded-lg text-center">
              <p className="text-xs text-slate-400 mb-2">Vendor Reliability</p>
              <p className="text-xl text-slate-200 font-mono">A+</p>
            </div>
            <div className="p-4 bg-blue-950/20 border border-blue-900/30 rounded-lg text-center">
              <p className="text-xs text-slate-400 mb-2">Invoice Quality</p>
              <p className="text-xl text-slate-200 font-mono">98.2%</p>
            </div>
            <div className="p-4 bg-blue-950/20 border border-blue-900/30 rounded-lg text-center">
              <p className="text-xs text-slate-400 mb-2">Credit Utilization</p>
              <p className="text-xl text-slate-200 font-mono">42%</p>
            </div>
          </div>
        </div>

        <div className="col-span-4 bg-[#020810]/50 border border-cyan-900/40 rounded-xl p-6 backdrop-blur-md flex flex-col justify-center items-center text-center">
          <Activity className="w-12 h-12 text-cyan-400 mb-4 animate-pulse" />
          <h3 className="text-lg text-slate-200 font-medium mb-2">Ready for Institutional Access</h3>
          <p className="text-xs text-slate-400 mb-4">Your Trust Score qualifies you for prime lending rates from top-tier institutions.</p>
          <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium rounded-lg transition-colors">Apply for Credit Line</button>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    filePath: 'business/invoices/page.tsx',
    content: `"use client";
import { FileText, AlertOctagon, CheckCircle2 } from "lucide-react";

export default function InvoiceRiskIntelligence() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-2 font-sans">Invoice Risk Intelligence</h1>
      <p className="text-slate-400 mb-8 font-mono text-sm">Automated fraud detection and anomaly scoring for B2B transactions.</p>

      <div className="bg-[#020810]/50 border border-blue-900/40 rounded-xl p-6 backdrop-blur-md mb-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-blue-900/40">
              <th className="py-3 text-xs text-slate-500 uppercase tracking-widest">Invoice ID</th>
              <th className="py-3 text-xs text-slate-500 uppercase tracking-widest">Vendor GSTIN</th>
              <th className="py-3 text-xs text-slate-500 uppercase tracking-widest">Amount</th>
              <th className="py-3 text-xs text-slate-500 uppercase tracking-widest">Anomaly Score</th>
              <th className="py-3 text-xs text-slate-500 uppercase tracking-widest">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-blue-900/20 hover:bg-blue-950/20 transition-colors">
              <td className="py-4 text-sm text-slate-300 font-mono">INV-2023-891</td>
              <td className="py-4 text-sm text-slate-300 font-mono">27AADCB2230M1Z2</td>
              <td className="py-4 text-sm text-slate-300 font-mono">₹1,24,500</td>
              <td className="py-4">
                <span className="px-2 py-1 bg-emerald-950/50 text-emerald-400 text-xs font-mono rounded">1.2 (Low)</span>
              </td>
              <td className="py-4"><CheckCircle2 className="w-5 h-5 text-emerald-500" /></td>
            </tr>
            <tr className="border-b border-blue-900/20 hover:bg-blue-950/20 transition-colors bg-rose-950/10">
              <td className="py-4 text-sm text-slate-300 font-mono">INV-2023-892</td>
              <td className="py-4 text-sm text-slate-300 font-mono">07BBEPC4451N1Z5</td>
              <td className="py-4 text-sm text-slate-300 font-mono">₹8,90,000</td>
              <td className="py-4">
                <span className="px-2 py-1 bg-rose-950/50 text-rose-400 text-xs font-mono rounded border border-rose-900/50">89.4 (Critical)</span>
              </td>
              <td className="py-4 flex items-center gap-2">
                <AlertOctagon className="w-5 h-5 text-rose-500" />
                <span className="text-xs text-rose-400">GST Mismatch + Duplicate Value</span>
              </td>
            </tr>
            <tr className="border-b border-blue-900/20 hover:bg-blue-950/20 transition-colors">
              <td className="py-4 text-sm text-slate-300 font-mono">INV-2023-893</td>
              <td className="py-4 text-sm text-slate-300 font-mono">29AAACG4321P1Z1</td>
              <td className="py-4 text-sm text-slate-300 font-mono">₹45,200</td>
              <td className="py-4">
                <span className="px-2 py-1 bg-emerald-950/50 text-emerald-400 text-xs font-mono rounded">0.4 (Low)</span>
              </td>
              <td className="py-4"><CheckCircle2 className="w-5 h-5 text-emerald-500" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
`
  },
  {
    filePath: 'bank/network/page.tsx',
    content: `"use client";
import { Network, MapPin, Building } from "lucide-react";

export default function LendingExposureMap() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-2 font-sans">Lending Exposure Map</h1>
      <p className="text-slate-400 mb-8 font-mono text-sm">Industrial and geographic concentration of institutional risk.</p>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 bg-[#020810]/50 border border-indigo-900/40 rounded-xl p-6 backdrop-blur-md h-[500px] flex items-center justify-center relative overflow-hidden">
           {/* Abstract Geographic/Network Map */}
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-[#020810] to-[#020810]"></div>
           <svg width="100%" height="100%" viewBox="0 0 500 500" className="absolute">
             <circle cx="250" cy="250" r="150" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="4,4" />
             <circle cx="250" cy="250" r="100" fill="none" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
             
             {/* High Concentration Nodes */}
             <circle cx="250" cy="250" r="40" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" strokeWidth="2" className="animate-pulse" />
             <circle cx="320" cy="180" r="25" fill="rgba(239,68,68,0.3)" stroke="#ef4444" strokeWidth="2" />
             <circle cx="150" cy="300" r="30" fill="rgba(56,189,248,0.3)" stroke="#38bdf8" strokeWidth="2" />
             
             <path d="M250,250 L320,180" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
             <path d="M250,250 L150,300" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
           </svg>
           <div className="absolute bottom-4 left-4 p-3 bg-black/50 border border-white/10 rounded backdrop-blur text-xs">
             <div className="flex items-center gap-2 mb-1"><span className="w-3 h-3 rounded-full bg-purple-500"></span> Real Estate (Core)</div>
             <div className="flex items-center gap-2 mb-1"><span className="w-3 h-3 rounded-full bg-red-500"></span> Textiles (High Risk)</div>
             <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-sky-500"></span> Tech MSME (Stable)</div>
           </div>
        </div>

        <div className="col-span-4 flex flex-col gap-4">
          <div className="bg-[#020810]/50 border border-indigo-900/40 rounded-xl p-6 backdrop-blur-md flex-1">
            <h3 className="text-indigo-400 font-mono text-sm mb-4 border-b border-indigo-900/40 pb-2">Geographic Concentration</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1"><span>Maharashtra</span><span>42%</span></div>
                <div className="w-full bg-indigo-950 rounded-full h-1.5"><div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '42%'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1"><span>Karnataka</span><span>28%</span></div>
                <div className="w-full bg-indigo-950 rounded-full h-1.5"><div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '28%'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-rose-300 mb-1"><span>Gujarat (Stressed)</span><span>18%</span></div>
                <div className="w-full bg-rose-950 rounded-full h-1.5"><div className="bg-rose-500 h-1.5 rounded-full" style={{width: '18%'}}></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    filePath: 'institution/underwriting/page.tsx',
    content: `"use client";
import { Calculator, Target, Zap, FileSpreadsheet } from "lucide-react";

export default function AlternativeCreditEngine() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600 mb-2 font-sans">Alternative Credit Engine</h1>
      <p className="text-slate-400 mb-8 font-mono text-sm">Collateral-free underwriting via transaction & GST behavioral intelligence.</p>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 bg-[#020810]/50 border border-violet-900/40 rounded-xl p-6 backdrop-blur-md">
          <h3 className="text-violet-400 font-mono text-sm mb-6 flex items-center gap-2"><Target className="w-4 h-4"/> Input Parameters</h3>
          <div className="space-y-4">
            <div className="p-3 bg-violet-950/20 border border-violet-900/30 rounded-lg">
              <label className="text-xs text-slate-500 uppercase mb-1 block">Target MSME GSTIN</label>
              <input type="text" className="w-full bg-transparent border-b border-violet-700 text-white font-mono text-sm py-1 outline-none" defaultValue="29AABCU9603R1ZN" />
            </div>
            <button className="w-full py-3 mt-4 bg-gradient-to-r from-violet-900 to-fuchsia-900 rounded-lg text-white font-medium flex justify-center items-center gap-2 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all">
              <Zap className="w-4 h-4" /> Generate Alternative Score
            </button>
          </div>
        </div>

        <div className="col-span-8 bg-[#020810]/50 border border-violet-900/40 rounded-xl p-6 backdrop-blur-md relative">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-violet-900/40">
            <div>
              <h2 className="text-2xl font-bold text-white">Dynamic Credit Assessment</h2>
              <p className="text-emerald-400 text-sm font-mono mt-1">Status: High Confidence Match</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500 uppercase mb-1">Alt-Credit Score</p>
              <p className="text-4xl font-bold text-violet-400 font-mono">812</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-4 border border-white/5 rounded-lg bg-white/[0.02]">
              <FileSpreadsheet className="w-5 h-5 text-slate-400 mb-2" />
              <p className="text-xs text-slate-500 mb-1">GST Cashflow Proxy</p>
              <p className="text-lg text-slate-200 font-mono">₹14.2L / mo</p>
            </div>
            <div className="p-4 border border-white/5 rounded-lg bg-white/[0.02]">
              <Activity className="w-5 h-5 text-emerald-400 mb-2" />
              <p className="text-xs text-slate-500 mb-1">Behavioral Trust</p>
              <p className="text-lg text-emerald-400 font-mono">Excellent</p>
            </div>
            <div className="p-4 border border-white/5 rounded-lg bg-white/[0.02]">
              <Calculator className="w-5 h-5 text-cyan-400 mb-2" />
              <p className="text-xs text-slate-500 mb-1">Recommended Max Limit</p>
              <p className="text-lg text-cyan-400 font-mono">₹5,00,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    filePath: 'government/informal/page.tsx',
    content: `"use client";
import { PieChart, TrendingUp, Users } from "lucide-react";

export default function FormalizationIndex() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600 mb-2 font-sans">Formalization Index</h1>
      <p className="text-slate-400 mb-8 font-mono text-sm">Tracking the shift from cash to digital, and unregistered to GST-compliant.</p>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4 flex flex-col gap-4">
          <div className="bg-[#020810]/50 border border-emerald-900/40 rounded-xl p-6 backdrop-blur-md text-center">
            <h3 className="text-sm text-slate-400 uppercase tracking-widest mb-4">National Formalization Score</h3>
            <div className="text-6xl font-bold text-emerald-400 font-mono mb-2">64.2</div>
            <p className="text-emerald-500 text-xs flex justify-center items-center gap-1"><TrendingUp className="w-3 h-3" /> +2.4% YoY</p>
          </div>
          <div className="bg-[#020810]/50 border border-emerald-900/40 rounded-xl p-6 backdrop-blur-md">
            <h3 className="text-emerald-400 font-mono text-sm mb-4 border-b border-emerald-900/40 pb-2">Key Drivers</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">UPI Adoption (Tier 3)</span>
                <span className="text-emerald-400 font-mono">+18%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">New GST Registrations</span>
                <span className="text-emerald-400 font-mono">+4.2M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Cash Velocity Drop</span>
                <span className="text-cyan-400 font-mono">-6.5%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-8 bg-[#020810]/50 border border-teal-900/40 rounded-xl p-6 backdrop-blur-md flex items-center justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <PieChart className="w-64 h-64 text-emerald-500" />
          </div>
          <div className="z-10 w-full">
            <h3 className="text-teal-400 font-mono text-sm mb-6">Sectoral Formalization Heatmap</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1"><span className="text-slate-300">Retail & FMCG</span><span className="text-emerald-400">82% Formal</span></div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden flex"><div className="bg-emerald-500 h-full" style={{width:'82%'}}></div><div className="bg-rose-500 h-full" style={{width:'18%'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1"><span className="text-slate-300">Construction & Real Estate</span><span className="text-amber-400">45% Formal</span></div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden flex"><div className="bg-amber-500 h-full" style={{width:'45%'}}></div><div className="bg-rose-500 h-full" style={{width:'55%'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1"><span className="text-slate-300">Agriculture Logistics</span><span className="text-rose-400">22% Formal</span></div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden flex"><div className="bg-rose-500 h-full" style={{width:'22%'}}></div><div className="bg-rose-800 h-full" style={{width:'78%'}}></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    filePath: 'gateway/page.tsx',
    content: `"use client";
import { Activity, Server, Zap, AlertCircle } from "lucide-react";

export default function TransactionHealthMonitor() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-600 mb-2 font-sans">Transaction Health Monitor</h1>
      <p className="text-slate-400 mb-8 font-mono text-sm">Live settlement switch telemetry and CBDC routing health.</p>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-[#020810]/50 border border-orange-900/40 rounded-xl p-4 backdrop-blur-md">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Activity className="w-3 h-3 text-emerald-400" /> Throughput</p>
          <p className="text-2xl text-slate-200 font-mono">14,281 <span className="text-xs text-slate-500">TPS</span></p>
        </div>
        <div className="bg-[#020810]/50 border border-orange-900/40 rounded-xl p-4 backdrop-blur-md">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Zap className="w-3 h-3 text-cyan-400" /> Latency P99</p>
          <p className="text-2xl text-slate-200 font-mono">42 <span className="text-xs text-slate-500">ms</span></p>
        </div>
        <div className="bg-[#020810]/50 border border-orange-900/40 rounded-xl p-4 backdrop-blur-md">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><AlertCircle className="w-3 h-3 text-rose-400" /> Failure Rate</p>
          <p className="text-2xl text-emerald-400 font-mono">0.02 <span className="text-xs text-emerald-600">%</span></p>
        </div>
        <div className="bg-[#020810]/50 border border-orange-900/40 rounded-xl p-4 backdrop-blur-md">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Server className="w-3 h-3 text-purple-400" /> CBDC Health</p>
          <p className="text-2xl text-purple-400 font-mono">Optimal</p>
        </div>
      </div>

      <div className="bg-[#020810]/50 border border-orange-900/40 rounded-xl p-6 backdrop-blur-md">
        <h3 className="text-orange-400 font-mono text-sm mb-6">Live Flagged Transfers Stream</h3>
        <div className="space-y-2">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-lg hover:bg-white/[0.05] transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                <span className="text-sm font-mono text-slate-300">TXN-998{i}A...</span>
              </div>
              <span className="text-xs text-slate-500 font-mono">Cross-border anomaly detected</span>
              <span className="text-sm font-mono text-rose-400">₹14.2M</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    filePath: 'auditor/assistant/page.tsx',
    content: `"use client";
import { Bot, Terminal, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function AuditExplainability() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-slate-200 mb-2 font-sans">Audit Explainability AI</h1>
      <p className="text-slate-400 mb-8 font-mono text-sm">Deep natural language reasoning for flagged network anomalies.</p>

      <div className="grid grid-cols-12 gap-6 h-[600px]">
        <div className="col-span-4 bg-[#020810]/50 border border-zinc-700/40 rounded-xl p-6 backdrop-blur-md flex flex-col">
          <h3 className="text-zinc-400 font-mono text-sm mb-4 border-b border-zinc-800 pb-2">Flagged Queue</h3>
          <div className="space-y-2 flex-1 overflow-y-auto pr-2">
            <div className="p-3 bg-rose-950/20 border border-rose-900/50 rounded-lg cursor-pointer border-l-2 border-l-rose-500">
              <p className="text-xs font-mono text-slate-300 mb-1">INV-9821-X</p>
              <p className="text-[10px] text-rose-400">High Risk • ₹4.2L</p>
            </div>
            <div className="p-3 bg-zinc-900/30 border border-zinc-800/50 rounded-lg cursor-pointer hover:bg-zinc-800/50 transition-colors">
              <p className="text-xs font-mono text-slate-400 mb-1">TXN-4412-Y</p>
              <p className="text-[10px] text-amber-400">Medium Risk • ₹1.1L</p>
            </div>
          </div>
        </div>

        <div className="col-span-8 bg-[#020810]/50 border border-zinc-700/40 rounded-xl p-0 backdrop-blur-md flex flex-col overflow-hidden">
          <div className="p-4 border-b border-zinc-800 bg-zinc-900/20 flex items-center gap-3">
            <Bot className="w-5 h-5 text-zinc-400" />
            <span className="text-sm font-mono text-slate-300">AI Analysis: INV-9821-X</span>
          </div>
          
          <div className="flex-1 p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded bg-rose-950/50 border border-rose-900/50 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-4 h-4 text-rose-500" />
              </div>
              <div>
                <p className="text-sm text-slate-300 leading-relaxed font-mono">
                  <span className="text-rose-400">Flagged because:</span> Vendor risk increased 42% in the last 7 days due to two associated entities being deregistered for GST. Additionally, this invoice value is 3.6× the historical average between these two counterparties.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-center shrink-0">
                <Terminal className="w-4 h-4 text-cyan-500" />
              </div>
              <div className="w-full">
                <div className="bg-black/50 p-4 rounded-lg border border-zinc-800/50 font-mono text-xs text-slate-400">
                  <p className="text-emerald-400 mb-2">// Trace Output</p>
                  <p>&gt; Evaluating entity: 27AADCB... (Vendor)</p>
                  <p>&gt; Checking network graph depth=2...</p>
                  <p className="text-rose-400">&gt; ALERT: Linked entity 07BBEP... status == DEREGISTERED</p>
                  <p>&gt; Calculating historical baseline: Avg = ₹1.16L</p>
                  <p className="text-amber-400">&gt; WARNING: Current = ₹4.20L (Deviation: 3.6x)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    filePath: 'regulator/national-dashboard/page.tsx',
    content: `"use client";
import { Activity, ShieldCheck, TrendingUp, AlertTriangle, Globe2, Zap, Scale, Server } from "lucide-react";
import Link from "next/link";

export default function RBIControlRoom() {
  return (
    <div className="flex-1 bg-[#020810] text-slate-200 overflow-y-auto">
      
      {/* Executive Header */}
      <div className="sticky top-0 z-10 bg-[#020810]/80 backdrop-blur-xl border-b border-cyan-900/40 p-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight uppercase flex items-center gap-3">
            <Globe2 className="w-6 h-6 text-cyan-400" /> National Intelligence Control Room
          </h1>
          <p className="text-xs text-cyan-500 font-mono mt-1 tracking-widest uppercase">RBI Governor Executive View • Live Data</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-emerald-950/30 border border-emerald-900/50 rounded-lg flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-mono text-emerald-400">SYSTEM NOMINAL</span>
          </div>
        </div>
      </div>

      <div className="p-8 max-w-[1600px] mx-auto space-y-8">
        
        {/* Top Level Indices */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-cyan-950/40 to-[#020810] border border-cyan-900/50 p-6 rounded-xl relative overflow-hidden">
            <ShieldCheck className="absolute -right-4 -bottom-4 w-24 h-24 text-cyan-900/20" />
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Financial Stability Index</p>
            <p className="text-4xl font-bold text-cyan-400 font-mono">92.4 <span className="text-lg text-slate-500">/100</span></p>
          </div>
          <div className="bg-gradient-to-br from-emerald-950/40 to-[#020810] border border-emerald-900/50 p-6 rounded-xl relative overflow-hidden">
            <Activity className="absolute -right-4 -bottom-4 w-24 h-24 text-emerald-900/20" />
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">National Trust Index</p>
            <p className="text-4xl font-bold text-emerald-400 font-mono">88.1 <span className="text-lg text-slate-500">/100</span></p>
          </div>
          <div className="bg-gradient-to-br from-blue-950/40 to-[#020810] border border-blue-900/50 p-6 rounded-xl relative overflow-hidden">
            <TrendingUp className="absolute -right-4 -bottom-4 w-24 h-24 text-blue-900/20" />
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">GDP Pulse (Live Estimator)</p>
            <p className="text-4xl font-bold text-blue-400 font-mono">+6.8<span className="text-lg text-slate-500">%</span></p>
          </div>
          <div className="bg-gradient-to-br from-purple-950/40 to-[#020810] border border-purple-900/50 p-6 rounded-xl relative overflow-hidden">
            <Scale className="absolute -right-4 -bottom-4 w-24 h-24 text-purple-900/20" />
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Formalization Score</p>
            <p className="text-4xl font-bold text-purple-400 font-mono">64.2<span className="text-lg text-slate-500">%</span></p>
          </div>
        </div>

        {/* Middle Tier: Operational Metrics */}
        <div className="grid grid-cols-12 gap-6">
          
          <div className="col-span-8 bg-[#020810]/50 border border-white/10 p-6 rounded-xl backdrop-blur-md">
            <h3 className="text-sm font-mono text-slate-300 mb-6 uppercase tracking-widest border-b border-white/10 pb-2">Active EWS Alerts (Critical)</h3>
            <div className="space-y-3">
              <Link href="/regulator/ews" className="block p-4 bg-rose-950/20 border border-rose-900/30 rounded-lg hover:bg-rose-900/30 transition-colors group">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-rose-500" />
                    <span className="text-rose-400 font-bold text-sm uppercase">MSME Liquidity Stress (Gujarat)</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">Impact: ₹850Cr</span>
                </div>
                <p className="text-xs text-slate-400 ml-8 group-hover:text-slate-300">Trailing 30-day cashflow deterioration detected in textile sector.</p>
              </Link>
              <Link href="/regulator/ews" className="block p-4 bg-amber-950/20 border border-amber-900/30 rounded-lg hover:bg-amber-900/30 transition-colors group">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    <span className="text-amber-400 font-bold text-sm uppercase">Tax Compliance Drop (Tier 2)</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">Impact: High Deficit</span>
                </div>
                <p className="text-xs text-slate-400 ml-8 group-hover:text-slate-300">40% drop in timely GST filings observed in construction vendors.</p>
              </Link>
            </div>
          </div>

          <div className="col-span-4 flex flex-col gap-6">
            <div className="bg-[#020810]/50 border border-white/10 p-6 rounded-xl backdrop-blur-md flex-1">
              <h3 className="text-sm font-mono text-slate-300 mb-4 uppercase tracking-widest">Network Health</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Gateway Throughput</span><span className="text-cyan-400">14,281 TPS</span></div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full"><div className="h-full bg-cyan-500 rounded-full" style={{width: '78%'}}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Fraud Detection Rate</span><span className="text-emerald-400">99.8%</span></div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full"><div className="h-full bg-emerald-500 rounded-full" style={{width: '99%'}}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Systemic Risk Exposure</span><span className="text-amber-400">Low-Med</span></div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full"><div className="h-full bg-amber-500 rounded-full" style={{width: '35%'}}></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
`
  }
];

// Execute writing files
pages.forEach(page => {
  const fullPath = path.join(BASE_DIR, page.filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, page.content, 'utf8');
  console.log('Created:', fullPath);
});
