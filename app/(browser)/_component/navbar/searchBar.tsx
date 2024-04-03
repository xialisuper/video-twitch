"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");

  const router = useRouter();
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (!value) return;
    event.preventDefault();
    // route push url with query like '/search?q=value'

    // delete value space
    // ToDo 这里需要在后续跳转/search?q=value
    const trimmedValue = value.trim();

    router.push(`?q=${trimmedValue}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-row  items-center">
      <Input
        className="w-[200px] focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        type="submit"
        variant={"secondary"}
        size={"sm"}
        className="rounded-l-none"
      >
        <SearchIcon className="w-5 h-5 text-muted-foreground hover:opacity-80       " />
      </Button>
    </form>
  );
}
