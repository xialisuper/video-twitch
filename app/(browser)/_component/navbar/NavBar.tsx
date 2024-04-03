import React from "react";
import Logo from "./logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SearchBar from "./searchBar";
import Action from "./action";

export default function NavBar() {
  return (
    <nav className="fixed top-0 z-49 bg-[#252731]  h-20 w-full px-2 lg:px-4 flex flex-row justify-between items-center shadow-sm">
      <Logo />
      <div className="flex flex-row gap-2 items-center">
        <SearchBar />
        <Action />
      </div>
    </nav>
  );
}
