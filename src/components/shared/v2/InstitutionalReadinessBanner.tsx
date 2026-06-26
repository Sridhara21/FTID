"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, Database, Zap, ShieldCheck, Landmark, ArrowRight, ArrowLeftRight } from "lucide-react";

interface InstitutionalReadinessBannerProps {
  portalName: string;
  purpose: string;
  dataSources: string[];
  intelligenceGenerated: string[];
  decisionEnabled: string;
  legacyProcess: string;
  ftidProcess: string;
}

export function InstitutionalReadinessBanner({
  portalName,
  purpose,
  dataSources,
  intelligenceGenerated,
  decisionEnabled,
  legacyProcess,
  ftidProcess
}: InstitutionalReadinessBannerProps) {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <Card className="bg-[#0a1520] border-cyan-900/30 overflow-hidden relative font-sans mb-6">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-900/5 rounded-bl-full pointer-events-none"></div>
      <CardContent className="p-5 space-y-4">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-cyan-900/20 pb-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded">
              Institutional readiness specs
            </span>
          </div>
          <button
            onClick={() => setShowComparison(prev => !prev)}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            {showComparison ? "Hide Process Comparison" : "Show Process Comparison"}
          </button>
        </div>

        {/* 4 Core Dimensions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          
          {/* Purpose */}
          <div className="space-y-1.5 p-3 bg-[#050c14] border border-slate-800/80 rounded-lg">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-400" /> Purpose
            </span>
            <p className="text-slate-200 leading-normal">{purpose}</p>
          </div>

          {/* Data Sources */}
          <div className="space-y-1.5 p-3 bg-[#050c14] border border-slate-800/80 rounded-lg">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1">
              <Database className="w-3.5 h-3.5 text-indigo-400" /> Data Sources
            </span>
            <div className="flex flex-wrap gap-1">
              {dataSources.map((ds, i) => (
                <span key={i} className="px-1.5 py-0.5 bg-[#020509] border border-slate-800 text-[9px] text-slate-400 rounded">
                  {ds}
                </span>
              ))}
            </div>
          </div>

          {/* Intelligence Generated */}
          <div className="space-y-1.5 p-3 bg-[#050c14] border border-slate-800/80 rounded-lg">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-400" /> Intelligence
            </span>
            <div className="space-y-1 text-slate-300">
              {intelligenceGenerated.map((item, i) => (
                <div key={i} className="flex items-start gap-1">
                  <span className="text-amber-400">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decisions Enabled */}
          <div className="space-y-1.5 p-3 bg-[#050c14] border border-slate-800/80 rounded-lg">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Decision
            </span>
            <p className="text-slate-200 leading-normal">{decisionEnabled}</p>
          </div>

        </div>

        {/* Process Comparison Toggle Panel */}
        {showComparison && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-cyan-900/20 pt-4 text-xs animate-in slide-in-from-top-2 duration-300">
            {/* Legacy Process */}
            <div className="p-4 bg-rose-950/10 border border-rose-900/30 rounded-lg">
              <h4 className="font-bold text-rose-400 mb-2 flex items-center gap-1.5">
                ✕ Current Process (Friction-Filled)
              </h4>
              <p className="text-slate-300 leading-relaxed">{legacyProcess}</p>
            </div>

            {/* With FTID Process */}
            <div className="p-4 bg-emerald-950/10 border border-emerald-900/30 rounded-lg">
              <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
                ✓ With FTID Protocol (Automated)
              </h4>
              <p className="text-slate-200 leading-relaxed">{ftidProcess}</p>
            </div>
          </div>
        )}

      </CardContent>
    </Card>
  );
}
