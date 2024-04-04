"use client";

import React from "react";
import { useSidebarStore } from "@/store/use-sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLineIcon, ArrowRightFromLine } from "lucide-react";

import Hints from "@/components/hints";

export default function Toggle() {
  const { isOpen, open, close } = useSidebarStore((state) => state);

  return (
    <div className="flex items-center justify-end">
      <Hints
        label={isOpen ? "Open" : "Close"}
        side="right"
        align="start"
        asChild
      >
        <Button variant="ghost" onClick={isOpen ? close : open}>
          {isOpen ? (
            <ArrowLeftFromLineIcon className="w-4 h-4" />
          ) : (
            <ArrowRightFromLine className="w-4 h-4" />
          )}
        </Button>
      </Hints>
    </div>
  );
}
