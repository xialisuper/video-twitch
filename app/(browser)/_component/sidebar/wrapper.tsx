"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/use-sidebar";

interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  const { isOpen } = useSidebarStore((state) => state);
  return (
    <aside
      className={cn(
        "fixed bg-background h-full left-0 border-r border-[#2d2e35] z-50, transition-all duration-150",
        {
          "w-[60px]": isOpen,
          "w-[200px]": !isOpen,
        }
      )}
    >
      {children}
    </aside>
  );
}
