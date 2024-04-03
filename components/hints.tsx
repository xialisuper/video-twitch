import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface HintsProps {
  label: string;
  side: "left" | "right" | "top" | "bottom";
  align: "start" | "end";
  children: React.ReactNode;
  asChild: boolean;
}

export default function Hints({
  label,
  side,
  align,
  children,
  asChild,
}: HintsProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p className="text-sm font-medium text-white">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
