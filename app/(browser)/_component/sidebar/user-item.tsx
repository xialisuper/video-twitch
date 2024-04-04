"use client";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebarStore } from "@/store/use-sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface UserItemProps {
  userName: string;
  imageUrl: string;
}

export default function UserItem({ userName, imageUrl }: UserItemProps) {
  const { isOpen } = useSidebarStore((state) => state);
  return (
    <Link href={`/u/${userName}`}>
      <Button
        variant={"ghost"}
        className={cn("flex flex-row  gap-2 my-2 w-full item-center h-12 ", {
          "justify-start": isOpen,   
          "justify-center": !isOpen,
        })}
      >
        <Avatar>
          <AvatarImage src={imageUrl} alt="@user avatar" />
          <AvatarFallback>{userName}</AvatarFallback>
        </Avatar>
        {isOpen && <p>{userName}</p>}
      </Button>
    </Link>
  );
}
