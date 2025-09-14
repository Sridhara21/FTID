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
import { Receipt, Loader2, IndianRupee } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter
} from "@/components/ui/table";

const formSchema = z.object({
  annualIncome: z.coerce.number().positive("Annual income must be a positive number."),
  deductions: z.coerce.number().min(0, "Deductions cannot be negative."),
});

type TaxCalculationResult = {
    taxableIncome: number;
    totalTax: number;
    slabBreakdown: {
        slab: string;
        taxRate: string;
        taxAmount: number;
    }[];
};

// Simplified tax calculation logic
function calculateTax(income: number, deductions: number): TaxCalculationResult {
    const taxableIncome = Math.max(0, income - deductions);
    let totalTax = 0;
    const slabBreakdown: TaxCalculationResult['slabBreakdown'] = [];

    const taxSlabs = [
        { limit: 300000, rate: 0 },
        { limit: 600000, rate: 0.05 },
        { limit: 900000, rate: 0.10 },
        { limit: 1200000, rate: 0.15 },
        { limit: 1500000, rate: 0.20 },
        { limit: Infinity, rate: 0.30 },
    ];

    let remainingIncome = taxableIncome;
    let lowerBound = 0;

    for (const slab of taxSlabs) {
        if (remainingIncome <= 0) break;

        const slabRange = slab.limit - lowerBound;
        const taxableInSlab = Math.min(remainingIncome, slabRange);
        const taxInSlab = taxableInSlab * slab.rate;
        totalTax += taxInSlab;

        slabBreakdown.push({
            slab: `₹${lowerBound.toLocaleString('en-IN')} - ₹${slab.limit === Infinity ? 'Above' : slab.limit.toLocaleString('en-IN')}`,
            taxRate: `${slab.rate * 100}%`,
            taxAmount: taxInSlab,
        });

        remainingIncome -= taxableInSlab;
        lowerBound = slab.limit;
    }

    return { taxableIncome, totalTax, slabBreakdown };
}


export function DetailedTaxCalculator() {
  const [taxResult, setTaxResult] = useState<TaxCalculationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      annualIncome: 840000,
      deductions: 150000,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setTaxResult(null);
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 500));
    const result = calculateTax(values.annualIncome, values.deductions);
    setTaxResult(result);
    setIsLoading(false);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Receipt className="h-6 w-6 text-primary" />
          Income Tax Calculator
        </CardTitle>
        <CardDescription>
          Estimate your income tax liability for the financial year.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="annualIncome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Income (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 840000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="deductions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Deductions (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 150000" {...field} />
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
                  Calculating...
                </>
              ) : (
                "Calculate Tax"
              )}
            </Button>
          </CardContent>
        </form>
      </Form>
      
      {(isLoading || taxResult) && (
        <>
            <Separator className="my-6"/>
            <CardContent>
                {isLoading && (
                    <div className="space-y-4">
                        <Skeleton className="h-8 w-1/2 mx-auto" />
                        <Skeleton className="h-12 w-1/3 mx-auto" />
                        <Skeleton className="h-40 w-full" />
                    </div>
                )}
                {taxResult && (
                    <div className="space-y-6">
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground">Estimated Tax Liability</p>
                            <p className="text-4xl font-bold tracking-tight">
                                {taxResult.totalTax.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">
                                On a taxable income of {taxResult.taxableIncome.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Tax Breakdown</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Income Slab</TableHead>
                                        <TableHead>Tax Rate</TableHead>
                                        <TableHead className="text-right">Tax Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {taxResult.slabBreakdown.map(item => (
                                        <TableRow key={item.slab}>
                                            <TableCell>{item.slab}</TableCell>
                                            <TableCell>{item.taxRate}</TableCell>
                                            <TableCell className="text-right font-mono">
                                                {item.taxAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableHead colSpan={2}>Total Tax</TableHead>
                                        <TableHead className="text-right font-bold font-mono">
                                            {taxResult.totalTax.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                                        </TableHead>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                            <p className="text-xs text-muted-foreground mt-2">*This is an estimate based on the new tax regime. Please consult a tax professional for exact calculations.</p>
                        </div>
                    </div>
                )}
            </CardContent>
        </>
      )}
    </Card>
  );
}
