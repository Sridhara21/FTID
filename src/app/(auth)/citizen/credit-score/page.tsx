"use client";

import { AlertCircle } from "lucide-react";
import { LifeEventSimulator } from "@/components/shared/v2/LifeEventSimulator";

export default function CitizenCreditScorePage() {
  return (
    <div className="min-h-screen bg-[#020810] text-slate-200 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10 space-y-6">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-purple-900/40 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-purple-900/30 text-purple-400 text-[10px] font-bold tracking-widest uppercase rounded">
                Personal Financial Operating System
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Credit & Life Intelligence</h1>
            <p className="text-sm text-purple-400 mt-2 font-mono flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> 
              KEY QUESTION: "How will my next life decision impact my financial trust?"
            </p>
          </div>
        </header>

        <LifeEventSimulator />

      </div>
    </div>
  );
}