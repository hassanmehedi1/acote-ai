"use client";

import img1 from "../../../public/expPic/exp1.png";
import img2 from "../../../public/expPic/exp2.png";
import img3 from "../../../public/expPic/exp3.png";
import img4 from "../../../public/expPic/exp4.png";
import img5 from "../../../public/expPic/exp5.png";
import img6 from "../../../public/expPic/exp6.png";
import img7 from "../../../public/expPic/exp7.png";
import img8 from "../../../public/expPic/exp8.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";

export default function OurExpertise() {
  const borderAnimation = {
    initial: { height: 50 },
    animate: {
      height: "90%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section className="bg-expBg bg-no-repeat bg-cover py-16" id="expertise">
      <div className="flex flex-col justify-center">
        <h1 className="text-[56px] leading-[53px] font-bold bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent text-center">
          Our Expertise
        </h1>

        <p className="text-[22px] leading-[53px] text-white text-center">
          Our Expertise in AI Innovation Empowering Tomorrow's Solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-16 mx-auto w-fit">
        <BackgroundGradient className="bg-black rounded-[10px]">
          <div className="w-[330px] h-[405px] rounded-[10px] bg-gradient-to-b from-[#242424] to-[#24242400] p-2 border-blue-800/70 border-t-[1px] border-x-[1px] ">
            <Image src={img1} alt="image" />
            <h1 className="text-[25px] leading-[38px] text-center text-white mt-4">
              Natural language processing (NLP)
            </h1>
          </div>
        </BackgroundGradient>

        <BackgroundGradient className="bg-black rounded-[10px]">
          <div className="w-[330px] h-[405px] rounded-[10px] bg-gradient-to-b from-[#242424] to-[#24242400] p-2 border-blue-800/70 border-t-[1px] border-x-[1px] ">
            <Image src={img2} alt="image" />
            <h1 className="text-[25px] leading-[38px] text-center text-white mt-4">
              Computer Vision
            </h1>
          </div>
        </BackgroundGradient>

        <BackgroundGradient className="bg-black rounded-[10px]">
          <div className="w-[330px] h-[405px] rounded-[10px] bg-gradient-to-b from-[#242424] to-[#24242400] p-2 border-blue-800/70 border-t-[1px] border-x-[1px]">
            <Image src={img3} alt="image" />
            <h1 className="text-[25px] leading-[38px] text-center text-white mt-4">
              Gen AI
            </h1>
          </div>
        </BackgroundGradient>

        <BackgroundGradient className="bg-black rounded-[10px]">
          <div className="w-[330px] h-[405px] rounded-[10px] bg-gradient-to-b from-[#242424] to-[#24242400] p-2 border-blue-800/70 border-t-[1px] border-x-[1px] ">
            <Image src={img4} alt="image" />
            <h1 className="text-[25px] leading-[38px] text-center text-white mt-4">
              Data Modelling & Analytics
            </h1>
          </div>
        </BackgroundGradient>

        <BackgroundGradient className="bg-black rounded-[10px]">
          <div className="w-[330px] h-[405px] rounded-[10px] bg-gradient-to-b from-[#242424] to-[#24242400] p-2 border-blue-800/70 border-t-[1px] border-x-[1px]">
            <Image src={img5} alt="image" />
            <h1 className="text-[25px] leading-[38px] text-center text-white mt-4">
              Machine Learning
            </h1>
          </div>
        </BackgroundGradient>

        <BackgroundGradient className="bg-black rounded-[10px]">
          <div className="w-[330px] h-[405px] rounded-[10px] bg-gradient-to-b from-[#242424] to-[#24242400] p-2 border-blue-800/70 border-t-[1px] border-x-[1px] ">
            <Image src={img6} alt="image" />
            <h1 className="text-[25px] leading-[38px] text-center text-white mt-4">
              Data Scrapping
            </h1>
          </div>
        </BackgroundGradient>

        <BackgroundGradient className="bg-black rounded-[10px]">
          <div className="w-[330px] h-[405px] rounded-[10px] bg-gradient-to-b from-[#242424] to-[#24242400] p-2 border-blue-800/70 border-t-[1px] border-x-[1px]">
            <Image src={img7} alt="image" />
            <h1 className="text-[25px] leading-[38px] text-center text-white mt-4">
              Multi Modal AI
            </h1>
          </div>
        </BackgroundGradient>

        <BackgroundGradient className="bg-black rounded-[10px]">
          <div className="w-[330px] h-[405px] rounded-[10px] bg-gradient-to-b from-[#242424] to-[#24242400] p-2 border-blue-800/70 border-t-[1px] border-x-[1px] ">
            <Image src={img8} alt="image" />
            <h1 className="text-[25px] leading-[38px] text-center text-white mt-4">
              Biomedical/Climate Image Processing
            </h1>
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
}
