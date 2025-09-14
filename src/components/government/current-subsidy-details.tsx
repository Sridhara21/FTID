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
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const chartConfig = {
  value: { label: "Crores (INR)" },
  'Food': { label: "Food", color: "var(--color-chart-1)" },
  'Fertiliser': { label: "Fertiliser", color: "var(--color-chart-2)" },
  'Petroleum': { label: "Petroleum", color: "var(--color-chart-3)" },
  'Interest': { label: "Interest", color: "var(--color-chart-4)" },
  'Other': { label: "Other", color: "var(--color-chart-5)" },
};

const COLORS = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))"
];

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
                <div style={{ width: "100%", height: 400 }}>
                    <ResponsiveContainer>
                        <PieChart>
                        <Pie
                            data={subsidyDistributionData}
                            cx="50%"
                            cy="50%"
                            outerRadius={130}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                            label={({ name, value }) => `${name}: ₹${value.toLocaleString()}`}
                        >
                            {subsidyDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value) => `₹${value.toLocaleString()}`}
                        />
                        <ChartLegend content={<ChartLegendContent nameKey="name" />} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                 <CardTitle className="flex items-center gap-2">
                    <List />
                    Allocation Details
                </CardTitle>
                <CardDescription>Breakdown of subsidy categories for FY 2025-26.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {subsidyDetailsData.map((item) => (
                         <AccordionItem value={item.title} key={item.title}>
                            <AccordionTrigger>
                                <div className="flex items-center gap-4 w-full">
                                    <div className="p-2 bg-muted rounded-md">
                                        <item.icon className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <p className="font-semibold">{item.title}</p>
                                        <p className="text-sm text-primary font-mono">₹{item.amount} Cr</p>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-sm text-muted-foreground pl-14">{item.description}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    </div>
  );
}
