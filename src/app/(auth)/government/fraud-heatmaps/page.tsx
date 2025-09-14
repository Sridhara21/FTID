import { FraudHeatmapCard } from "@/components/government/fraud-heatmap-card";

export default function FraudHeatmapsPage() {
    return (
        <div className="flex flex-col gap-6">
             <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">AI-Powered Fraud Detection</h1>
                <p className="text-muted-foreground">
                    Analyze transaction data to identify and visualize potential fraud hotspots.
                </p>
            </div>
            <FraudHeatmapCard />
        </div>
    );
}
