import { WalletCard } from "@/components/citizen/wallet-card";
import { CreditScoreCard } from "@/components/citizen/credit-score-card";
import { IncomeExpenseChart } from "@/components/citizen/income-expense-chart";
import { AiAdvisorCard } from "@/components/citizen/ai-advisor-card";
import { TaxCalculatorCard } from "@/components/citizen/tax-calculator-card";
import { SubsidyTrackerCard } from "@/components/citizen/subsidy-tracker-card";

export default function CitizenDashboard() {
  return (
    <div className="grid gap-6 md:gap-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        <div id="ftid-wallet">
          <WalletCard />
        </div>
        <div id="credit-score">
          <CreditScoreCard />
        </div>
        <div id="auto-tax">
          <TaxCalculatorCard />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
        <div className="lg:col-span-3">
          <IncomeExpenseChart />
        </div>
        <div className="lg:col-span-2" id="ai-advisor">
          <AiAdvisorCard />
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:gap-8" id="subsidies">
        <SubsidyTrackerCard />
      </div>
    </div>
  );
}
