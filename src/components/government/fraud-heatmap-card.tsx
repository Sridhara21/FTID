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
  const [region, setRegion] = useState("California");
  const [ftidData, setFtidData] = useState(dummyFtidData);

  async function handleGenerate() {
    setIsLoading(true);
    setResult(null);
    try {
      const res = await analyzeFraudData({
        region,
        ftidTransactionData: ftidData,
      });
      setResult(res);
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
      <Card>
        <CardHeader>
          <CardTitle>Analysis Controls</CardTitle>
          <CardDescription>
            Input your data and region to generate a fraud analysis.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="region">Geographical Region</Label>
            <Input 
              id="region" 
              value={region} 
              onChange={(e) => setRegion(e.target.value)} 
              placeholder="e.g., California" 
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ftidData">FTID Transaction Data (JSON)</Label>
            <Textarea
              id="ftidData"
              value={ftidData}
              onChange={(e) => setFtidData(e.target.value)}
              placeholder="Paste your JSON data here..."
              className="h-64 font-mono text-xs"
              disabled={isLoading}
            />
          </div>
          <Button onClick={handleGenerate} disabled={isLoading} className="w-full">
            {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing Data...</> : "Analyze Transactions"}
          </Button>
        </CardContent>
      </Card>

      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-primary" />
            Fraud Analysis Result
          </CardTitle>
          <CardDescription>
            Generated analysis and AI-powered summary.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col flex-1 space-y-4">
          {isLoading && (
              <div className="space-y-4">
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-40 w-full" />
                  <Skeleton className="h-16 w-full" />
              </div>
          )}
          {!isLoading && !result && (
              <div className="flex flex-col flex-1 items-center justify-center gap-2 text-muted-foreground bg-muted rounded-md">
                <AlertTriangle className="h-8 w-8" />
                <p>No analysis generated yet.</p>
              </div>
          )}
          {result && (
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <p className="text-sm text-muted-foreground">Region</p>
                        <p className="text-lg font-bold">{result.region}</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Transactions Analyzed</p>
                        <p className="text-lg font-bold">{result.totalTransactionsAnalyzed}</p>
                    </div>
                     <div>
                        <p className="text-sm text-muted-foreground">Suspicious</p>
                        <p className="text-lg font-bold text-destructive">{result.suspiciousTransactionCount}</p>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-sm mb-2">Identified Hotspots</h3>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Location</TableHead>
                                <TableHead>Risk Level</TableHead>
                                <TableHead>Reason</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {result.hotspots.map((hotspot, index) => (
                                <TableRow key={index}>
                                    <TableCell>{hotspot.location}</TableCell>
                                    <TableCell>
                                        <Badge variant={getRiskBadgeVariant(hotspot.riskLevel)}>
                                            {hotspot.riskLevel}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{hotspot.reason}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                
                <div className="w-full p-4 rounded-lg bg-secondary/50">
                  <h3 className="font-semibold text-sm flex items-center gap-2 mb-2"><Bot className="h-4 w-4 text-primary"/>AI Summary & Recommendations</h3>
                  <p className="text-sm text-muted-foreground">{result.summary}</p>
                </div>
              </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
