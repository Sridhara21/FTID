
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
import { Lock } from "lucide-react";

type Consent = {
    id: string;
    name: string;
    purpose: string;
    type: string;
    expiry: string;
    given: boolean;
};

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
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Lock />
                    Consent Management Hub
                </CardTitle>
                <CardDescription>
                    Control how your financial data is accessed by different institutions and applications. Your privacy is paramount.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="multiple" defaultValue={consents.map(c => c.category)} className="w-full space-y-4">
                    {consents.map((category, catIndex) => (
                        <AccordionItem value={category.category} key={category.category} className="border-b-0">
                             <div className="p-4 rounded-lg bg-secondary/30">
                                <AccordionTrigger className="py-0 text-base">
                                   <div>
                                     <h3 className="font-semibold">{category.category}</h3>
                                     <p className="text-sm font-normal text-muted-foreground">{category.description}</p>
                                   </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                    <div className="space-y-4">
                                        {category.consents.map(consent => (
                                            <div key={consent.id} className="flex items-center justify-between p-3 rounded-md bg-background">
                                                <div className="space-y-0.5">
                                                    <p className="font-medium">{consent.name}</p>
                                                    <p className="text-xs text-muted-foreground">
                                                        <span className="font-semibold">Purpose:</span> {consent.purpose} | <span className="font-semibold">Type:</span> {consent.type} | <span className="font-semibold">Expires:</span> {consent.expiry}
                                                    </p>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Label htmlFor={`switch-${consent.id}`} className={consent.given ? 'text-primary' : 'text-muted-foreground'}>
                                                        {consent.given ? 'Allowed' : 'Denied'}
                                                    </Label>
                                                    <Switch
                                                        id={`switch-${consent.id}`}
                                                        checked={consent.given}
                                                        onCheckedChange={() => handleToggle(catIndex, consent.id)}
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
            </CardContent>
        </Card>
    );
}
