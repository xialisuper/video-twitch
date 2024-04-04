import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cva, type VariantProps } from "class-variance-authority";

/// 用于自定义component属性

const avatarVariants = cva("", {
  variants: {
    // variant: {
    //   default: "bg-primary text-primary-foreground hover:bg-primary/90",

    // },
    size: {
      default: "h-8 w-8 ",
      lg: "h-12 w-12",
    },
  },
  defaultVariants: {
    // variant: "default",
    size: "default",
  },
});

interface UserAvatarProps extends VariantProps<typeof avatarVariants> {
  imageUrl: string;
  userName: string;
  isLive?: boolean;
  showBadge?: boolean;
}

export default function UserAvatar({
  imageUrl,
  userName,
  isLive,
  showBadge,
  size,
}: UserAvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={imageUrl} alt="@user avatar" className="object-cover" />
      <AvatarFallback>{userName}</AvatarFallback>
    </Avatar>
  );
}
