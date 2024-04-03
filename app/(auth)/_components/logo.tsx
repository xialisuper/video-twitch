import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  // from 200 to 800
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function Logo() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white rounded-full p-1">
          <Image
            src={"/spooky.svg"}
            alt={"Gamehub Logo"}
            width={48}
            height={48}
          />
        </div>
        <p className="text-2xl font-bold">Gamehub</p>
        <p className=" font-bold">Lets play</p>
      </div>
    </div>
  );
}
