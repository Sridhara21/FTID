"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Activity } from "lucide-react";
import { useEffect, useState } from "react";

interface Node {
  id: string;
  x: number;
  y: number;
  type: "CORE" | "EDGE" | "RISK";
  pulseOffset: number;
}

export function FinancialNetworkGraph({ className = "" }: { className?: string }) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [lines, setLines] = useState<{x1: number, y1: number, x2: number, y2: number, active: boolean}[]>([]);

  useEffect(() => {
    // Generate a beautiful fixed layout graph
    const baseNodes: Node[] = [
      { id: "RBI", x: 50, y: 50, type: "CORE", pulseOffset: 0 },
      { id: "NPCI", x: 30, y: 30, type: "CORE", pulseOffset: 1 },
      { id: "GSTN", x: 70, y: 30, type: "CORE", pulseOffset: 2 },
      { id: "BankA", x: 20, y: 70, type: "EDGE", pulseOffset: 3 },
      { id: "BankB", x: 80, y: 70, type: "EDGE", pulseOffset: 0 },
      { id: "NBFC", x: 50, y: 85, type: "RISK", pulseOffset: 2 },
      { id: "Vendor", x: 10, y: 50, type: "EDGE", pulseOffset: 1 },
      { id: "CBDC", x: 90, y: 50, type: "CORE", pulseOffset: 0 },
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

  const getNodeColor = (type: string) => {
    if (type === "CORE") return "bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]";
    if (type === "RISK") return "bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.6)] animate-pulse";
    return "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.4)]";
  };

  return (
    <Card className={`bg-[#0a1520] border-cyan-900/30 overflow-hidden ${className}`}>
      <CardHeader className="pb-0 absolute z-20">
        <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
          <Network className="h-4 w-4 text-cyan-400" />
          Systemic Topology
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 h-full relative min-h-[300px]">
        {/* SVG Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
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
          {/* Animated data packets along lines */}
          {lines.filter(l => l.active).map((line, i) => (
             <circle key={`packet-${i}`} r="2" fill="#22d3ee" className="animate-ping">
               <animateMotion 
                 dur={`${1 + Math.random()}s`} 
                 repeatCount="indefinite" 
                 path={`M ${line.x1 * 3} ${line.y1 * 3} L ${line.x2 * 3} ${line.y2 * 3}`} 
               />
             </circle>
          ))}
        </svg>

        {/* Nodes */}
        {nodes.map(node => (
          <div 
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div className={`w-3 h-3 rounded-full ${getNodeColor(node.type)}`}></div>
            <span className="text-[9px] font-bold mt-1 text-slate-400 bg-[#020810]/80 px-1 rounded">{node.id}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
