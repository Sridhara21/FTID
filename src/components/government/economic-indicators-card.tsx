
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
    if (trend === 'up') return <TrendingUp className="h-4 w-4 text-green-400" />;
    if (trend === 'down') return <TrendingDown className="h-4 w-4 text-red-400" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
}

type Indicator = typeof economicIndicatorsData[0];

const IndicatorCard = ({ indicator }: { indicator: Indicator }) => (
    <Tooltip>
        <TooltipTrigger asChild>
            <div className="p-4 rounded-lg bg-secondary/50 flex flex-col justify-between text-left h-full w-full hover:bg-secondary transition-colors">
                <div className="flex items-center gap-2 mb-2">
                    <indicator.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <h3 className="text-sm font-medium text-muted-foreground">{indicator.label}</h3>
                </div>
                <div>
                    <p className={cn("text-xl font-semibold tracking-tight", indicator.color)}>
                        {indicator.value}
                    </p>
                    <div className="flex items-center gap-1">
                        <TrendIcon trend={indicator.trend} />
                        <p className="text-xs text-muted-foreground">{indicator.change}</p>
                    </div>
                </div>
            </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs" side="bottom" align="start">
            <div className="space-y-2 p-2">
                <h4 className="font-bold">{indicator.label}</h4>
                <p><span className="font-semibold">Definition:</span> {indicator.definition}</p>
                <p><span className="font-semibold">Source:</span> {indicator.source}</p>
                <p><span className="font-semibold">Policy Relevance:</span> {indicator.relevance}</p>
                <p className="text-xs text-muted-foreground"><span className="font-semibold">Limitations:</span> {indicator.limitations}</p>
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
        <Card>
            <CardHeader>
                <CardTitle>Key Economic Indicators</CardTitle>
                <CardDescription>Indicative metrics derived from anonymized FTID transaction aggregates. Not a substitute for official statistics.</CardDescription>
            </CardHeader>
            <CardContent>
                <TooltipProvider>
                    <div className="space-y-6">
                        {Object.entries(groupedIndicators).map(([groupName, indicators]) => (
                            <div key={groupName}>
                                <h3 className="text-base font-semibold mb-3 text-primary">{groupName}</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                     {indicators.map((indicator) => (
                                        <IndicatorCard key={indicator.label} indicator={indicator} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </TooltipProvider>
            </CardContent>
        </Card>
    );
}
