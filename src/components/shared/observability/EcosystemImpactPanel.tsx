"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, Database, Network } from "lucide-react";

interface ImpactProps {
  upstream: string[];
  downstream: string[];
  dataSources: string[];
}

export function EcosystemImpactPanel({ upstream, downstream, dataSources }: ImpactProps) {
  return (
    <Card className="bg-[#0a1520] border-cyan-900/30">
      <CardHeader>
        <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
          <Network className="h-4 w-4 text-cyan-400" />
          Ecosystem Dependency Map
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <div className="space-y-3">
          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
            <ArrowDown className="h-3 w-3 text-rose-400" />
            Upstream Dependencies
          </h4>
          <div className="flex flex-wrap gap-2">
            {upstream.map((item, i) => (
              <span key={i} className="px-2 py-1 bg-rose-950/30 border border-rose-900/50 text-rose-200 text-[10px] rounded">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
            <Database className="h-3 w-3 text-cyan-400" />
            Primary Data Sources
          </h4>
          <div className="flex flex-wrap gap-2">
            {dataSources.map((item, i) => (
              <span key={i} className="px-2 py-1 bg-cyan-950/30 border border-cyan-900/50 text-cyan-200 text-[10px] rounded">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
            <ArrowUp className="h-3 w-3 text-emerald-400" />
            Downstream Impact
          </h4>
          <div className="flex flex-wrap gap-2">
            {downstream.map((item, i) => (
              <span key={i} className="px-2 py-1 bg-emerald-950/30 border border-emerald-900/50 text-emerald-200 text-[10px] rounded">
                {item}
              </span>
            ))}
          </div>
        </div>

      </CardContent>
    </Card>
  );
}
