"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, User } from "lucide-react";

export function LoginForm() {
  return (
    <Tabs defaultValue="citizen" className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-secondary/50">
        <TabsTrigger value="citizen">
          <User className="mr-2 h-4 w-4" />
          Citizen
        </TabsTrigger>
        <TabsTrigger value="government">
          <Building className="mr-2 h-4 w-4" />
          Government
        </TabsTrigger>
      </TabsList>
      <TabsContent value="citizen">
        <Card className="bg-card/80 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle>Citizen Portal</CardTitle>
            <CardDescription>
              Access your personal FTID wallet and financial tools.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="citizen-email">Email</Label>
              <Input id="citizen-email" type="email" placeholder="citizen@email.com" className="bg-secondary/50 border-white/10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="citizen-password">Password</Label>
              <Input id="citizen-password" type="password" className="bg-secondary/50 border-white/10" />
            </div>
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/citizen">Sign In as Citizen</Link>
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="government">
        <Card className="bg-card/80 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle>Government Portal</CardTitle>
            <CardDescription>
              Access administrative dashboards and national data.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="gov-email">Email</Label>
              <Input id="gov-email" type="email" placeholder="official@gov.org" className="bg-secondary/50 border-white/10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gov-password">Password</Label>
              <Input id="gov-password" type="password" className="bg-secondary/50 border-white/10" />
            </div>
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/government">Sign In as Official</Link>
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
