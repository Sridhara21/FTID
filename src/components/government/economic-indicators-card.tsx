"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { economicIndicatorsData } from "@/lib/placeholder-data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const TrendIcon = ({ trend }: { trend: 'up' | 'down' | 'stable' }) => {
    if (trend === 'up') return <TrendingUp className="h-3.5 w-3.5 text-green-400" />;
    if (trend === 'down') return <TrendingDown className="h-3.5 w-3.5 text-red-400" />;
    return <Minus className="h-3.5 w-3.5 text-muted-foreground" />;
}

type Indicator = typeof economicIndicatorsData[0];

const IndicatorCard = ({ indicator }: { indicator: Indicator }) => (
    <Tooltip>
        <TooltipTrigger asChild>
            <div className="p-3 rounded-md bg-secondary/30 border border-border/50 flex flex-col justify-between text-left h-full w-full hover:bg-secondary/50 transition-colors cursor-help">
                <div className="flex items-center gap-2 mb-1.5">
                    <div className="p-1.5 bg-background rounded border border-border/50">
                        <indicator.icon className="h-3.5 w-3.5 text-primary/80 flex-shrink-0" />
                    </div>
                    <h3 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground truncate">{indicator.label}</h3>
                </div>
                <div>
                    <p className={cn("text-lg font-black font-mono tracking-tighter tabular-nums", indicator.color)}>
                        {indicator.value}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                        <TrendIcon trend={indicator.trend} />
                        <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{indicator.change}</p>
                    </div>
                </div>
            </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs border-primary/20 bg-card p-3 shadow-xl" side="bottom" align="start">
            <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary">{indicator.label}</h4>
                <div className="space-y-1.5">
                  <p className="text-[10px] leading-relaxed"><span className="font-bold opacity-60 uppercase">DEFINITION:</span> {indicator.definition}</p>
                  <p className="text-[10px] leading-relaxed"><span className="font-bold opacity-60 uppercase">SOURCE:</span> {indicator.source}</p>
                  <p className="text-[10px] leading-relaxed font-bold text-accent"><span className="opacity-60 uppercase">POLICY:</span> {indicator.relevance}</p>
                </div>
                <p className="text-[9px] text-muted-foreground italic border-t border-border/50 pt-1.5 font-medium">{indicator.limitations}</p>
            </div>
        </TooltipContent>
    </Tooltip>
)


export function EconomicIndicatorsCard() {
    const groupedIndicators = economicIndicatorsData.reduce((acc, indicator) => {
        const group = indicator.group;
        if (!acc[group]) {
            acc[group] = [];
        }
        acc[group].push(indicator);
        return acc;
    }, {} as Record<string, Indicator[]>);


    return (
        <Card className="border-primary/20 bg-secondary/5">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold">Key Economic Indicators</CardTitle>
                <CardDescription className="text-xs">
                  Sovereign metrics derived from anonymized FTID flow aggregates (FY 2026-27).
                </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
                <TooltipProvider>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                        {economicIndicatorsData.map((indicator) => (
                            <IndicatorCard key={indicator.label} indicator={indicator} />
                        ))}
                    </div>
                </TooltipProvider>
            </CardContent>
        </Card>
    );
}