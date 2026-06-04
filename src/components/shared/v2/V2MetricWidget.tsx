import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Info } from "lucide-react";

export interface V2MetricWidgetProps {
  title: string;
  value: number;
  trend: 'up' | 'down';
  explanation: string;
  trendValue?: number;
  progress?: number;
}

export function V2MetricWidget({ title, value, trend, explanation, trendValue, progress }: V2MetricWidgetProps) {
  // Use provided values or fallback to deterministic mock values based on string length to avoid hydration mismatches
  const tValue = trendValue ?? (title.length % 5) + 1.2;
  const pValue = progress ?? (title.length * 5 % 60) + 20;

  return (
    <Card className="bg-[#0a1520] border-cyan-900/30 overflow-hidden relative group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-900/10 rounded-bl-full pointer-events-none transition-all group-hover:scale-110"></div>
      <CardContent className="p-4 flex flex-col justify-between h-full z-10 relative">
        <div className="flex justify-between items-start mb-2">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{title}</p>
          <div className="text-cyan-500/50 hover:text-cyan-400 cursor-help" title={explanation}>
            <Info className="h-3 w-3" />
          </div>
        </div>
        <div className="flex items-end gap-3 mt-4">
          <h2 className="text-2xl font-black text-white tracking-tight">{value.toLocaleString()}</h2>
          <span className={`flex items-center text-xs font-bold ${trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
            {trend === 'up' ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
            {tValue.toFixed(1)}%
          </span>
        </div>
        <div className="mt-4 h-1 w-full bg-cyan-900/20 rounded-full overflow-hidden">
           <div className="h-full bg-cyan-500 rounded-full transition-all duration-1000 ease-in-out" style={{ width: `${pValue}%` }}></div>
        </div>
      </CardContent>
    </Card>
  );
}
