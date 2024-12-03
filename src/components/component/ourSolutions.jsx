"use client";

import { motion } from "framer-motion";

export default function OurSolutions() {
  const borderAnimation = {
    initial: { height: 30 },
    animate: {
      height: "100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section className="bg-black pt-16" id="solutions">
      <div className="flex flex-col justify-center">
        <h1 className="text-[56px] md:leading-[45px] font-bold bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent text-center">
          Our Solutions
        </h1>

        <p className="text-[22px] leading-[53px] text-white text-center">
          Empower Your Business with Acote AI Solutions for Maximum Productivity
          & Growth.
        </p>
      </div>

      <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 w-fit mx-auto gap-x-[125px] gap-y-[40px]">
        <motion.div
          className="w-fit md:w-[490px] relative pr-2 md:pr-0 overflow-hidden group"
          whileHover="animate"
          initial="initial"
          animate="initial"
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-[2px] bg-[#FFD512]"
            variants={borderAnimation}
          />
          <h1 className="text-[20px] text-white leading-[25px] font-bold pl-4">
            NLP Solutions
          </h1>

          <p className="text-sm leading-[24px] text-[#8B97A6] pl-4 text-justify group-hover:text-[#EBEBEB]">
            Using NLP tools and techniques for text classification, named entity
            recognition, sentiment analysis, and language translation. Fine-tune
            and prompt engineer Large Lange Models (LLMs) and develop LLM
            powered applications including chatbots.
          </p>
        </motion.div>

        <motion.div
          className="w-fit md:w-[490px] relative pr-2 md:pr-0 overflow-hidden group"
          whileHover="animate"
          initial="initial"
          animate="initial"
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-[2px] bg-[#1FCFF1]"
            variants={borderAnimation}
          />
          <h1 className="text-[20px] text-white leading-[25px] font-bold pl-4">
            Data Driven Business Analytics
          </h1>
          <p className="text-sm leading-[24px] text-[#8B97A6] pl-4 text-justify group-hover:text-[#EBEBEB]">
            Collecting, processing, analyzing, and interpreting data to uncover
            actionable insights that drive informed decision-making and
            strategic planning for businesses.
          </p>
        </motion.div>

        <motion.div
          className="w-fit md:w-[490px] relative pr-2 md:pr-0 overflow-hidden group"
          whileHover="animate"
          initial="initial"
          animate="initial"
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-[2px] bg-[#19FB9B]"
            variants={borderAnimation}
          />
          <h1 className="text-[20px] text-white leading-[25px] font-bold pl-4">
            Computer Vision Solutions
          </h1>
          <p className="text-sm leading-[24px] text-[#8B97A6] pl-4 text-justify group-hover:text-[#EBEBEB]">
            Develop solutions like object detection, fece re-identification,
            deep-fake detection, and OCR.
          </p>
        </motion.div>

        <motion.div
          className="w-fit md:w-[490px] relative pr-2 md:pr-0 overflow-hidden group"
          whileHover="animate"
          initial="initial"
          animate="initial"
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-[2px] bg-[#9945FF]"
            variants={borderAnimation}
          />
          <h1 className="text-[20px] text-white leading-[25px] font-bold pl-4">
            Write better, everywhere.
          </h1>
          <p className="text-sm leading-[24px] text-[#8B97A6] pl-4 text-justify group-hover:text-[#EBEBEB]">
            Reading widely can help improve your writing skills by exposing you
            to different writing styles, grammar structures, and vocabulary.
          </p>
        </motion.div>

        <motion.div
          className="w-fit md:w-[490px] relative pr-2 md:pr-0 overflow-hidden group"
          whileHover="animate"
          initial="initial"
          animate="initial"
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-[2px] bg-[#1FCFF1]"
            variants={borderAnimation}
          />
          <h1 className="text-[20px] text-white leading-[25px] font-bold pl-4">
            Recommender Systems
          </h1>
          <p className="text-sm leading-[24px] text-[#8B97A6] pl-4 text-justify group-hover:text-[#EBEBEB]">
            Using machine learning algorithms, we would develop personalized and
            customised recommender system and engine.
          </p>
        </motion.div>

        <motion.div
          className="w-fit md:w-[490px] relative pr-2 md:pr-0 overflow-hidden group"
          whileHover="animate"
          initial="initial"
          animate="initial"
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-[2px] bg-[#FFD512]"
            variants={borderAnimation}
          />
          <h1 className="text-[20px] text-white leading-[25px] font-bold pl-4">
            Smart Surveillance
          </h1>
          <p className="text-sm leading-[24px] text-[#8B97A6] pl-4 text-justify group-hover:text-[#EBEBEB]">
            Implement advanced computer vision techniques to develop smart
            surveillance enhaching traditional capabilities.
          </p>
        </motion.div>

        <motion.div
          className="w-fit md:w-[490px] relative pr-2 md:pr-0 overflow-hidden group"
          whileHover="animate"
          initial="initial"
          animate="initial"
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-[2px] bg-[#9945FF]"
            variants={borderAnimation}
          />
          <h1 className="text-[20px] text-white leading-[25px] font-bold pl-4">
            Gen AI Solutions
          </h1>
          <p className="text-sm leading-[24px] text-[#8B97A6] pl-4 text-justify group-hover:text-[#EBEBEB]">
            Leverage the power of Gen AI to provide customized AI solutions for
            different industries including, marketing, business & civil.
          </p>
        </motion.div>

        <motion.div
          className="w-fit md:w-[490px] relative pr-2 md:pr-0 overflow-hidden group"
          whileHover="animate"
          initial="initial"
          animate="initial"
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-[2px] bg-[#19FB9B]"
            variants={borderAnimation}
          />
          <h1 className="text-[20px] text-white leading-[25px] font-bold pl-4">
            Knowledge Graphs
          </h1>
          <p className="text-sm leading-[24px] text-[#8B97A6] pl-4 text-justify group-hover:text-[#EBEBEB]">
            Knowledge graphs inject real-world context into machine learning,
            enhancing accuracy and enabling reasoning over linked data.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
