import { ContactUs } from "@/components/component/contact-us";
import FaceOverview from "@/components/component/face-overview";
import TdaOverview from "@/components/component/tda-overview";
import Link from "next/link";

export default function FaceRecognition() {
  return (
    <section className="bg-black">
      <div className="bg-tdBg bg-cover bg-no-repeat h-[340px] grid items-center">
        <div>
          <div className="flex justify-center items-center gap-4 bg-[#2563EB33] p-2 w-[205px] mx-auto text-white">
            <svg
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.513184"
                y="0.75"
                width="6"
                height="6"
                rx="3"
                fill="white"
              />
            </svg>
            <h1 className="uppercase font-[500] text-[14px] leading-[20px] text-center">
              project details
            </h1>
            <svg
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.513184"
                y="0.75"
                width="6"
                height="6"
                rx="3"
                fill="white"
              />
            </svg>
          </div>

          <h1 className="text-[54px] leading-[64px] font-[700] text-white text-center mt-2">
            Face recognition & reidentification
          </h1>

          <div className="flex justify-center items-center gap-2 mt-5">
            <Link
              href="/"
              className="text-sm font-[500] leading-[21px] text-center text-blue-600"
            >
              Home
            </Link>
            <svg
              width="17"
              height="10"
              viewBox="0 0 17 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_262_2055)">
                <g clip-path="url(#clip1_262_2055)">
                  <g clip-path="url(#clip2_262_2055)">
                    <path
                      d="M0.554661 5.17814C0.607048 5.25391 0.699734 5.35914 0.760181 5.40544C0.873016 5.48963 0.917344 5.49384 2.27942 5.49384C3.6415 5.49384 3.68582 5.48963 3.79866 5.40544C4.01627 5.23707 4.10089 5.05607 4.08478 4.7951C4.06463 4.5215 3.95582 4.33629 3.75433 4.23527C3.63747 4.17634 3.43195 4.16792 2.27136 4.16792C0.957642 4.16792 0.925403 4.17213 0.77227 4.26473C0.474065 4.44152 0.36929 4.89191 0.554661 5.17814Z"
                      fill="white"
                    />
                    <path
                      d="M5.20948 5.0522C5.2659 5.19532 5.39485 5.35106 5.51574 5.42262C5.63664 5.48997 5.95499 5.49418 9.8357 5.51522L14.0267 5.53627L12.5074 6.87903C11.5201 7.75035 10.964 8.2723 10.9237 8.36069C10.7867 8.66376 10.9116 9.07206 11.1856 9.22359C11.3428 9.3162 11.645 9.32461 11.778 9.24885C11.8264 9.21938 12.8701 8.31018 14.1032 7.22419C15.6104 5.89406 16.3599 5.20374 16.4043 5.11534C16.5251 4.84174 16.4566 4.54288 16.2189 4.30716C15.8199 3.91991 11.7498 0.405164 11.641 0.354653C11.4677 0.274677 11.3186 0.283096 11.1212 0.3757C10.8028 0.527234 10.6658 0.981834 10.8391 1.28911C10.8794 1.36067 11.6088 2.02574 12.4591 2.76236C13.3053 3.50319 14.0025 4.11774 14.0025 4.13458C14.0065 4.15563 12.1246 4.16826 9.81958 4.16826H5.63664L5.50366 4.26086C5.30216 4.40818 5.21351 4.55972 5.19739 4.78702C5.18933 4.89646 5.19336 5.01853 5.20948 5.0522Z"
                      fill="white"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_262_2055">
                  <rect
                    width="16"
                    height="9"
                    fill="white"
                    transform="translate(0.462891 0.299988)"
                  />
                </clipPath>
                <clipPath id="clip1_262_2055">
                  <rect
                    width="16"
                    height="9"
                    fill="white"
                    transform="translate(0.462891 0.299988)"
                  />
                </clipPath>
                <clipPath id="clip2_262_2055">
                  <rect
                    width="16"
                    height="9"
                    fill="white"
                    transform="translate(0.462891 0.299988)"
                  />
                </clipPath>
              </defs>
            </svg>
            <h2 className="text-sm font-[500] leading-[21px] text-center text-white">
              Project Details
            </h2>
          </div>
        </div>
      </div>
      <FaceOverview />
      <ContactUs />
    </section>
  );
}
