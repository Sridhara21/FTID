import Link from "next/link";
import {
  Landmark,
  PieChart,
  Map,
  ShieldCheck,
  Vote,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const governmentFeatures = [
    { href: "/government/gdp", icon: Landmark, label: "GDP Tracking", description: "Monitor real-time economic growth." },
    { href: "/government/revenue", icon: PieChart, label: "Revenue", description: "Analyze national tax revenue sources." },
    { href: "/government/fraud-heatmaps", icon: Map, label: "Fraud Heatmaps", description: "Identify potential financial fraud." },
    { href: "/government/subsidies", icon: ShieldCheck, label: "Subsidies", description: "Oversee subsidy distribution." },
    { href: "/government/donations", icon: Vote, label: "Donations", description: "Ensure election finance transparency." },
];

export default function GovernmentDashboard() {
  return (
    <div className="grid gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Government Dashboard</h1>
            <p className="text-muted-foreground">
                Oversee national finances and economic indicators.
            </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {governmentFeatures.map((feature) => (
          <Link key={feature.href} href={feature.href} className="group">
            <Card className="flex flex-col h-full hover:border-primary transition-colors">
              <CardHeader>
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
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
