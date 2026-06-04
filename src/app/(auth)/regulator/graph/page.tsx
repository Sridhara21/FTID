"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Globe, Users, Building, AlertTriangle, ShieldCheck, ShieldAlert, Activity, FileText } from "lucide-react";
import { FinancialNetworkGraph, GraphNode } from "@/components/shared/observability/FinancialNetworkGraph";
import { DemoGuide } from "@/components/shared/DemoGuide";

export default function RegulatorGraphPage() {
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);

  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 relative overflow-hidden flex flex-col">
      <div className="absolute top-0 right-0 w-full h-full bg-cyan-900/5 blur-[150px] pointer-events-none z-0"></div>
      
      <div className="flex-1 w-full flex flex-col relative z-10">
        
        <header className="px-6 py-4 border-b border-cyan-900/40 bg-[#020810]/80 backdrop-blur flex justify-between items-center shrink-0">
          <div>
            <h1 className="text-xl font-black text-white tracking-tight flex items-center gap-3">
              <Globe className="h-6 w-6 text-cyan-400" />
              FTID Financial Intelligence Graph
            </h1>
            <p className="text-xs text-slate-400 mt-1">Investigative Command Interface</p>
          </div>
          <div className="flex gap-4">
             <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span className="text-slate-400">Core Infrastructure</span>
             </div>
             <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span className="text-slate-400">Nominal Entities</span>
             </div>
             <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                <span className="text-slate-400">High Risk Nodes</span>
             </div>
          </div>
        </header>

        {/* FULL SCREEN GRAPH AREA */}
        <div className="flex-1 w-full relative flex">
          <div className="flex-1 relative">
            <FinancialNetworkGraph 
              className="absolute inset-0 w-full h-full rounded-none border-0" 
              onNodeClick={(node) => setSelectedNode(node)}
              selectedNodeId={selectedNode?.id}
            />
          </div>
          
          {/* Intelligence Panel */}
          {selectedNode && (
            <div className="w-96 bg-[#06121e]/95 backdrop-blur-md border-l border-cyan-900/40 p-6 flex flex-col h-full overflow-y-auto animate-in slide-in-from-right-8 duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${selectedNode.type === "RISK" ? "bg-rose-950 text-rose-400" : "bg-cyan-950 text-cyan-400"}`}>
                  {selectedNode.type === "RISK" ? <ShieldAlert className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedNode.label}</h2>
                  <p className="text-sm font-mono text-slate-400">ID: {selectedNode.id}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Entity Profile</p>
                  <p className="text-sm text-slate-300">{selectedNode.profile}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#020810] rounded-lg p-3 border border-cyan-900/30">
                    <p className="text-[10px] uppercase text-slate-500 mb-1">Trust Score</p>
                    <p className="text-xl font-bold text-emerald-400">{selectedNode.trustScore?.toFixed(1)}/100</p>
                  </div>
                  <div className={`bg-[#020810] rounded-lg p-3 border ${selectedNode.riskScore && selectedNode.riskScore > 50 ? "border-rose-900/50" : "border-cyan-900/30"}`}>
                    <p className="text-[10px] uppercase text-slate-500 mb-1">Risk Score</p>
                    <p className={`text-xl font-bold ${selectedNode.riskScore && selectedNode.riskScore > 50 ? "text-rose-400" : "text-emerald-400"}`}>{selectedNode.riskScore?.toFixed(1)}/100</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Total Exposure</p>
                  <p className="text-2xl font-mono text-white">{selectedNode.exposure}</p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Transaction Volume (24H)</p>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-500" />
                    <p className="text-lg font-mono text-slate-200">{selectedNode.transactions?.toLocaleString()} Txns</p>
                  </div>
                </div>

                {selectedNode.suspicious && selectedNode.suspicious.length > 0 && (
                  <div className="bg-rose-950/20 border border-rose-900/30 rounded-lg p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" /> Suspicious Relationships
                    </p>
                    <ul className="space-y-2">
                      {selectedNode.suspicious.map((sus, idx) => (
                        <li key={idx} className="text-sm text-rose-300 font-mono bg-rose-950/40 px-2 py-1 rounded">
                          Linked to Alert: {sus}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-800">
                  <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white rounded text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4" /> Export Audit Dossier
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {!selectedNode && (
            <div className="absolute top-6 right-6 w-80 pointer-events-none">
              <Card className="bg-[#06121e]/80 backdrop-blur border-cyan-900/30 shadow-2xl">
                <CardContent className="p-6 text-center text-slate-400">
                  <Globe className="w-12 h-12 text-cyan-900/50 mx-auto mb-4" />
                  <p className="text-sm">Select any node on the graph to reveal deep institutional intelligence.</p>
                </CardContent>
              </Card>
            </div>
          )}

        </div>
      </div>
      <DemoGuide nextStopUrl="/government/policy-simulator" label="Policy Simulator" />
    </div>
  );
}