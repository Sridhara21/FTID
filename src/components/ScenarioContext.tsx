"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type ScenarioEvent = 
  | "NONE"
  | "MSME_DEFAULT_SPIKE"
  | "LIQUIDITY_INJECTION"
  | "SYSTEM_STRESS_TEST"
  | "POLICY_RATE_CUT";

interface ScenarioState {
  isActive: boolean;
  activeEvent: ScenarioEvent;
  // Kept for backward compatibility with some existing components
  currentStep: number; 
}

interface ScenarioContextType {
  scenario: ScenarioState;
  triggerNationalScenario: () => void;
  triggerEvent: (event: ScenarioEvent) => void;
  clearEvent: () => void;
  resetScenario: () => void;
}

const ScenarioContext = createContext<ScenarioContextType | undefined>(undefined);

export function ScenarioProvider({ children }: { children: ReactNode }) {
  const [scenario, setScenario] = useState<ScenarioState>({
    isActive: false,
    activeEvent: "NONE",
    currentStep: 0,
  });

  const triggerNationalScenario = () => {
    setScenario({ isActive: true, activeEvent: "NONE", currentStep: 1 });
  };

  const triggerEvent = (event: ScenarioEvent) => {
    setScenario(prev => ({ 
      ...prev, 
      isActive: true, 
      activeEvent: event,
      // Mapping events to a currentStep roughly to maintain compatibility with Phase 1 components
      currentStep: event === "MSME_DEFAULT_SPIKE" ? 4 : event === "LIQUIDITY_INJECTION" ? 7 : 5 
    }));
  };

  const clearEvent = () => {
    setScenario(prev => ({ ...prev, activeEvent: "NONE", currentStep: 1 }));
  };

  const resetScenario = () => {
    setScenario({ isActive: false, activeEvent: "NONE", currentStep: 0 });
  };

  return (
    <ScenarioContext.Provider value={{ scenario, triggerNationalScenario, triggerEvent, clearEvent, resetScenario }}>
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
