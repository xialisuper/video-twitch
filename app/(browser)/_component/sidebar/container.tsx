"use client";

import React, { useEffect, useState } from "react";

import { useSidebarStore } from "@/store/use-sidebar";

import { cn } from "@/lib/utils";
import useMediaQuery from "@/lib/hooks/use-media-query";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  // read data from sidebarstore
  const { isOpen, open, close } = useSidebarStore((state) => state);



  // 根据屏幕宽度 以768为分界值 进行侧边栏的开闭.
  // 侧边栏在小屏幕下关闭, 大屏幕下打开.
  const isCollapse = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    if (isCollapse) {
      close();
    } else {
      open();
    }
  }, [close, isCollapse, open]);

  return (
    <div className={cn("transition-all", isOpen ? "ml-[200px]" : "ml-[60px]")}>
      {children}
    </div>
  );
}
