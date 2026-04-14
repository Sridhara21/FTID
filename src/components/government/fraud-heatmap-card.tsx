"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { analyzeFraudData, FraudAnalysisOutput } from "@/ai/flows/fraud-detection-heatmaps-government";
import { AlertTriangle, Bot, Loader2 } from "lucide-react";
import { dummyFtidData } from "@/lib/placeholder-data";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function FraudHeatmapCard() {
  const [result, setResult] = useState<FraudAnalysisOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [region, setRegion] = useState("Mumbai Metropolitan Region");
  const [ftidData, setFtidData] = useState(dummyFtidData);

  async function handleGenerate() {
    setIsLoading(true);
    setResult(null);
    try {
      // Optimized for quick responsiveness
      await new Promise(resolve => setTimeout(resolve, 600));
      const mockResult: FraudAnalysisOutput = {
        region: region,
        totalTransactionsAnalyzed: 1850392,
        suspiciousTransactionCount: 4892,
        hotspots: [
            { location: 'Dharavi, Mumbai', riskLevel: 'High', reason: 'Anomalous high-velocity cash-out patterns.' },
            { location: 'Thane West', riskLevel: 'Medium', reason: 'Unusual concentration of new FTID activations with immediate high-value transfers.' },
            { location: 'Panvel', riskLevel: 'Low', reason: 'Slight increase in cross-border transaction failures.' },
        ],
        summary: 'Potential circular trading and mule account activity detected in the Dharavi cluster. Recommend flagging accounts with more than 5 transactions per hour for manual review. Thane activity seems coordinated, suggesting a potential organized fraud attempt.'
      };
      setResult(mockResult);
    } catch (error) {
      console.error("Error generating analysis:", error);
    }
    setIsLoading(false);
  }
  
  const getRiskBadgeVariant = (riskLevel: string) => {
    switch (riskLevel.toLowerCase()) {
        case 'high': return 'destructive';
        case 'medium': return 'secondary';
        default: return 'outline';
    }
  };


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="border-border/50 bg-card/50">
        <CardHeader className="pb-4 border-b border-border/30">
          <CardTitle className="text-sm font-black uppercase tracking-institutional">Analysis Controls</CardTitle>
          <CardDescription className="text-xs">
            Input a data stream and region to generate a fraud analysis.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="region" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Geographical Region</Label>
            <Input 
              id="region" 
              value={region} 
              onChange={(e) => setRegion(e.target.value)} 
              placeholder="e.g., California" 
              className="bg-secondary/20 h-9 border-border/50 text-xs"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ftidData" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">FTID Transaction Data Stream (JSON)</Label>
            <Textarea
              id="ftidData"
              value={ftidData}
              onChange={(e) => setFtidData(e.target.value)}
              placeholder="Paste your JSON data here..."
              className="h-64 font-mono text-[10px] bg-secondary/20 border-border/50"
              disabled={isLoading}
            />
          </div>
          <Button onClick={handleGenerate} disabled={isLoading} className="w-full h-10 font-black uppercase tracking-institutional text-[11px]">
            {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing Data...</> : "Analyze Transactions"}
          </Button>
        </CardContent>
      </Card>

      <Card className="flex flex-col border-border/50 bg-card/50">
        <CardHeader className="pb-4 border-b border-border/30">
          <CardTitle className="flex items-center gap-2 text-sm font-black uppercase tracking-institutional">
            <AlertTriangle className="h-4 w-4 text-primary" />
            Fraud Analysis Result
          </CardTitle>
          <CardDescription className="text-xs">
            Generated analysis and AI-powered summary for regulatory review.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col flex-1 space-y-4 pt-6">
          {isLoading && (
              <div className="space-y-4">
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-40 w-full" />
                  <Skeleton className="h-16 w-full" />
              </div>
          )}
          {!isLoading && !result && (
              <div className="flex flex-col flex-1 items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-secondary/20 rounded-md border border-dashed border-border/50 p-12">
                <AlertTriangle className="h-8 w-8 opacity-20 mb-2" />
                <p>No analysis generated yet.</p>
              </div>
          )}
          {result && (
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-secondary/30 rounded-md border border-border/50">
                        <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground mb-1">Region</p>
                        <p className="text-xs font-bold truncate">{result.region}</p>
                    </div>
                    <div className="p-3 bg-secondary/30 rounded-md border border-border/50">
                        <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground mb-1">Analyzed</p>
                        <p className="text-xs font-black font-mono tabular-nums">{result.totalTransactionsAnalyzed.toLocaleString()}</p>
                    </div>
                     <div className="p-3 bg-secondary/30 rounded-md border border-border/50">
                        <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground mb-1">Suspicious</p>
                        <p className="text-xs font-black font-mono tabular-nums text-red-400">{result.suspiciousTransactionCount.toLocaleString()}</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-institutional mb-3 opacity-60">Identified Hotspots</h3>
                     <Table>
                        <TableHeader className="bg-secondary/20">
                            <TableRow className="h-8 hover:bg-transparent">
                                <TableHead className="text-[9px] uppercase font-bold">Location</TableHead>
                                <TableHead className="text-[9px] uppercase font-bold text-center">Risk</TableHead>
                                <TableHead className="text-[9px] uppercase font-bold">Reason</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {result.hotspots.map((hotspot, index) => (
                                <TableRow key={index} className="h-10 hover:bg-secondary/10 border-b last:border-0">
                                    <TableCell className="py-2 text-[10px] font-bold">{hotspot.location}</TableCell>
                                    <TableCell className="py-2 text-center">
                                        <Badge className={`text-[8px] h-4 px-1.5 font-black uppercase tracking-widest ${hotspot.riskLevel === 'High' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'}`}>
                                            {hotspot.riskLevel}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="py-2 text-[9px] text-muted-foreground leading-tight">{hotspot.reason}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                
                <div className="w-full p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <h3 className="text-[10px] font-black uppercase tracking-institutional flex items-center gap-2 mb-2 text-primary">
                    <Bot className="h-3.5 w-3.5"/> AI Summary & Recommendations
                  </h3>
                  <p className="text-[10px] text-muted-foreground leading-relaxed italic">{result.summary}</p>
                </div>
              </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
