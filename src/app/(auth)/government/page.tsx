import { GdpChartCard } from "@/components/government/gdp-chart-card";
import { FraudHeatmapCard } from "@/components/government/fraud-heatmap-card";
import { RevenueChartCard } from "@/components/government/revenue-chart-card";
import { SubsidyDistributionChart } from "@/components/government/subsidy-distribution-chart";
import { DonationTrackerCard } from "@/components/government/donation-tracker-card";

export default function GovernmentDashboard() {
  return (
    <div className="grid gap-6 md:gap-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
        <div className="lg:col-span-3" id="gdp-tracking">
            <GdpChartCard />
        </div>
        <div className="lg:col-span-2" id="fraud-heatmaps">
            <FraudHeatmapCard />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
        <div className="lg:col-span-3" id="revenue">
          <RevenueChartCard />
        </div>
        <div className="lg:col-span-2" id="subsidies">
          <SubsidyDistributionChart />
        </div>
      </div>
      <div id="donations">
        <DonationTrackerCard />
      </div>
    </div>
  );
}
