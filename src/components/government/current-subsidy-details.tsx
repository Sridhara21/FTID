
"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { subsidyDistributionData, subsidyDetailsData } from "@/lib/placeholder-data";
import { PieChart as PieChartIcon, List } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const chartConfig = {
  value: { label: "Crores (INR)" },
  'Food': { label: "Food", color: "hsl(var(--chart-1))" },
  'Fertiliser': { label: "Fertiliser", color: "hsl(var(--chart-2))" },
  'Petroleum': { label: "Petroleum", color: "hsl(var(--chart-3))" },
  'Interest': { label: "Interest", color: "hsl(var(--chart-4))" },
  'Other': { label: "Other", color: "hsl(var(--chart-5))" },
};


export function CurrentSubsidyDetails() {
  const totalSubsidies = subsidyDistributionData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="grid grid-cols-1 gap-8">
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <PieChartIcon />
                    India Union Budget 2025-26 — Subsidy Allocations
                </CardTitle>
                <CardDescription>Total Allocation: ₹{totalSubsidies.toLocaleString('en-IN')} Cr</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[400px] w-full">
                    <ResponsiveContainer>
                        <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel formatter={(value, name) => `${name}: ₹${Number(value).toLocaleString('en-IN')} Cr`} />}
                        />
                        <Pie
                            data={subsidyDistributionData}
                            cx="50%"
                            cy="50%"
                            outerRadius={130}
                            dataKey="value"
                            nameKey="name"
                            labelLine={false}
                            label={({ name, percent }) => {
                                if (percent < 0.05) return null; // Don't render label for small slices
                                return `${name} ${(percent * 100).toFixed(0)}%`
                            }}
                        >
                            {subsidyDistributionData.map((entry) => (
                                <Cell key={`cell-${entry.name}`} fill={entry.fill} />
                            ))}
                        </Pie>
                        <ChartLegend
                            content={<ChartLegendContent nameKey="name" />}
                            className="[&>*]:basis-1/5"
                         />
                        </PieChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                 <CardTitle className="flex items-center gap-2">
                    <List />
                    Allocation Details
                </CardTitle>
                <CardDescription>Breakdown of subsidy categories for FY 2025-26.</CardDescription>
            </Header>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {subsidyDetailsData.map((item) => (
                         <AccordionItem value={item.title} key={item.title}>
                            <AccordionTrigger>
                                <div className="flex items-center gap-4 w-full">
                                    <div className="p-2 bg-muted rounded-md">
                                        <item.icon className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <div className="flex-1 text-left flex items-center gap-3">
                                        <div className="w-1.5 h-10 rounded-full" style={{ backgroundColor: item.color }}/>
                                        <div>
                                            <p className="font-semibold">{item.title}</p>
                                            <p className="text-sm text-primary font-mono">₹{item.amount} Cr</p>
                                        </div>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-sm text-muted-foreground pl-20">{item.description}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    </div>
  );
}
