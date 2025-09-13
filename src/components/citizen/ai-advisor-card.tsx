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
      console.error("Error getting financial advice:", error);
      // Handle error display to user
    }
    setIsLoading(false);
  }

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          AI Financial Advisor
        </CardTitle>
        <CardDescription>
          Get personalized budgeting and savings tips.
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
                    <FormLabel>Monthly Income</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="50000" {...field} />
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
                    <FormLabel>Monthly Expenses</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="35000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
             <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Advice...
                </>
              ) : (
                "Get AI Advice"
              )}
            </Button>
            
            {(isLoading || advice) && <Separator className="my-4" />}

            {isLoading && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
                 <div className="space-y-2">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            )}
            
            {advice && (
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold flex items-center gap-2 mb-1"><Wallet />Budgeting Advice</h3>
                  <p className="text-muted-foreground">{advice.budgetingAdvice}</p>
                </div>
                <div>
                  <h3 className="font-semibold flex items-center gap-2 mb-1"><PiggyBank />Savings Tips</h3>
                  <p className="text-muted-foreground">{advice.savingsTips}</p>
                </div>
              </div>
            )}
          </CardContent>
        </form>
      </Form>
    </Card>
  );
}
