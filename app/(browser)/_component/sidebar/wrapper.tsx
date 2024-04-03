import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <aside className="fixed w-60 bg-background h-full left-0 border-r border-[#2d2e35] z-50 ">
      {children}
    </aside>
  );
}
