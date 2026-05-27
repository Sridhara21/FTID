
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CreditCard, LogOut, Settings, User } from "lucide-react";
import { userProfileData } from "@/lib/placeholder-data";

export function UserNav() {
  const pathname = usePathname();
  const isGovernment = pathname.startsWith('/government');

  const userAvatarId = isGovernment ? "gov-avatar" : "user-avatar";
  const userAvatar = PlaceHolderImages.find((img) => img.id === userAvatarId);
  const fallback = isGovernment ? "GOV" : userProfileData.fallback;
  const name = isGovernment ? "Government Official" : userProfileData.name;
  const phoneNumber = isGovernment ? "9999999999" : userProfileData.phoneNumber;
  const profileLink = isGovernment ? "/government" : "/citizen/profile";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            {userAvatar && (
              <Image
                src={userAvatar.imageUrl}
                alt="User Avatar"
                width={40}
                height={40}
                data-ai-hint={userAvatar.imageHint}
                className="rounded-full object-cover"
              />
            )}
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {phoneNumber}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
             <Link href={profileLink}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
