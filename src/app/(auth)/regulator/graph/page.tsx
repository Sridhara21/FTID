"use client";
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
