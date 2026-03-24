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
import { Bot, Loader2, WandSparkles, TrendingUp, Briefcase, Droplets, ShieldCheck, Zap } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";

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
    <Card className="flex flex-col h-full border-primary/20 bg-primary/5">
      <CardHeader className="pb-4 border-b border-primary/10">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-black uppercase tracking-[0.2em] flex items-center gap-2">
            <WandSparkles className="h-5 w-5 text-primary" /> AI Policy Optimizer
          </CardTitle>
          <Badge className="bg-primary/10 text-primary border-primary/20 text-[9px] font-bold tracking-widest uppercase">Agentic Engine</Badge>
        </div>
        <CardDescription className="text-xs">Simulate budgetary reallocations for maximal policy impact.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 space-y-4">
            <FormField
              control={form.control}
              name="economicGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] font-bold uppercase tracking-widest">Policy Objectives</FormLabel>
                  <FormControl>
                    <Textarea 
                      className="h-20 text-xs bg-background/50 border-border/50"
                      placeholder="e.g., Reduce fertilizer leakage, support smallholder tech..."
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
                  <FormLabel className="text-[10px] font-bold uppercase tracking-widest">Budget Ceiling (Cr)</FormLabel>
                  <FormControl>
                    <Input type="number" className="h-8 text-xs font-mono tabular-nums bg-background/50 border-border/50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full h-9 font-bold uppercase tracking-widest text-[11px]">
              {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Simulating...</> : "Run Impact Simulation"}
            </Button>
            
            {result && optimizedData && (
              <div className="space-y-6 pt-4 border-t border-primary/10">
                <div className="grid grid-cols-3 gap-3">
                    <div className="p-2.5 bg-background/60 rounded border border-border/30 text-center">
                        <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground mb-1">GDP Impact</p>
                        <p className="text-xs font-black text-green-400 font-mono">{result.expectedGdpImpact}</p>
                    </div>
                     <div className="p-2.5 bg-background/60 rounded border border-border/30 text-center">
                        <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Risk Level</p>
                        <Badge variant="outline" className="text-[8px] h-4 border-yellow-500/30 text-yellow-500">MEDIUM</Badge>
                    </div>
                     <div className="p-2.5 bg-background/60 rounded border border-border/30 text-center">
                        <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Leakage</p>
                        <p className="text-xs font-black text-red-400 font-mono">{result.leakageReductionEstimate}</p>
                    </div>
                </div>

                <div className="p-3 bg-primary/10 rounded-md border border-primary/20">
                    <h3 className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mb-2 text-primary">
                        <Zap className="h-3 w-3" /> Suggested Policy Action
                    </h3>
                    <p className="text-[10px] text-muted-foreground leading-relaxed italic">
                        {result.recommendationSummary.split('.')[0]}. Institutionalize direct-routing for fertiliser sub-components.
                    </p>
                </div>

                <div className="space-y-2">
                     <h3 className="text-[10px] font-black uppercase tracking-widest opacity-60">Optimized Distribution</h3>
                    <div className="grid grid-cols-1 gap-1.5">
                        {optimizedData.map((item) => (
                            <div key={item.name} className="flex justify-between items-center px-3 py-1.5 bg-background/40 rounded border border-border/20">
                                <span className="text-[10px] font-bold">{item.name}</span>
                                <span className="text-[10px] font-mono tabular-nums">₹{item.value.toLocaleString()} Cr</span>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            )}
        </form>
      </Form>
    </Card>
  );
}
