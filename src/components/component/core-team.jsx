import arman from "../../../public/arman.png";
import mirza from "../../../public/mirza.png";
import samin from "../../../public/samin.png";
import mamun from "../../../public/mamun.png";
import sahed from "../../../public/sahed.png";
import arafat from "../../../public/arafat.png";
import Image from "next/image";

export default function CoreTeam() {
  return (
    <section className="bg-black text-white py-[120px]">
      <div className="md:flex w-fit mx-auto gap-8 justify-center">
        <div className="w-fit md:w-[385px] h-[445px] rounded-[12px] border-y-[1px] border-s-[1px] flex flex-col justify-center items-center border-gray-800/70">
          <h1 className="font-[700] text-[42px] md:text-[54px] md:leading-[85px] text-center">
            Meet Our Core Team
          </h1>

          <div className="my-[25px]">
            <svg
              width="182"
              height="2"
              viewBox="0 0 182 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="1" x2="182" y2="1" stroke="#2563EB" stroke-width="2" />
            </svg>
          </div>

          <h2 className="text-[36px] text-center leading-[44px] ">
            Management
          </h2>
        </div>

        <div>
          <Image src={arman} alt="image" />
        </div>
        <div>
          <Image src={mamun} alt="image" />
        </div>
        <div>
          <Image src={samin} alt="image" />
        </div>
      </div>

      <div className="md:flex w-fit mx-auto gap-8 mt-[50px]">
        <div className="w-fit md:w-[385px] h-[445px] rounded-[12px] border-y-[1px] border-s-[1px] flex flex-col justify-center items-center border-gray-800/70">
          <h1 className="font-[700] text-[42px] leading-[75px] text-center uppercase">
            it and design solution team
          </h1>
        </div>
        <div>
          <Image src={sahed} alt="image" />
        </div>
        <div>
          <Image src={mirza} alt="image" />
        </div>
        <div>
          <Image src={arafat} alt="image" />
        </div>
      </div>
    </section>
  );
}
