
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Loader2, UserPlus, LogIn, ShieldCheck, Fingerprint, ArrowRight, ArrowLeft, CheckCircle2, Zap } from "lucide-react";
import { useAuth, useFirestore, useUser } from "@/local";
import { initiateAnonymousSignIn, initiateEmailSignIn, initiateEmailSignUp } from "@/local/non-blocking-login";
import { setDocumentNonBlocking, addDocumentNonBlocking } from "@/local/non-blocking-updates";
import { doc, collection } from "@/local/store";
import { useToast } from "@/hooks/use-toast";
import { getPersonaByKeys } from "@/lib/sovereign-seed";

export function LoginForm() {
  const auth = useAuth();
  const db = useFirestore();
  const { user } = useUser();
  const router = useRouter();
  const { toast } = useToast();
  
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [signupStep, setSignupStep] = useState(1);
  const [isBonding, setIsBonding] = useState(false);
  const [hasBonded, setHasBonded] = useState(false);
  
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [pan, setPan] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [isBiometricVerified, setIsBiometricVerified] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    if (mode === 'signin') {
      setPhoneNumber("");
      setPassword("");
    }
  }, [mode]);

  useEffect(() => {
    if (user && mode === 'signup' && !hasBonded && db) {
      setHasBonded(true);
      const uid = user.uid;
      const persona = getPersonaByKeys(pan, aadhaar);
      const citizenRef = doc(db, "citizens", uid);
      
      setDocumentNonBlocking(citizenRef, {
        id: uid,
        fullName: persona?.fullName || fullName,
        phoneNumber: phoneNumber,
        pan: { number: pan.toUpperCase(), status: "Verified" },
        aadhaar: { number: aadhaar, status: "Verified" },
        currentCreditScore: persona?.creditScore || 850,
        tier: "Black", // Forced for Elite Testing
        isLinked: true,
        registrationDate: new Date().toISOString(),
        onboardingComplete: true
      }, { merge: true });

      if (persona) {
        const txnCol = collection(db, "transactions");
        persona.transactions.forEach(t => {
          addDocumentNonBlocking(txnCol, {
            ...t,
            citizenId: uid,
            status: "completed",
            timestamp: new Date().toISOString()
          });
        });
      }
      
      // High-speed redirect for institutional feel
      setTimeout(() => router.push("/citizen"), 50);
    }
  }, [user, mode, hasBonded, db, router, pan, aadhaar, fullName, phoneNumber]);

  const simulateBiometric = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setIsBiometricVerified(true);
      toast({
        title: "Biometrics Verified",
        description: "Sovereign fingerprint hash bonded to session enclave.",
      });
    }, 100);
  };

  const handleAction = async () => {
    if (!auth) return;

    if (mode === 'signup') {
      if (signupStep === 1) {
        if (!fullName || !pan || !aadhaar || !phoneNumber) {
          toast({ variant: "destructive", title: "Missing Identity Data", description: "All fields required for sovereign binding." });
          return;
        }
        setIsBonding(true);
        setTimeout(() => {
          setIsBonding(false);
          setSignupStep(2);
          toast({ title: "Identity Validated", description: "Institutional match found in FTID Sovereign Node." });
        }, 150);
        return;
      }
      if (!password || !isBiometricVerified) {
        toast({ variant: "destructive", title: "Security Hub Incomplete", description: "Complete biometric scan and set password." });
        return;
      }
    } else if (!phoneNumber || !password) {
      toast({ variant: "destructive", title: "Missing Credentials", description: "Phone number and password are required." });
      return;
    }

    setIsLoading(true);
    try {
      if (mode === 'signup') {
        initiateEmailSignUp(auth, phoneNumber, password);
      } else {
        initiateEmailSignIn(auth, phoneNumber, password);
        // Instant check for current user to speed up redirect
        if (auth.currentUser) {
            router.push("/citizen");
        } else {
            // Short delay if auth isn't immediate
            setTimeout(() => {
                if (auth.currentUser) {
                    router.push("/citizen");
                } else {
                    setIsLoading(false);
                }
            }, 200);
        }
      }
    } catch (error: any) {
      setIsLoading(false);
      toast({ variant: "destructive", title: "Auth Error", description: "Verification failed." });
    }
  };

  return (
    <div className="w-full space-y-6">
          <Card className="border-primary/20 glass-panel overflow-hidden animated-pulse-hover">
            <CardHeader className="text-center pb-6 border-b border-white/40 bg-secondary/10">
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4"><ShieldCheck className="h-8 w-8 text-primary" /></div>
              <CardTitle className="text-2xl font-black tracking-tight uppercase">{mode === 'signin' ? 'Citizen Portal' : 'Establish Sovereign ID'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-8">
              {isBonding ? (
                <div className="flex flex-col items-center justify-center space-y-8 py-8 cyber-scanner">
                  <div className="relative">
                    <Loader2 className="h-20 w-20 animate-spin text-primary opacity-20" />
                    <Zap className="h-10 w-10 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                  </div>
                  <div className="text-center space-y-3">
                    <p className="text-sm font-black uppercase tracking-institutional text-primary">Bonding Quantum Sovereign Streams</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Handshaking via Level-0 Interpol Node...</p>
                    <p className="text-[10px] text-primary/50 uppercase tracking-widest font-mono animate-pulse">Decrypting CBDC Layer 2 state...</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {mode === 'signin' ? (
                    <>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Phone Number</Label>
                        <Input type="tel" placeholder="10 Digit Number" className="bg-secondary/20 h-11 border-border/50 font-bold" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} maxLength={10} />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Password</Label>
                        <Input type="password" placeholder="••••••••" className="bg-secondary/20 h-11 border-border/50" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </div>
                    </>
                  ) : (
                    signupStep === 1 ? (
                      <div className="space-y-4">
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
                          <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Phone Number</Label>
                          <Input type="tel" placeholder="10 Digit Number" className="bg-secondary/20 h-11 border-border/50 font-bold" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} maxLength={10} />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className={`p-8 border-2 border-dashed ${isScanning ? 'border-primary cyber-scanner bg-primary/10' : 'border-primary/20 bg-primary/5'} rounded-xl text-center space-y-6 transition-all duration-700`}>
                          <div className={`mx-auto p-5 rounded-full w-fit transition-all duration-500 ${isBiometricVerified ? 'bg-green-500/20 shadow-[0_0_30px_rgba(74,222,128,0.3)]' : 'bg-primary/10'}`}>
                            {isBiometricVerified ? <CheckCircle2 className="h-12 w-12 text-green-400" /> : <Fingerprint className={`h-12 w-12 text-primary ${isScanning ? 'animate-ping' : ''}`} />}
                          </div>
                          <Button variant="outline" className={`w-full h-12 border-primary/30 text-xs font-black uppercase tracking-widest transition-all ${isScanning ? 'bg-primary/20' : ''}`} onClick={simulateBiometric} disabled={isScanning || isBiometricVerified}>
                            {isScanning ? "Processing Quantum Biometrics..." : isBiometricVerified ? "Identity Bonded Cryptographically" : "Initiate Quantum Biometric Enrolment"}
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Set Secure Password</Label>
                          <Input type="password" placeholder="••••••••" className="bg-secondary/20 h-11 border-border/50" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
              <div className="flex gap-3 pt-4">
                {mode === 'signup' && signupStep === 2 && !isBonding && (
                  <Button variant="ghost" className="h-12 px-4 border border-border/50" onClick={() => setSignupStep(1)}><ArrowLeft className="h-4 w-4" /></Button>
                )}
                {!isBonding && (
                  <Button className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-institutional text-xs shadow-xl" disabled={isLoading || isScanning} onClick={handleAction}>
                    {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : (mode === 'signin' ? <LogIn className="mr-2 h-4 w-4" /> : (signupStep === 1 ? <ArrowRight className="mr-2 h-4 w-4" /> : <UserPlus className="mr-2 h-4 w-4" />))}
                    {mode === 'signin' ? ' Sign In' : (signupStep === 1 ? ' Next Step' : ' Establish ID')}
                  </Button>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 border-t border-border/30 pt-6">
              <Button variant="outline" className="w-full h-10 border-border/50 text-[10px] font-black uppercase tracking-widest" onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setSignupStep(1); }}>
                {mode === 'signin' ? "Establish New Sovereign ID" : "Back to Institutional Login"}
              </Button>
            </CardFooter>
          </Card>
    </div>
  );
}
