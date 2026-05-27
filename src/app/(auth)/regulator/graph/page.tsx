"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Network, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NationalGraphPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">National Financial Graph</h1>
        <p className="text-muted-foreground">
          Citizen-business-bank maps and shell entity clustering.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search nodes by ID, PAN, Aadhaar..." className="pl-9" />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" /> Filter Clusters
        </Button>
      </div>

      <Card className="h-[600px] flex items-center justify-center border-border/50 bg-secondary/10 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50"></div>
        <div className="z-10 flex flex-col items-center gap-4 text-center">
          <div className="p-4 rounded-full bg-primary/10 border border-primary/20 animate-pulse">
            <Network className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Graph Visualization Engine</h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto mt-2">
              The graph renderer is currently initializing. Analyzing 14M+ active nodes and computing shell entity clusters.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
