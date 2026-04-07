
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, User, Loader2, UserPlus, LogIn, ShieldCheck } from "lucide-react";
import { useAuth, useFirestore } from "@/firebase";
import { initiateEmailSignIn, initiateEmailSignUp } from "@/firebase/non-blocking-login";
import { setDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { doc, serverTimestamp } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";

export function LoginForm() {
  const auth = useAuth();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();
  
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [role, setRole] = useState<'citizen' | 'government'>('citizen');
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleAction = async () => {
    if (!email || !password || (mode === 'signup' && !fullName)) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in all required fields.",
      });
      return;
    }

    setIsLoading(true);
    try {
      if (mode === 'signup') {
        // For Prototyping: We simulate account creation
        // and manually create the citizen record in Firestore.
        // In a real app, this is handled by a Cloud Function or post-auth hook.
        initiateEmailSignUp(auth, email, password);
        
        // Note: initiateEmailSignUp is non-blocking. 
        // We'll redirect based on the role after a short delay.
        setTimeout(() => {
          if (auth.currentUser && role === 'citizen') {
            const citizenRef = doc(db, "citizens", auth.currentUser.uid);
            setDocumentNonBlocking(citizenRef, {
              id: auth.currentUser.uid,
              fullName,
              email,
              currentCreditScore: 750, // Initial seed score
              isLinked: false,
              registrationDate: new Date().toISOString(),
              pan: { status: "Unlinked" },
              aadhaar: { status: "Unlinked" }
            }, { merge: true });
          }
          router.push(role === 'citizen' ? "/citizen" : "/government");
        }, 1500);
      } else {
        initiateEmailSignIn(auth, email, password);
        setTimeout(() => {
          router.push(role === 'citizen' ? "/citizen" : "/government");
        }, 1000);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Process Failed",
        description: error.message || "An error occurred.",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-6">
      <Tabs defaultValue="citizen" className="w-full" onValueChange={(v) => setRole(v as any)}>
        <TabsList className="grid w-full grid-cols-2 h-12 bg-secondary/30 p-1">
          <TabsTrigger value="citizen" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold uppercase text-[10px] tracking-widest">
            <User className="mr-2 h-4 w-4" />
            Citizen
          </TabsTrigger>
          <TabsTrigger value="government" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold uppercase text-[10px] tracking-widest">
            <Building className="mr-2 h-4 w-4" />
            Government
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="citizen">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-8 border-b border-border/30">
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-black tracking-tight uppercase">
                {mode === 'signin' ? 'Citizen Portal' : 'Register FTID'}
              </CardTitle>
              <CardDescription className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-2">
                {mode === 'signin' 
                  ? 'Access your digital sovereign identity' 
                  : 'Establish your institutional financial presence'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-8">
              {mode === 'signup' && (
                <div className="space-y-2">
                  <Label htmlFor="full-name" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Full Legal Name</Label>
                  <Input 
                    id="full-name" 
                    placeholder="Enter as per Aadhaar" 
                    className="bg-secondary/20 h-11 border-border/50 font-bold"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email / FTID ID</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@ftid.in" 
                  className="bg-secondary/20 h-11 border-border/50 font-bold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Sovereign Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  className="bg-secondary/20 h-11 border-border/50"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button 
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-institutional text-xs shadow-xl shadow-primary/10"
                disabled={isLoading}
                onClick={handleAction}
              >
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : (
                  mode === 'signin' ? <><LogIn className="mr-2 h-4 w-4" /> Sign In</> : <><UserPlus className="mr-2 h-4 w-4" /> Create Account</>
                )}
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 border-t border-border/30 pt-6">
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                {mode === 'signin' ? "Don't have an FTID?" : "Already registered?"}
              </p>
              <Button 
                variant="outline" 
                className="w-full h-10 border-border/50 hover:bg-secondary/50 text-[10px] font-black uppercase tracking-widest"
                onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
              >
                {mode === 'signin' ? "Establish New Sovereign ID" : "Back to Institutional Login"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="government">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-8 border-b border-border/30">
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-black tracking-tight uppercase">Government Hub</CardTitle>
              <CardDescription className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-2">
                Authorized Regulatory & Analytical Access
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-8">
              <div className="space-y-2">
                <Label htmlFor="gov-email" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Official Email</Label>
                <Input 
                  id="gov-email" 
                  type="email" 
                  placeholder="official@gov.in" 
                  className="bg-secondary/20 h-11 border-border/50 font-bold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gov-password" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Security Credentials</Label>
                <Input 
                  id="gov-password" 
                  type="password" 
                  className="bg-secondary/20 h-11 border-border/50"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button 
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-institutional text-xs"
                disabled={isLoading}
                onClick={handleAction}
              >
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Authorize Official Session"}
              </Button>
            </CardContent>
            <CardFooter className="bg-secondary/10 p-4 text-center">
              <p className="text-[9px] text-muted-foreground font-black uppercase tracking-sovereign leading-relaxed">
                Unauthorized access to the Sovereign Data Hub is prohibited. All actions are logged via immutable audit trails.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
