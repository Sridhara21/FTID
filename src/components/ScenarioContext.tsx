"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type ScenarioStep = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

interface ScenarioState {
  isActive: boolean;
  currentStep: ScenarioStep;
}

interface ScenarioContextType {
  scenario: ScenarioState;
  triggerNationalScenario: () => void;
  resetScenario: () => void;
}

const ScenarioContext = createContext<ScenarioContextType | undefined>(undefined);

export function ScenarioProvider({ children }: { children: ReactNode }) {
  const [scenario, setScenario] = useState<ScenarioState>({
    isActive: false,
    currentStep: 0,
  });

  const triggerNationalScenario = () => {
    setScenario({ isActive: true, currentStep: 1 });
  };

  useEffect(() => {
    if (scenario.isActive && scenario.currentStep > 0 && scenario.currentStep < 9) {
      const timer = setTimeout(() => {
        setScenario(prev => ({ ...prev, currentStep: (prev.currentStep + 1) as ScenarioStep }));
      }, 3000); // 3 seconds per step for demonstration purposes
      return () => clearTimeout(timer);
    }
  }, [scenario]);

  const resetScenario = () => {
    setScenario({ isActive: false, currentStep: 0 });
  };

  return (
    <ScenarioContext.Provider value={{ scenario, triggerNationalScenario, resetScenario }}>
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
