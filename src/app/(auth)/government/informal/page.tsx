"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Database, TrendingUp, Users } from "lucide-react";

export default function InformalEconomyPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Informal Economy Analysis</h1>
        <p className="text-muted-foreground">
          AI-driven estimation of unorganized sector activity and tax gap.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/50 bg-secondary/10 flex flex-col justify-center items-center p-6 text-center">
          <Database className="h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-3xl font-bold">18.4%</h2>
          <p className="text-sm text-muted-foreground mt-2">Estimated Informal Share of GDP</p>
          <div className="flex items-center gap-2 mt-4 text-xs text-green-500">
            <TrendingUp className="h-4 w-4" /> Down 2.1% from FY25
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Formalization Drivers</CardTitle>
            <CardDescription>Metrics tracking the transition to the formal sector.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium flex items-center gap-2"><Users className="h-4 w-4 text-blue-500"/> Digital Payments Adoption</span>
                <span className="text-blue-500">84%</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[84%]"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium flex items-center gap-2"><Database className="h-4 w-4 text-indigo-500"/> GST Registration Drive</span>
                <span className="text-indigo-500">62%</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-[62%]"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sectoral Breakdown</CardTitle>
          <CardDescription>Informal activity estimated by sector.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Agriculture', 'Construction', 'Retail Trade', 'Transport'].map((sector) => (
              <div key={sector} className="p-4 rounded-lg border border-border/50 text-center bg-secondary/5">
                <div className="text-sm font-medium text-muted-foreground mb-2">{sector}</div>
                <div className="text-xl font-bold">~{Math.floor(Math.random() * 40 + 20)}%</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
