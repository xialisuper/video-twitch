import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  // from 200 to 800
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function Logo() {
  return (
    <Link href="/" className="flex flex-row items-center gap-2">
      <div className="bg-white rounded-full p-1  hover:opacity-80  ">
        <Image
          src={"/spooky.svg"}
          alt={"Gamehub Logo"}
          width={32}
          height={32}
        />
      </div>
      <div className="hidden md:flex flex-col items-start transition">
        <p className=" text-sm font-bold">Gamehub</p>
        <p className=" text-xs opacity-60">Let&apos;s play</p>
      </div>
    </Link>
  );
}
