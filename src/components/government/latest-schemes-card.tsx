"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { schemes } from "@/lib/placeholder-data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Megaphone, ArrowRight } from "lucide-react";

export function LatestSchemesCard() {
  const previewSchemes = schemes.slice(0, 4);

  return (
    <Dialog>
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Megaphone />
            Latest Government Schemes
          </CardTitle>
          <CardDescription>
            New initiatives and programs launched by the government.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="space-y-4">
            {previewSchemes.map((scheme, index) => (
              <div key={scheme.title}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-lg flex items-center justify-center">
                    <scheme.icon className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{scheme.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {scheme.description}
                    </p>
                  </div>
                </div>
                {index < previewSchemes.length - 1 && (
                  <Separator className="my-4" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              View All Schemes <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Latest Government Schemes</DialogTitle>
          <DialogDescription>
            All new initiatives and programs.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] w-full pr-4">
          <div className="space-y-4">
            {schemes.map((scheme, index) => (
              <div key={scheme.title}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-lg flex items-center justify-center">
                    <scheme.icon className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{scheme.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {scheme.description}
                    </p>
                  </div>
                </div>
                {index < schemes.length - 1 && <Separator className="my-4" />}
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
