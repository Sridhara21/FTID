"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { consentData } from "@/lib/placeholder-data";
import { Lock, ShieldCheck } from "lucide-react";

export function ConsentManagement() {
    const [consents, setConsents] = useState(consentData);

    const handleToggle = (categoryId: number, consentId: string) => {
        const newConsents = [...consents];
        const category = newConsents[categoryId];
        const consent = category.consents.find(c => c.id === consentId);
        if (consent) {
            consent.given = !consent.given;
            setConsents(newConsents);
        }
    };

    return (
        <Card className="border-primary/20 bg-card/50">
            <CardHeader className="border-b border-border/50 pb-4">
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Lock className="text-primary" /> 3rd Party App Consents
                        </CardTitle>
                        <CardDescription className="text-xs">
                            Manage data sharing for external fintech and analytical applications.
                        </CardDescription>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        <ShieldCheck className="h-3 w-3" /> Sovereign Secure
                    </div>
                </div>
            </CardHeader>
            <CardContent className="pt-6">
                <Accordion type="multiple" defaultValue={consents.map(c => c.category)} className="w-full space-y-4">
                    {consents.map((category, catIndex) => (
                        <AccordionItem value={category.category} key={category.category} className="border-b-0">
                             <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                                <AccordionTrigger className="py-0 hover:no-underline">
                                   <div className="text-left">
                                     <h3 className="font-bold text-sm uppercase tracking-tight">{category.category}</h3>
                                     <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mt-1">{category.description}</p>
                                   </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <div className="space-y-3">
                                        {category.consents.map(consent => (
                                            <div key={consent.id} className="flex items-center justify-between p-3 rounded-md bg-background/50 border border-border/50">
                                                <div className="space-y-1">
                                                    <p className="text-xs font-bold">{consent.name}</p>
                                                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">
                                                        <span className="opacity-60">PURPOSE:</span> {consent.purpose} &middot; <span className="opacity-60">ACCESS:</span> {consent.type}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Label htmlFor={`switch-${consent.id}`} className={`text-[10px] font-black uppercase tracking-widest ${consent.given ? 'text-primary' : 'text-muted-foreground opacity-50'}`}>
                                                        {consent.given ? 'AUTHORIZED' : 'DENIED'}
                                                    </Label>
                                                    <Switch
                                                        id={`switch-${consent.id}`}
                                                        checked={consent.given}
                                                        onCheckedChange={() => handleToggle(catIndex, consent.id)}
                                                        className="data-[state=checked]:bg-primary"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                             </div>
                        </AccordionItem>
                    ))}
                </Accordion>
                <div className="mt-8 p-4 rounded-lg bg-secondary/20 border border-primary/20">
                    <p className="text-[10px] text-muted-foreground leading-relaxed font-medium">
                        <span className="font-bold text-primary">PRIVACY NOTE:</span> Sovereign identity (PAN, Aadhaar) and mandated welfare data are managed via direct-routing protocols and do not require manual 3rd party consent for core systemic functionality.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
