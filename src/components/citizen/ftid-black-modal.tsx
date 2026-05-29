"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, Crown, CheckCircle2, ChevronRight, Loader2, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCitizen } from "@/hooks/use-citizen";
import { useFirestore } from "@/local";
import { doc } from "@/local/store";
import { updateDocumentNonBlocking } from "@/local/non-blocking-updates";

interface FtidBlackModalProps {
  children?: React.ReactNode;
  defaultOpen?: boolean;
}

export function FtidBlackModal({ children, defaultOpen = false }: FtidBlackModalProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const { user } = useCitizen();
  const db = useFirestore();

  const handleSubscribe = () => {
    setIsProcessing(true);
    // Simulate payment gateway delay
    setTimeout(() => {
      if (user?.uid && db) {
        const citizenRef = doc(db, "citizens", user.uid);
        updateDocumentNonBlocking(citizenRef, { tier: "Black" });
      }
      setIsProcessing(false);
      setIsOpen(false);
      toast({
        title: "Welcome to FTID Black 👑",
        description: "Your autonomous wealth engine is now fully activated.",
      });
    }, 1500);
  };

  const features = [
    "Autonomous Tax Loophole Detection",
    "Predictive Credit Score Repair Algorithms",
    "Instant Zero-Collateral Micro-Loans via CBDC",
    "Priority Government Node Connectivity",
    "Unlimited High-Res Social Wealth Exports"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      
      <DialogContent className="sm:max-w-[450px] p-0 border-0 bg-transparent shadow-2xl overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black z-0"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-amber-500/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
        
        {/* Content */}
        <div className="relative z-10">
            {/* Header */}
            <div className="p-8 pb-6 text-center border-b border-white/50 bg-white/60 backdrop-blur-xl">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-amber-200 to-amber-600 shadow-[0_0_30px_rgba(245,158,11,0.3)] mb-4">
                    <Crown className="h-6 w-6 text-white" />
                </div>
                <DialogTitle className="text-2xl font-black tracking-tighter uppercase text-slate-900 flex items-center justify-center gap-2">
                    FTID <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Black</span>
                </DialogTitle>
                <DialogDescription className="text-xs uppercase tracking-widest font-bold text-gray-400 mt-2">
                    The Ultimate Wealth Engine
                </DialogDescription>
            </div>

            {/* Pricing & Features */}
            <div className="p-8">
                <div className="flex items-end justify-center gap-1 mb-8">
                    <span className="text-4xl font-black text-slate-900 tracking-tighter">₹499</span>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">/ month</span>
                </div>

                <div className="space-y-4 mb-8">
                    {features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="h-4 w-4 text-amber-500 flex-shrink-0" />
                            <span className="text-xs font-bold text-gray-300">{feature}</span>
                        </div>
                    ))}
                </div>

                <Button 
                    onClick={handleSubscribe} 
                    disabled={isProcessing}
                    className="w-full h-12 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-white font-black uppercase tracking-institutional border-0 shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all hover:scale-[1.02]"
                >
                    {isProcessing ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Authorizing Payment...</>
                    ) : (
                        <>Upgrade to Black <ChevronRight className="ml-2 h-4 w-4" /></>
                    )}
                </Button>

                <p className="text-[9px] text-center text-gray-500 mt-4 uppercase tracking-widest font-bold flex items-center justify-center gap-1">
                    <ShieldCheck className="h-3 w-3" /> Encrypted Institutional Billing
                </p>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
