import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, AlertTriangle, ShieldCheck } from "lucide-react";

export function V2InsightsFeed({ title }: { title: string }) {
  const items = [
    { icon: Zap, color: "text-amber-400", bg: "bg-amber-400/10", text: "Unusual velocity detected in sub-tier node network." },
    { icon: ShieldCheck, color: "text-emerald-400", bg: "bg-emerald-400/10", text: "Compliance drift resolved for primary entity." },
    { icon: AlertTriangle, color: "text-rose-400", bg: "bg-rose-400/10", text: "Liquidity shock predicted within 72 hour window." },
  ];

  return (
    <Card className="bg-[#0a1520] border-cyan-900/30 h-full">
      <CardHeader>
        <CardTitle className="text-white text-sm uppercase tracking-widest">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3 items-start border-l-2 border-cyan-900/20 pl-3 py-1">
            <div className={`p-1.5 rounded-md ${item.bg}`}>
              <item.icon className={`h-4 w-4 ${item.color}`} />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
