"use client";
import React from "react";
import { ArrowRight, Database, ArrowLeftRight } from "lucide-react";

interface ConnectivityIndicatorProps {
  upstream: string[];
  downstream: string[];
}

export function ConnectivityIndicator({ upstream, downstream }: ConnectivityIndicatorProps) {
  return (
    <div className="bg-[#050c14] border border-slate-800 rounded-lg p-3 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono">
      <div className="flex items-center gap-2">
        <ArrowLeftRight className="w-3.5 h-3.5 text-cyan-400" />
        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Lineage Flow</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        {/* Upstream */}
        <div className="flex items-center gap-2">
          <span className="text-slate-400">Receives Data From:</span>
          <div className="flex gap-1.5 flex-wrap">
            {upstream.map((up, i) => (
              <span key={i} className="px-2 py-0.5 bg-slate-900 border border-slate-800/80 text-cyan-300 rounded text-[10px]">
                {up}
              </span>
            ))}
          </div>
        </div>

        <ArrowRight className="hidden md:block w-3.5 h-3.5 text-slate-700" />

        {/* Downstream */}
        <div className="flex items-center gap-2">
          <span className="text-slate-400">Sends Intelligence To:</span>
          <div className="flex gap-1.5 flex-wrap">
            {downstream.map((down, i) => (
              <span key={i} className="px-2 py-0.5 bg-slate-900 border border-slate-800/80 text-indigo-300 rounded text-[10px]">
                {down}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
