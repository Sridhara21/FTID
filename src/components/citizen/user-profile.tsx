
"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
  Server
} from "lucide-react";
import Image from "next/image";

export function UserProfile() {
  const userAvatar = PlaceHolderImages.find((img) => img.id === "user-avatar");

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="bg-muted/30">
            <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                    {userAvatar && (
                    <Image
                        src={userAvatar.imageUrl}
                        alt="User Avatar"
                        data-ai-hint={userAvatar.imageHint}
                        width={96}
                        height={96}
                        className="rounded-full"
                    />
                    )}
                    <AvatarFallback>{userProfileData.fallback}</AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-3xl font-bold">{userProfileData.name}</h1>
                    <p className="text-muted-foreground font-mono">{userProfileData.ftid}</p>
                </div>
            </div>
        </CardHeader>
        <CardContent className="pt-6">
            <Tabs defaultValue="verification">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="verification"><ShieldCheck className="mr-2 h-4 w-4" />Identity Verification</TabsTrigger>
                    <TabsTrigger value="security"><Lock className="mr-2 h-4 w-4" />Security Overview</TabsTrigger>
                    <TabsTrigger value="history"><History className="mr-2 h-4 w-4" />Consent History</TabsTrigger>
                </TabsList>
                
                <TabsContent value="verification" className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Identity Verification Hub</CardTitle>
                            <CardDescription>Status of your linked identity documents.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                                <div className="flex items-center gap-3">
                                    <CreditCard className="h-5 w-5 text-primary"/>
                                    <div>
                                        <p className="font-medium">PAN</p>
                                        <p className="text-xs text-muted-foreground font-mono">{userProfileData.pan.number}</p>
                                    </div>
                                </div>
                                <Badge variant={userProfileData.pan.status === 'Verified' ? 'default' : 'secondary'} className={userProfileData.pan.status === 'Verified' ? 'bg-green-500/20 text-green-400 border-green-500/20' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20'}>
                                    {userProfileData.pan.status}
                                </Badge>
                            </div>
                             <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                                <div className="flex items-center gap-3">
                                    <User className="h-5 w-5 text-primary"/>
                                    <div>
                                        <p className="font-medium">Aadhaar</p>
                                        <p className="text-xs text-muted-foreground font-mono">{userProfileData.aadhaar.number}</p>
                                    </div>
                                </div>
                                <Badge variant={userProfileData.aadhaar.status.includes('Verified') ? 'default' : 'secondary'} className={userProfileData.aadhaar.status.includes('Verified') ? 'bg-green-500/20 text-green-400 border-green-500/20' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20'}>
                                    {userProfileData.aadhaar.status}
                                </Badge>
                            </div>
                             <div>
                                <h3 className="text-sm font-medium text-muted-foreground mb-2 mt-4">Bank KYC Status</h3>
                                <div className="space-y-2">
                                    {userProfileData.bankKyc.map(kyc => (
                                        <div key={kyc.bank} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                                            <div className="flex items-center gap-3">
                                                <Landmark className="h-5 w-5 text-primary"/>
                                                <p className="font-medium">{kyc.bank}</p>
                                            </div>
                                            <Badge variant={kyc.status === 'Verified' ? 'default' : 'secondary'} className={kyc.status === 'Verified' ? 'bg-green-500/20 text-green-400 border-green-500/20' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20'}>
                                                {kyc.status}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                
                <TabsContent value="security" className="mt-4">
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Active Devices</CardTitle>
                                <CardDescription>Devices with an active FTID session.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {userProfileData.security.devices.map(device => (
                                    <div key={device.id} className="flex items-center gap-4 py-2">
                                        {device.type === 'Mobile' ? <Smartphone className="h-6 w-6 text-muted-foreground" /> : <Server className="h-6 w-6 text-muted-foreground" />}
                                        <div>
                                            <p className="font-medium">{device.name}</p>
                                            <p className="text-xs text-muted-foreground">{device.location} &middot; Last login: {new Date(device.lastLogin).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Login History</CardTitle>
                                <CardDescription>Last few login activities on your account.</CardDescription>
                            </CardHeader>
                            <CardContent>
                               <Table>
                                   <TableHeader>
                                       <TableRow>
                                           <TableHead>Date</TableHead>
                                           <TableHead>Action</TableHead>
                                           <TableHead className="text-right">Status</TableHead>
                                       </TableRow>
                                   </TableHeader>
                                   <TableBody>
                                       {userProfileData.security.loginHistory.map(entry => (
                                           <TableRow key={entry.id}>
                                               <TableCell>{entry.date}</TableCell>
                                               <TableCell>{entry.action}</TableCell>
                                               <TableCell className="text-right">
                                                   <Badge variant={entry.status === 'Success' ? 'default' : 'destructive'}>{entry.status}</Badge>
                                               </TableCell>
                                           </TableRow>
                                       ))}
                                   </TableBody>
                               </Table>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="history" className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Consent History Log</CardTitle>
                            <CardDescription>An immutable audit trail of all consent-related activities.</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <Table>
                               <TableHeader>
                                   <TableRow>
                                       <TableHead>Date</TableHead>
                                       <TableHead>Entity</TableHead>
                                       <TableHead>Action</TableHead>
                                       <TableHead>Details</TableHead>
                                   </TableRow>
                               </TableHeader>
                               <TableBody>
                                   {userProfileData.consentHistory.map(entry => (
                                       <TableRow key={entry.id}>
                                           <TableCell>{entry.date}</TableCell>
                                           <TableCell>{entry.entity}</TableCell>
                                           <TableCell>
                                                <Badge variant={entry.action.includes('Granted') || entry.action.includes('Renewed') ? 'secondary' : 'outline'} className={entry.action.includes('Granted') || entry.action.includes('Renewed') ? 'bg-green-500/20 text-green-400 border-green-500/20' : 'bg-red-500/20 text-red-400 border-red-500/20'}>
                                                    {entry.action}
                                                </Badge>
                                           </TableCell>
                                           <TableCell className="text-muted-foreground">{entry.details}</TableCell>
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
