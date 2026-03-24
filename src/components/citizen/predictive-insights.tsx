"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, AlertTriangle, TrendingUp, PiggyBank, Target } from "lucide-react";

export function PredictiveInsights() {
  const insights = [
    {
      title: "End-of-Month Projection",
      value: "₹24,800",
      description: "Based on historical average spend in the last 10 days of the month.",
      icon: TrendingUp,
      color: "text-primary"
    },
    {
      title: "Risk Alert: Subscriptions",
      value: "Action Recommended",
      description: "Detected 3 redundant streaming services. Possible ₹1,200/mo savings.",
      icon: AlertTriangle,
      color: "text-yellow-400"
    },
    {
      title: "Smart Savings Target",
      value: "+₹4,500",
      description: "Transfer to Debt-fund recommended for high-liquidity tax efficiency.",
      icon: Target,
      color: "text-green-400"
    }
  ];

  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader className="pb-4 border-b border-primary/10">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-bold uppercase tracking-institutional flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" /> Predictive Flow Insights
          </CardTitle>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-[9px] font-bold tracking-widest">AI GENERATED</Badge>
        </div>
        <CardDescription className="text-xs">Behavioral analysis of projected end-of-cycle positions.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <div key={insight.title} className="relative p-4 rounded-lg bg-background/50 border border-border/50 group hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-md bg-secondary/50 border border-border/50 ${insight.color}`}>
                  <insight.icon className="h-4 w-4" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{insight.title}</p>
              </div>
              <p className="text-xl font-black font-mono tracking-tighter tabular-nums mb-1">{insight.value}</p>
              <p className="text-[10px] text-muted-foreground leading-relaxed font-medium">{insight.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
