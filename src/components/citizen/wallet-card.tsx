import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { transactions } from "@/lib/placeholder-data";
import { Separator } from "@/components/ui/separator";

export function WalletCard() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>FTID Wallet</CardTitle>
        <CardDescription>Your current balance and recent activity.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <div className="text-4xl font-bold text-primary tracking-tighter">
          $12,450.78
        </div>
        <p className="text-sm text-muted-foreground mt-1">+ $3,200 from last month</p>
        
        <div className="grid grid-cols-2 gap-4 my-6">
          <Button>
            <ArrowUpRight className="mr-2 h-4 w-4" /> Send
          </Button>
          <Button variant="secondary">
            <ArrowDownLeft className="mr-2 h-4 w-4" /> Request
          </Button>
        </div>

        <Separator />
        
        <div className="mt-4 flex-grow space-y-4 overflow-y-auto">
          <h3 className="text-sm font-medium text-muted-foreground">Recent Transactions</h3>
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center">
              <div className="p-2 bg-secondary rounded-md">
                <transaction.icon className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium leading-none">{transaction.description}</p>
                <p className="text-sm text-muted-foreground">{transaction.date}</p>
              </div>
              <div
                className={`text-sm font-medium ${
                  transaction.amount > 0 ? "text-accent" : "text-foreground"
                }`}
              >
                {transaction.amount > 0 ? `+` : ``}${transaction.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
