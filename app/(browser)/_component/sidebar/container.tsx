"use client";

import React from "react";

import { useSidebarStore } from "@/store/use-sidebar";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  // read data from sidebarstore
  const { isOpen, open, close } = useSidebarStore((state) => state);

  return (
    <div className={cn("transition-all", isOpen ? "ml-[60px]" : "ml-[200px]")}>
      {children}
    </div>
  );
}
