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
import { generateFraudHeatmap, GenerateFraudHeatmapOutput } from "@/ai/flows/fraud-detection-heatmaps-government";
import { AlertTriangle, Bot, Loader2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { dummyFtidData } from "@/lib/placeholder-data";
import { Skeleton } from "@/components/ui/skeleton";

export function FraudHeatmapCard() {
  const [result, setResult] = useState<GenerateFraudHeatmapOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [region, setRegion] = useState("California");
  const [ftidData, setFtidData] = useState(dummyFtidData);
  const placeholderMap = PlaceHolderImages.find(p => p.id === "fraud-heatmap");

  async function handleGenerate() {
    setIsLoading(true);
    setResult(null);
    try {
      const res = await generateFraudHeatmap({
        region,
        ftidTransactionData: ftidData,
      });
      setResult(res);
    } catch (error) {
      console.error("Error generating heatmap:", error);
    }
    setIsLoading(false);
  }

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
            {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing Data...</> : "Generate Heatmap"}
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
            Generated heatmap and AI-powered summary.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col flex-1 items-center justify-center space-y-4">
          <div className="relative aspect-[4/3] w-full bg-muted rounded-md overflow-hidden flex items-center justify-center">
            {isLoading && <Skeleton className="h-full w-full" />}
            {!isLoading && result?.heatmapDataUri && (
                <Image
                    src={result.heatmapDataUri}
                    alt="Fraud Heatmap"
                    fill
                    objectFit="cover"
                />
            )}
            {!isLoading && !result && placeholderMap && (
                 <Image
                    src={placeholderMap.imageUrl}
                    alt="Map placeholder"
                    fill
                    objectFit="cover"
                    data-ai-hint={placeholderMap.imageHint}
                />
            )}
            {!isLoading && !result && !placeholderMap && (
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <AlertTriangle className="h-8 w-8" />
                <p>No heatmap generated yet.</p>
              </div>
            )}
          </div>
          {isLoading && <Skeleton className="h-16 w-full" />}
          {result && (
            <div className="w-full p-4 rounded-lg bg-secondary/50">
              <h3 className="font-semibold text-sm flex items-center gap-2 mb-2"><Bot className="h-4 w-4 text-primary"/>AI Summary</h3>
              <p className="text-sm text-muted-foreground">{result.summary}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
