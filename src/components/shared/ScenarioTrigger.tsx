"use client";

import { useState } from "react";
import { PlayCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useScenario } from "@/components/ScenarioContext";

export function ScenarioTrigger() {
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();
  const { triggerScenario, resetScenario } = useScenario();

  const triggerNationalScenario = async () => {
    setIsRunning(true);
    triggerScenario("NATIONAL_SUBSIDY_RELEASED", "high");
    
    // Simulate a complex multi-step scenario
    const steps = [
      { msg: "Government releases ₹5,000 Cr Subsidy", delay: 0 },
      { msg: "Citizens receive funds via CBDC Wallet", delay: 1500 },
      { msg: "Consumer spending spikes; Business revenue increases", delay: 3000 },
      { msg: "Gateway settles +4.2M transactions", delay: 4500 },
      { msg: "Bank lending appetite increases", delay: 6000 },
      { msg: "Regulator observes macro liquidity impact", delay: 7500 },
    ];

    try {
      // 1. Broadcast the root event to the global SSE bus
      await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'GOVERNMENT',
          type: 'NATIONAL_SUBSIDY_RELEASED',
          severity: 'INFO',
          message: 'National Liquidity Injection: ₹5,000 Cr Subsidy Released to MSMEs and Citizens.'
        })
      });

      // 2. Play out the local UI cascade toasts
      for (const step of steps) {
        setTimeout(() => {
          toast({
            title: "Scenario Engine",
            description: step.msg,
            variant: "default",
          });
        }, step.delay);
      }
      
      setTimeout(() => {
        setIsRunning(false);
        toast({
          title: "Scenario Complete",
          description: "All downstream systems have ingested the event.",
        });
        setTimeout(() => resetScenario(), 10000); // reset after 10s
      }, 9000);

    } catch (e) {
      setIsRunning(false);
      resetScenario();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        onClick={triggerNationalScenario} 
        disabled={isRunning}
        className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] rounded-full px-6 py-6"
      >
        {isRunning ? (
          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
        ) : (
          <PlayCircle className="h-5 w-5 mr-2" />
        )}
        <span className="font-bold tracking-widest uppercase">Run National Scenario</span>
      </Button>
    </div>
  );
}
