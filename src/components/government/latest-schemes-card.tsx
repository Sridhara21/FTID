"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { schemes } from "@/lib/placeholder-data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Megaphone } from "lucide-react";

export function LatestSchemesCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Megaphone />
                    Latest Government Schemes
                </CardTitle>
                <CardDescription>
                    New initiatives and programs launched by the government.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[300px] w-full pr-4">
                    <div className="space-y-4">
                        {schemes.map((scheme, index) => (
                            <div key={scheme.title}>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-muted rounded-lg flex items-center justify-center">
                                        <scheme.icon className="h-6 w-6 text-muted-foreground" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-sm">{scheme.title}</h3>
                                        <p className="text-xs text-muted-foreground">{scheme.description}</p>
                                    </div>
                                </div>
                                {index < schemes.length - 1 && <Separator className="my-4" />}
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
