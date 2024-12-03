import img from "../../../public/kim.png";
import img2 from "../../../public/mark-kim.png";
import Image from "next/image";

export default function OurTeam() {
  return (
    <section className="bg-black py-16">
      <div className="flex flex-col justify-center">
        <h1 className="text-[56px] leading-[53px] font-bold bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent text-center">
          Our Team
        </h1>

        <p className="text-[22px] md:leading-[53px] text-white text-center mt-4 md:mt-0">
          Empower Your Business with Acote AI Solutions for Maximum Productivity
          & Growth.
        </p>
      </div>

      <div className="md:flex justify-center gap-16 mt-16">
        <div className="md:flex-shrink-0 w-fit mx-auto md:mx-0 md:w-auto">
          <Image src={img} alt="image" />
        </div>

        <div className="md:w-2/5 px-2 md:px-0">
          <h1 className="font-[600] text-[36px] leading-[42px] text-white text-center md:text-start mt-6 md:mt-0">
            A Massage From Our Managing Director
          </h1>

          <div className="mt-6 flex flex-col gap-y-2">
            <div>
              <svg
                width="25"
                height="21"
                viewBox="0 0 25 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.24 0.263998V3.912C22.32 4.232 20.976 4.904 20.208 5.928C19.44 6.952 19.056 8.776 19.056 11.4H23.952V20.52H14.544V12.84C14.544 8.872 15.28 5.8 16.752 3.62399C18.224 1.384 20.72 0.263998 24.24 0.263998ZM10.416 0.263998V3.912C8.496 4.232 7.152 4.904 6.384 5.928C5.616 6.952 5.232 8.776 5.232 11.4H10.128V20.52H0.72V12.84C0.72 8.872 1.456 5.8 2.928 3.62399C4.4 1.384 6.896 0.263998 10.416 0.263998Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
            <h1 className="text-[20px] leading-[33px] text-[#B5B5B5] md:ml-6 text-justify">
              We have an unswerving commitment to become the most trusted
              partner for you by providing meaningful values and professional
              solutions in agile, right and competitive manner. Our global
              experience and industry's most talented people make amazing things
              happen. The future beckons with opportunities, and Acote BPO will
              be where these opportunities connect.
            </h1>
            <div className="flex justify-end">
              <svg
                width="25"
                height="21"
                viewBox="0 0 25 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.759997 20.736V17.088C2.68 16.768 4.024 16.096 4.792 15.072C5.56 14.048 5.944 12.224 5.944 9.6H1.048V0.480002H10.456V8.16C10.456 12.128 9.72 15.2 8.248 17.376C6.776 19.616 4.28 20.736 0.759997 20.736ZM14.584 20.736V17.088C16.504 16.768 17.848 16.096 18.616 15.072C19.384 14.048 19.768 12.224 19.768 9.6H14.872V0.480002H24.28V8.16C24.28 12.128 23.544 15.2 22.072 17.376C20.6 19.616 18.104 20.736 14.584 20.736Z"
                  fill="#AFAFAF"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-base leading-[26px] text-[#B5B5B5] md:mt-9 md:ml-6 text-justify">
            Edward Kim is a Global Business Leader with 25 years of experience
            in leading top class brands in 40+ diverse countries. Kim excels in
            cross-cultural expertise, market dynamics and consumer preference
            worldwide.
          </h2>
        </div>
      </div>

      <div className="md:flex justify-center items-center gap-16 mt-16 flex-row-reverse">
        <div className="md:flex-shrink-0 w-fit mx-auto md:mx-0 md:w-auto">
          <Image src={img2} alt="image" />
        </div>

        <div className="md:w-2/5 px-2 md:px-0 mt-2 md:mt-0">
          <h1 className="font-[600] text-[36px] md:leading-[42px] text-white mt-6 md:mt-0 text-center md:text-start">
            Our Al Technology Advisor
          </h1>

          <div className="mt-6 flex flex-col gap-y-2">
            <div className="text-[#B5B5B5] text-[20px] md:leading-[33px]">
              <li>
                Expertise in Robotics/ Artificial Intelligence/ Machine
                Learning/ Computer Vision
              </li>
              <li>Over 25 years of experience as CTO at global tech giants</li>
              <li>
                Ph.D. in Electrical and Computer Engineering, University of
                Massachusetts
              </li>
              <li>
                Electrical and Computer Engineering, Seoul National University
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
