"use client";
import React, { useState } from "react";
import { useDemoMode, getDemoSteps } from "./DemoModeProvider";
import { useCountry } from "@/components/CountryContext";
import { ChevronRight, ChevronLeft, Lightbulb, Play, BookOpen, AlertCircle } from "lucide-react";

export function DemoJourneyDock() {
  const { activeStep, currentStepInfo, goToNextStep, goToPrevStep, skipToStep, isDemoActive, setIsDemoActive } = useDemoMode();
  const { country } = useCountry();
  const DEMO_STEPS = country ? getDemoSteps(country) : [];
  const [showDetails, setShowDetails] = useState(false);

  if (!isDemoActive) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] bg-[#020509]/95 backdrop-blur-md border-t border-cyan-900/50 p-4 font-sans text-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        
        {/* Step Indicator Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-900/30 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-black text-xs font-bold font-mono">
              {activeStep}
            </span>
            <span className="font-bold text-white text-sm">Guided Demo Step: {currentStepInfo.label}</span>
          </div>

          {/* Stepper Dots */}
          <div className="flex items-center gap-2">
            {DEMO_STEPS?.map((s) => (
              <button
                key={s.step}
                onClick={() => skipToStep(s.step)}
                title={s.label}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeStep === s.step 
                    ? "w-8 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
                    : "w-2.5 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={goToPrevStep}
              disabled={activeStep === 1}
              className={`flex items-center justify-center p-1.5 rounded bg-slate-900 border border-slate-800 transition-colors ${
                activeStep === 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-slate-850 hover:text-white"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowDetails(prev => !prev)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold border transition-colors ${
                showDetails 
                  ? "bg-cyan-950/40 border-cyan-500/50 text-cyan-400" 
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" /> Details
            </button>
            <button
              onClick={goToNextStep}
              disabled={activeStep === DEMO_STEPS.length}
              className={`flex items-center justify-center gap-1 px-4 py-1.5 rounded bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs transition-all shadow-[0_0_10px_rgba(6,182,212,0.2)] ${
                activeStep === DEMO_STEPS.length ? "opacity-30 cursor-not-allowed" : "hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              }`}
            >
              Next Step <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Details / Talking Points Overlay */}
        {showDetails && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-1 pb-2 text-xs leading-relaxed animate-in slide-in-from-bottom-2 duration-300">
            
            {/* Outcomes & Signals (Left) */}
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              <div className="p-3 bg-[#050c14] border border-slate-800/80 rounded-lg">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">Input Received</span>
                <span className="text-slate-200">{currentStepInfo.inputReceived}</span>
              </div>
              <div className="p-3 bg-[#050c14] border border-slate-800/80 rounded-lg">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">Intelligence Generated</span>
                <span className="text-slate-200">{currentStepInfo.intelligenceGenerated}</span>
              </div>
              <div className="p-3 bg-[#050c14] border border-slate-800/80 rounded-lg">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">Decision Enabled</span>
                <span className="text-slate-200">{currentStepInfo.decisionEnabled}</span>
              </div>
              <div className="p-3 bg-[#050c14] border border-slate-800/80 rounded-lg">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">Outcome Created</span>
                <span className="text-cyan-400 font-bold">{currentStepInfo.outcomeCreated}</span>
              </div>
            </div>

            {/* Talking Points & Guidelines (Right) */}
            <div className="md:col-span-5 bg-cyan-950/20 border border-cyan-900/30 p-4 rounded-lg flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-1">
                <Lightbulb className="w-3.5 h-3.5" /> Key Talking Points
              </span>
              <ul className="space-y-2">
                {currentStepInfo?.talkingPoints?.map((tp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">•</span>
                    <span>{tp}</span>
                  </li>
                )) ?? []}
              </ul>
            </div>
            
          </div>
        )}

      </div>
    </div>
  );
}
