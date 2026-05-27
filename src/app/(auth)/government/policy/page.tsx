"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart, Play, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PolicySimulationPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Policy Simulation Hub</h1>
          <p className="text-muted-foreground">
            Test macroeconomic changes and visualize economic impact before deployment.
          </p>
        </div>
        <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700">
          <Play className="h-4 w-4" /> Run Simulation
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Simulation Parameters</CardTitle>
            <CardDescription>Adjust GST and Interest Rates.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Standard GST Slab (%)</label>
              <div className="flex items-center gap-2">
                <Input type="number" defaultValue="18" className="w-20" />
                <span className="text-muted-foreground text-xs">Current: 18%</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Policy Repo Rate (%)</label>
              <div className="flex items-center gap-2">
                <Input type="number" defaultValue="6.5" step="0.25" className="w-20" />
                <span className="text-muted-foreground text-xs">Current: 6.5%</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Corporate Tax (%)</label>
              <div className="flex items-center gap-2">
                <Input type="number" defaultValue="25" className="w-20" />
                <span className="text-muted-foreground text-xs">Current: 25%</span>
              </div>
            </div>
            <Button variant="outline" className="w-full gap-2 mt-4">
              <Settings2 className="h-4 w-4" /> Advanced Settings
            </Button>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2 border-border/50 bg-secondary/10 flex flex-col justify-center items-center relative overflow-hidden min-h-[300px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-background to-background"></div>
          <div className="z-10 flex flex-col items-center text-center">
            <LineChart className="h-12 w-12 text-indigo-500 mb-4" />
            <h3 className="text-lg font-bold">Awaiting Parameters</h3>
            <p className="text-sm text-muted-foreground max-w-sm mt-2">
              Enter your policy variables on the left and click "Run Simulation" to generate the 5-year macro forecast.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
