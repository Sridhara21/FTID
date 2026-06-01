"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { UserPlus, Home, Briefcase, Rocket, Activity, CheckCircle2, TrendingUp, TrendingDown, ArrowRight } from "lucide-react";

export function LifeEventSimulator() {
  const [selectedEvent, setSelectedEvent] = useState<'marriage' | 'home' | 'job' | 'startup'>('job');
  
  const [creditImpact, setCreditImpact] = useState<number>(0);
  const [taxImpact, setTaxImpact] = useState<number>(0); // Net change in tax liability %
  const [cashflowImpact, setCashflowImpact] = useState<number>(0); // Change in monthly free cashflow %

  const events = [
    { id: 'job', icon: Briefcase, title: 'New Corporate Job', desc: 'Base salary bump of 30%', color: 'text-blue-400', bg: 'bg-blue-900/20', border: 'border-blue-500/50' },
    { id: 'marriage', icon: UserPlus, title: 'Marriage', desc: 'Merging household finances', color: 'text-purple-400', bg: 'bg-purple-900/20', border: 'border-purple-500/50' },
    { id: 'home', icon: Home, title: 'Home Purchase', desc: 'Taking a 20-year mortgage', color: 'text-emerald-400', bg: 'bg-emerald-900/20', border: 'border-emerald-500/50' },
    { id: 'startup', icon: Rocket, title: 'Business Startup', desc: 'Leaving formal employment', color: 'text-amber-400', bg: 'bg-amber-900/20', border: 'border-amber-500/50' }
  ] as const;

  useEffect(() => {
    switch (selectedEvent) {
      case 'job':
        setCreditImpact(+15);
        setTaxImpact(+12);
        setCashflowImpact(+25);
        break;
      case 'marriage':
        setCreditImpact(+45); // Dual income boosts capacity significantly
        setTaxImpact(-8);    // Favorable joint tax filing/deductions
        setCashflowImpact(+15);
        break;
      case 'home':
        setCreditImpact(-20); // Initial hit due to high debt-to-income ratio
        setTaxImpact(-15);   // Interest deductions
        setCashflowImpact(-40); // EMI drains cashflow
        break;
      case 'startup':
        setCreditImpact(-50); // Loss of steady income drops score
        setTaxImpact(-80);   // Business deductions drop personal tax drastically
        setCashflowImpact(-60); // Cash burn phase
        break;
    }
  }, [selectedEvent]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Event Selection */}
      <div className="lg:col-span-5 space-y-4">
        <Card className="bg-[#05101a] border-purple-900/30 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-purple-400 flex items-center gap-2 text-lg">
              <Activity className="h-5 w-5" />
              Life Event Triggers
            </CardTitle>
            <CardDescription className="text-slate-400">Simulate how major decisions reshape your financial identity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {events.map((evt) => (
              <button
                key={evt.id}
                onClick={() => setSelectedEvent(evt.id)}
                className={`w-full p-4 rounded-xl border transition-all flex items-center gap-4 text-left ${selectedEvent === evt.id ? `${evt.bg} ${evt.border} shadow-[0_0_15px_rgba(0,0,0,0.5)]` : 'bg-[#020810] border-slate-800 hover:border-slate-700'}`}
              >
                <div className={`p-3 rounded-lg ${selectedEvent === evt.id ? 'bg-white/10' : 'bg-slate-800'}`}>
                  <evt.icon className={`h-6 w-6 ${selectedEvent === evt.id ? evt.color : 'text-slate-500'}`} />
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold ${selectedEvent === evt.id ? 'text-white' : 'text-slate-300'}`}>{evt.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{evt.desc}</p>
                </div>
                {selectedEvent === evt.id && <CheckCircle2 className={`h-5 w-5 ${evt.color}`} />}
              </button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Impact Visualization */}
      <div className="lg:col-span-7 space-y-6">
        <Card className="bg-[#020810] border-slate-800 h-full relative overflow-hidden flex flex-col">
          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-900/10 blur-[80px] pointer-events-none"></div>
          <CardHeader className="pb-2 border-b border-slate-800 mb-6">
            <CardTitle className="text-white text-lg">Identity Realignment Forecast</CardTitle>
            <CardDescription className="text-slate-400">Projected impact 12 months post-event</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-center space-y-8 relative z-10">
            
            {/* Credit Score Impact */}
            <div>
               <div className="flex justify-between items-end mb-2">
                 <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Credit Capacity Index</span>
                 <div className="flex items-center gap-2">
                   {creditImpact > 0 ? <TrendingUp className="text-emerald-400 h-4 w-4" /> : <TrendingDown className="text-rose-400 h-4 w-4" />}
                   <span className={`text-xl font-black ${creditImpact > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                     {creditImpact > 0 ? '+' : ''}{creditImpact} pts
                   </span>
                 </div>
               </div>
               <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
                 <div className="bg-slate-700 w-1/2 flex justify-end">
                   {creditImpact < 0 && <div className="h-full bg-rose-500" style={{ width: `${Math.abs(creditImpact)}%` }}></div>}
                 </div>
                 <div className="bg-slate-800 w-1/2">
                   {creditImpact > 0 && <div className="h-full bg-emerald-500" style={{ width: `${creditImpact}%` }}></div>}
                 </div>
               </div>
               <p className="text-[10px] text-slate-500 mt-2 text-right">Baseline: 720</p>
            </div>

            {/* Tax Liability Impact */}
            <div>
               <div className="flex justify-between items-end mb-2">
                 <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Net Tax Liability</span>
                 <div className="flex items-center gap-2">
                   {taxImpact > 0 ? <TrendingUp className="text-rose-400 h-4 w-4" /> : <TrendingDown className="text-emerald-400 h-4 w-4" />}
                   <span className={`text-xl font-black ${taxImpact > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                     {taxImpact > 0 ? '+' : ''}{taxImpact}%
                   </span>
                 </div>
               </div>
               <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
                 <div className="bg-slate-700 w-1/2 flex justify-end">
                   {taxImpact < 0 && <div className="h-full bg-emerald-500" style={{ width: `${Math.abs(taxImpact)}%` }}></div>}
                 </div>
                 <div className="bg-slate-800 w-1/2">
                   {taxImpact > 0 && <div className="h-full bg-rose-500" style={{ width: `${taxImpact}%` }}></div>}
                 </div>
               </div>
               <p className="text-[10px] text-slate-500 mt-2 text-right">Decrease is favorable</p>
            </div>

            {/* Free Cashflow Impact */}
            <div>
               <div className="flex justify-between items-end mb-2">
                 <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Monthly Free Cashflow</span>
                 <div className="flex items-center gap-2">
                   {cashflowImpact > 0 ? <TrendingUp className="text-emerald-400 h-4 w-4" /> : <TrendingDown className="text-amber-400 h-4 w-4" />}
                   <span className={`text-xl font-black ${cashflowImpact > 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                     {cashflowImpact > 0 ? '+' : ''}{cashflowImpact}%
                   </span>
                 </div>
               </div>
               <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
                 <div className="bg-slate-700 w-1/2 flex justify-end">
                   {cashflowImpact < 0 && <div className="h-full bg-amber-500" style={{ width: `${Math.abs(cashflowImpact)}%` }}></div>}
                 </div>
                 <div className="bg-slate-800 w-1/2">
                   {cashflowImpact > 0 && <div className="h-full bg-emerald-500" style={{ width: `${cashflowImpact}%` }}></div>}
                 </div>
               </div>
               <p className="text-[10px] text-slate-500 mt-2 text-right">Liquidity buffer</p>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
