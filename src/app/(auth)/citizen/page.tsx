import Link from "next/link";
import {
  Wallet,
  Bot,
  CircleGauge,
  Receipt,
  HandCoins,
  ArrowUpRight,
  ArrowDownLeft,
  PiggyBank
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const citizenFeatures = [
  {
    href: "/citizen/wallet",
    icon: Wallet,
    label: "FTID Wallet",
    description: "View your balance and transaction history.",
  },
  {
    href: "/citizen/ai-advisor",
    icon: Bot,
    label: "AI Advisor",
    description: "Get personalized financial advice.",
  },
  {
    href: "/citizen/credit-score",
    icon: CircleGauge,
    label: "Credit Score",
    description: "Monitor and improve your credit health.",
  },
  {
    href: "/citizen/tax",
    icon: Receipt,
    label: "Auto-Tax",
    description: "Calculate your estimated taxes.",
  },
  {
    href: "/citizen/subsidies",
    icon: HandCoins,
    label: "Subsidies",
    description: "Track your government benefits.",
  },
];

const summaryData = [
    {
        label: "Total Income",
        value: "₹8,40,000",
        icon: ArrowUpRight,
        color: "text-green-600"
    },
    {
        label: "Total Expenses",
        value: "₹5,60,000",
        icon: ArrowDownLeft,
        color: "text-red-600"
    },
    {
        label: "Total Investments",
        value: "₹1,20,000",
        icon: PiggyBank,
        color: "text-blue-600"
    }
]

export default function CitizenDashboard() {
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
                      <item.icon className={`h-4 w-4 text-muted-foreground ${item.color}`} />
                  </CardHeader>
                  <CardContent>
                      <div className="text-2xl font-bold">{item.value}</div>
                      <p className="text-xs text-muted-foreground">+5% from last year</p>
                  </CardContent>
              </Card>
          ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {citizenFeatures.map((feature) => (
          <Link key={feature.href} href={feature.href} className="group">
            <Card className="flex flex-col h-full hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary rounded-lg border border-primary/20 group-hover:bg-primary/90 transition-colors">
                        <feature.icon className="h-6 w-6 text-primary-foreground transition-colors" />
                    </div>
                    <div>
                        <CardTitle>{feature.label}</CardTitle>
                        <CardDescription className="mt-1">{feature.description}</CardDescription>
                    </div>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
