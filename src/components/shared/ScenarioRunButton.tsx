"use client";

import { useScenario } from "@/components/ScenarioContext";
import { Play, Activity } from "lucide-react";

export function ScenarioRunButton() {
  const { scenario, triggerNationalScenario } = useScenario();

  return (
    <button
      onClick={triggerNationalScenario}
      disabled={scenario.isActive}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm tracking-widest uppercase transition-all shadow-xl ${
        scenario.isActive
          ? "bg-emerald-900/50 text-emerald-400 border border-emerald-700/50 cursor-not-allowed"
          : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border border-blue-400/50 hover:scale-105"
      }`}
    >
      {scenario.isActive ? (
        <>
          <Activity className="w-5 h-5 animate-pulse" />
          Scenario Running (Step {scenario.currentStep}/9)
        </>
      ) : (
        <>
          <Play className="w-5 h-5 fill-current" />
          Run National Scenario
        </>
      )}
    </button>
  );
}
