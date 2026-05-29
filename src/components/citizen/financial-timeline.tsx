"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Clock, ArrowDownRight, ArrowUpRight, Zap, Coffee, FileText } from "lucide-react";

const timelineEvents = [
  { id: 1, type: "income", title: "Salary Credited", amount: "+₹1,45,000", time: "Today, 9:00 AM", icon: ArrowDownRight, color: "text-emerald-700", bg: "bg-emerald-100", border: "border-emerald-200" },
  { id: 2, type: "expense", title: "Starbucks Coffee", amount: "-₹350", time: "Today, 8:15 AM", icon: Coffee, color: "text-slate-700", bg: "bg-white/60", border: "border-white/50" },
  { id: 3, type: "system", title: "SIP Auto-Invested", amount: "-₹15,000", time: "Yesterday", icon: Zap, color: "text-indigo-700", bg: "bg-indigo-100", border: "border-indigo-200" },
  { id: 4, type: "system", title: "Tax Optimization Found", amount: "Action Required", time: "Yesterday", icon: FileText, color: "text-amber-700", bg: "bg-amber-100", border: "border-amber-200" },
];

export function FinancialTimeline() {
  return (
    <Card className="glass-panel h-full">
      <CardHeader className="pb-4 border-b border-white/40">
        <CardTitle className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-900/90">
          <Clock className="h-4 w-4 text-slate-900/70" /> Financial Timeline
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 relative">
        <div className="absolute left-[31px] top-6 bottom-6 w-px bg-white/60"></div>
        
        <div className="space-y-6 relative z-10">
          {timelineEvents.map(event => (
            <div key={event.id} className="flex items-start gap-4">
              <div className={`p-2.5 rounded-full border ${event.bg} ${event.border} shadow-sm z-10`}>
                <event.icon className={`h-4 w-4 ${event.color}`} />
              </div>
              <div className="flex-1 pt-1.5 overflow-hidden">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-900 truncate">{event.title}</p>
                  <p className={`text-sm font-black tabular-nums whitespace-nowrap ${event.type === 'income' ? 'text-emerald-700' : event.type === 'system' && event.amount === 'Action Required' ? 'text-amber-700' : 'text-slate-900'}`}>
                    {event.amount}
                  </p>
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-900/50 mt-1">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
