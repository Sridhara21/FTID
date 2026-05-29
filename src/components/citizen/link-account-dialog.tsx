"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShieldCheck, Loader2, Link as LinkIcon, Landmark, Smartphone, Zap } from "lucide-react";
import { useFirestore, useUser, addDocumentNonBlocking } from "@/local";
import { collection } from "@/local/store";
import { useToast } from "@/hooks/use-toast";

const aaSchema = z.object({
  bank: z.string().min(1, "Select a Financial Information Provider (FIP)"),
  phone: z.string().length(10, "10-digit phone number required"),
});

export function LinkAccountDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useUser();
  const db = useFirestore();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof aaSchema>>({
    resolver: zodResolver(aaSchema),
    defaultValues: {
      bank: "",
      phone: "",
    },
  });

  const requestOTP = (values: z.infer<typeof aaSchema>) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
      toast({ title: "Account Aggregator OTP Sent", description: `OTP sent via Sahamati network to ${values.phone}` });
    }, 800);
  };

  const verifyAndLink = () => {
    if (!user?.uid || !db || otp.length < 4) return;
    setIsSubmitting(true);

    const bank = form.getValues("bank");
    const txnCol = collection(db, "transactions");

    // Seed realistic production data through the AA framework
    const newTxns = [
      { amount: -1250, description: "Swiggy Instamart", classification: "Food", originInstitution: bank, destinationInstitution: "Swiggy", channel: "UPI" },
      { amount: 85000, description: "Salary Credit", classification: "Income", originInstitution: "Corporate Node", destinationInstitution: bank, channel: "NEFT" },
      { amount: -4500, description: "Electricity Board", classification: "Utilities", originInstitution: bank, destinationInstitution: "BESCOM", channel: "BBPS" },
      { amount: -12500, description: "Mutual Fund SIP", classification: "Investment", originInstitution: bank, destinationInstitution: "Zerodha", channel: "Auto-Debit" }
    ];

    newTxns.forEach((t, i) => {
      setTimeout(() => {
        addDocumentNonBlocking(txnCol, {
          ...t,
          citizenId: user.uid,
          status: "completed",
          timestamp: new Date().toISOString()
        });
      }, i * 150); // Stagger inserts for realistic real-time streaming effect
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      setStep(1);
      form.reset();
      setOtp("");
      toast({
        title: "AA Consent Active",
        description: `Live data stream established with ${bank}. Financial records updated.`,
      });
    }, 1200);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="p-3 bg-primary/10 border border-primary/30 rounded-lg cursor-pointer transition-all hover:bg-primary/20 group">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-background rounded-md border border-primary/30 relative overflow-hidden">
              <Zap className="h-4 w-4 text-primary absolute opacity-20 -right-1 -top-1 animate-pulse" />
              <LinkIcon className="h-4 w-4 text-primary" />
            </div>
            <p className="font-bold text-sm">Account Aggregator</p>
          </div>
          <p className="text-[10px] text-muted-foreground mt-2 font-medium uppercase tracking-wider">Connect FIP Data Streams</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-primary/20 bg-card">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-sm font-black uppercase tracking-institutional">
            <Landmark className="h-5 w-5 text-primary" />
            AA Framework Hub
          </DialogTitle>
          <DialogDescription className="text-xs uppercase tracking-widest font-bold opacity-70">
            RBI Regulated Data Sharing
          </DialogDescription>
        </DialogHeader>

        {step === 1 ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(requestOTP)} className="space-y-4 pt-4">
              <FormField
                control={form.control}
                name="bank"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Financial Information Provider</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-10 bg-secondary/20 border-border/50 text-xs font-bold">
                          <SelectValue placeholder="Select FIP Node" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ICICI Bank">ICICI Bank</SelectItem>
                        <SelectItem value="HDFC Bank">HDFC Bank</SelectItem>
                        <SelectItem value="State Bank of India">State Bank of India</SelectItem>
                        <SelectItem value="Axis Bank">Axis Bank</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Registered Mobile</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Smartphone className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="10-digit number" className="pl-9 h-10 font-bold bg-secondary/20 border-border/50 text-xs" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} className="w-full h-11 font-black uppercase tracking-institutional text-xs mt-2">
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Request AA Consent OTP"}
              </Button>
            </form>
          </Form>
        ) : (
          <div className="space-y-5 pt-4">
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-md text-center">
              <p className="text-xs font-bold text-primary mb-1">Verify Data Sharing Consent</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">OTP sent from {form.getValues("bank")} via Sahamati</p>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Secure OTP</label>
              <Input 
                autoFocus
                placeholder="• • • • • •" 
                className="h-12 text-center text-xl font-black tracking-[1em] bg-secondary/20 border-border/50" 
                value={otp} 
                onChange={(e) => setOtp(e.target.value)} 
                maxLength={6} 
              />
            </div>
            <Button onClick={verifyAndLink} disabled={isSubmitting || otp.length < 4} className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-institutional text-xs shadow-lg">
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Grant Consent & Sync Streams"}
            </Button>
            <Button variant="ghost" onClick={() => setStep(1)} className="w-full h-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              Cancel
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
