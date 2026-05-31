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
=======

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
>>>>>>> 90ce4baaf6ae78fb544f5305ef97fc98895aed59
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Money Movement Graph</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Decision: <span className="text-white font-medium">"How is money moving across India?"</span>
          </p>
        </div>
<<<<<<< HEAD
      </div>

      {/* 3. What intelligence/data is displayed? */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <Card className="bg-[#0a1520] border-rose-900/40 hover:bg-slate-900/50 transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Transaction Flows</p>
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
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Risk Clusters</p>
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
            primaryInsight="Real-time telemetry active for Money Movement Graph."
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
                    <span className="text-sm font-medium text-white group-hover:text-rose-400 transition-colors">Citizen Nodes</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-rose-400 transition-colors" />
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-rose-400 transition-colors">Business Nodes</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-rose-400 transition-colors" />
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-rose-400 transition-colors">Bank Nodes</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-rose-400 transition-colors" />
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-rose-400 transition-colors">Government Nodes</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-rose-400 transition-colors" />
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#05101a] border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-white group-hover:text-rose-400 transition-colors">Interactive Network Graph</span>
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
                    <span className="text-sm font-medium text-slate-300">Entire Ecosystem</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Active Node</span>
                  </div>
            </CardContent>
          </Card>
        </div>
=======
>>>>>>> 90ce4baaf6ae78fb544f5305ef97fc98895aed59
      </div>
    </div>
  );
}
