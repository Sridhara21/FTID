"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Network } from "lucide-react";
import { useEffect, useState } from "react";

export interface GraphNode {
  id: string;
  label: string;
  x: number;
  y: number;
  type: "CORE" | "EDGE" | "RISK";
  profile?: string;
  trustScore?: number;
  riskScore?: number;
  exposure?: string;
  suspicious?: string[];
  transactions?: number;
}

interface FinancialNetworkGraphProps {
  className?: string;
  onNodeClick?: (node: GraphNode) => void;
  selectedNodeId?: string | null;
}

export function FinancialNetworkGraph({ className = "", onNodeClick, selectedNodeId }: FinancialNetworkGraphProps) {
  const [nodes, setNodes] = useState<GraphNode[]>([]);
  const [lines, setLines] = useState<{x1: number, y1: number, x2: number, y2: number, active: boolean}[]>([]);

  useEffect(() => {
    // Generate a beautiful fixed layout graph with rich metadata
    const baseNodes: GraphNode[] = [
      { id: "RBI", label: "Central Bank", x: 50, y: 50, type: "CORE", profile: "Sovereign Authority", trustScore: 99.9, riskScore: 0.1, exposure: "₹0", suspicious: [], transactions: 8400000 },
      { id: "NPCI", label: "Payments Corp", x: 30, y: 30, type: "CORE", profile: "Switch & Gateway", trustScore: 99.8, riskScore: 1.2, exposure: "₹0", suspicious: [], transactions: 450000000 },
      { id: "GSTN", label: "Tax Network", x: 70, y: 30, type: "CORE", profile: "Tax Authority", trustScore: 99.5, riskScore: 0.5, exposure: "₹0", suspicious: [], transactions: 3200000 },
      { id: "BankA", label: "HDFC Bank", x: 20, y: 70, type: "EDGE", profile: "Systemically Important Bank", trustScore: 94.2, riskScore: 18.5, exposure: "₹45,000 Cr", suspicious: ["TR-904"], transactions: 12000000 },
      { id: "BankB", label: "Coop Bank", x: 80, y: 70, type: "RISK", profile: "Tier-3 Cooperative", trustScore: 62.1, riskScore: 88.4, exposure: "₹1,200 Cr", suspicious: ["TR-882", "TR-911"], transactions: 45000 },
      { id: "NBFC", label: "Shadow Lender", x: 50, y: 85, type: "RISK", profile: "Non-Banking Fin Co", trustScore: 54.0, riskScore: 92.1, exposure: "₹850 Cr", suspicious: ["TR-911"], transactions: 12000 },
      { id: "Vendor", label: "MSME Cluster", x: 10, y: 50, type: "EDGE", profile: "Retail/Wholesale", trustScore: 81.2, riskScore: 42.5, exposure: "₹120 Cr", suspicious: [], transactions: 500000 },
      { id: "CBDC", label: "Digital Rupee", x: 90, y: 50, type: "CORE", profile: "Programmable Ledger", trustScore: 99.9, riskScore: 0.1, exposure: "₹0", suspicious: [], transactions: 850000 },
    ];
    setNodes(baseNodes);

    const baseLines = [
      { x1: 50, y1: 50, x2: 30, y2: 30, active: false },
      { x1: 50, y1: 50, x2: 70, y2: 30, active: false },
      { x1: 50, y1: 50, x2: 20, y2: 70, active: false },
      { x1: 50, y1: 50, x2: 80, y2: 70, active: false },
      { x1: 50, y1: 50, x2: 50, y2: 85, active: false },
      { x1: 30, y1: 30, x2: 10, y2: 50, active: false },
      { x1: 70, y1: 30, x2: 90, y2: 50, active: false },
      { x1: 20, y1: 70, x2: 50, y2: 85, active: false },
      { x1: 80, y1: 70, x2: 50, y2: 85, active: false },
    ];

    setLines(baseLines);

    const interval = setInterval(() => {
      setLines(prev => prev.map(l => ({ ...l, active: Math.random() > 0.6 })));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const getNodeColor = (type: string, isSelected: boolean) => {
    let color = "";
    if (type === "CORE") color = "bg-cyan-400";
    else if (type === "RISK") color = "bg-rose-500 animate-pulse";
    else color = "bg-emerald-400";

    if (isSelected) {
      return `${color} ring-4 ring-white/50 scale-150 shadow-[0_0_20px_rgba(255,255,255,0.8)] z-50`;
    }
    
    if (type === "CORE") return `${color} shadow-[0_0_15px_rgba(34,211,238,0.6)]`;
    if (type === "RISK") return `${color} shadow-[0_0_15px_rgba(244,63,94,0.6)]`;
    return `${color} shadow-[0_0_10px_rgba(52,211,153,0.4)]`;
  };

  return (
    <Card className={`bg-[#0a1520] border-cyan-900/30 overflow-hidden ${className}`}>
      <CardHeader className="pb-0 absolute z-20 pointer-events-none">
        <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
          <Network className="h-4 w-4 text-cyan-400" />
          Systemic Topology
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 h-full relative min-h-[300px]">
        {/* SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          {lines.map((line, i) => (
            <line 
              key={i}
              x1={`${line.x1}%`} 
              y1={`${line.y1}%`} 
              x2={`${line.x2}%`} 
              y2={`${line.y2}%`} 
              stroke={line.active ? "rgba(34, 211, 238, 0.6)" : "rgba(15, 30, 45, 0.8)"}
              strokeWidth={line.active ? "2" : "1"}
              className="transition-all duration-700"
            />
          ))}
        </svg>

        {/* Nodes */}
        {nodes.map(node => {
          const isSelected = selectedNodeId === node.id;
          return (
            <div 
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 cursor-pointer group transition-all duration-300 hover:scale-125 hover:z-40"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onClick={() => onNodeClick?.(node)}
            >
              <div className={`w-4 h-4 rounded-full transition-all duration-300 ${getNodeColor(node.type, isSelected)}`}></div>
              <span className={`text-[10px] font-bold mt-2 px-2 py-0.5 rounded transition-colors ${isSelected ? "text-white bg-blue-600 shadow-lg" : "text-slate-400 bg-[#020810]/80 group-hover:text-cyan-400"}`}>
                {node.label}
              </span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
