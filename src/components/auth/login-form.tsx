
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, User, Loader2, UserPlus, LogIn, ShieldCheck, Fingerprint, ArrowRight, ArrowLeft, CheckCircle2, Zap } from "lucide-react";
import { useAuth, useFirestore } from "@/firebase";
import { initiateEmailSignIn, initiateEmailSignUp, initiateAnonymousSignIn } from "@/firebase/non-blocking-login";
import { setDocumentNonBlocking, addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { doc, collection } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { getPersonaByKeys } from "@/lib/sovereign-seed";

export function LoginForm() {
  const auth = useAuth();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();
  
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [role, setRole] = useState<'citizen' | 'government'>('citizen');
  const [signupStep, setSignupStep] = useState(1);
  const [isBonding, setIsBonding] = useState(false);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [pan, setPan] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [isBiometricVerified, setIsBiometricVerified] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  // Auto-fill government credentials
  useEffect(() => {
    if (role === 'government') {
      setEmail("official@gov.in");
      setPassword("gov_access_2026");
    } else {
      setEmail("");
      setPassword("");
    }
  }, [role]);

  const simulateBiometric = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setIsBiometricVerified(true);
      toast({
        title: "Biometrics Verified",
        description: "Sovereign fingerprint hash bonded to session enclave.",
      });
    }, 2000);
  };

  const handleAction = async () => {
    // Government Bypass for Demo
    if (role === 'government' && email === "official@gov.in" && password === "gov_access_2026") {
      setIsLoading(true);
      // Sign in anonymously for session context in prototype
      initiateAnonymousSignIn(auth);
      setTimeout(() => {
        router.push("/government");
      }, 1500);
      return;
    }

    if (mode === 'signup') {
      if (signupStep === 1) {
        if (!fullName || !pan || !aadhaar || !email) {
          toast({ variant: "destructive", title: "Missing Identity Data", description: "All fields required for sovereign binding." });
          return;
        }
        setIsBonding(true);
        setTimeout(() => {
          setIsBonding(false);
          setSignupStep(2);
          toast({
            title: "Identity Validated",
            description: "Institutional match found in FTID Sovereign Node.",
          });
        }, 2500);
        return;
      }

      if (!password || !isBiometricVerified) {
        toast({ variant: "destructive", title: "Security Hub Incomplete", description: "Complete biometric scan and set password." });
        return;
      }
    } else {
      if (!email || !password) {
        toast({ variant: "destructive", title: "Missing Credentials", description: "Email and password are required." });
        return;
      }
    }

    setIsLoading(true);
    try {
      if (mode === 'signup') {
        initiateEmailSignUp(auth, email, password);
        
        setTimeout(() => {
          if (auth.currentUser && role === 'citizen' && db) {
            const uid = auth.currentUser.uid;
            const citizenRef = doc(db, "citizens", uid);
            
            // Check Sovereign Seed Registry for specific Persona data
            const persona = getPersonaByKeys(pan, aadhaar);
            
            // Initial Profile Document
            setDocumentNonBlocking(citizenRef, {
              id: uid,
              fullName: persona?.fullName || fullName,
              email,
              pan: { number: pan.toUpperCase(), status: "Verified" },
              aadhaar: { number: aadhaar, status: "Verified" },
              currentCreditScore: persona?.creditScore || 785,
              tier: persona?.tier || "Tier1",
              isLinked: true,
              registrationDate: new Date().toISOString(),
              onboardingComplete: true
            }, { merge: true });

            // Seeding Transactions
            if (persona) {
                const txnCol = collection(db, "transactions");
                persona.transactions.forEach(t => {
                    addDocumentNonBlocking(txnCol, {
                        description: t.desc,
                        amount: t.amount,
                        type: t.class === 'Income' ? 'cbdc_transfer' : 'essential',
                        status: "completed",
                        classification: t.class,
                        originInstitution: t.channel,
                        destinationInstitution: t.desc,
                        citizenId: uid,
                        timestamp: new Date().toISOString()
                    });
                });

                // Seeding Portfolio
                const portCol = collection(db, "citizens", uid, "investments");
                persona.investments.forEach(inv => {
                    addDocumentNonBlocking(portCol, {
                        name: inv.name,
                        type: inv.type,
                        value: inv.value,
                        taxClass: "LTCG"
                    });
                });
            }
          }
          router.push(role === 'citizen' ? "/citizen" : "/government");
        }, 2000);
      } else {
        initiateEmailSignIn(auth, email, password);
        setTimeout(() => {
          router.push(role === 'citizen' ? "/citizen" : "/government");
        }, 1500);
      }
    } catch (error: any) {
      toast({ variant: "destructive", title: "Auth Error", description: "Verification failed. Use pre-filled creds or valid seed IDs." });
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-6">
      <Tabs defaultValue="citizen" className="w-full" onValueChange={(v) => {
        setRole(v as 'citizen' | 'government');
        setSignupStep(1);
      }}>
        <TabsList className="grid w-full grid-cols-2 h-12 bg-secondary/30 p-1">
          <TabsTrigger value="citizen" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold uppercase text-[10px] tracking-widest">
            <User className="mr-2 h-4 w-4" /> Citizen
          </TabsTrigger>
          <TabsTrigger value="government" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold uppercase text-[10px] tracking-widest">
            <Building className="mr-2 h-4 w-4" /> Government
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="citizen">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
            <CardHeader className="text-center pb-6 border-b border-border/30 bg-secondary/10">
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-black tracking-tight uppercase">
                {mode === 'signin' ? 'Citizen Portal' : 'Establish Sovereign ID'}
              </CardTitle>
              {mode === 'signup' && (
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className={`h-1.5 w-8 rounded-full ${signupStep === 1 ? 'bg-primary' : 'bg-primary/20'}`} />
                  <div className={`h-1.5 w-8 rounded-full ${signupStep === 2 ? 'bg-primary' : 'bg-primary/20'}`} />
                </div>
              )}
            </CardHeader>
            
            <CardContent className="space-y-4 pt-8 min-h-[380px] flex flex-col justify-center">
              {isBonding ? (
                <div className="flex flex-col items-center justify-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="relative">
                    <Loader2 className="h-16 w-16 animate-spin text-primary opacity-20" />
                    <Zap className="h-8 w-8 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-xs font-black uppercase tracking-institutional text-primary">Bonding Sovereign Streams</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Querying UIDAI & Tax Authority Nodes...</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {mode === 'signin' ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">FTID / Email</Label>
                        <Input type="email" placeholder="name@ftid.in" className="bg-secondary/20 h-11 border-border/50 font-bold" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Password</Label>
                        <Input type="password" placeholder="••••••••" className="bg-secondary/20 h-11 border-border/50" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {signupStep === 1 ? (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                          <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Full Legal Name</Label>
                            <Input placeholder="As per Aadhaar" className="bg-secondary/20 h-11 border-border/50 font-bold" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">PAN Number</Label>
                              <Input placeholder="ABCDE1234F" className="bg-secondary/20 h-11 border-border/50 font-mono uppercase" value={pan} onChange={(e) => setPan(e.target.value)} maxLength={10} />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Aadhaar ID</Label>
                              <Input placeholder="12 Digits" className="bg-secondary/20 h-11 border-border/50 font-mono" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)} maxLength={12} />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email</Label>
                            <Input type="email" placeholder="test@ftid.in" className="bg-secondary/20 h-11 border-border/50 font-bold" value={email} onChange={(e) => setEmail(e.target.value)} />
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                          <div className="p-6 border-2 border-dashed border-primary/20 rounded-xl bg-primary/5 text-center space-y-4">
                            <div className={`mx-auto p-4 rounded-full w-fit transition-all duration-500 ${isBiometricVerified ? 'bg-green-500/20' : 'bg-primary/10'}`}>
                              {isBiometricVerified ? <CheckCircle2 className="h-10 w-10 text-green-400" /> : <Fingerprint className={`h-10 w-10 text-primary ${isScanning ? 'animate-pulse scale-110' : ''}`} />}
                            </div>
                            <Button variant="outline" className="w-full h-10 border-primary/30 text-[10px] font-black uppercase tracking-widest" onClick={simulateBiometric} disabled={isScanning || isBiometricVerified}>
                              {isScanning ? "Scanning..." : isBiometricVerified ? "Bonded" : "Initiate Biometric Enrolment"}
                            </Button>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Set Password</Label>
                            <Input type="password" placeholder="Minimum 12 chars" className="bg-secondary/20 h-11 border-border/50" value={password} onChange={(e) => setPassword(e.target.value)} />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="flex gap-3 pt-4">
                {mode === 'signup' && signupStep === 2 && (
                  <Button variant="ghost" className="h-12 px-4 border border-border/50" onClick={() => setSignupStep(1)}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                )}
                {!isBonding && (
                  <Button 
                    className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-institutional text-xs shadow-xl shadow-primary/10"
                    disabled={isLoading || isScanning}
                    onClick={handleAction}
                  >
                    {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : (
                      mode === 'signin' ? <LogIn className="mr-2 h-4 w-4" /> : (
                        signupStep === 1 ? <ArrowRight className="mr-2 h-4 w-4" /> : <UserPlus className="mr-2 h-4 w-4" />
                      )
                    )}
                    {mode === 'signin' ? ' Sign In' : (signupStep === 1 ? ' Next Step' : ' Establish ID')}
                  </Button>
                )}
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col gap-4 border-t border-border/30 pt-6">
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest text-center">
                {mode === 'signin' ? "Don't have an FTID?" : "Already registered?"}
              </p>
              <Button 
                variant="outline" 
                className="w-full h-10 border-border/50 hover:bg-secondary/50 text-[10px] font-black uppercase tracking-widest"
                onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setSignupStep(1); }}
              >
                {mode === 'signin' ? "Establish New Sovereign ID" : "Back to Institutional Login"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="government">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-8 border-b border-border/30 bg-secondary/10">
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-black tracking-tight uppercase">Government Hub</CardTitle>
              <CardDescription className="text-[10px] font-bold uppercase tracking-widest mt-2">Authorized Analytical Access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-8">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Official ID</Label>
                <Input type="email" placeholder="official@gov.in" className="bg-secondary/20 h-11 border-border/50 font-bold" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Security Credentials</Label>
                <Input type="password" placeholder="••••••••" className="bg-secondary/20 h-11 border-border/50" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-institutional text-xs" disabled={isLoading} onClick={handleAction}>
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Authorize Session"}
              </Button>
            </CardContent>
            <CardFooter className="bg-secondary/10 p-4 text-center">
              <p className="text-[9px] text-muted-foreground font-black uppercase tracking-sovereign leading-relaxed">
                Unauthorized access prohibited. All actions logged via immutable audit trails.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
