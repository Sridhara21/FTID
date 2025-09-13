"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
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
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-primary" />
          Fraud Detection Heatmaps
        </CardTitle>
        <CardDescription>
          AI-powered analysis of potential fraud hotspots.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <div className="relative aspect-[4/3] w-full bg-muted rounded-md overflow-hidden flex items-center justify-center">
            {isLoading && <Skeleton className="h-full w-full" />}
            {!isLoading && result?.heatmapDataUri && (
                <Image
                    src={result.heatmapDataUri}
                    alt="Fraud Heatmap"
                    layout="fill"
                    objectFit="cover"
                />
            )}
            {!isLoading && !result && placeholderMap && (
                 <Image
                    src={placeholderMap.imageUrl}
                    alt="Map placeholder"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={placeholderMap.imageHint}
                />
            )}
        </div>
        <div className="space-y-2">
            <Label htmlFor="region">Geographical Region</Label>
            <Input id="region" value={region} onChange={(e) => setRegion(e.target.value)} placeholder="e.g., California" />
        </div>
         <Button onClick={handleGenerate} disabled={isLoading} className="w-full">
          {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing Data...</> : "Generate Heatmap"}
        </Button>
      </CardContent>
       {result && (
        <CardFooter className="flex-col items-start gap-2 border-t pt-4">
            <h3 className="font-semibold text-sm flex items-center gap-2"><Bot className="h-4 w-4"/>AI Summary</h3>
            <p className="text-sm text-muted-foreground">{result.summary}</p>
        </CardFooter>
      )}
    </Card>
  );
}
