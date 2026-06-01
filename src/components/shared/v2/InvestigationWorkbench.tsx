"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, Fingerprint, Network, ShieldAlert, ArrowRight, ShieldCheck, FileKey, Layers, Activity, Building2 } from "lucide-react";

export function InvestigationWorkbench() {
  const [txId, setTxId] = useState("TX-2026-9A8B7C");
  const [isSearching, setIsSearching] = useState(false);
  const [data, setData] = useState<{ risk: number, layers: number } | null>({ risk: 82, layers: 4 });

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setData({
        risk: Math.floor(Math.random() * 60) + 30,
        layers: Math.floor(Math.random() * 5) + 1
      });
    }, 1200);
  };

  const isHighRisk = data ? data.risk > 70 : false;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Search Console */}
      <div className="lg:col-span-4 space-y-6">
        <Card className="bg-[#05101a] border-cyan-900/30">
          <CardHeader>
            <CardTitle className="text-cyan-400 flex items-center gap-2">
              <Search className="h-5 w-5" />
              Traceability Engine
            </CardTitle>
            <CardDescription className="text-slate-400">Query immutable records</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Transaction Identifier</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={txId}
                  onChange={(e) => setTxId(e.target.value)}
                  className="w-full bg-[#020810] border border-slate-800 rounded px-3 py-2 text-slate-200 font-mono text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <button 
                  onClick={handleSearch}
                  className="bg-cyan-900/50 hover:bg-cyan-900 text-cyan-400 px-4 py-2 rounded transition-colors flex items-center justify-center"
                >
                  {isSearching ? <Activity className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
               <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Cryptographic Evidence</h4>
               <div className="space-y-2">
                 <div className="flex items-center gap-2 text-xs text-slate-500 font-mono bg-[#020810] p-2 rounded border border-slate-800">
                   <FileKey className="h-4 w-4 text-emerald-500" />
                   <span className="truncate">Sign: 0x8f7c9a2b...</span>
                 </div>
                 <div className="flex items-center gap-2 text-xs text-slate-500 font-mono bg-[#020810] p-2 rounded border border-slate-800">
                   <Fingerprint className="h-4 w-4 text-emerald-500" />
                   <span className="truncate">Hash: 0xe3d91b4f...</span>
                 </div>
               </div>
            </div>

          </CardContent>
        </Card>
      </div>

      {/* Investigation Dashboard */}
      <div className="lg:col-span-8">
        {data && (
          <Card className={`bg-[#020810] relative overflow-hidden h-full border ${isHighRisk ? 'border-rose-900/50' : 'border-emerald-900/50'}`}>
            <div className={`absolute top-0 right-0 w-64 h-64 blur-[80px] pointer-events-none ${isHighRisk ? 'bg-rose-900/10' : 'bg-emerald-900/10'}`}></div>
            <CardHeader className="border-b border-slate-800">
              <div className="flex justify-between items-center">
                <CardTitle className="text-white flex items-center gap-2 text-lg">
                  <Network className="h-5 w-5 text-slate-400" />
                  Lineage Map
                </CardTitle>
                <div className={`flex items-center gap-2 px-3 py-1 rounded border text-xs font-bold ${isHighRisk ? 'bg-rose-900/20 border-rose-500/50 text-rose-400' : 'bg-emerald-900/20 border-emerald-500/50 text-emerald-400'}`}>
                  {isHighRisk ? <ShieldAlert className="h-4 w-4" /> : <ShieldCheck className="h-4 w-4" />}
                  RISK SCORE: {data.risk}/100
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 relative z-10 space-y-8">
              
              {/* Flow Visualization */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 relative">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-800 -z-10 hidden md:block"></div>
                
                {/* Source */}
                <div className="bg-[#05101a] border border-cyan-900/30 p-4 rounded-xl flex flex-col items-center min-w-[140px] shadow-xl">
                  <div className="h-10 w-10 rounded-full bg-cyan-900/20 flex items-center justify-center mb-2 border border-cyan-500/30">
                    <Building2 className="h-5 w-5 text-cyan-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-300">Shell Corp A</span>
                  <span className="text-[10px] text-slate-500 font-mono mt-1">Origin Node</span>
                </div>

                <div className="flex flex-col items-center bg-[#020810] px-2 text-amber-500">
                  <span className="text-[10px] font-bold uppercase mb-1">{data.layers} Hops</span>
                  <ArrowRight className="h-6 w-6 animate-pulse" />
                </div>

                {/* Layering Nodes */}
                <div className="bg-amber-900/10 border border-amber-900/30 p-4 rounded-xl flex flex-col items-center min-w-[140px] shadow-xl">
                  <div className="h-10 w-10 rounded-full bg-amber-900/20 flex items-center justify-center mb-2 border border-amber-500/30">
                    <Layers className="h-5 w-5 text-amber-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-300">Transit Accounts</span>
                  <span className="text-[10px] text-slate-500 font-mono mt-1">Layering Detected</span>
                </div>

                <div className="flex flex-col items-center bg-[#020810] px-2 text-rose-500">
                  <span className="text-[10px] font-bold uppercase mb-1">Concentration</span>
                  <ArrowRight className="h-6 w-6 animate-pulse" />
                </div>

                {/* Destination */}
                <div className="bg-[#05101a] border border-rose-900/30 p-4 rounded-xl flex flex-col items-center min-w-[140px] shadow-xl">
                  <div className="h-10 w-10 rounded-full bg-rose-900/20 flex items-center justify-center mb-2 border border-rose-500/30">
                    <Building2 className="h-5 w-5 text-rose-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-300">Offshore Entity C</span>
                  <span className="text-[10px] text-slate-500 font-mono mt-1">Destination Node</span>
                </div>

              </div>

              {/* Analysis Text */}
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Automated Audit Analysis</h5>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Transaction <span className="font-mono text-cyan-400">{txId}</span> exhibits {isHighRisk ? 'strong' : 'weak'} indicators of structural layering. 
                  Funds originating from Source Node were obfuscated across {data.layers} intermediate transit accounts before concentration at the Destination Node.
                  {isHighRisk && <span className="block mt-2 text-rose-400 font-bold">Recommendation: Freeze associated network nodes pending manual review.</span>}
                </p>
              </div>

            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
