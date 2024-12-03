"use client";

import img1 from "../../../public/p1.png";
import img2 from "../../../public/p2.png";
import img3 from "../../../public/p3.png";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export default function OurProjects() {
  return (
    <section className="bg-black py-16" id="projects">
      <div className="flex flex-col justify-center">
        <h1 className="text-[56px] leading-[53px] font-bold bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent text-center">
          Our Projects
        </h1>

        <p className="text-[22px] md:leading-[53px] text-white text-center mt-4 md:mt-0">
          Empower Your Business with Acote AI Solutions for Maximum Productivity
          & Growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16 mx-auto w-fit">
        <Link href="/projects">
          <CardContainer>
            <CardBody className="w-fit md:w-[462px] h-fit md:h-[552px] rounded-[10px] bg-gradient-to-b from-[#242424] to-[#24242400] p-2 border-gray-300/50 shadow-border  border-t-[1px] border-x-[1px] shadow-[0px_0px_5px_rgb(0,0,0,0.2)]">
              <CardItem translateZ="25" className="w-full">
                <Image
                  src={img1}
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>

              <CardItem
                translateZ={35}
                className="text-[25px] leading-[38px] text-center text-white mt-8 px-4"
              >
                &nbsp; &nbsp; Traffic Detection & Analysis
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>

        <Link href="/face-recognition">
          <CardContainer>
            <CardBody className="w-fit md:w-[462px] h-fit md:h-[552px] rounded-[10px] bg-gradient-to-b from-[#242424] to-[#24242400] p-2 border-gray-300/50 shadow-border  border-t-[1px] border-x-[1px] shadow-[0px_0px_5px_rgb(0,0,0,0.2)]">
              <CardItem translateZ="25" className="w-full">
                <Image
                  src={img2}
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>

              <CardItem
                translateZ={35}
                className="text-[25px] leading-[38px] text-center text-white mt-8 px-4"
              >
                Face recognition & reidentification
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>

        <Link href="/llm">
          <CardContainer>
            <CardBody className="w-fit md:w-[462px] h-fit md:h-[552px] rounded-[10px] bg-gradient-to-b from-[#242424] to-[#24242400] p-2 border-gray-300/50 shadow-border  border-t-[1px] border-x-[1px] shadow-[0px_0px_5px_rgb(0,0,0,0.2)]">
              <CardItem translateZ="25" className="w-full">
                <Image
                  src={img3}
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>

              <CardItem
                translateZ={35}
                className="text-[25px] leading-[38px] text-center text-white mt-8 px-4"
              >
                &nbsp; &nbsp; South Asian Language LLM
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>
      </div>
    </section>
  );
}
