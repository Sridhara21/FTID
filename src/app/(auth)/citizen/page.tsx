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
       <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">FTID — Citizen Financial Dashboard</h1>
        <p className="text-muted-foreground text-sm font-medium tracking-wide">
          Unified Financial Control & Flow Transparency
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <Card className="lg:col-span-1 bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full border border-primary/30 mb-4">
                        <HeartPulse className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Flow Score</p>
                    <p className="text-4xl font-black font-mono tracking-tighter tabular-nums text-foreground">820</p>
                    <p className="text-xs font-bold text-green-400 mt-1 uppercase">Very Strong</p>
                  </div>
              </CardContent>
          </Card>
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map(action => <QuickAction key={action.title} {...action} />)}
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
              <IncomeExpenseChart />
              <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                        <LinkIcon className="h-4 w-4 text-primary" />
                        Institution Connectivity
                    </CardTitle>
                    <CardDescription className="text-xs">Linked financial entities status.</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                    <Table>
                        <TableHeader className="bg-secondary/20">
                            <TableRow className="h-8 hover:bg-transparent">
                                <TableHead className="text-[10px] uppercase font-bold">Institution</TableHead>
                                <TableHead className="text-[10px] uppercase font-bold">System Type</TableHead>
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
                                        <span className={`flex items-center justify-end gap-1.5 text-[10px] font-bold uppercase tracking-widest ${item.status === 'Active' ? 'text-green-400' : 'text-red-400'}`}>
                                            <span className={`h-1.5 w-1.5 rounded-full ${item.status === 'Active' ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></span>
                                            {item.status}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Card className="h-full">
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                        <AlertTriangle className="h-4 w-4 text-yellow-400" />
                        Regulatory Alert Feed
                    </CardTitle>
                    <CardDescription className="text-xs">Compliance updates & required actions.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-4">
                    {regulatoryAlerts.map(alert => (
                        <div key={alert.id} className="flex items-start gap-3 p-2 rounded-md bg-secondary/20 border border-border/30">
                            <alert.icon className={`h-3.5 w-3.5 mt-0.5 flex-shrink-0 ${alert.severity === 'High' ? 'text-red-400' : alert.severity === 'Medium' ? 'text-yellow-400' : 'text-blue-400'}`} />
                            <div className="flex-1 overflow-hidden">
                                <p className="text-xs font-bold leading-tight truncate">{alert.title}</p>
                                <p className="text-[10px] text-muted-foreground font-mono mt-0.5 uppercase tracking-tighter">Issue Date: {new Date(alert.date).toLocaleDateString()}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
            <Card className="h-full">
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                        <Lock className="h-4 w-4 text-primary" />
                        Active Consent Summary
                    </CardTitle>
                    <CardDescription className="text-xs">Entities with authorized data access.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 pt-4">
                     <TooltipProvider>
                        {activeConsents.slice(0, 4).map(consent => (
                            <Tooltip key={consent.id}>
                                <TooltipTrigger className="w-full">
                                    <div className="flex items-center justify-between p-2.5 rounded-md bg-secondary/40 border border-border/30 w-full text-left transition-colors hover:bg-secondary/60">
                                        <span className="text-xs font-bold">{consent.name}</span>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-mono">{consent.type}</span>
                                            <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                                        </div>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-xs">Purpose: {consent.purpose} | Expires: {consent.expiry}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </TooltipProvider>
                    <Button variant="outline" size="sm" className="w-full mt-2 h-8 text-[10px] uppercase font-bold tracking-widest bg-secondary/20" asChild>
                        <Link href="/citizen/consent">Manage All Consents <ArrowRightLeft className="ml-2 h-3.5 w-3.5" /></Link>
                    </Button>
                </CardContent>
            </Card>
          </div>
      </div>
    </div>
  );
}
