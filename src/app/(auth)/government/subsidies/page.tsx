import { SubsidyDistributionChart } from "@/components/government/subsidy-distribution-chart";
import { SubsidyOptimizationCard } from "@/components/government/subsidy-optimization-card";

export default function SubsidiesPage() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SubsidyDistributionChart />
            <SubsidyOptimizationCard />
        </div>
    );
}
