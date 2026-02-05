

"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { flowScoreData } from "@/lib/placeholder-data";
import { Lightbulb, HeartPulse, TrendingUp, CheckCircle, HelpCircle } from "lucide-react";
import { Label, Pie, PieChart, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip as ShadTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const chartData = [{ value: flowScoreData.score }];
const chartConfig = {
  score: {
    label: "Score",
    color: "hsl(var(--primary))",
  },
};
const maxScore = 900;

const historyChartConfig = {
  score: {
    label: "Score",
    color: "hsl(var(--primary))",
  },
};

export default function CreditScorePage() {
    const score = chartData[0].value;
    const rating = flowScoreData.rating;

    return (
        <div className="grid gap-6 md:gap-8">
            <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold tracking-tight">FTID Flow Score</h1>
                     <TooltipProvider>
                        <ShadTooltip>
                            <TooltipTrigger>
                                <HelpCircle className="h-5 w-5 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="max-w-xs">The FTID Flow Score is a dynamic measure of financial reliability based on real-time cash flow analysis, not just past credit history. It enables more accurate and fair underwriting.</p>
                            </TooltipContent>
                        </ShadTooltip>
                    </TooltipProvider>
                </div>
                <p className="text-muted-foreground">
                    A dynamic analysis of your financial reliability based on transaction flows.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-1">
                     <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <HeartPulse className="h-6 w-6 text-primary" />
                                Current Flow Score
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col items-center justify-center">
                            <ChartContainer
                            config={chartConfig}
                            className="mx-auto aspect-square h-full max-h-[250px]"
                            >
                            <PieChart>
                                <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                                />
                                <Pie
                                    data={chartData}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius="70%"
                                    outerRadius="100%"
                                    startAngle={210}
                                    endAngle={-30}
                                    cy="50%"
                                >
                                    <Cell fill={chartConfig.score.color} />
                                    <Cell fill="hsl(var(--muted))" />
                                    <Label
                                        content={({ viewBox }) => {
                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                            return (
                                            <>
                                                <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                className="fill-foreground text-4xl font-bold"
                                                >
                                                {score.toString()}
                                                </text>
                                                <text
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 20}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                className="fill-muted-foreground text-sm"
                                                >
                                                {rating}
                                                </text>
                                            </>
                                            );
                                        }
                                        }}
                                    />
                                </Pie>
                                <Pie
                                    data={[{ value: 1 }]}
                                    dataKey="value"
                                    stroke="none"
                                    innerRadius="70%"
                                    outerRadius="100%"
                                    startAngle={210}
                                    endAngle={210 + (300 * score) / maxScore}
                                    cy="50%"
                                >
                                    <Cell fill={chartConfig.score.color} />
                                </Pie>
                            </PieChart>
                            </ChartContainer>
                            <div className="mt-4 text-center w-full">
                                <p className="text-sm text-muted-foreground">{flowScoreData.summary}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <TrendingUp />
                                Score History
                            </CardTitle>
                            <CardDescription>Your score trend over the last 6 months.</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[300px]">
                             <ChartContainer config={historyChartConfig} className="h-full w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={flowScoreData.history} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false}/>
                                        <YAxis domain={['dataMin - 10', 'dataMax + 10']} stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false}/>
                                        <Tooltip
                                            content={<ChartTooltipContent indicator="dot" />}
                                            cursor={{
                                                stroke: "hsl(var(--muted-foreground))",
                                                strokeWidth: 1,
                                                strokeDasharray: "3 3",
                                            }}
                                        />
                                        <Line type="monotone" dataKey="score" stroke={historyChartConfig.score.color} strokeWidth={2} dot={{r: 4, fill: historyChartConfig.score.color}} activeDot={{ r: 6 }}/>
                                    </LineChart>
                                </ResponsiveContainer>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                 <Card>
                    <CardHeader>
                        <CardTitle>Flow Score Factors</CardTitle>
                        <CardDescription>What's affecting your financial reliability score.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                             <TableHeader>
                                <TableRow>
                                    <TableHead>Factor</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Impact</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {flowScoreData.factors.map((factor) => (
                                <TableRow key={factor.name}>
                                    <TableCell className="font-medium flex items-center gap-2">
                                        <factor.icon className={`h-4 w-4 ${factor.color}`} />
                                        {factor.name}
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={factor.status === 'Excellent' || factor.status === 'Good' ? 'default' : 'secondary'}
                                            className={factor.status === 'Excellent' || factor.status === 'Good' ? 'bg-green-500/20 text-green-400 border-green-500/20' : 'bg-red-500/20 text-red-400 border-red-500/20'}
                                        >
                                            {factor.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{factor.impact}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Data Sources</CardTitle>
                        <CardDescription>Data streams used for Flow Score calculation.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {flowScoreData.dataSources.map((source, index) => (
                            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                                <span className="text-sm font-medium">{source.name}</span>
                                <div className="flex items-center gap-2 text-sm text-green-400">
                                    <CheckCircle className="h-4 w-4" />
                                    Verified
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
