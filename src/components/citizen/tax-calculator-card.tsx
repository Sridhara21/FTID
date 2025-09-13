import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Receipt } from "lucide-react";

export function TaxCalculatorCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Auto-Tax Calculator</CardTitle>
        <CardDescription>Estimated tax based on YTD transactions.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center space-y-2">
         <div className="p-4 bg-secondary rounded-full">
            <Receipt className="h-8 w-8 text-secondary-foreground" />
         </div>
        <div className="text-4xl font-bold tracking-tighter">
          ₹12,500
        </div>
        <p className="text-sm text-muted-foreground">Next payment due: 2025-07-31</p>
      </CardContent>
    </Card>
  );
}
