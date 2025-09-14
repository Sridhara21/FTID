"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { userProfileData } from "@/lib/placeholder-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { User, Home, Hash, Mail } from "lucide-react";

export function UserProfileCard() {
    const userAvatar = PlaceHolderImages.find((img) => img.id === 'user-avatar');

    return (
        <Card>
            <CardHeader>
                <CardTitle>Personal Profile</CardTitle>
                <CardDescription>Your personal and contact information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                    <Avatar className="h-24 w-24">
                        {userAvatar && (
                          <AvatarImage src={userAvatar.imageUrl} alt="User Avatar" data-ai-hint={userAvatar.imageHint} />
                        )}
                        <AvatarFallback>{userProfileData.fallback}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-2xl font-bold">{userProfileData.name}</h2>
                        <p className="text-muted-foreground">{userProfileData.email}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                        <User className="h-5 w-5 mt-0.5 text-primary flex-shrink-0"/>
                        <div>
                            <p className="font-medium">Name</p>
                            <p className="text-muted-foreground">{userProfileData.name}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                        <Mail className="h-5 w-5 mt-0.5 text-primary flex-shrink-0"/>
                        <div>
                            <p className="font-medium">Email</p>
                            <p className="text-muted-foreground">{userProfileData.email}</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                        <Hash className="h-5 w-5 mt-0.5 text-primary flex-shrink-0"/>
                        <div>
                            <p className="font-medium">FTID Number</p>
                            <p className="text-muted-foreground font-mono">{userProfileData.ftid}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                        <Home className="h-5 w-5 mt-0.5 text-primary flex-shrink-0"/>
                        <div>
                            <p className="font-medium">Address</p>
                            <p className="text-muted-foreground">{userProfileData.address}</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
