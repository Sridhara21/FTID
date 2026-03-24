import Link from "next/link";
import {
  Send,
  FileText,
  Lock,
  Link as LinkIcon,
  ArrowRightLeft,
  AlertTriangle,
  CheckCircle,
  Briefcase,
  HeartPulse,
  TrendingUp,
  TrendingDown,
  Wallet,
  PiggyBank,
  Bot,
  Info
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
import { SpendingChart } from "@/components/citizen/spending-chart";
import { PredictiveInsights } from "@/components/citizen/predictive-insights";
import { regulatoryAlerts, institutionConnectivity, consentData, flowScoreData, spendingCategoryData } from "@/lib/placeholder-data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const PrimaryMetric = ({ title, value, subtext, trend, trendDir, icon: Icon }: { title: string, value: string, subtext: string, trend?: string, trendDir?: 'up' | 'down', icon: any }) => (
  <Card className="relative overflow-hidden border-primary/20 bg-primary/5">
    <CardContent className="pt-6">
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{title}</p>
          <p className="text-3xl font-black font-mono tracking-tighter tabular-nums mt-1">{value}</p>
        </div>
        <div className="p-2.5 bg-primary/10 rounded-lg border border-primary/30">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        {trend && (
          <div className={`flex items-center gap-1 text-[10px] font-bold ${trendDir === 'up' ? 'text-green-400' : 'text-red-400'}`}>
            {trendDir === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {trend}
          </div>
        )}
        <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">{subtext}</p>
      </div>
    </CardContent>
  </Card>
);

const QuickAction = ({ href, icon: Icon, title, description }: { href: string; icon: React.ElementType; title: string; description: string }) => (
  <Link href={href} className="block group">
    <div className="p-4 bg-secondary/30 border border-border/50 rounded-lg h-full transition-all duration-200 hover:bg-primary/10 hover:border-primary/30 group-hover:scale-[1.02]">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-background rounded-md border border-border/50 shadow-sm">
          <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>
        <p className="font-bold text-sm">{title}</p>
      </div>
      <p className="text-[10px] text-muted-foreground mt-2 font-medium uppercase tracking-wider">{description}</p>
    </div>
  </Link>
);

export default function CitizenDashboard() {
  const activeConsents = consentData.flatMap(cat => cat.consents).filter(c => c.given);
  const quickActions = [
    { href: "/citizen/wallet", icon: Send, title: "CBDC Transfer", description: "Route via FTID Flow" },
    { href: "/citizen/tax", icon: FileText, title: "Tax Statement", description: "Review Pre-filled Data" },
    { href: "/citizen/consent", icon: Lock, title: "Consent Hub", description: "Authorize Access" },
    { href: "/citizen/portfolio", icon: Briefcase, title: "Investments", description: "Analyze Risk/Tax" },
  ];

  return (
    <div className="grid gap-6">
       <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">FTID — Citizen Financial Dashboard</h1>
          <p className="text-muted-foreground text-sm font-medium tracking-wide">
            Unified Financial Control & Flow Intelligence
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-secondary/40 border border-border/50 rounded-md">
            <Info className="h-3.5 w-3.5 text-primary/70" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">System Health: Secure</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-help">
                  <PrimaryMetric 
                    title="Flow Score" 
                    value={flowScoreData.score.toString()} 
                    subtext="Very Strong" 
                    trend={flowScoreData.trend} 
                    trendDir="up" 
                    icon={HeartPulse} 
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs text-[10px] border-primary/20 p-3">
                <p className="font-bold uppercase mb-1">Calculation Logic</p>
                <p className="opacity-70">Derived from income stability, monthly expense ratio, and long-term savings behavior aggregates.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <PrimaryMetric title="Total Balance" value="₹85,250" subtext="In E-Rupee Wallet" trend="+₹15k" trendDir="up" icon={Wallet} />
          <PrimaryMetric title="Monthly Savings Rate" value="28.4%" subtext="Healthy Position" trend="+1.2%" trendDir="up" icon={PiggyBank} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <IncomeExpenseChart />
                  <SpendingChart />
              </div>
              <PredictiveInsights />
          </div>
          <div className="lg:col-span-4 space-y-6">
             <Card className="h-full">
                <CardHeader className="pb-2 border-b border-border/30">
                    <CardTitle className="flex items-center gap-2 text-sm uppercase tracking-widest">
                        <ArrowRightLeft className="h-4 w-4 text-primary" /> Quick Flows
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 grid grid-cols-1 gap-4">
                   {quickActions.map(action => <QuickAction key={action.title} {...action} />)}
                </CardContent>
            </Card>

            <Card className="h-full">
                <CardHeader className="pb-2 border-b border-border/30">
                    <CardTitle className="flex items-center gap-2 text-sm uppercase tracking-widest">
                        <AlertTriangle className="h-4 w-4 text-yellow-400" /> Compliance Feed
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-4">
                    {regulatoryAlerts.map(alert => (
                        <div key={alert.id} className="flex items-start gap-3 p-3 rounded-md bg-secondary/20 border border-border/30">
                            <alert.icon className={`h-3.5 w-3.5 mt-0.5 flex-shrink-0 ${alert.severity === 'High' ? 'text-red-400' : alert.severity === 'Medium' ? 'text-yellow-400' : 'text-blue-400'}`} />
                            <div className="flex-1 overflow-hidden">
                                <p className="text-xs font-bold leading-tight truncate">{alert.title}</p>
                                <p className="text-[9px] text-muted-foreground font-mono mt-1 uppercase">Date: {new Date(alert.date).toLocaleDateString()}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
          </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
                <CardHeader className="pb-2 border-b border-border/30">
                    <CardTitle className="flex items-center gap-2 text-sm uppercase tracking-widest">
                        <LinkIcon className="h-4 w-4 text-primary" /> Institutions Connected
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                    <Table>
                        <TableHeader className="bg-secondary/20">
                            <TableRow className="h-8 hover:bg-transparent">
                                <TableHead className="text-[10px] uppercase font-bold">Institution</TableHead>
                                <TableHead className="text-[10px] uppercase font-bold">System</TableHead>
                                <TableHead className="text-right text-[10px] uppercase font-bold">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {institutionConnectivity.map(item => (
                                <TableRow key={item.id} className="h-10 hover:bg-secondary/10 border-b last:border-0">
                                    <TableCell className="py-2 text-xs font-bold flex items-center gap-2">
                                        <item.icon className="h-3.5 w-3.5 text-muted-foreground/60" />
                                        {item.name}
                                    </TableCell>
                                    <TableCell className="py-2 text-xs text-muted-foreground uppercase tracking-wider">{item.type}</TableCell>
                                    <TableCell className="py-2 text-right">
                                        <span className={`flex items-center justify-end gap-1.5 text-[9px] font-bold uppercase tracking-widest ${item.status === 'Active' ? 'text-green-400' : 'text-red-400'}`}>
                                            <span className={`h-1 w-1 rounded-full ${item.status === 'Active' ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></span>
                                            {item.status}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="pb-2 border-b border-border/30">
                    <CardTitle className="flex items-center gap-2 text-sm uppercase tracking-widest">
                        <Lock className="h-4 w-4 text-primary" /> Active 3rd Party Consents
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 pt-4">
                    {activeConsents.slice(0, 3).map(consent => (
                        <div key={consent.id} className="flex items-center justify-between p-3 rounded-md bg-secondary/40 border border-border/30 w-full text-left transition-colors hover:bg-secondary/60">
                            <span className="text-xs font-bold">{consent.name}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-[8px] uppercase tracking-widest text-muted-foreground font-mono">{consent.type}</span>
                                <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                            </div>
                        </div>
                    ))}
                    <Button variant="outline" size="sm" className="w-full mt-2 h-8 text-[10px] uppercase font-bold tracking-widest bg-secondary/20" asChild>
                        <Link href="/citizen/consent">Manage Hub Access <ArrowRightLeft className="ml-2 h-3 w-3" /></Link>
                    </Button>
                </CardContent>
            </Card>
      </div>
    </div>
  );
}
