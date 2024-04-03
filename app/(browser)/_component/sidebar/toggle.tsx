"use client";

import React from "react";
import { useSideBarStore } from "@/store/use-sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLineIcon } from "lucide-react";

export default function Toggle() {
  const { isOpen, open, close } = useSideBarStore((state) => state);

  return (
    <div className="flex items-center justify-end">
      <Button variant="ghost" onClick={isOpen ? close : open}>
        <ArrowLeftFromLineIcon className="w-4 h-4" />
      </Button>
    </div>
  );
}
