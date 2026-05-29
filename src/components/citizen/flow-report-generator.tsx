"use client";

import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Loader2, Download, Share2, Sparkles, TrendingUp, ShieldCheck, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FlowReportProps {
  score: number;
  name: string;
  savingsRatio: number;
}

export function FlowReportGenerator({ score, name, savingsRatio }: FlowReportProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Determine tier based on score
  const getTier = (s: number) => {
    if (s > 750) return { name: "Apex", color: "from-purple-400 to-pink-600" };
    if (s > 650) return { name: "Prime", color: "from-blue-400 to-cyan-500" };
    return { name: "Standard", color: "from-emerald-400 to-teal-500" };
  };

  const tier = getTier(score);

  const generateReport = async () => {
    if (!reportRef.current) return;
    setIsGenerating(true);
    
    try {
      // Temporarily make it visible for rendering
      reportRef.current.style.display = "block";
      
      const canvas = await html2canvas(reportRef.current, {
        scale: 3, // High resolution for social media
        useCORS: true,
        backgroundColor: "#030712", // match tailwind gray-950
      });
      
      // Hide it again
      reportRef.current.style.display = "none";
      
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `FTID_FlowScore_${name.replace(/\s+/g, "_")}.png`;
      link.click();
      
      toast({
        title: "Report Generated! 🚀",
        description: "Your FTID Flow Score is ready to share on Instagram/X.",
      });
      setIsOpen(false);
    } catch (err) {
      console.error(err);
      toast({
        title: "Generation Failed",
        description: "Could not create the high-res report.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-slate-900 font-black uppercase tracking-widest shadow-lg shadow-purple-500/20 border-0 h-12">
            <Sparkles className="mr-2 h-4 w-4" />
            Export Flow Report
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] border-primary/20 bg-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-sm font-black uppercase tracking-institutional">
              <Share2 className="h-5 w-5 text-primary" />
              Social Wealth Export
            </DialogTitle>
            <DialogDescription className="text-xs uppercase tracking-widest font-bold opacity-70">
              Generate 4K Flex Asset
            </DialogDescription>
          </DialogHeader>
          <div className="py-6 flex flex-col items-center justify-center space-y-4">
            <div className="h-32 w-32 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 flex items-center justify-center animate-pulse">
               <Sparkles className="h-12 w-12 text-primary opacity-50" />
            </div>
            <p className="text-center text-xs font-bold text-muted-foreground max-w-[250px] leading-relaxed">
              Our AI engine will compile your transaction velocity, savings ratio, and sovereign identity into a stunning 4K image for Instagram, X, or LinkedIn.
            </p>
          </div>
          <Button 
            onClick={generateReport} 
            disabled={isGenerating} 
            className="w-full h-12 bg-primary text-primary-foreground font-black uppercase tracking-institutional shadow-xl"
          >
            {isGenerating ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Rendering GPU Asset...</>
            ) : (
              <><Download className="mr-2 h-4 w-4" /> Download 4K Report</>
            )}
          </Button>
        </DialogContent>
      </Dialog>

      {/* OFF-SCREEN RENDER TARGET FOR HTML2CANVAS */}
      <div 
        ref={reportRef} 
        style={{ display: 'none', width: '600px', height: '800px' }} 
        className="absolute top-[-9999px] left-[-9999px] bg-gray-950 p-10 font-sans text-slate-900 border border-gray-800"
      >
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <h1 className="text-3xl font-black uppercase tracking-tighter flex items-center gap-2">
                <ShieldCheck className="h-8 w-8 text-blue-400" />
                FTID OS
              </h1>
              <p className="text-sm font-bold text-gray-400 tracking-widest uppercase mt-1">Sovereign Wealth Report</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-mono text-gray-500 uppercase">Generated</p>
              <p className="text-sm font-bold tracking-widest">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            </div>
          </div>

          {/* User Profile */}
          <div className="mb-10 p-6 rounded-2xl bg-white/60 border border-white/50 backdrop-blur-md">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Verified Citizen</p>
            <p className="text-4xl font-black tracking-tight">{name || "Anonymous"}</p>
            <div className="mt-4 flex gap-3">
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wider border border-green-500/20">
                Aadhaar Synced
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider border border-blue-500/20">
                AA Stream Active
              </span>
            </div>
          </div>

          {/* Flow Score Giant */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 font-bold mb-6">Autonomous Flow Score</p>
            
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${tier.color} blur-[50px] opacity-30`}></div>
              <h2 className={`text-9xl font-black tracking-tighter bg-gradient-to-b ${tier.color} bg-clip-text text-transparent relative z-10 drop-shadow-2xl`}>
                {score}
              </h2>
            </div>
            
            <p className="text-xl font-bold tracking-widest uppercase mt-8 text-slate-900">
              Tier: <span className={`bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>{tier.name}</span>
            </p>
          </div>

          {/* Footer Stats & QR */}
          <div className="mt-12 grid grid-cols-3 gap-6 items-end">
            <div className="col-span-2 space-y-4">
              <div className="p-5 rounded-xl bg-white/60 border border-white/50">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-4 w-4 text-emerald-700" />
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Savings Velocity</p>
                </div>
                <p className="text-2xl font-black">{savingsRatio > 0 ? `+${savingsRatio.toFixed(1)}%` : '0%'}</p>
              </div>
            </div>
            
            <div className="col-span-1 flex flex-col items-end">
              <div className="p-3 bg-white rounded-xl">
                <QrCode className="h-16 w-16 text-white" />
              </div>
              <p className="text-[8px] font-bold uppercase tracking-widest text-gray-500 mt-3 text-right">
                Scan to calculate<br/>your Flow Score
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
