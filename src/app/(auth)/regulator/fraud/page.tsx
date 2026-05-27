"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldAlert, Crosshair, Map, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AMLIntelligencePage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">AML Intelligence Layer</h1>
          <p className="text-muted-foreground">
            Layering detection and chain tracing engine.
          </p>
        </div>
        <Button variant="destructive" className="gap-2">
          <Crosshair className="h-4 w-4" /> Initialize Freeze
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="col-span-1 md:col-span-2 border-border/50 bg-secondary/10 relative overflow-hidden group min-h-[400px] flex items-center justify-center">
           <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[slide_2s_linear_infinite]"></div>
           <div className="z-10 bg-background/90 p-6 rounded-lg border border-border/50 backdrop-blur-md text-center max-w-sm">
             <Map className="h-8 w-8 text-red-500 mx-auto mb-4" />
             <h3 className="font-semibold text-lg">Money Trail Visualizer</h3>
             <p className="text-sm text-muted-foreground mt-2">Tracking 15 hops across 4 jurisdictions for Case #AML-992.</p>
           </div>
        </Card>

        <Card className="col-span-1 flex flex-col">
          <CardHeader>
            <CardTitle>Case Targets</CardTitle>
            <CardDescription>Detected entities in ring.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4">
            <div className="p-3 rounded bg-red-500/10 border border-red-500/20 text-sm">
              <span className="font-bold text-red-600">Shell Co Alpha</span>
              <p className="text-xs text-red-600/80 mt-1">₹45.2M passed in 2 hrs</p>
            </div>
            <div className="p-3 rounded bg-orange-500/10 border border-orange-500/20 text-sm">
              <span className="font-bold text-orange-600">Offshore Acct #881</span>
              <p className="text-xs text-orange-600/80 mt-1">End node recipient</p>
            </div>
            <div className="p-3 rounded bg-yellow-500/10 border border-yellow-500/20 text-sm">
              <span className="font-bold text-yellow-600">Director Node</span>
              <p className="text-xs text-yellow-600/80 mt-1">Linked to 4 other shells</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
