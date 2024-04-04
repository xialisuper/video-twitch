"use client";

import React, { useEffect, useState } from "react";

import { useSidebarStore } from "@/store/use-sidebar";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  // read data from sidebarstore
  const { isOpen, open, close } = useSidebarStore((state) => state);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // 根据屏幕宽度 以768为分界值 进行侧边栏的开闭.
  // 侧边栏在小屏幕下关闭, 大屏幕下打开.
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        close();
      } else {
        open();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [close, open]);

  return (
    <div className={cn("transition-all", isOpen ? "ml-[200px]" : "ml-[60px]")}>
      {children}
    </div>
  );
}
