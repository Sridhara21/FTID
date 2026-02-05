
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownLeft, Wallet, Info } from "lucide-react";
import { transactions } from "@/lib/placeholder-data";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


export function WalletCard() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Wallet />
            CBDC E-Rupee Wallet
        </CardTitle>
        <CardDescription className="flex items-center justify-between">
            <span>Your current balance and recent activity.</span>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <span className="text-xs flex items-center gap-1 text-muted-foreground cursor-pointer">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Offline Mode: Active
                        </span>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Offline CBDC enabled. Last sync: 5 minutes ago.</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <div className="text-4xl font-bold text-primary tracking-tighter">
          ₹85,250
        </div>
        <p className="text-sm text-muted-foreground mt-1">+ ₹15,000 from last month</p>
        
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
          <TooltipProvider>
            {transactions.map((transaction) => (
                <Tooltip key={transaction.id}>
                    <TooltipTrigger className="w-full">
                        <div className="flex items-center text-left w-full p-1 rounded-md hover:bg-secondary/50">
                        <div className="p-2 bg-secondary rounded-md">
                            <transaction.icon className="h-5 w-5 text-secondary-foreground" />
                        </div>
                        <div className="ml-4 flex-1">
                            <p className="text-sm font-medium leading-none">{transaction.description}</p>
                            <p className="text-xs text-muted-foreground">{transaction.classification}</p>
                        </div>
                        <div
                            className={`text-sm font-medium ${
                            transaction.amount > 0 ? "text-green-400" : "text-red-400"
                            }`}
                        >
                            {transaction.amount > 0 ? `+` : ``}{transaction.amount.toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                            })}
                        </div>
                        </div>
                    </TooltipTrigger>
                     <TooltipContent side="top" align="start">
                        <p className="text-xs">
                           <span className="font-semibold">From:</span> {transaction.originInstitution} <br/>
                           <span className="font-semibold">To:</span> {transaction.destinationInstitution} <br />
                           <span className="font-semibold">FTID Route:</span> Verified
                        </p>
                    </TooltipContent>
                </Tooltip>
            ))}
           </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
}
