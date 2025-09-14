import { GdpChartCard } from "@/components/government/gdp-chart-card";
import { RevenueChartCard } from "@/components/government/revenue-chart-card";
import { SubsidyDistributionChart } from "@/components/government/subsidy-distribution-chart";
import { SubsidyOptimizationCard } from "@/components/government/subsidy-optimization-card";
import { DonationTrackerCard } from "@/components/government/donation-tracker-card";
import { LatestSchemesCard } from "@/components/government/latest-schemes-card";

export default function GovernmentDashboard() {
  return (
    <div className="grid gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Government Dashboard</h1>
            <p className="text-muted-foreground">
                Oversee national finances and economic indicators.
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <GdpChartCard />
            <RevenueChartCard />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <SubsidyDistributionChart />
            <SubsidyOptimizationCard />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <DonationTrackerCard />
            <LatestSchemesCard />
        </div>
    </div>
  );
}
