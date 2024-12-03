import { Button } from "@/components/ui/button";
import Image from "next/image";
import aboutPic from "../../../public/aboutPic.png";

export function About() {
  return (
    <div className="bg-aboutBg bg-no-repeat bg-cover text-white" id="about">
      <div className="container mx-auto px-4 py-12 lg:flex lg:items-center lg:justify-between lg:py-32 md:gap-24">
        <div className="space-y-6 lg:w-2/3 lg:space-y-8">
          <div className="relative">
            <div className="absolute top-0 left-0">
              <svg
                width="166"
                height="36"
                viewBox="0 0 166 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.90894"
                  y="1.02942"
                  width="160.182"
                  height="33.9412"
                  stroke="#0066FF"
                />
                <rect width="6" height="2" fill="#D9D9D9" />
                <rect y="34" width="6" height="2" fill="#D9D9D9" />
                <rect x="160" y="34" width="6" height="2" fill="#D9D9D9" />
              </svg>
            </div>
            <h1 className="font-bold ml-[15px] pt-2">About ACOTE.AI</h1>
          </div>
          <h1 className="text-3xl font-medium leading-[54px] lg:text-[43px] bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
            Forerunners Of Artificial Intelligence Based Solutions In Bangladesh
          </h1>
          <p className="text-lg lg:text-[21px] text-[#D1D5DB] leading-[40px] text-justify">
            One-stop shop for vertically integrated Artificial Intelligence
            solutions where cutting edge innovation takes place to help
            businesses of all sizes stay ahead of the curve! From dataset
            gathering to annotating to model development, Acote prides itself in
            providing full stack solutions in various fields of language and
            vision processing. A hub dedicated to spearheading the fifth
            industrial revolution, the paradigm shifting possibilities here are
            endless.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/3 flex-shrink-0">
          <Image src={aboutPic} alt="about-pic" />
        </div>
      </div>
    </div>
  );
}
