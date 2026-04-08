
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Server, ShieldCheck, Link as LinkIcon, Terminal, Globe, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArchitecturePage() {
    const firebaseConsoleUrl = "https://console.firebase.google.com/project/studio-124316649-8e317/firestore/data";

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">System Architecture</h1>
                    <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-institutional mt-1">
                        Technical Infrastructure & Sovereign Node Metadata
                    </p>
                </div>
                <Button variant="outline" className="h-9 border-primary/30 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest" asChild>
                    <a href={firebaseConsoleUrl} target="_blank" rel="noopener noreferrer">
                        External Console View <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                    </a>
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 border-border/50 bg-card/50">
                    <CardHeader className="border-b border-border/30">
                        <CardTitle className="text-sm font-black uppercase tracking-institutional flex items-center gap-2">
                            <Server className="h-4 w-4 text-primary" /> Core Tech Stack
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                                <h3 className="text-xs font-bold uppercase mb-2 text-primary">Database Layer</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Google Firebase Firestore (NoSQL). Real-time document-oriented storage with path-based security protocols.
                                </p>
                                <Badge variant="outline" className="mt-3 text-[9px] font-mono">ID: studio-124316649-8e317</Badge>
                            </div>
                            <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                                <h3 className="text-xs font-bold uppercase mb-2 text-primary">Intelligence Engine</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Firebase Genkit powered by Google Gemini 2.0. Handles transaction classification and predictive flow analysis.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                                <h3 className="text-xs font-bold uppercase mb-2 text-primary">Frontend Framework</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Next.js 15 (App Router). High-density React components styled with Tailwind CSS and Shadcn UI.
                                </p>
                            </div>
                            <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                                <h3 className="text-xs font-bold uppercase mb-2 text-primary">Security Protocol</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Sovereign Identity Bonding via PAN/Aadhaar nodes. Session encryption with biometric enclave simulation.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-border/50 bg-card/50">
                    <CardHeader className="border-b border-border/30">
                        <CardTitle className="text-sm font-black uppercase tracking-institutional flex items-center gap-2">
                            <Database className="h-4 w-4 text-primary" /> Schema Entities
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-3">
                        {["Citizen Node", "Transaction Ledger", "Investment Bond", "Tax Record Hub", "Subsidy Registry"].map(node => (
                            <div key={node} className="flex items-center justify-between p-2.5 rounded border border-border/50 bg-background/40">
                                <span className="text-[10px] font-bold uppercase">{node}</span>
                                <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
                            </div>
                        ))}
                        <div className="mt-6 p-3 bg-primary/5 border border-primary/20 rounded-md">
                            <p className="text-[9px] text-muted-foreground italic leading-relaxed">
                                All entities are mapped to Firebase Firestore paths as defined in the master technical blueprint (backend.json).
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="border-border/50 bg-card/50">
                <CardHeader className="border-b border-border/30">
                    <CardTitle className="text-sm font-black uppercase tracking-institutional flex items-center gap-2">
                        <Terminal className="h-4 w-4 text-primary" /> Institutional API Connectivity
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-secondary/20">
                            <tr>
                                <th className="p-3 text-[10px] font-black uppercase tracking-widest">Protocol Node</th>
                                <th className="p-3 text-[10px] font-black uppercase tracking-widest">Status</th>
                                <th className="p-3 text-[10px] font-black uppercase tracking-widest">Latency</th>
                                <th className="p-3 text-[10px] font-black uppercase tracking-widest">Auth Level</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs font-mono">
                            <tr className="border-b border-border/30 hover:bg-secondary/10 transition-colors">
                                <td className="p-3">UIDAI_AADHAAR_BOND</td>
                                <td className="p-3 text-green-400 font-bold uppercase tracking-tighter">Connected</td>
                                <td className="p-3 opacity-60">12ms</td>
                                <td className="p-3">Level 4 (Full Audit)</td>
                            </tr>
                            <tr className="border-b border-border/30 hover:bg-secondary/10 transition-colors">
                                <td className="p-3">ITD_PAN_TAX_STREAM</td>
                                <td className="p-3 text-green-400 font-bold uppercase tracking-tighter">Connected</td>
                                <td className="p-3 opacity-60">45ms</td>
                                <td className="p-3">Level 3 (Analytical)</td>
                            </tr>
                            <tr className="hover:bg-secondary/10 transition-colors">
                                <td className="p-3">RBI_CBDC_GATEWAY</td>
                                <td className="p-3 text-yellow-400 font-bold uppercase tracking-tighter">Syncing</td>
                                <td className="p-3 opacity-60">112ms</td>
                                <td className="p-3">Level 2 (Transfer Only)</td>
                            </tr>
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>
    );
}
