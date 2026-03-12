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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { getFinancialAdvice, FinancialAdviceOutput } from "@/ai/flows/ai-financial-advisor-citizen";
import { Bot, Loader2, PiggyBank, Wallet } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { transactions } from "@/lib/placeholder-data";
import { Skeleton } from "@/components/ui/skeleton";

const formSchema = z.object({
  income: z.coerce.number().positive("Income must be a positive number."),
  expenses: z.coerce.number().positive("Expenses must be a positive number."),
});

export function AiAdvisorCard() {
  const [advice, setAdvice] = useState<FinancialAdviceOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      income: 50000,
      expenses: 35000,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAdvice(null);
    try {
      const result = await getFinancialAdvice({
        ...values,
        transactionHistory: JSON.stringify(transactions),
      });
      setAdvice(result);
    } catch (error) {
        // Handled centrally
    }
    setIsLoading(false);
  }

  return (
    <Card className="flex flex-col h-full border-primary/20">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Bot className="h-5 w-5 text-primary" />
          AI Financial Advisor
        </CardTitle>
        <CardDescription className="text-xs uppercase tracking-wider font-bold">
          Flow-Based Intelligent Advice
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="income"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Monthly Income</FormLabel>
                    <FormControl>
                      <Input type="number" className="h-8 font-mono text-xs tabular-nums" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expenses"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Monthly Expenses</FormLabel>
                    <FormControl>
                      <Input type="number" className="h-8 font-mono text-xs tabular-nums" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
             <Button type="submit" disabled={isLoading} className="w-full h-9 font-bold uppercase tracking-widest text-[11px]">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                  Generating...
                </>
              ) : (
                "Request AI Advice"
              )}
            </Button>
            
            {(isLoading || advice) && <Separator />}

            {isLoading && (
              <div className="space-y-4 pt-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            )}
            
            {advice && (
              <div className="space-y-4 text-xs pt-4">
                <div className="p-3 bg-secondary/30 rounded-md border border-border/30">
                  <h3 className="font-bold flex items-center gap-2 mb-1 uppercase tracking-widest text-primary"><Wallet className="h-3 w-3" /> Budgeting</h3>
                  <p className="text-muted-foreground leading-relaxed">{advice.budgetingAdvice}</p>
                </div>
                <div className="p-3 bg-secondary/30 rounded-md border border-border/30">
                  <h3 className="font-bold flex items-center gap-2 mb-1 uppercase tracking-widest text-primary"><PiggyBank className="h-3 w-3" /> Savings</h3>
                  <p className="text-muted-foreground leading-relaxed">{advice.savingsTips}</p>
                </div>
              </div>
            )}
          </CardContent>
        </form>
      </Form>
    </Card>
  );
}