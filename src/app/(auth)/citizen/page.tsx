
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
  Scale,
  Landmark,
  Building,
  Briefcase,
  AlertTriangle,
  Info,
  CheckCircle,
  Lock,
  Badge,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { IncomeExpenseChart } from "@/components/citizen/income-expense-chart";
import { regulatoryAlerts, institutionConnectivity, consentData } from "@/lib/placeholder-data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const QuickAction = ({ href, icon: Icon, title, description }: { href: string; icon: React.ElementType; title: string; description: string }) => (
  <Link href={href} className="block group">
    <div className="p-4 bg-secondary/50 rounded-lg h-full transition-all duration-200 group-hover:bg-primary/10 group-hover:scale-105 group-hover:shadow-lg">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-background rounded-md">
          <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>
        <p className="font-semibold">{title}</p>
      </div>
      <p className="text-xs text-muted-foreground mt-2">{description}</p>
    </div>
  </Link>
);

const RegulatoryAlertsCard = () => (
    <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="text-yellow-400" />
                Regulatory Alert Feed
            </CardTitle>
            <CardDescription>Important updates and required actions from regulatory bodies.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
            {regulatoryAlerts.map(alert => (
                <div key={alert.id} className="flex items-start gap-3">
                    <alert.icon className={`h-4 w-4 mt-1 flex-shrink-0 ${alert.severity === 'High' ? 'text-red-400' : alert.severity === 'Medium' ? 'text-yellow-400' : 'text-blue-400'}`} />
                    <div>
                        <p className="text-sm font-medium">{alert.title}</p>
                        <p className="text-xs text-muted-foreground">{new Date(alert.date).toLocaleDateString()}</p>
                    </div>
                </div>
            ))}
        </CardContent>
    </Card>
);

const InstitutionConnectivityCard = () => (
    <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Link />
                Institution Connectivity
            </CardTitle>
            <CardDescription>Status of financial institutions linked to your FTID.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Institution</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {institutionConnectivity.map(item => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium flex items-center gap-2">
                                <item.icon className="h-4 w-4 text-muted-foreground" />
                                {item.name}
                            </TableCell>
                            <TableCell>{item.type}</TableCell>
                            <TableCell className="text-right">
                                <span className={`flex items-center justify-end gap-1.5 text-sm ${item.status === 'Active' ? 'text-green-400' : 'text-red-400'}`}>
                                    <span className={`h-2 w-2 rounded-full ${item.status === 'Active' ? 'bg-green-400' : 'bg-red-400'}`}></span>
                                    {item.status}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const ActiveConsentSummaryCard = () => {
    const activeConsents = consentData.flatMap(cat => cat.consents).filter(c => c.given);
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Lock />
                    Active Consent Summary
                </CardTitle>
                <CardDescription>A quick look at which institutions have access to your data.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                 <TooltipProvider>
                    {activeConsents.slice(0, 4).map(consent => (
                        <Tooltip key={consent.id}>
                            <TooltipTrigger className="w-full">
                                <div className="flex items-center justify-between p-2 rounded-md bg-secondary/50 w-full text-left">
                                    <span className="text-sm font-medium">{consent.name}</span>
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Purpose: {consent.purpose} | Type: {consent.type}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </TooltipProvider>
                <Button variant="outline" className="w-full mt-2" asChild>
                    <Link href="/citizen/consent">Manage All Consents <ArrowRightLeft className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardContent>
        </Card>
    );
};

export default function CitizenDashboard() {
  const quickActions = [
    { href: "/citizen/wallet", icon: Send, title: "CBDC Transfer", description: "Route funds via FTID." },
    { href: "/citizen/tax", icon: FileText, title: "View Tax Statement", description: "Review pre-filled data." },
    { href: "/citizen/consent", icon: Lock, title: "Manage Consents", description: "Control data access." },
    { href: "/citizen/portfolio", icon: PiggyBank, title: "Analyze Investments", description: "Check compliance." },
  ];

  return (
    <div className="grid gap-6 md:gap-8">
       <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">FTID Control Center</h1>
        <p className="text-muted-foreground">
          Your central hub for overseeing financial data flows and system integrity.
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Core FTID system interactions.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map(action => <QuickAction key={action.title} {...action} />)}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 grid gap-6">
              <IncomeExpenseChart />
              <InstitutionConnectivityCard />
          </div>
          <div className="lg:col-span-1 grid gap-6">
              <RegulatoryAlertsCard />
              <ActiveConsentSummaryCard />
          </div>
      </div>
    </div>
  );
}
