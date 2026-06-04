"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ScenarioState {
  isActive: boolean;
  type: string | null;
  severity: "high" | "critical" | "moderate" | null;
}

interface ScenarioContextType {
  scenario: ScenarioState;
  triggerScenario: (type: string, severity: "high" | "critical" | "moderate") => void;
  resetScenario: () => void;
}

const ScenarioContext = createContext<ScenarioContextType | undefined>(undefined);

export function ScenarioProvider({ children }: { children: ReactNode }) {
  const [scenario, setScenario] = useState<ScenarioState>({
    isActive: false,
    type: null,
    severity: null,
  });

  const triggerScenario = (type: string, severity: "high" | "critical" | "moderate") => {
    setScenario({ isActive: true, type, severity });
    
    // In a real application, this might also trigger an API call to a backend event bus.
    try {
      fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "SCENARIO_TRIGGERED", payload: { type, severity } }),
      }).catch(err => console.error("Event bus mock error:", err));
    } catch (error) {
      // Ignore
    }
  };

  const resetScenario = () => {
    setScenario({ isActive: false, type: null, severity: null });
  };

  return (
    <ScenarioContext.Provider value={{ scenario, triggerScenario, resetScenario }}>
      {children}
    </ScenarioContext.Provider>
  );
}

export function useScenario() {
  const context = useContext(ScenarioContext);
  if (context === undefined) {
    throw new Error("useScenario must be used within a ScenarioProvider");
  }
  return context;
}
