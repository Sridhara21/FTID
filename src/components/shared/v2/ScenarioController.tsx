"use client";

import React, { useState, useEffect } from "react";
import { useScenario, ScenarioEvent } from "@/components/ScenarioContext";
import { Play, Pause, FastForward, RotateCcw, AlertTriangle, Coins, Target } from "lucide-react";

export function ScenarioController() {
  const { scenario, triggerEvent, clearEvent, resetScenario } = useScenario();
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility with Shift+C
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === 'c') {
        setIsVisible(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] bg-[#020509]/90 backdrop-blur-md border border-cyan-900/50 rounded-lg shadow-[0_0_30px_rgba(8,145,178,0.3)] p-4 w-80 font-sans">
      <div className="flex items-center justify-between mb-4 border-b border-cyan-900/40 pb-2">
        <h3 className="text-white font-bold text-sm flex items-center gap-2">
          <Target className="w-4 h-4 text-cyan-400" />
          Demo Controller
        </h3>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-slate-500 hover:text-white text-xs font-mono"
        >
          [ESC]
        </button>
      </div>

      <div className="space-y-3">
        <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Inject Event</div>
        
        <button 
          onClick={() => triggerEvent("MSME_DEFAULT_SPIKE")}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded text-sm transition-all border ${
            scenario.activeEvent === "MSME_DEFAULT_SPIKE" 
              ? "bg-rose-500/20 border-rose-500/50 text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.3)]" 
              : "bg-slate-900/50 border-slate-800 text-slate-300 hover:border-rose-500/30 hover:bg-rose-500/10"
          }`}
        >
          <AlertTriangle className={`w-4 h-4 ${scenario.activeEvent === "MSME_DEFAULT_SPIKE" ? "text-rose-400" : "text-slate-500"}`} />
          MSME Default Spike
        </button>

        <button 
          onClick={() => triggerEvent("LIQUIDITY_INJECTION")}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded text-sm transition-all border ${
            scenario.activeEvent === "LIQUIDITY_INJECTION" 
              ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]" 
              : "bg-slate-900/50 border-slate-800 text-slate-300 hover:border-emerald-500/30 hover:bg-emerald-500/10"
          }`}
        >
          <Coins className={`w-4 h-4 ${scenario.activeEvent === "LIQUIDITY_INJECTION" ? "text-emerald-400" : "text-slate-500"}`} />
          Liquidity Injection
        </button>
      </div>

      <div className="flex gap-2 mt-4 pt-4 border-t border-slate-800">
        <button 
          onClick={clearEvent}
          className="flex-1 bg-slate-800 hover:bg-slate-700 text-white text-xs py-2 rounded font-medium transition-colors"
        >
          Clear Event
        </button>
        <button 
          onClick={resetScenario}
          className="flex-1 bg-rose-900/30 border border-rose-900/50 hover:bg-rose-900/50 text-rose-400 text-xs py-2 rounded font-medium transition-colors flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>
      <div className="mt-2 text-center text-[10px] text-slate-500 font-mono">
        Active: {scenario.activeEvent}
      </div>
    </div>
  );
}
