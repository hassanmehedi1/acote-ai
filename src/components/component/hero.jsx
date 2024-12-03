"use client";

import { Button } from "@/components/ui/button";
import { SparklesCore } from "../ui/sparkles";
import Image from "next/legacy/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="text-white pt-[15%] px-4 sm:px-6 lg:px-8 h-screen relative">
      <video
        src={require("../../../public/video.mp4")}
        autoPlay
        loop
        muted
        className="video-container -z-30 absolute h-full w-full object-cover -top-0 left-0"
      />

      <div className="max-w-7xl mx-auto text-center z-50 relative">
        <div className="flex items-center gap-1 justify-center w-fit mx-auto">
          <p className="text-[18px] font-medium uppercase tracking-wide bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
            Welcome to Acote.AI
          </p>
          <svg
            width="12"
            height="15"
            viewBox="0 0 12 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8.65385L7.63636 0L6 6.34615H12L4.36364 15L6 8.65385H0Z"
              fill="url(#paint0_linear_38_1170)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_38_1170"
                x1="2.91941e-08"
                y1="1.78572"
                x2="15.1797"
                y2="4.1812"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.4" />
                <stop offset="1" stop-color="white" stop-opacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* <div className="w-fit mx-auto">
          <svg
            width="221"
            height="1"
            viewBox="0 0 221 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="-4.37114e-08"
              y1="0.5"
              x2="221"
              y2="0.499981"
              stroke="url(#paint0_linear_38_1171)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_38_1171"
                x1="4.37114e-08"
                y1="1.5"
                x2="221"
                y2="1.49998"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.495" stop-color="white" stop-opacity="0.43" />
                <stop offset="1" stop-color="#999999" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div> */}

        <div className="-ml-8">
          <div className="md:w-[30rem] h-5 relative mx-auto">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-2/3 h-10 mx-auto"
              particleColor="#FFFFFF"
            />
          </div>
        </div>

        <h1 className="mt-[20px] text-4xl font-extrabold sm:text-5xl md:text-6xl md:leading-[90px] lg:text-[64px]">
          <span className="bg-gradient-to-r from-[#2255F6] to-[#14CDE3] bg-clip-text text-transparent mr-2">
            Revolutionize
          </span>
          Your
          <br className="hidden lg:inline " />
          <span className="mt-4 block">Untapped Potential With AI</span>
        </h1>

        <p className="mt-4 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-6 md:text-xl md:max-w-4xl">
          One-stop shop for vertically integrated Artificial Intelligence
          solutions where cutting edge innovation takes place to help businesses
          of all sizes stay ahead of the curve!
        </p>
        <div className="space-y-2 flex flex-col sm:flex-row lg:space-y-0 md:w-max mx-auto mt-10">
          {/* <button
            type="button"
            class="inline-flex items-center px-12 py-3 border-gradient-br-light-blue-gray-900  gradient-border-2 rounded-full text-gray-100 text-lg font-semibold"
          >
            Let&apos;s Talk
          </button> */}

          <Link
            href="/contact-us"
            className="relative inline-flex overflow-hidden rounded-full p-[2px]"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#14CDE3_0%,#393BB2_50%,#2255F6_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 hover:bg-gradient-to-r from-[#2255F6] to-[#14CDE3] px-12 py-3 text-lg font-semibold text-white backdrop-blur-3xl">
              Let&apos;s Talk
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
