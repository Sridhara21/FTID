"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Loader2, Sparkles, ShieldAlert, GlobeLock, ArrowRight } from "lucide-react";
import { useCitizen } from "@/hooks/use-citizen";
import { useToast } from "@/hooks/use-toast";

export function AiAdvisorCard() {
  const [isScanning, setIsScanning] = useState(false);
  const [loopholesFound, setLoopholesFound] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  
  const { citizenData } = useCitizen();
  const { toast } = useToast();

  const isElite = citizenData?.tier === 'Black';

  async function handleScan() {
    setIsScanning(true);
    setLoopholesFound(false);
    
    // Simulate deep scanning of global jurisdictions
    setTimeout(() => {
      setIsScanning(false);
      setLoopholesFound(true);
      toast({
        title: "Jurisdictional Scan Complete",
        description: "3 Tax Loopholes identified in Cayman and Swiss nodes.",
      });
    }, 2500);
  }

  async function handleExecute() {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setLoopholesFound(false);
      toast({
        title: "Smart Contract Executed",
        description: "₹1,450,000 legally shielded via Sovereign Route 7.",
      });
    }, 2000);
  }

  return (
    <Card className={`flex flex-col h-full border-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.05)] glass-panel relative overflow-hidden ${isScanning ? 'cyber-scanner' : ''}`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
      <CardHeader className="pb-4 border-b border-primary/10">
        <CardTitle className="flex items-center gap-2 text-lg text-primary uppercase font-black tracking-institutional">
          <Bot className="h-5 w-5" />
          Autonomous Tax Loophole AI
        </CardTitle>
        <CardDescription className="text-[10px] uppercase tracking-widest font-bold text-primary/70">
          Global Jurisdictional Arbitrage Agent
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4 pt-6 flex-grow flex flex-col">
        {!loopholesFound && !isScanning && (
          <div className="text-center py-4 space-y-6 flex-grow flex flex-col justify-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 relative">
               <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-ping"></div>
               <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
                <p className="text-sm font-black uppercase text-primary tracking-widest">Awaiting Command</p>
                <p className="text-[10px] text-muted-foreground font-mono px-4">
                  Deploy AI Agent to scan 194 global tax codes for legal evasion vectors and automated offshore routing.
                </p>
            </div>
            <Button onClick={handleScan} disabled={!isElite} className="w-full h-11 font-black uppercase tracking-institutional text-[11px] bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(255,215,0,0.3)]">
              {isElite ? "Initialize Global Scan" : "FTID Black Required"}
            </Button>
          </div>
        )}

        {isScanning && (
          <div className="space-y-6 py-8 text-center flex-grow flex flex-col justify-center">
            <div className="relative mx-auto w-16 h-16">
              <Loader2 className="absolute inset-0 h-16 w-16 animate-spin text-primary opacity-20" />
              <GlobeLock className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-primary animate-pulse" />
            </div>
            <div className="space-y-2">
                <p className="text-xs font-black uppercase text-primary tracking-widest animate-pulse">Scanning Jurisdictions</p>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Analyzing Cayman Islands corporate tax code sec 4.2...</p>
            </div>
          </div>
        )}
        
        {loopholesFound && !isScanning && (
          <div className="space-y-4 text-xs flex-grow flex flex-col">
            <div className="p-4 bg-secondary/30 backdrop-blur-sm rounded-xl border border-primary/30 shadow-sm relative overflow-hidden group">
              <h3 className="font-black flex items-center gap-2 mb-2 uppercase tracking-widest text-primary">
                <ShieldAlert className="h-4 w-4" /> Vector 1: Swiss Node Arbitrage
              </h3>
              <p className="text-muted-foreground font-mono text-[10px] mb-3">By routing ₹1,450,000 through a temporary Geneva corporate shell, you can legally bypass the upcoming 12% domestic flow tax.</p>
              <div className="flex justify-between items-center bg-slate-50/50 p-2 rounded border border-border/50">
                  <span className="text-[9px] uppercase tracking-widest font-bold">Projected Savings</span>
                  <span className="text-green-400 font-mono font-black">+₹174,000</span>
              </div>
            </div>
            
            <div className="mt-auto space-y-2 pt-4">
                <Button onClick={handleExecute} disabled={isExecuting} className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-institutional text-[11px]">
                {isExecuting ? <Loader2 className="h-4 w-4 animate-spin" /> : <><ArrowRight className="h-4 w-4 mr-2" /> Execute Smart Contract</>}
                </Button>
                <Button onClick={() => setLoopholesFound(false)} variant="ghost" className="w-full h-8 text-[9px] uppercase tracking-widest text-muted-foreground hover:text-primary">
                Abort
                </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}