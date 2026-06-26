"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type ScenarioEvent = 
  | "NONE"
  | "MSME_DEFAULT_SPIKE"
  | "SUBSIDY_EXPANSION"
  | "FRAUD_OUTBREAK"
  | "LIQUIDITY_INJECTION"
  | "ECONOMIC_SLOWDOWN"
  | "DEMO_SEQUENCE";

export type DemoStep = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface ScenarioState {
  isActive: boolean;
  activeEvent: ScenarioEvent;
  demoStep: DemoStep; 
}

interface ScenarioContextType {
  scenario: ScenarioState;
  triggerEvent: (event: ScenarioEvent) => void;
  advanceDemoStep: () => void;
  clearEvent: () => void;
  resetScenario: () => void;
}

const ScenarioContext = createContext<ScenarioContextType | undefined>(undefined);

export function ScenarioProvider({ children }: { children: ReactNode }) {
  const [scenario, setScenario] = useState<ScenarioState>({
    isActive: false,
    activeEvent: "NONE",
    demoStep: 0,
  });

  const triggerEvent = (event: ScenarioEvent) => {
    setScenario({ 
      isActive: true, 
      activeEvent: event,
      demoStep: event === "DEMO_SEQUENCE" ? 1 : 0 
    });
  };

  const advanceDemoStep = () => {
    setScenario(prev => {
      if (prev.activeEvent === "DEMO_SEQUENCE" && prev.demoStep < 6) {
        return { ...prev, demoStep: (prev.demoStep + 1) as DemoStep };
      }
      return prev;
    });
  };

  const clearEvent = () => {
    setScenario({ isActive: false, activeEvent: "NONE", demoStep: 0 });
  };

  const resetScenario = () => {
    setScenario({ isActive: false, activeEvent: "NONE", demoStep: 0 });
  };

  return (
    <ScenarioContext.Provider value={{ scenario, triggerEvent, advanceDemoStep, clearEvent, resetScenario }}>
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
