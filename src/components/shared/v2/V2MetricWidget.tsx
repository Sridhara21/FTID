import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Info, ArrowRight, Database, Target } from "lucide-react";
import Link from "next/link";

export interface V2MetricWidgetProps {
  title: string;
  value: number | string;
  trend: 'up' | 'down';
  explanation: string;
  trendValue?: number;
  progress?: number;
  href?: string;
  dataSources?: string[];
  contributors?: { label: string, type: 'positive' | 'negative' }[];
  action?: string;
}

export function V2MetricWidget({ title, value, trend, explanation, trendValue, progress, href, dataSources, contributors, action }: V2MetricWidgetProps) {
  const tValue = trendValue ?? (title.length % 5) + 1.2;
  const pValue = progress ?? (title.length * 5 % 60) + 20;

  const innerContent = (
    <Card className={`bg-[#0a1520] border-cyan-900/30 overflow-hidden relative group transition-all ${href ? 'hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(8,145,178,0.2)] hover:-translate-y-1' : ''} flex flex-col h-full`}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-900/10 rounded-bl-full pointer-events-none transition-all group-hover:scale-110"></div>
      <CardContent className="p-4 flex flex-col justify-between flex-grow z-10 relative">
        <div className="flex justify-between items-start mb-2">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{title}</p>
          <div className="flex items-center gap-2">
            {href && <ArrowRight className="h-3 w-3 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />}
            <div className="text-cyan-500/50 hover:text-cyan-400 cursor-help" title={explanation}>
              <Info className="h-3 w-3" />
            </div>
          </div>
        </div>
        <div className="flex items-end gap-3 mt-2">
          <h2 className="text-2xl font-black text-white tracking-tight">{typeof value === 'number' ? value.toLocaleString() : value}</h2>
          <span className={`flex items-center text-xs font-bold ${trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
            {trend === 'up' ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
            {tValue.toFixed(1)}%
          </span>
        </div>
        
        {progress !== undefined && (
          <div className="mt-4 h-1 w-full bg-cyan-900/20 rounded-full overflow-hidden shrink-0">
             <div className="h-full bg-cyan-500 rounded-full transition-all duration-1000 ease-in-out" style={{ width: `${pValue}%` }}></div>
          </div>
        )}

        {/* Explainability Block */}
        {(contributors || dataSources || action) && (
          <div className="mt-4 pt-4 border-t border-slate-800/50 space-y-3 flex-grow flex flex-col justify-end">
            {contributors && (
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1 block">Contributors</span>
                <div className="space-y-1">
                  {contributors.map((c, i) => (
                    <div key={i} className="text-xs flex items-start gap-1.5">
                      <span className={c.type === 'positive' ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                        {c.type === 'positive' ? '+' : '-'}
                      </span>
                      <span className="text-slate-300 truncate" title={c.label}>{c.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {dataSources && (
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1 flex items-center gap-1 mt-2">
                  <Database className="w-3 h-3" /> Sources
                </span>
                <div className="flex flex-wrap gap-1">
                  {dataSources.map((ds, i) => (
                    <span key={i} className="px-1.5 py-0.5 bg-[#020509] border border-slate-800 text-[10px] text-slate-400 rounded">
                      {ds}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {action && (
              <div className="bg-cyan-950/20 border border-cyan-900/30 rounded p-2 flex items-start gap-2 mt-2">
                <Target className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-cyan-100 leading-tight">{action}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (href) {
    return <Link href={href} className="block h-full">{innerContent}</Link>;
  }

  return innerContent;
}
