"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wallet, Info } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function MonthlyBudgetTracking() {
  return (
    <Card className="glass-panel w-full mt-6">
      <CardHeader className="pb-4 border-b border-white/40">
        <CardTitle className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-900/90">
          <Wallet className="h-4 w-4 text-slate-900/70" /> Monthly Budget Tracking
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] font-bold text-slate-900/50 uppercase tracking-widest">Safe to Spend</p>
                <p className="text-3xl font-black tabular-nums tracking-tighter text-slate-900 mt-1">₹34,200</p>
              </div>
              <p className="text-xs font-semibold text-slate-900/70">/ ₹1,00,000 Total Budget</p>
            </div>
            
            <div className="space-y-2">
              <Progress value={65.8} className="h-3 bg-white/50" indicatorColor="bg-emerald-500" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-900/50 text-right">65.8% Utilized</p>
            </div>
          </div>
          
          <div className="flex-1 bg-indigo-50 border border-indigo-100 rounded-2xl p-4 relative overflow-hidden flex items-start gap-3">
             <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-200/50 rounded-bl-full blur-xl"></div>
             <Info className="h-5 w-5 text-indigo-700 flex-shrink-0 mt-0.5" />
             <div>
               <p className="text-xs font-bold text-indigo-900 uppercase tracking-widest mb-1">AI Copilot Insight</p>
               <p className="text-sm font-medium text-indigo-900/80 leading-relaxed">
                 You are spending 10% slower than last month. At this rate, you will have ₹12,000 surplus by the end of the month.
               </p>
             </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
