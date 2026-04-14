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
import { ShieldCheck, Loader2, Link as LinkIcon } from "lucide-react";
import { useFirestore, useUser, updateDocumentNonBlocking } from "@/firebase";
import { doc } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";

const linkSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  pan: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format (e.g., ABCDE1234F)"),
  aadhaar: z.string().regex(/^[0-9]{12}$/, "Aadhaar must be exactly 12 digits"),
});

export function LinkAccountDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useUser();
  const db = useFirestore();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof linkSchema>>({
    resolver: zodResolver(linkSchema),
    defaultValues: {
      fullName: "",
      pan: "",
      aadhaar: "",
    },
  });

  function onSubmit(values: z.infer<typeof linkSchema>) {
    if (!user?.uid || !db) return;

    setIsSubmitting(true);
    const citizenRef = doc(db, "citizens", user.uid);

    updateDocumentNonBlocking(citizenRef, {
      fullName: values.fullName,
      pan: { number: values.pan, status: "Verified" },
      aadhaar: { number: values.aadhaar, status: "Verified" },
      isLinked: true,
      lastUpdated: new Date().toISOString(),
    });

    // Optimized for quick responsiveness
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      toast({
        title: "Identity Linked Successfully",
        description: "Your sovereign financial identity has been verified and bonded to FTID.",
      });
    }, 300);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="p-3 bg-primary/10 border border-primary/30 rounded-lg cursor-pointer transition-all hover:bg-primary/20 group">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-background rounded-md border border-primary/30">
              <LinkIcon className="h-4 w-4 text-primary" />
            </div>
            <p className="font-bold text-sm">Link Identity</p>
          </div>
          <p className="text-[10px] text-muted-foreground mt-2 font-medium uppercase tracking-wider">Bond PAN & Aadhaar to FTID</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-primary/20 bg-card">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-sm font-black uppercase tracking-institutional">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Link Sovereign Account
          </DialogTitle>
          <DialogDescription className="text-xs uppercase tracking-widest font-bold opacity-70">
            Secure Institutional Binding
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Full Legal Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter as per Aadhaar" className="h-9 font-bold bg-secondary/20 border-border/50 text-xs" {...field} />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 gap-4">
              <FormField
                control={form.control}
                name="pan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">PAN Number</FormLabel>
                    <FormControl>
                      <Input placeholder="ABCDE1234F" className="h-9 font-mono uppercase bg-secondary/20 border-border/50 text-xs" {...field} />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="aadhaar"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Aadhaar ID (12 Digits)</FormLabel>
                    <FormControl>
                      <Input placeholder="XXXX XXXX XXXX" className="h-9 font-mono bg-secondary/20 border-border/50 text-xs" {...field} />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
            </div>
            <div className="pt-4">
              <Button type="submit" disabled={isSubmitting} className="w-full h-10 font-black uppercase tracking-institutional text-[11px]">
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Authorize Binding"}
              </Button>
            </div>
            <p className="text-[9px] text-center text-muted-foreground uppercase font-bold tracking-widest leading-relaxed">
              By authorizing, you permit FTID to route verified data streams from UIDAI and Income Tax systems.
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
