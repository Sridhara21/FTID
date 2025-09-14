
"use client";

import Link from "next/link";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { statePerformanceData } from "@/lib/placeholder-data";
import { BarChart, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


export function StatePerformanceSnapshotCard() {
    const topGstStates = statePerformanceData.indicators
        .filter(d => d.gstJun !== null)
        .sort((a, b) => (b.gstJun ?? 0) - (a.gstJun ?? 0))
        .slice(0, 3);

    const topGsdpStates = statePerformanceData.indicators
        .filter(d => d.gsdpGrowth !== null)
        .sort((a, b) => (b.gsdpGrowth ?? 0) - (a.gsdpGrowth ?? 0))
        .slice(0, 3);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <BarChart />
                    State Performance Snapshot
                </CardTitle>
                <CardDescription>Highlights of economic performance across states.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Top GST Performers (June 2025)</h3>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>State</TableHead>
                                <TableHead className="text-right">GST (₹ Cr)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {topGstStates.map(item => (
                                <TableRow key={item.state}>
                                    <TableCell className="font-medium">{item.state}</TableCell>
                                    <TableCell className="text-right font-mono">
                                        {item.gstJun?.toLocaleString('en-IN') ?? 'N/A'}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                 <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Top GSDP Growth (FY24)</h3>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>State</TableHead>
                                <TableHead className="text-right">Growth (%)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {topGsdpStates.map(item => (
                                <TableRow key={item.state}>
                                    <TableCell className="font-medium">{item.state}</TableCell>
                                    <TableCell className="text-right font-mono">
                                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/20">
                                            {item.gsdpGrowth?.toLocaleString('en-IN')}%
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
            <CardFooter>
                <Button asChild variant="outline" className="w-full">
                    <Link href="/government/state-performance">
                        View Detailed State-by-State Analysis <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
