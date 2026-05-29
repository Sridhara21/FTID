"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { ShoppingBag, Coffee, Home, Zap } from "lucide-react";

const data = [
  { name: "Housing", value: 45000, color: "#94a3b8", icon: Home },
  { name: "Food & Dining", value: 12500, color: "#cbd5e1", icon: Coffee },
  { name: "Shopping", value: 8400, color: "#64748b", icon: ShoppingBag },
  { name: "Utilities", value: 5200, color: "#475569", icon: Zap },
];

export function SmartSpendingInsights() {
  return (
    <Card className="glass-panel">
      <CardHeader className="pb-4 border-b border-white/40">
        <CardTitle className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900/90 flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-slate-900/70" /> Smart Spending Insights
          </span>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full uppercase tracking-widest">
            15% below budget
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="h-48 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(10px)', color: '#0f172a' }}
                itemStyle={{ color: '#0f172a' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Total Spent</span>
            <span className="text-xl font-bold text-slate-900">₹71,100</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-200/50 rounded-bl-full blur-xl"></div>
             <p className="text-xs font-bold text-indigo-900 uppercase tracking-widest mb-1">AI Copilot Insight</p>
             <p className="text-sm font-medium text-indigo-900/80 leading-relaxed">
               Your dining expenses are down 22% compared to last month. You are on track to save an extra ₹4,500 this month.
             </p>
          </div>
          
          <div className="space-y-3">
            {data.slice(0,3).map(category => (
              <div key={category.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-white/60 shadow-sm border border-white/50">
                    <category.icon className="h-3.5 w-3.5 text-slate-700" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{category.name}</span>
                </div>
                <span className="text-xs font-bold text-slate-900">₹{category.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
