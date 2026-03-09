
"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { userProfileData } from "@/lib/placeholder-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  User,
  CreditCard,
  ShieldCheck,
  Landmark,
  History,
  Lock,
  Smartphone,
  Server,
  Terminal,
  FileCheck
} from "lucide-react";
import Image from "next/image";

export function UserProfile() {
  const userAvatar = PlaceHolderImages.find((img) => img.id === "user-avatar");

  return (
    <div className="space-y-6">
      <Card className="border-border/50 overflow-hidden">
        <CardHeader className="bg-secondary/20 pb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative">
                    <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
                        {userAvatar && (
                        <Image
                            src={userAvatar.imageUrl}
                            alt="User Avatar"
                            data-ai-hint={userAvatar.imageHint}
                            width={128}
                            height={128}
                            className="rounded-full object-cover"
                        />
                        )}
                        <AvatarFallback className="text-4xl">{userProfileData.fallback}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 p-2 bg-green-500 rounded-full border-4 border-background shadow-lg">
                        <ShieldCheck className="h-6 w-6 text-white" />
                    </div>
                </div>
                <div className="flex-1 text-center md:text-left pt-2">
                    <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                        <h1 className="text-3xl font-black tracking-tight">{userProfileData.name}</h1>
                        <Badge className="bg-green-500/10 text-green-400 border-green-500/20 h-6 uppercase font-bold text-[10px] tracking-widest">
                            Verified Financial Identity
                        </Badge>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 bg-background/50 px-3 py-1.5 rounded-md border border-border/50 w-fit">
                        <Terminal className="h-3.5 w-3.5 text-primary/70" />
                        <p className="text-sm font-bold font-mono text-primary tracking-widest">FTID: {userProfileData.ftid}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <CreditCard className="h-3.5 w-3.5" />
                            <span className="font-mono tabular-nums">{userProfileData.pan.number}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <User className="h-3.5 w-3.5" />
                            <span className="font-mono tabular-nums">{userProfileData.aadhaar.number}</span>
                        </div>
                    </div>
                </div>
            </div>
        </CardHeader>
        <CardContent className="pt-8">
            <Tabs defaultValue="verification" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-12 bg-secondary/30 p-1 mb-8">
                    <TabsTrigger value="verification" className="data-[state=active]:bg-background data-[state=active]:shadow-md uppercase text-[10px] font-bold tracking-widest">
                        <FileCheck className="mr-2 h-4 w-4" /> Identity Verification
                    </TabsTrigger>
                    <TabsTrigger value="security" className="data-[state=active]:bg-background data-[state=active]:shadow-md uppercase text-[10px] font-bold tracking-widest">
                        <Lock className="mr-2 h-4 w-4" /> Security Architecture
                    </TabsTrigger>
                    <TabsTrigger value="history" className="data-[state=active]:bg-background data-[state=active]:shadow-md uppercase text-[10px] font-bold tracking-widest">
                        <History className="mr-2 h-4 w-4" /> Audit History
                    </TabsTrigger>
                </TabsList>
                
                <TabsContent value="verification" className="mt-0 space-y-6">
                    <Card className="border-border/30">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-base font-bold">Verification Hub</CardTitle>
                            <CardDescription className="text-xs">Sovereign identity documents and institutional KYC status.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 border border-border/30">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-background rounded-md border border-border/50">
                                        <CreditCard className="h-5 w-5 text-primary"/>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider">PAN (Income Tax)</p>
                                        <p className="text-xs text-muted-foreground font-mono tabular-nums">{userProfileData.pan.number}</p>
                                    </div>
                                </div>
                                <Badge className="bg-green-500/10 text-green-400 border-green-500/20 text-[9px] uppercase font-bold tracking-widest">
                                    {userProfileData.pan.status}
                                </Badge>
                            </div>
                             <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 border border-border/30">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-background rounded-md border border-border/50">
                                        <User className="h-5 w-5 text-primary"/>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider">Aadhaar (UIDAI)</p>
                                        <p className="text-xs text-muted-foreground font-mono tabular-nums">{userProfileData.aadhaar.number}</p>
                                    </div>
                                </div>
                                <Badge className="bg-green-500/10 text-green-400 border-green-500/20 text-[9px] uppercase font-bold tracking-widest">
                                    VERIFIED
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border/30">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-base font-bold">Bank-Level KYC Integrity</CardTitle>
                            <CardDescription className="text-xs">Direct reporting from verified financial institutions.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {userProfileData.bankKyc.map(kyc => (
                                    <div key={kyc.bank} className="flex flex-col items-center p-4 rounded-lg bg-secondary/20 border border-border/30 text-center">
                                        <Landmark className="h-6 w-6 text-muted-foreground/60 mb-2"/>
                                        <p className="text-xs font-bold mb-2">{kyc.bank}</p>
                                        <Badge className={kyc.status === 'Verified' ? 'bg-green-500/10 text-green-400 border-green-500/20 text-[9px] uppercase font-bold' : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20 text-[9px] uppercase font-bold'}>
                                            {kyc.status}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                
                <TabsContent value="security" className="mt-0">
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Card className="border-border/30">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-base font-bold">Active Sessions</CardTitle>
                                <CardDescription className="text-xs">Devices with authenticated FTID access.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {userProfileData.security.devices.map(device => (
                                    <div key={device.id} className="flex items-center gap-4 p-3 rounded-md bg-secondary/10 border border-border/20">
                                        <div className="p-2 bg-background border border-border/50 rounded-md">
                                            {device.type === 'Mobile' ? <Smartphone className="h-5 w-5 text-muted-foreground" /> : <Server className="h-5 w-5 text-muted-foreground" />}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs font-bold uppercase tracking-wider">{device.name}</p>
                                            <p className="text-[10px] text-muted-foreground mt-0.5">{device.location} &middot; Last Sync: {new Date(device.lastLogin).toLocaleDateString()}</p>
                                        </div>
                                        <Badge variant="outline" className="text-[9px] font-bold text-green-400 border-green-400/30">ACTIVE</Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                        <Card className="border-border/30">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-base font-bold">Identity Audit Trail</CardTitle>
                                <CardDescription className="text-xs">Security events and login monitoring.</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-0">
                               <Table>
                                   <TableHeader className="bg-secondary/20">
                                       <TableRow className="h-8 hover:bg-transparent">
                                           <TableHead className="text-[10px] uppercase font-bold">Date</TableHead>
                                           <TableHead className="text-[10px] uppercase font-bold">Protocol</TableHead>
                                           <TableHead className="text-right text-[10px] uppercase font-bold">Status</TableHead>
                                       </TableRow>
                                   </TableHeader>
                                   <TableBody>
                                       {userProfileData.security.loginHistory.map(entry => (
                                           <TableRow key={entry.id} className="h-9 hover:bg-secondary/10">
                                               <TableCell className="py-2 text-[10px] font-mono tabular-nums">{entry.date}</TableCell>
                                               <TableCell className="py-2 text-[10px] font-bold uppercase tracking-widest">{entry.action}</TableCell>
                                               <TableCell className="py-2 text-right">
                                                   <Badge className={entry.status === 'Success' ? 'bg-green-500/10 text-green-400 border-green-500/20 text-[8px] h-4' : 'bg-red-500/10 text-red-400 border-red-500/20 text-[8px] h-4'}>{entry.status}</Badge>
                                               </TableCell>
                                           </TableRow>
                                       ))}
                                   </TableBody>
                               </Table>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="history" className="mt-0">
                    <Card className="border-border/30">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-base font-bold">Immutable Consent Log</CardTitle>
                            <CardDescription className="text-xs">Complete audit trail of authorization changes.</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                           <Table>
                               <TableHeader className="bg-secondary/20">
                                   <TableRow className="h-8 hover:bg-transparent">
                                       <TableHead className="text-[10px] uppercase font-bold">Timestamp</TableHead>
                                       <TableHead className="text-[10px] uppercase font-bold">Counterparty</TableHead>
                                       <TableHead className="text-[10px] uppercase font-bold">Action Taken</TableHead>
                                       <TableHead className="text-[10px] uppercase font-bold">Details</TableHead>
                                   </TableRow>
                               </TableHeader>
                               <TableBody>
                                   {userProfileData.consentHistory.map(entry => (
                                       <TableRow key={entry.id} className="h-10 hover:bg-secondary/10">
                                           <TableCell className="py-2 text-[10px] font-mono tabular-nums">{entry.date}</TableCell>
                                           <TableCell className="py-2 text-[10px] font-bold">{entry.entity}</TableCell>
                                           <TableCell className="py-2">
                                                <Badge className={entry.action.includes('Granted') || entry.action.includes('Renewed') ? 'bg-green-500/10 text-green-400 border-green-500/20 text-[8px] uppercase font-bold' : 'bg-red-500/10 text-red-400 border-red-500/20 text-[8px] uppercase font-bold'}>
                                                    {entry.action}
                                                </Badge>
                                           </TableCell>
                                           <TableCell className="py-2 text-[10px] text-muted-foreground italic">{entry.details}</TableCell>
                                       </TableRow>
                                   ))}
                               </TableBody>
                           </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
