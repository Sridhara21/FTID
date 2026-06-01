import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function AuditLedgerExplorer({ columns }: { columns: string[] }) {
  // Generate fake ledger data based on columns
  const rows = Array.from({ length: 8 }).map((_, i) => ({
    id: `TX-2026-${Math.floor(Math.random() * 100000)}`,
    status: Math.random() > 0.8 ? 'FLAGGED' : 'VERIFIED',
    hash: `0x${Math.random().toString(16).substring(2, 10)}...`
  }));

  return (
    <div className="rounded-md border border-cyan-900/30 overflow-hidden">
      <Table>
        <TableHeader className="bg-cyan-900/10 hover:bg-cyan-900/10">
          <TableRow className="border-cyan-900/30">
            <TableHead className="text-cyan-400 font-bold text-xs uppercase tracking-wider">Record ID</TableHead>
            {columns.slice(0, 3).map((col, i) => (
              <TableHead key={i} className="text-cyan-400 font-bold text-xs uppercase tracking-wider">{col}</TableHead>
            ))}
            <TableHead className="text-cyan-400 font-bold text-xs uppercase tracking-wider text-right">Cryptographic Hash</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i} className="border-cyan-900/10 hover:bg-cyan-900/5 transition-colors">
              <TableCell className="font-mono text-cyan-100 text-xs py-3">{row.id}</TableCell>
              {columns.slice(0, 3).map((_, j) => (
                 <TableCell key={j} className="text-slate-400 text-xs">
                   {j === 0 && <Badge variant="outline" className={row.status === 'VERIFIED' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 'bg-rose-900/20 text-rose-400 border-rose-900/50'}>{row.status}</Badge>}
                   {j !== 0 && `Data block ${j}`}
                 </TableCell>
              ))}
              <TableCell className="font-mono text-cyan-500/50 text-xs text-right py-3">{row.hash}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
