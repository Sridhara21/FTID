"use client";

import { useState } from "react";
import { ShieldAlert, AlertTriangle, Search, Filter, ShieldCheck, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFirestore, useCollection, useMemoFirebase } from "@/local";
import { collection, query, orderBy, addDoc } from "@/local/store";

export default function ComplianceSimulator() {
  const db = useFirestore();
  
  const alertsQuery = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, "compliance_alerts"), orderBy("timestamp", "desc"));
  }, [db]);

  const { data: alertsData, isLoading } = useCollection(alertsQuery);

  const [simType, setSimType] = useState("Structuring");
  const [simEntity, setSimEntity] = useState("Corp_A");
  const [simRisk, setSimRisk] = useState("High");
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulate = async () => {
    if (!db) return;
    setIsSimulating(true);
    try {
      await addDoc(collection(db, "compliance_alerts"), {
        id: `SAR-${Math.floor(1000 + Math.random() * 9000)}`,
        type: simType,
        entity: simEntity,
        risk: simRisk,
        status: "Open",
        timestamp: Date.now(),
      });
    } finally {
      setIsSimulating(false);
    }
  };

  const handleResolve = async (id: string) => {
    // Implement resolution logic if needed (e.g. updating doc)
    // For now, it's just a mock
  };

  return (
    <div className="grid gap-6 slide-up-fade">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">AML & Fraud Simulator</h1>
        <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-institutional mt-1">
          Regulator Oversight Training Environment
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 border-border/50 bg-secondary/10">
          <CardHeader className="border-b border-border/30 pb-3">
            <CardTitle className="text-[10px] font-black uppercase tracking-institutional flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" /> Simulate Alert
            </CardTitle>
            <CardDescription className="text-xs">
              Inject a mock Suspicious Activity Report (SAR) into the live feed.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            <div className="space-y-2">
              <Label className="text-[10px] font-bold uppercase tracking-widest">Entity Name</Label>
              <Input 
                value={simEntity}
                onChange={(e) => setSimEntity(e.target.value)}
                className="font-mono text-xs bg-background" 
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-bold uppercase tracking-widest">Anomaly Type</Label>
              <Select value={simType} onValueChange={setSimType}>
                <SelectTrigger className="text-xs bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Structuring">Structuring (Smurfing)</SelectItem>
                  <SelectItem value="Velocity Limit Exceeded">Velocity Limit Exceeded</SelectItem>
                  <SelectItem value="Dark Pattern">Dark Pattern Origin</SelectItem>
                  <SelectItem value="High-Risk Jurisdiction">High-Risk Jurisdiction</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-bold uppercase tracking-widest">Risk Level</Label>
              <Select value={simRisk} onValueChange={setSimRisk}>
                <SelectTrigger className="text-xs bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Critical">Critical</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              className="w-full text-xs font-bold uppercase tracking-widest" 
              onClick={handleSimulate}
              disabled={isSimulating}
            >
              {isSimulating ? "Injecting..." : "Inject Mock Alert"}
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 border-border/50">
          <CardHeader className="border-b border-border/30 pb-3 flex flex-row items-center justify-between">
            <CardTitle className="text-[10px] font-black uppercase tracking-institutional flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-red-400" /> Live Compliance Feed
            </CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                <Input placeholder="Search SARs..." className="pl-7 h-8 text-xs w-[150px] bg-secondary/20" />
              </div>
              <Button variant="outline" size="sm" className="h-8">
                <Filter className="h-3 w-3" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border/50 bg-secondary/20">
                  <TableHead className="text-[10px] uppercase font-black tracking-widest py-2">ID / Time</TableHead>
                  <TableHead className="text-[10px] uppercase font-black tracking-widest py-2">Entity</TableHead>
                  <TableHead className="text-[10px] uppercase font-black tracking-widest py-2">Anomaly</TableHead>
                  <TableHead className="text-[10px] uppercase font-black tracking-widest py-2">Risk</TableHead>
                  <TableHead className="text-right text-[10px] uppercase font-black tracking-widest py-2">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {!isLoading && alertsData && alertsData.length > 0 ? (
                  alertsData.map((alert: any) => (
                    <TableRow key={alert.id} className="border-b border-border/20 hover:bg-secondary/10">
                      <TableCell className="py-2.5">
                        <p className="font-mono text-xs font-bold">{alert.id}</p>
                        <p className="text-[9px] text-muted-foreground uppercase">{new Date(alert.timestamp).toLocaleTimeString()}</p>
                      </TableCell>
                      <TableCell className="py-2.5 text-xs">{alert.entity}</TableCell>
                      <TableCell className="py-2.5 text-xs text-muted-foreground">{alert.type}</TableCell>
                      <TableCell className="py-2.5">
                        <span className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                          alert.risk === 'Critical' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                          alert.risk === 'High' ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20' :
                          alert.risk === 'Medium' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' :
                          'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                        }`}>
                          {alert.risk}
                        </span>
                      </TableCell>
                      <TableCell className="py-2.5 text-right">
                        {alert.status === "Open" ? (
                          <Button variant="outline" size="sm" className="h-6 text-[9px] uppercase tracking-widest text-red-400 border-red-400/30 hover:bg-red-400/10">
                            Investigate
                          </Button>
                        ) : (
                          <span className="flex items-center justify-end gap-1 text-[9px] text-green-400 uppercase font-bold tracking-widest">
                            <ShieldCheck className="h-3 w-3" /> Resolved
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-32 text-center text-xs text-muted-foreground">
                      {isLoading ? "Connecting to Compliance Feed..." : "No alerts detected in system."}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
