import { GdpChartCard } from "@/components/government/gdp-chart-card";
import { FraudHeatmapCard } from "@/components/government/fraud-heatmap-card";
import { RevenueChartCard } from "@/components/government/revenue-chart-card";
import { SubsidyDistributionChart } from "@/components/government/subsidy-distribution-chart";
import { DonationTrackerCard } from "@/components/government/donation-tracker-card";

export default function GovernmentDashboard() {
  return (
    <div className="grid gap-6 md:gap-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
        <div className="lg:col-span-3">
            <GdpChartCard />
        </div>
        <div className="lg:col-span-2">
            <FraudHeatmapCard />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
        <div className="lg:col-span-3">
          <RevenueChartCard />
        </div>
        <div className="lg:col-span-2">
          <SubsidyDistributionChart />
        </div>
      </div>
      <div>
        <DonationTrackerCard />
      </div>
    </div>
  );
}
