"use client";

import { useState, useEffect } from "react";
import { ShieldAlert, AlertTriangle, Network, Activity, Video, Map, ShieldCheck, XCircle, Search, Play, CornerDownRight, ShieldAlert as ShieldIcon, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const fraudDetectionData = [
  { region: 'Mumbai', muleAccounts: 450, deepfakes: 12 },
  { region: 'Delhi', muleAccounts: 380, deepfakes: 8 },
  { region: 'Bangalore', muleAccounts: 210, deepfakes: 4 },
  { region: 'Gujarat', muleAccounts: 180, deepfakes: 3 },
  { region: 'Kerala', muleAccounts: 110, deepfakes: 2 },
];

interface Node {
  id: string;
  label: string;
  role: string;
  risk: "High" | "Medium" | "Low";
  pan: string;
  frozen: boolean;
  flowValue: string;
}

const suspiciousTraces: Record<string, Node[]> = {
  "UPI_VELOCITY_LOOP": [
    { id: "SRC_01", label: "Pooja Kirana Store", role: "Primary Shell", risk: "Low", pan: "APQPK4829L", frozen: false, flowValue: "₹45,00,000" },
    { id: "MULE_01", label: "Karan Sharma (Mule)", role: "Layering Node A", risk: "High", pan: "ZPWKS2729K", frozen: false, flowValue: "₹15,00,000" },
    { id: "MULE_02", label: "Vikram Singh (Mule)", role: "Layering Node B", risk: "High", pan: "OPXND8193D", frozen: false, flowValue: "₹15,00,000" },
    { id: "DEST_01", label: "Offshore Exporter Ltd", role: "Integration Target", risk: "Medium", pan: "CPYQW1029X", frozen: false, flowValue: "₹30,00,000" }
  ],
  "CBDC_LAYERED_TX": [
    { id: "SRC_02", label: "Aman Enterprise", role: "Direct Debtor", risk: "Low", pan: "BQKSP1122Z", frozen: false, flowValue: "₹80,00,000" },
    { id: "MULE_03", label: "Divya Gupta (Mule)", role: "Splitter Node", risk: "High", pan: "LKWND9031K", frozen: false, flowValue: "₹40,00,000" },
    { id: "DEST_02", label: "Unregistered VDA Gateway", role: "Crypto Offramp", risk: "High", pan: "N/A - Anonymous", frozen: false, flowValue: "₹40,00,000" }
  ],
  "SHELL_COMPANY_INFLOW": [
    { id: "SRC_03", label: "Apex Trade Corp", role: "Suspected Smuggler", risk: "Medium", pan: "GPXZA0912M", frozen: false, flowValue: "₹1.5Cr" },
    { id: "MULE_04", label: "Rajesh Kumar (Mule)", role: "Consolidator", risk: "High", pan: "YPQWZ9012N", frozen: false, flowValue: "₹1.2Cr" },
    { id: "DEST_03", label: "Alpha Real Estate", role: "Asset Placement", risk: "High", pan: "KPWLX2981B", frozen: false, flowValue: "₹1.2Cr" }
  ]
};

export default function BankFraud() {
  const [frozenCount, setFrozenCount] = useState(1330);
  const [searchQuery, setSearchQuery] = useState("UPI_VELOCITY_LOOP");
  const [activeNodes, setActiveNodes] = useState<Node[]>(suspiciousTraces["UPI_VELOCITY_LOOP"]);
  const [isSearching, setIsSearching] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  // Sync selected query
  const handleTrace = async (queryKey: string) => {
    setIsSearching(true);
    setSearchQuery(queryKey);
    setSelectedNodeId(null);
    setTerminalLogs([
      `[INIT] Spawning tracing engine for seed: ${queryKey}...`,
      `[GRAPH] Fetching direct linkages on UPI/e₹ sovereign ledger...`,
      `[COMPILING] Analyzing temporal clustering of transfers...`
    ]);

    await new Promise(r => setTimeout(r, 600));
    setActiveNodes(JSON.parse(JSON.stringify(suspiciousTraces[queryKey])));
    
    setTerminalLogs(prev => [
      ...prev,
      `[MATCH] Found ${suspiciousTraces[queryKey].length} nodes linked within 3 tiers.`,
      `[RISK] High-risk layering entities auto-flagged via ML anomaly detection.`,
      `[READY] Flow network rendered. Select any node to execute manual containment.`
    ]);
    setIsSearching(false);
  };

  const handleFreezeNode = (nodeId: string) => {
    setActiveNodes(prev => prev.map(n => {
      if (n.id === nodeId && !n.frozen) {
        setFrozenCount(c => c + 1);
        setTerminalLogs(logs => [
          ...logs,
          `[ACTION] Issued Ledger Freeze command on ${n.label} (${n.pan})`,
          `[SYNC] Registry updated. RBI Smart-Hold applied successfully.`
        ]);
        return { ...n, frozen: true };
      }
      return n;
    }));
  };

  const selectedNode = activeNodes.find(n => n.id === selectedNodeId);

  return (
    <div className="grid gap-6 md:gap-8 pb-8 pt-4 max-w-[1200px] mx-auto text-slate-100 font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <ShieldAlert className="h-8 w-8 text-rose-500" />
              Risk & Fraud Command
          </h1>
          <p className="text-rose-500/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            DEEPFAKE KYC DETECTION • MULE NETWORK GRAPHING
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1520] border border-amber-900/50 rounded-full">
            <AlertTriangle className="h-4 w-4 text-amber-500/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500/60">Threat Level: Elevated</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0a1520] border-rose-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-rose-500/60 mb-2">Deepfake KYC Attempts</p>
                      <p className="text-4xl font-bold text-rose-400 mb-3 tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>29</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-rose-400">
                          <Video className="h-3 w-3" /> <span className="text-rose-500/40 ml-1">PAST 24 HOURS</span>
                      </div>
                  </div>
                  <div className="p-3 bg-rose-900/20 rounded-xl border border-rose-900/50">
                      <Video className="h-5 w-5 text-rose-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a1520] border-blue-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500/60 mb-2">Mule Nodes Frozen</p>
                      <p className="text-4xl font-bold text-white mb-3 tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>{frozenCount}</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <Network className="h-3 w-3" /> <span className="text-blue-500/40 ml-1">VIA RBI REGISTRY</span>
                      </div>
                  </div>
                  <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-900/50">
                      <Network className="h-5 w-5 text-blue-400" />
                  </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1520] border-emerald-900/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60 mb-2">Total Value Saved</p>
                      <p className="text-4xl font-bold text-emerald-400 mb-3 tracking-tighter" style={{ fontVariantNumeric: 'tabular-nums' }}>₹8.4Cr</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-emerald-400">
                          <ShieldCheck className="h-3 w-3" /> <span className="text-emerald-500/40 ml-1">INTERCEPTED TODAY</span>
                      </div>
                  </div>
                  <div className="p-3 bg-emerald-900/20 rounded-xl border border-emerald-900/50">
                      <ShieldCheck className="h-5 w-5 text-emerald-400" />
                  </div>
              </div>
            </CardContent>
          </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-8 bg-[#0a1520] border-rose-900/30 h-[400px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle className="text-lg flex items-center gap-2 text-white">
                        <Map className="h-5 w-5 text-rose-500/70" /> Geographic Threat Matrix
                    </CardTitle>
                    <p className="text-xs text-rose-100/50">Regional distribution of Mule Accounts vs Synthetic Identity (Deepfake) attempts.</p>
                </div>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={fraudDetectionData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#881337" vertical={false} />
                        <XAxis dataKey="region" stroke="#f43f5e" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#f43f5e" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip cursor={{fill: '#881337', opacity: 0.4}} contentStyle={{backgroundColor: '#020810', borderColor: '#881337', fontSize: '12px'}} />
                        <Bar dataKey="muleAccounts" name="Mule Accounts" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                        <Bar dataKey="deepfakes" name="Deepfake Attempts" fill="#f43f5e" radius={[2, 2, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 bg-[#0a1520] border-rose-900/30">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <Activity className="h-4 w-4 text-rose-500/70" /> Live Interception Feed
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                <div className="flex flex-col gap-2 p-3 bg-[#020810] border border-rose-900/30 border-l-2 border-l-rose-500 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-[11px] font-bold text-white flex items-center gap-1.5"><Video className="h-3 w-3 text-rose-500" /> Deepfake KYC</span>
                        <span className="text-[9px] text-rose-500 uppercase tracking-widest font-bold px-1.5 py-0.5 bg-rose-500/10 rounded">Blocked</span>
                    </div>
                    <div className="text-[11px] text-rose-100/60">
                        <p><strong>Vector:</strong> Video KYC (Mobile App)</p>
                        <p className="mt-0.5 text-[9px] text-rose-400/80">Liveness Failure: Eye-blink anomaly</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 p-3 bg-[#020810] border border-amber-900/30 border-l-2 border-l-amber-500 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-[11px] font-bold text-white flex items-center gap-1.5"><Network className="h-3 w-3 text-amber-500" /> Mule Velocity Spike</span>
                        <span className="text-[9px] text-amber-500 uppercase tracking-widest font-bold px-1.5 py-0.5 bg-amber-500/10 rounded">Frozen</span>
                    </div>
                    <div className="text-[11px] text-amber-100/60">
                        <p><strong>Vector:</strong> 12 micro-deposits to single node.</p>
                        <p className="mt-0.5 text-[9px] text-amber-400/80">Action: RBI Ledger Hold Applied</p>
                    </div>
                </div>
            </CardContent>
          </Card>
      </div>

      {/* Fund Tracer Terminal & Interactive Flow Graph */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2">
          {/* Visual Tracer Graph */}
          <Card className="lg:col-span-8 bg-[#0a1520] border-rose-900/30">
            <CardHeader className="flex flex-row justify-between items-center pb-2">
              <div>
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <Network className="h-4 w-4 text-rose-500" /> Interactive Fund Flow Tracer Graph
                </CardTitle>
                <p className="text-xs text-rose-100/50">Trace layered transactions across sovereign accounts on the ledger.</p>
              </div>
              <div className="flex gap-2">
                <select 
                  onChange={(e) => handleTrace(e.target.value)} 
                  value={searchQuery}
                  className="bg-[#020810] border border-rose-900/50 rounded-lg text-xs p-2 text-white focus:outline-none focus:border-rose-400"
                >
                  <option value="UPI_VELOCITY_LOOP">UPI Velocity Loop Seed</option>
                  <option value="CBDC_LAYERED_TX">CBDC Layered Tx Seed</option>
                  <option value="SHELL_COMPANY_INFLOW">Shell Company Inflow Seed</option>
                </select>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {isSearching ? (
                <div className="h-[200px] flex flex-col items-center justify-center gap-3">
                  <Activity className="h-8 w-8 text-rose-500 animate-pulse" />
                  <span className="text-xs text-rose-400/70 tracking-widest uppercase font-mono animate-pulse">Running tracer algorithm...</span>
                </div>
              ) : (
                <div className="relative border border-rose-900/20 bg-black/40 rounded-xl p-4 flex flex-col md:flex-row items-center justify-around gap-6 md:gap-2 min-h-[200px]">
                  {activeNodes.map((node, index) => {
                    const isSelected = selectedNodeId === node.id;
                    return (
                      <div key={node.id} className="flex items-center w-full md:w-auto relative">
                        {/* Connecting Arrow */}
                        {index > 0 && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 md:-left-4 md:top-1/2 md:-translate-y-1/2 rotate-90 md:rotate-0 flex items-center text-rose-500/50 font-mono text-[9px] gap-1 select-none">
                            <span>➔</span>
                            <span className="hidden md:inline text-[8px] bg-[#020810] px-1 border border-rose-900/40 rounded text-rose-400">{node.flowValue}</span>
                          </div>
                        )}

                        <div 
                          onClick={() => setSelectedNodeId(node.id)}
                          className={`flex flex-col p-3 rounded-lg border w-44 transition-all text-center select-none cursor-pointer ${
                            node.frozen 
                              ? "bg-rose-950/20 border-rose-600/50 opacity-60" 
                              : node.risk === "High"
                              ? isSelected ? "bg-rose-900/40 border-rose-400" : "bg-[#020810] border-rose-900 hover:border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.1)]"
                              : isSelected ? "bg-blue-900/40 border-blue-400" : "bg-[#020810] border-blue-900 hover:border-blue-700"
                          }`}
                        >
                          <div className="flex justify-between items-center text-[8px] font-mono text-rose-400/70 mb-1.5 uppercase font-bold">
                            <span>{node.role}</span>
                            <span className={`px-1 rounded ${
                              node.risk === "High" ? "bg-rose-950 text-rose-400" : node.risk === "Medium" ? "bg-amber-950 text-amber-400" : "bg-blue-950 text-blue-400"
                            }`}>
                              {node.risk} Risk
                            </span>
                          </div>
                          <span className="text-xs font-bold text-white truncate">{node.label}</span>
                          <span className="text-[9px] font-mono text-blue-100/40 mt-0.5">{node.pan}</span>
                          
                          {node.frozen ? (
                            <span className="text-[9px] font-mono font-bold text-rose-400 mt-2 bg-rose-950/50 py-0.5 rounded border border-rose-900/50 flex items-center justify-center gap-1">
                              <XCircle className="h-2.5 w-2.5" /> Frozen Node
                            </span>
                          ) : (
                            <span className="text-[9px] font-mono text-emerald-400 mt-2 bg-emerald-950/30 py-0.5 rounded border border-emerald-950/20 flex items-center justify-center gap-1">
                              <Check className="h-2.5 w-2.5" /> Active Link
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tracer Action Enclave */}
          <Card className="lg:col-span-4 bg-[#0a1520] border-rose-900/30 flex flex-col justify-between">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                <Search className="h-4 w-4 text-rose-500" /> Containment Controls
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between space-y-4">
              {selectedNode ? (
                <div className="p-3 bg-[#020810] border border-rose-900/40 rounded-lg text-xs space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">{selectedNode.label}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                      selectedNode.risk === "High" ? "bg-rose-950 text-rose-400" : "bg-blue-950 text-blue-400"
                    }`}>{selectedNode.risk} Risk</span>
                  </div>
                  <p className="text-blue-100/60 text-[10px] leading-relaxed">
                    <strong>Entity PAN:</strong> {selectedNode.pan}<br />
                    <strong>Trace Flow Value:</strong> {selectedNode.flowValue}<br />
                    <strong>Network Vector:</strong> Associated with structured micro-splitting.
                  </p>
                  
                  <div className="pt-2 border-t border-rose-900/20 flex gap-2">
                    <button 
                      onClick={() => handleFreezeNode(selectedNode.id)}
                      disabled={selectedNode.frozen}
                      className="w-full py-2 bg-rose-600 hover:bg-rose-500 disabled:bg-rose-900/20 text-white font-bold text-[9px] uppercase tracking-widest rounded transition-colors flex items-center justify-center gap-1"
                    >
                      <XCircle className="h-3.5 w-3.5" /> {selectedNode.frozen ? "Frozen in Registry" : "Freeze Node"}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-4 border border-dashed border-rose-900/30 rounded-lg text-center text-xs text-rose-400/50 italic py-10">
                  Select a node from the flow graph to trigger containment operations.
                </div>
              )}

              {/* Console logging output */}
              <div className="bg-[#020810] border border-rose-900/50 rounded-lg p-3 font-mono text-[9px] text-cyan-400/80 h-[85px] overflow-y-auto custom-scrollbar flex flex-col gap-0.5">
                {terminalLogs.map((log, i) => (
                  <div key={i} className="leading-tight truncate">
                    {log}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}
