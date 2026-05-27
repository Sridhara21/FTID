"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, Globe } from "lucide-react";

export default function SystemicRiskPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Systemic Risk Observatory</h1>
        <p className="text-muted-foreground">
          Contagion analysis and macro-financial stability monitoring.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="h-[400px] flex items-center justify-center border-border/50 bg-secondary/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-background to-background opacity-50"></div>
          <div className="z-10 flex flex-col items-center gap-4 text-center">
            <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/20 animate-[spin_10s_linear_infinite]">
              <Globe className="h-10 w-10 text-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Global Contagion Map</h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto mt-2">
                Simulating cross-border risk propagation.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Risk Drivers</CardTitle>
            <CardDescription>Factors contributing to systemic fragility.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Real Estate Exposure</span>
                  <span className="text-orange-500">High (78%)</span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 w-[78%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Shadow Banking Interconnectedness</span>
                  <span className="text-red-500">Critical (92%)</span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[92%] animate-pulse"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Sovereign Debt Yield Spreads</span>
                  <span className="text-green-500">Stable (24%)</span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[24%]"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
