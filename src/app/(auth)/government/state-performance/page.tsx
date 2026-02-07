
"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";
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
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { statePerformanceData } from "@/lib/placeholder-data";
import { BarChart as BarChartIcon, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const chartConfig = {
  gstJun: {
    label: "June 2025 GST (₹ Cr)",
    color: "hsl(var(--chart-1))",
  },
};

const chartData = statePerformanceData.indicators
  .filter(d => d.gstJun !== null)
  .sort((a, b) => (b.gstJun ?? 0) - (a.gstJun ?? 0));

export default function StatePerformancePage() {
    return (
        <div className="grid gap-6 md:gap-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">State Performance Dashboard</h1>
                <p className="text-muted-foreground">
                    Comparative analysis of economic indicators across Indian states and UTs.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <TrendingUp />
                        State-Level Economic Indicators
                    </CardTitle>
                    <CardDescription>Key economic metrics for various states and UTs.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>State / UT</TableHead>
                                <TableHead className="text-right">GST Collection FY 2024-25 (₹ Cr)</TableHead>
                                <TableHead className="text-right">GST Collection June 2025 (₹ Cr)</TableHead>
                                <TableHead className="text-right">Per Capita Income (₹)</TableHead>
                                <TableHead className="text-right">GSDP Growth FY24 (%)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {statePerformanceData.indicators.map(item => (
                                <TableRow key={item.state}>
                                    <TableCell className="font-medium">{item.state}</TableCell>
                                    <TableCell className="text-right font-mono">
                                        {item.gstFy ? `₹${item.gstFy.toLocaleString('en-IN')} Cr` : 'N/A'}
                                    </TableCell>
                                    <TableCell className="text-right font-mono">
                                        {item.gstJun ? `₹${item.gstJun.toLocaleString('en-IN')} Cr` : 'N/A'}
                                    </TableCell>
                                    <TableCell className="text-right font-mono">
                                        {item.perCapita ? `₹${item.perCapita.toLocaleString('en-IN')}` : 'N/A'}
                                    </TableCell>
                                    <TableCell className="text-right font-mono">
                                        {item.gsdpGrowth ? `${item.gsdpGrowth.toLocaleString('en-IN')}%` : 'N/A'}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChartIcon />
                            GST Collection - June 2025
                        </CardTitle>
                        <CardDescription>Comparison of Goods and Services Tax collection for June 2025.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="h-[400px] w-full">
                            <ResponsiveContainer>
                                <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 20 }}>
                                <CartesianGrid horizontal={false} />
                                <YAxis 
                                    dataKey="state" 
                                    type="category" 
                                    tickLine={false} 
                                    axisLine={false} 
                                    tickMargin={10} 
                                    width={80}
                                    stroke="hsl(var(--muted-foreground))"
                                />
                                <XAxis 
                                    type="number" 
                                    tickLine={false} 
                                    axisLine={false} 
                                    tickMargin={10} 
                                    stroke="hsl(var(--muted-foreground))"
                                    valueFormatter={(value) => `${value.toLocaleString('en-IN')}`}
                                />
                                <Tooltip
                                    cursor={{ fill: 'hsl(var(--muted))' }}
                                    content={<ChartTooltipContent formatter={(value) => `₹${value.toLocaleString()} Cr`} />}
                                />
                                <Legend />
                                <Bar dataKey="gstJun" fill={chartConfig.gstJun.color} radius={4} />
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle>Efficiency & Operational Metrics</CardTitle>
                        <CardDescription>Select performance metrics for different states.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>State / UT</TableHead>
                                    <TableHead>Metric</TableHead>
                                    <TableHead>Value / Rank</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {statePerformanceData.efficiency.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{item.state}</TableCell>
                                        <TableCell>{item.metric}</TableCell>
                                        <TableCell>
                                            <Badge variant={item.rank === 'Top' ? 'default' : 'secondary'}
                                                className={item.rank === 'Top' ? 'bg-green-500/20 text-green-400 border-green-500/20' : ''}
                                            >
                                                {item.value}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
