"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Share2, Sparkles, TrendingUp, Users } from "lucide-react";
import { useCitizen } from "@/hooks/use-citizen";

export function FlowLeaderboard() {
  const { citizenData, isLoading } = useCitizen();
  const [isHologramActive, setIsHologramActive] = useState(false);

  const flowScore = citizenData?.currentCreditScore || 785;
  const tier = citizenData?.tier || "Tier1";

  // Simulate demographic percentile based on score
  const getPercentile = (score: number) => {
    if (score >= 800) return "Top 1%";
    if (score >= 750) return "Top 5%";
    if (score >= 650) return "Top 15%";
    if (score >= 550) return "Top 40%";
    return "Top 60%";
  };

  const percentile = getPercentile(flowScore);

  const handleShare = () => {
    setIsHologramActive(true);
    setTimeout(() => {
      setIsHologramActive(false);
      // In production, this would trigger Web Share API
      alert("Holographic Flow Snapshot generated and ready for Instagram/X sharing!");
    }, 2500);
  };

  return (
    <Card className="relative overflow-hidden border-primary/30 shadow-[0_0_20px_rgba(var(--primary),0.1)]">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      <CardHeader className="pb-4 border-b border-border/30">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg font-black tracking-tight uppercase">
            <Trophy className="h-5 w-5 text-yellow-500" /> Peer Ranking
          </CardTitle>
          <Badge className="bg-primary/20 text-primary border-primary/30 uppercase tracking-widest text-[9px] font-bold">
            Live Network
          </Badge>
        </div>
        <CardDescription className="text-xs">
          Your anonymized Flow Score position vs. demographic peers.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6 relative">
        {isHologramActive && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-50/80 backdrop-blur-md rounded-xl">
            <div className="text-center animate-pulse duration-700">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4 animate-spin-slow" />
              <p className="text-sm font-black uppercase tracking-widest text-primary">Generating 3D Hologram...</p>
              <p className="text-[10px] text-muted-foreground mt-2 font-mono">Bonding Sovereign Data</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Ranking Visualizer */}
          <div className="flex flex-col items-center justify-center p-6 bg-secondary/30 rounded-xl border border-border/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-bg-pan opacity-0 group-hover:opacity-100 transition-opacity" />
            <Trophy className="h-12 w-12 text-yellow-500 mb-4 " />
            <h3 className="text-4xl font-black tabular-nums tracking-tighter mb-1">{percentile}</h3>
            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest text-center">
              Of Urban Millennials<br/>(Ages 25-30)
            </p>
          </div>

          {/* Social Flex & Stats */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Growth Velocity</p>
                <p className="text-lg font-black tracking-tight text-green-400">+12% faster than peers</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Network Trust</p>
                <p className="text-lg font-black tracking-tight text-blue-400">{tier} Status Granted</p>
              </div>
            </div>

            <Button 
              onClick={handleShare}
              className="w-full h-12 bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-500 text-slate-900 font-black uppercase tracking-institutional text-xs shadow-[0_0_15px_rgba(var(--primary),0.4)] border-0"
            >
              <Share2 className="mr-2 h-4 w-4" /> Share Holographic Flex
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
