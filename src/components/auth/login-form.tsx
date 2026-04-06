"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, User, Loader2 } from "lucide-react";
import { useAuth } from "@/firebase";
import { initiateEmailSignIn } from "@/firebase/non-blocking-login";
import { useToast } from "@/hooks/use-toast";

export function LoginForm() {
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (role: 'citizen' | 'government') => {
    if (!email || !password) {
      toast({
        variant: "destructive",
        title: "Missing Credentials",
        description: "Please enter both email and password.",
      });
      return;
    }

    setIsLoading(true);
    try {
      // In a real app, FTID would map to an email or we use custom auth.
      // For this prototype, we use the provided email/pass.
      initiateEmailSignIn(auth, email, password);
      // Auth state change is handled by the provider, but we redirect for UX
      setTimeout(() => {
        router.push(role === 'citizen' ? "/citizen" : "/government");
      }, 1000);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Authentication Failed",
        description: error.message || "Invalid credentials.",
      });
      setIsLoading(false);
    }
  };

  return (
    <Tabs defaultValue="citizen" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
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
        <Card>
          <CardHeader>
            <CardTitle>Citizen Portal</CardTitle>
            <CardDescription>
              Access your personal FTID wallet and financial tools.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="citizen-email">Email / FTID ID</Label>
              <Input 
                id="citizen-email" 
                type="email" 
                placeholder="ravi.kumar@ftid.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="citizen-password">Password</Label>
              <Input 
                id="citizen-password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isLoading}
              onClick={() => handleLogin('citizen')}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign In as Citizen"}
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="government">
        <Card>
          <CardHeader>
            <CardTitle>Government Portal</CardTitle>
            <CardDescription>
              Access administrative dashboards and national data.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="gov-email">Official Email</Label>
              <Input 
                id="gov-email" 
                type="email" 
                placeholder="official@gov.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gov-password">Password</Label>
              <Input 
                id="gov-password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isLoading}
              onClick={() => handleLogin('government')}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign In as Official"}
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
