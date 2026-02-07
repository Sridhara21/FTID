
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  optimizeSubsidies,
  SubsidyOptimizationOutput,
} from "@/ai/flows/subsidy-optimization-flow";
import { Bot, Loader2, WandSparkles, TrendingUp, Briefcase, Droplets } from "lucide-react";
import { subsidyDistributionData } from "@/lib/placeholder-data";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  economicGoals: z
    .string()
    .min(10, "Please describe your economic goals in more detail."),
  budgetConstraints: z.coerce
    .number()
    .positive("Budget must be a positive number."),
});

type OptimizedDistribution = {
  name: string;
  value: number;
};

export function SubsidyOptimizationCard() {
  const [result, setResult] = useState<SubsidyOptimizationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const totalBudget = subsidyDistributionData.reduce((sum, item) => sum + item.value, 0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      economicGoals: "Focus on boosting agriculture and renewable energy sectors.",
      budgetConstraints: totalBudget,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const currentDistribution = JSON.stringify(
        subsidyDistributionData.map(({ name, value }) => ({ name, value }))
      );
      const res = await optimizeSubsidies({
        ...values,
        budgetConstraints: values.budgetConstraints,
        currentDistribution,
      });
      setResult(res);
    } catch (error) {
      console.error("Error optimizing subsidies:", error);
    }
    setIsLoading(false);
  }

  const optimizedData: OptimizedDistribution[] | null = result
    ? JSON.parse(result.optimizedDistribution)
    : null;

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <WandSparkles className="h-6 w-6 text-primary" />
          AI Subsidy Optimizer
        </CardTitle>
        <CardDescription>
          Generate data-driven recommendations to reallocate subsidies and maximize policy impact based on your stated economic goals.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col flex-grow">
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="economicGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Economic Goals</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Boost agriculture and support renewable energy."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="budgetConstraints"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Subsidy Budget (in Crores)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-col items-start gap-4 mt-auto pt-4 border-t">
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Optimizing...
                </>
              ) : (
                "Generate Recommendations"
              )}
            </Button>
            
            {(isLoading || result) && <Separator />}

            {isLoading && (
              <div className="w-full space-y-2">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
            )}
            {result && optimizedData && (
              <div className="w-full space-y-6">
                <div>
                    <h3 className="font-semibold text-sm flex items-center gap-2 mb-2">
                        <Bot className="h-4 w-4 text-primary" />
                        AI Recommendation Summary
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        {result.recommendationSummary}
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-secondary rounded-lg">
                        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1"><TrendingUp className="h-3 w-3" /> GDP Impact</p>
                        <p className="text-lg font-bold text-green-400">{result.expectedGdpImpact}</p>
                    </div>
                     <div className="p-3 bg-secondary rounded-lg">
                        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1"><Briefcase className="h-3 w-3" /> Employment</p>
                        <p className="text-lg font-bold">{result.expectedEmploymentImpact}</p>
                    </div>
                     <div className="p-3 bg-secondary rounded-lg">
                        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1"><Droplets className="h-3 w-3" /> Leakage</p>
                        <p className="text-lg font-bold text-red-400">{result.leakageReductionEstimate}</p>
                    </div>
                </div>

                <div>
                     <h3 className="font-semibold text-sm mb-2">
                        Optimized Distribution
                    </h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Sector</TableHead>
                                <TableHead className="text-right">Optimized Allocation (₹ Cr)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {optimizedData.map((item) => (
                                <TableRow key={item.name}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell className="text-right font-mono">{item.value.toLocaleString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
              </div>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

    