import img from "../../../public/fp.png";
import Image from "next/image";

export default function FutureProjects() {
  return (
    <section className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-fit mx-auto gap-x-[200px]">
        <div className="flex-shrink-0">
          <Image src={img} alt="image" />
        </div>

        <div className="flex flex-col gap-y-6 -ml-[20%]">
          <div className="flex items-center">
            <div className="-mr-6">
              <ArrowIcon />
            </div>
            <div className="pl-6 py-2 rounded-[10px] border-y-[1px] border-s-[1px] border-[#144EE3] w-[653px] bg-[#1e212a]">
              <h1 className="text-[20px] leading-[30px] font-[600] text-white">
                IoT plate scanner for instant traffic conviction
              </h1>
            </div>
          </div>

          <div className="flex items-center">
            <div className="-mr-6">
              <ArrowIcon />
            </div>
            <div className="pl-6 py-2 rounded-[10px] border-y-[1px] border-s-[1px] border-[#144EE3] w-[653px] bg-[#1e212a]">
              <h1 className="text-[20px] leading-[30px] font-[600] text-white">
                OCR based automated resume screening
              </h1>
            </div>
          </div>

          <div className="flex items-center">
            <div className="-mr-6">
              <ArrowIcon />
            </div>
            <div className="pl-6 py-2 rounded-[10px] border-y-[1px] border-s-[1px] border-[#144EE3] w-[653px] bg-[#1e212a]">
              <h1 className="text-[20px] leading-[30px] font-[600] text-white">
                Textile defect detection & quality control
              </h1>
            </div>
          </div>

          <div className="flex items-center">
            <div className="-mr-6">
              <ArrowIcon />
            </div>
            <div className="pl-6 py-2 rounded-[10px] border-y-[1px] border-s-[1px] border-[#144EE3] w-[653px] bg-[#1e212a]">
              <h1 className="text-[20px] leading-[30px] font-[600] text-white">
                Computer vision assisted employee productivity analysis
              </h1>
            </div>
          </div>

          <div className="flex items-center">
            <div className="-mr-6">
              <ArrowIcon />
            </div>
            <div className="pl-6 py-2 rounded-[10px] border-y-[1px] border-s-[1px] border-[#144EE3] w-[653px] bg-[#1e212a]">
              <h1 className="text-[20px] leading-[30px] font-[600] text-white">
                CCTV integrated factory fire detection/ safety alert
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon(props) {
  return (
    <svg
      {...props}
      width="85"
      height="86"
      viewBox="0 0 85 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="84.1457"
        y="42.8384"
        width="59"
        height="59"
        rx="9.5"
        transform="rotate(135 84.1457 42.8384)"
        fill="url(#paint0_linear_195_1277)"
        stroke="url(#paint1_linear_195_1277)"
      />
      <path
        d="M26.2498 37.1396C26.2498 37.4771 26.1373 37.7022 25.9123 37.9272L20.2873 43.5521C19.8373 44.0021 19.1623 44.0021 18.7123 43.5521C18.2623 43.1021 18.2623 42.4271 18.7123 41.9771L24.3373 36.3521C24.7873 35.9021 25.4623 35.9021 25.9123 36.3521C26.1373 36.5771 26.2498 36.8021 26.2498 37.1396Z"
        fill="white"
      />
      <path
        d="M26.2498 48.3896C26.2498 48.7271 26.1373 48.9521 25.9123 49.1771C25.4623 49.6271 24.7873 49.6271 24.3373 49.1771L18.7123 43.5521C18.2623 43.1021 18.2623 42.4271 18.7123 41.9771C19.1623 41.5271 19.8373 41.5271 20.2873 41.9771L25.9123 47.6021C26.1373 47.8271 26.2498 48.0521 26.2498 48.3896Z"
        fill="white"
      />
      <path
        d="M38.6248 42.7647C38.6248 43.4397 38.1748 43.8897 37.4998 43.8897L19.4998 43.8896C18.8248 43.8896 18.3748 43.4396 18.3748 42.7646C18.3748 42.0896 18.8248 41.6396 19.4998 41.6396L37.4998 41.6397C38.1748 41.6397 38.6248 42.0897 38.6248 42.7647Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_195_1277"
          x1="93.6398"
          y1="54.3496"
          x2="140.662"
          y2="100.665"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.05" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_195_1277"
          x1="143.137"
          y1="100.52"
          x2="85.1385"
          y2="23.734"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2563EB" />
          <stop offset="0.73" stop-color="#2255F6" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
