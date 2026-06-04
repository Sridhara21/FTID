"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrainCircuit, CheckCircle2, ChevronRight, BarChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DecisionProps {
  primaryQuestion: string;
  recommendation: string;
  impact: string;
  confidence: number;
  actionText: string;
  onAction?: () => void;
}

export function DecisionEnginePanel({ 
  primaryQuestion, 
  recommendation, 
  impact, 
  confidence, 
  actionText,
  onAction
}: DecisionProps) {
  const { toast } = useToast();

  const handleAction = () => {
    if (onAction) onAction();
    toast({
      title: "Decision Executed",
      description: `Action: ${actionText} broadcasted to FTID Network.`,
      variant: "default"
    });
  };

  return (
    <Card className="bg-gradient-to-br from-[#0a1520] to-[#040a10] border-emerald-900/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-900/10 blur-[50px] rounded-full pointer-events-none z-0"></div>
      <CardHeader>
        <CardTitle className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2 relative z-10">
          <BrainCircuit className="h-4 w-4" />
          FTID Decision Engine
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 relative z-10">
        
        <div className="space-y-1">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest">Primary Objective</p>
          <p className="text-lg font-medium text-white">{primaryQuestion}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-emerald-950/20 border border-emerald-900/30 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Recommendation</span>
            </div>
            <p className="text-sm text-emerald-100/90">{recommendation}</p>
          </div>
          
          <div className="p-4 bg-cyan-950/20 border border-cyan-900/30 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <BarChart className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Expected Impact</span>
            </div>
            <p className="text-sm text-cyan-100/90">{impact}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-emerald-900/30 gap-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-black text-white">{confidence}%</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest leading-tight">
              AI Confidence<br/>Score
            </div>
          </div>
          <Button 
            onClick={handleAction}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all"
          >
            {actionText}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

      </CardContent>
    </Card>
  );
}
