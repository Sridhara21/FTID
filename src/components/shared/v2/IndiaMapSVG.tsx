import React from 'react';
import { useScenario } from "@/components/ScenarioContext";

export function IndiaMapSVG() {
  const { scenario } = useScenario();
  
  // Define regional stress based on active event
  const isDefaultSpike = scenario.activeEvent === "MSME_DEFAULT_SPIKE";
  const isLiquidity = scenario.activeEvent === "LIQUIDITY_INJECTION";

  // Abstract, blocky representation of India for the showcase
  const regions = [
    { id: "north", label: "North (Delhi/NCR)", points: "40,10 60,10 70,30 50,45 35,30", defaultFill: "fill-indigo-900/40" },
    { id: "west", label: "West (MH/GJ)", points: "20,40 45,45 35,70 15,60", defaultFill: "fill-indigo-900/40" },
    { id: "central", label: "Central (MP/UP)", points: "45,45 75,40 65,65 35,70", defaultFill: "fill-indigo-900/40" },
    { id: "east", label: "East (WB/OD)", points: "75,40 95,50 85,75 65,65", defaultFill: "fill-indigo-900/40" },
    { id: "south", label: "South (KA/TN)", points: "35,70 65,65 50,95", defaultFill: "fill-indigo-900/40" }
  ];

  const getRegionColor = (id: string) => {
    if (isDefaultSpike && (id === "west" || id === "south")) return "fill-rose-500/80 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]";
    if (isLiquidity && (id === "west" || id === "south")) return "fill-emerald-500/80 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]";
    if (isLiquidity && id === "central") return "fill-emerald-400/50 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]";
    if (scenario.activeEvent !== "NONE") return "fill-indigo-900/20"; // Dim others
    return "fill-indigo-900/40 hover:fill-indigo-700/50"; // Default
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 110 110" className="w-full h-full max-h-[250px] overflow-visible transition-all duration-1000">
        {regions.map(r => (
          <g key={r.id} className="group cursor-pointer">
            <polygon 
              points={r.points} 
              className={`transition-all duration-700 stroke-indigo-500/30 stroke-[0.5] ${getRegionColor(r.id)}`}
            />
            {/* Tooltip emulation via SVG text appearing on hover */}
            <text 
              x="55" y="105" 
              textAnchor="middle" 
              className="opacity-0 group-hover:opacity-100 fill-slate-300 text-[4px] font-mono tracking-widest uppercase transition-opacity"
            >
              {r.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
