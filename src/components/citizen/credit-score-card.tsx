"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { creditScoreData } from "@/lib/placeholder-data";
import { Lightbulb, HeartPulse } from "lucide-react";
import { Label, Pie, PieChart, Cell } from "recharts";

const chartData = [{ value: creditScoreData.score }];
const chartConfig = {
  score: {
    label: "Score",
    color: "hsl(var(--primary))",
  },
};

const maxScore = 900;

export function CreditScoreCard() {
  const score = chartData[0].value;
  const percentage = (score / maxScore) * 100;

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HeartPulse className="h-6 w-6 text-primary" />
          Financial Health Score
        </CardTitle>
        <CardDescription>Monitor and improve your financial health.</CardDescription>
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
                          {creditScoreData.rating}
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
            <p className="text-sm text-muted-foreground">{creditScoreData.summary}</p>
        </div>
         <div className="w-full mt-4 space-y-2 text-sm">
            {creditScoreData.tips.slice(0, 2).map((tip, index) => (
                <div key={index} className="flex items-start gap-2 p-2 rounded-lg bg-secondary/50">
                    <Lightbulb className="h-4 w-4 mt-0.5 text-primary flex-shrink-0"/>
                    <span>{tip}</span>
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
