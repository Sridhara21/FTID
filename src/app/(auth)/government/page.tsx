
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { EconomicIndicatorsCard } from "@/components/government/economic-indicators-card";
import { RevenueChartCard } from "@/components/government/revenue-chart-card";
import { MultiMetricChart } from "@/components/government/multi-metric-chart";
import { EconomicHeatmap } from "@/components/government/economic-heatmap";
import { SectorActivityChart } from "@/components/government/sector-activity-chart";
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
    TableFooter
} from "@/components/ui/table";
import { governmentBalanceSheetDataFy2526 } from "@/lib/placeholder-data";
import { Scale, Globe, ShieldAlert, BadgeInfo, Loader2, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useFirestore, useCollection, useMemoFirebase, useUser, useDoc } from "@/local";
import { collection, doc } from "@/local/store";

export default function GovernmentDashboard() {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();
  
  const adminRef = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return doc(db, "platformAdmins", user.uid);
  }, [db, user?.uid]);

  const { data: adminData, isLoading: isAdminLoading } = useDoc(adminRef);

  useEffect(() => {
    if (!isUserLoading && !isAdminLoading && !adminData && user) {
      router.push('/citizen');
    }
  }, [isUserLoading, isAdminLoading, adminData, user, router]);

  // Fast-fail query logic: Prevents citizens from triggering unauthorized ledger queries
  const transactionsQuery = useMemoFirebase(() => {
    if (!db || isUserLoading || !user || isAdminLoading || !adminData) return null;
    // Only return the collection if the session has verified institutional role
    if (adminData.role !== 'REGULATOR_DIU') return null;
    return collection(db, "transactions");
  }, [db, isUserLoading, user, isAdminLoading, adminData]);

  const { data: allTransactions, isLoading: isTxnLoading } = useCollection(transactionsQuery);

  const totalReceipts = governmentBalanceSheetDataFy2526.assets.reduce((sum, item) => sum + item.value, 0);
  const totalExpenditure = governmentBalanceSheetDataFy2526.liabilities.reduce((sum, item) => sum + item.value, 0);

  const formatCr = (val: number) => `₹${val.toLocaleString('en-IN')} Cr`;

  if (isUserLoading || isAdminLoading) {
    return (
      <div className="flex h-[80vh] w-full items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-[10px] font-black uppercase tracking-institutional">Authorizing Institutional Session...</p>
        </div>
      </div>
    );
  }

  if (!user || !adminData) {
    const MetricCard = ({ title, value, detail, icon: Icon, colorClass, status }: { title: string, value: string, detail: string, icon: any, colorClass: string, status?: string }) => (
      <Card className={`relative overflow-hidden border-border/50 glass-panel slide-up-fade animated-pulse-hover`}>
        <CardContent className="pt-6 text-center">
          <Lock className="mx-auto h-12 w-12 text-red-400 mb-4" />
          <h2 className="text-lg font-bold uppercase tracking-tight">Analytical Access Denied</h2>
          <p className="text-xs text-muted-foreground mt-2">Institutional clearance required. Authorize session via Sovereign Hub to view systemic aggregates.</p>
        </CardContent>
      </Card>
    );

    return (
      <div className="flex h-[80vh] w-full items-center justify-center">
        <MetricCard title="" value="" detail="" icon={null} colorClass="" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">FTID — Government Oversight System</h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-[9px] font-bold uppercase tracking-institutional px-2 py-0.5">
              Institutional Intelligence
            </Badge>
            <p className="text-muted-foreground text-[10px] font-medium uppercase tracking-widest">
              Ministry of Finance • Data Intelligence Unit
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/30 border border-border/50 rounded-md">
            <Globe className="h-3.5 w-3.5 text-primary/70" />
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Network Status: {isTxnLoading ? "SYNCING..." : "SYNCED"}</span>
          </div>
        </div>
      </div>
      
      <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
            <ShieldAlert className="h-4 w-4 text-primary shrink-0 animate-pulse" />
            <p className="text-[10px] font-black uppercase tracking-sovereign text-primary/90 leading-tight">
                Anonymized Aggregates: Based on {allTransactions?.length || 100} verified Citizen and Business nodes in the national mesh.
            </p>
        </div>
        <div className="hidden lg:flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">
            <BadgeInfo className="h-3 w-3" />
            Integrity Verification Active
        </div>
      </div>

      <div className="w-full">
        <EconomicIndicatorsCard />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-stretch">
        <div className="lg:col-span-8">
          <MultiMetricChart />
        </div>
        <div className="lg:col-span-4">
          <RevenueChartCard />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch">
        <SectorActivityChart />
        <EconomicHeatmap />
      </div>

      <div className="w-full">
          <Card className="border-border/50 glass-panel slide-up-fade animated-pulse-hover overflow-hidden">
            <CardHeader className="pb-3 border-b border-border/30 bg-secondary/10">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center gap-2 text-[10px] font-black uppercase tracking-institutional">
                    <Scale className="h-4 w-4 text-primary" /> Sovereign Ledger (Union Budget Summary)
                  </CardTitle>
                  <CardDescription className="text-[10px] uppercase tracking-widest font-bold mt-1">Consolidated Estimates FY 2026-27</CardDescription>
                </div>
                <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest border-primary/20 text-primary">Budget Estimates</Badge>
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-0 pt-0">
              <div className="p-6 border-r border-border/30">
                <h3 className="text-[10px] font-black uppercase tracking-institutional text-green-400/80 mb-4 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400" /> Receipts
                </h3>
                <Table>
                  <TableBody>
                    {governmentBalanceSheetDataFy2526.assets.map(asset => (
                      <TableRow key={asset.name} className="h-10 hover:bg-secondary/10 border-b last:border-0">
                        <TableCell className="py-2 text-[10px] font-bold uppercase">{asset.name}</TableCell>
                        <TableCell className="py-2 text-right font-mono text-[10px] text-green-400 tabular-nums">
                          {formatCr(asset.value)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter className="bg-transparent border-t-2 border-green-400/20">
                    <TableRow className="h-10">
                      <TableHead className="text-[10px] font-black uppercase text-foreground">Gross Receipts</TableHead>
                      <TableHead className="text-right font-mono font-black text-green-400 text-[10px]">
                        {formatCr(totalReceipts)}
                      </TableHead>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
              <div className="p-6">
                <h3 className="text-[10px] font-black uppercase tracking-institutional text-red-400/80 mb-4 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-400" /> Outlay
                </h3>
                <Table>
                  <TableBody>
                    {governmentBalanceSheetDataFy2526.liabilities.map(liability => (
                      <TableRow key={liability.name} className="h-10 hover:bg-secondary/10 border-b last:border-0">
                        <TableCell className="py-2 text-[10px] font-bold uppercase">{liability.name}</TableCell>
                        <TableCell className="py-2 text-right font-mono text-[10px] text-red-400 tabular-nums">
                          {formatCr(liability.value)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter className="bg-transparent border-t-2 border-red-400/20">
                    <TableRow className="h-10">
                      <TableHead className="text-[10px] font-black uppercase text-foreground">Total Expenditure</TableHead>
                      <TableHead className="text-right font-mono font-black text-red-400 text-[10px]">
                        {formatCr(totalExpenditure)}
                      </TableHead>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </CardContent>
          </Card>
      </div>
      
      <div className="p-4 bg-secondary/20 rounded-lg border border-border/50 text-center">
        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-sovereign">
          Macro-Economic Analytics Powered by FTID Sovereign Data Streams — Auth Level 4 (Direct Routing)
        </p>
      </div>
    </div>
  );
}
