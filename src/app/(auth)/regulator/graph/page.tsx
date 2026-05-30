"use client";

import { useEffect, useState } from "react";
import { Network, Search, Filter, ShieldAlert, Layers, Loader2 } from "lucide-react";
import { NetworkGraph } from "@/components/shared/network-graph";

export default function NationalGraph() {
  const [graphData, setGraphData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch live graph data from DB
    const fetchGraph = async () => {
      try {
        const res = await fetch('/api/graph');
        const json = await res.json();
        if (json.success) {
          setGraphData(json.data);
        }
      } catch (err) {
        console.error("Failed to load graph data", err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchGraph();
    // In a real system, we'd poll or use WebSockets here
    const interval = setInterval(fetchGraph, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-2 font-sans tracking-tight">
            National Financial Graph
          </h1>
          <p className="text-slate-400 font-mono text-sm">Live Entity Relationship & Dependency Topography (Connected to SQLite DB)</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-cyan-950/30 border border-cyan-800/50 rounded-lg text-cyan-400 font-mono text-sm hover:bg-cyan-900/40 transition-all">
            <Filter className="w-4 h-4" /> Filter Clusters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[700px]">
        {/* Left: The Graph Simulator */}
        <div className="col-span-8 bg-[#020810]/50 border border-cyan-900/40 rounded-xl relative overflow-hidden backdrop-blur-md flex items-center justify-center">
          {isLoading ? (
            <div className="flex flex-col items-center text-cyan-400">
              <Loader2 className="w-8 h-8 animate-spin mb-4" />
              <span className="font-mono text-sm">Rendering Graph Engine...</span>
            </div>
          ) : graphData ? (
            <NetworkGraph data={graphData} />
          ) : (
             <div className="text-red-400 font-mono">Failed to load graph data. Check Database.</div>
          )}
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
                <span className="text-slate-400 font-mono text-xs">Total Nodes (DB)</span>
                <span className="text-cyan-400 font-mono">{graphData?.nodes?.length || 0}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400 font-mono text-xs">Total Edges (DB)</span>
                <span className="text-cyan-400 font-mono">{graphData?.links?.length || 0}</span>
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
