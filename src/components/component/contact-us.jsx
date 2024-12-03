"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Link from "next/link";

export function ContactUs() {
  const words = [
    {
      text: "Ready",
    },
    {
      text: "To",
    },
    {
      text: "Begin?",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="h-[510px] relative w-full overflow-hidden bg-black flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      {/* <h1
        className={cn(
          "md:text-[48px] leading-[58px] font-[600] text-xl text-white relative z-20"
        )}
      >
        Ready To Begin?
      </h1> */}

      <TypewriterEffectSmooth words={words} />
      <p className="text-center mt-4 text-gray-200/70 relative z-20 w-fit md:w-[400px] leading-[28px]">
        Embark on the journey of creating your very own AI-powered assistant
        effortlessly.
      </p>

      <Link
        href="/contact-us"
        className="relative inline-flex overflow-hidden rounded-full p-[2px] mt-[25px] z-20"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#14CDE3_0%,#393BB2_50%,#2255F6_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/80 hover:bg-gradient-to-r from-[#2255F6] to-[#14CDE3] px-12 py-3 text-lg font-semibold text-white backdrop-blur-3xl">
          Contact Us
        </span>
      </Link>
    </div>
  );
}
