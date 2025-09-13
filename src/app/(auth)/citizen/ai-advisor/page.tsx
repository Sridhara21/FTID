import { AiAdvisorCard } from "@/components/citizen/ai-advisor-card";
import { IncomeExpenseChart } from "@/components/citizen/income-expense-chart";

export default function AiAdvisorPage() {
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
            <div className="lg:col-span-3">
                <IncomeExpenseChart />
            </div>
            <div className="lg:col-span-2">
                <AiAdvisorCard />
            </div>
        </div>
    );
}
