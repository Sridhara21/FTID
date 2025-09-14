import Link from "next/link";
import {
  Wallet,
  Bot,
  CircleGauge,
  Receipt,
  HandCoins,
  ArrowUpRight,
  ArrowDownLeft,
  PiggyBank,
  HeartPulse,
  Send,
  FileText,
  LineChart,
  Scale
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WalletCard } from "@/components/citizen/wallet-card";
import { AiAdvisorCard } from "@/components/citizen/ai-advisor-card";
import { CreditScoreCard } from "@/components/citizen/credit-score-card";
import { TaxCalculatorCard } from "@/components/citizen/tax-calculator-card";
import { SubsidyTrackerCard } from "@/components/citizen/subsidy-tracker-card";
import { IncomeExpenseChart } from "@/components/citizen/income-expense-chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table";
import { balanceSheetData } from "@/lib/placeholder-data";
import { Separator } from "@/components/ui/separator";

const summaryData = [
    {
        label: "Total Income",
        value: "₹8,40,000",
        icon: ArrowUpRight,
        color: "text-green-400"
    },
    {
        label: "Total Expenses",
        value: "₹5,60,000",
        icon: ArrowDownLeft,
        color: "text-red-400"
    },
    {
        label: "Total Investments",
        value: "₹1,20,000",
        icon: PiggyBank,
        color: "text-blue-400"
    }
]

export default function CitizenDashboard() {
  const totalAssets = balanceSheetData.assets.reduce((sum, item) => sum + item.value, 0);
  const totalLiabilities = balanceSheetData.liabilities.reduce((sum, item) => sum + item.value, 0);
  const netWorth = totalAssets - totalLiabilities;

  return (
    <div className="grid gap-6 md:gap-8">
       <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Citizen Dashboard</h1>
        <p className="text-muted-foreground">
          Your central hub for financial management and government services.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {summaryData.map(item => (
              <Card key={item.label}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">{item.label}</CardTitle>
                      <item.icon className={`h-4 w-4 ${item.color}`} />
                  </CardHeader>
                  <CardContent>
                      <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
                      <p className="text-xs text-muted-foreground">+5% from last year</p>
                  </CardContent>
              </Card>
          ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button>
            <Send className="mr-2" /> Send Money
          </Button>
          <Button variant="secondary">
            <FileText className="mr-2" /> Pay Bills
          </Button>
          <Button variant="secondary">
            <ArrowDownLeft className="mr-2" /> Request Money
          </Button>
          <Button variant="secondary">
            <PiggyBank className="mr-2" /> Invest
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 grid gap-6">
              <IncomeExpenseChart />
          </div>
          <div className="lg:col-span-1">
              <AiAdvisorCard />
          </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <WalletCard />
          <CreditScoreCard />
          <TaxCalculatorCard />
      </div>

      <SubsidyTrackerCard />

      <Card>
          <CardHeader>
              <CardTitle className="flex items-center gap-2">
                  <Scale /> Personal Balance Sheet
              </CardTitle>
              <CardDescription>A snapshot of your assets and liabilities.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                  <h3 className="text-lg font-semibold mb-2 text-green-400">Assets</h3>
                  <Table>
                      <TableHeader>
                          <TableRow>
                              <TableHead>Asset</TableHead>
                              <TableHead className="text-right">Value</TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                          {balanceSheetData.assets.map(asset => (
                              <TableRow key={asset.name}>
                                  <TableCell>{asset.name}</TableCell>
                                  <TableCell className="text-right font-mono">
                                    {asset.value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
                                  </TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                      <TableFooter>
                          <TableRow>
                              <TableHead>Total Assets</TableHead>
                              <TableHead className="text-right font-mono font-bold">
                                {totalAssets.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
                              </TableHead>
                          </TableRow>
                      </TableFooter>
                  </Table>
              </div>
              <div>
                  <h3 className="text-lg font-semibold mb-2 text-red-400">Liabilities</h3>
                  <Table>
                       <TableHeader>
                          <TableRow>
                              <TableHead>Liability</TableHead>
                              <TableHead className="text-right">Amount</TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                          {balanceSheetData.liabilities.map(liability => (
                              <TableRow key={liability.name}>
                                  <TableCell>{liability.name}</TableCell>
                                  <TableCell className="text-right font-mono">
                                    {liability.value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
                                  </TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                      <TableFooter>
                          <TableRow>
                              <TableHead>Total Liabilities</TableHead>
                              <TableHead className="text-right font-mono font-bold">
                                {totalLiabilities.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
                              </TableHead>
                          </TableRow>
                      </TableFooter>
                  </Table>
              </div>
               <div className="md:col-span-2 pt-4 border-t">
                  <div className="flex justify-between items-center text-xl font-bold">
                      <span>Net Worth</span>
                      <span className="font-mono">
                        {netWorth.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })}
                      </span>
                  </div>
              </div>
          </CardContent>
      </Card>
    </div>
  );
}
