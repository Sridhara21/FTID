import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { economicIndicatorsData } from "@/lib/placeholder-data";

export function EconomicIndicatorsCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Key Economic Indicators</CardTitle>
                <CardDescription>A high-level overview of the nation's economic health for FY 2025-26.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {economicIndicatorsData.map((indicator) => (
                        <div key={indicator.label} className="p-4 rounded-lg bg-secondary/50 flex flex-col justify-between">
                            <div className="flex items-center gap-2 mb-2">
                                <indicator.icon className="h-5 w-5 text-primary flex-shrink-0" />
                                <h3 className="text-sm font-medium text-muted-foreground">{indicator.label}</h3>
                            </div>
                            <div>
                                <p className={`text-xl font-semibold tracking-tight ${indicator.color ? indicator.color : ''}`}>
                                    {indicator.value}
                                </p>
                                <p className="text-xs text-muted-foreground">{indicator.change}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
