"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header>
        <input
          type="checkbox"
          name="hbr"
          id="hbr"
          class="hbr peer"
          hidden
          aria-hidden="true"
        />
        <nav className="bg-black z-20 w-full backdrop-filter backdrop-blur/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 peer-checked:navbar-active text-white md:border-b-[1px] border-gray-600/50">
          <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
              <div className="w-full items-center flex justify-between lg:w-auto">
                <Link href="/" className="relative z-10" aria-label="logo">
                  <svg
                    width="175"
                    height="38"
                    viewBox="0 0 175 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.98337 25.776C3.77958 25.7632 1.26844 28.0333 1.01969 31.0693C0.743055 34.4276 3.41717 37.3804 6.80323 37.4252C10.0799 37.4679 12.7305 34.8756 12.739 31.6411C12.7476 28.3682 10.215 25.7888 6.98337 25.776ZM25.3355 11.8843C23.7443 9.13839 22.1595 6.38821 20.5705 3.64231C19.4404 1.6901 17.8192 0.525169 14.6326 0.535837C12.9749 0.535837 10.9141 2.06561 10.2322 4.43813C9.74969 6.11299 10.0799 7.66836 10.9399 9.14905C14.8256 15.8335 18.7006 22.5244 22.5906 29.2067C23.7421 31.1867 24.8251 33.22 26.1268 35.0997C27.4756 37.0476 29.4742 37.8818 31.8331 37.3122C34.1813 36.7468 35.6588 35.2234 36.0319 32.7933C36.2549 31.3424 35.8453 29.9962 35.1205 28.7459C31.861 23.1218 28.595 17.5041 25.3355 11.8843ZM52.321 6.58237C52.3232 4.32932 51.504 2.51579 48.7377 0.939081C47.3009 0.115524 44.749 0.416358 42.9649 2.13175C41.7061 3.34361 41.2107 4.85418 41.2129 6.56317C41.2193 14.2846 41.2172 17.9266 41.2279 25.6479C41.2322 27.9373 41.1485 30.2351 41.3308 32.5095C41.5195 34.8671 42.8319 36.5825 45.1608 37.2631C47.4789 37.9416 49.5226 37.357 51.0687 35.4368C51.9908 34.291 52.3103 32.9213 52.3125 31.479C52.3168 24.9887 52.3082 18.4984 52.3103 12.0102C52.3082 8.83969 52.3189 9.75072 52.321 6.58237Z"
                      fill="url(#paint0_linear_182_44)"
                    />
                    <path
                      d="M69.5412 16.0384L67.9324 20.2055H63.3276L70.7604 1.84644H76.5037L84.316 20.2055H79.4728L77.7565 16.0384H69.5412ZM76.5037 12.4695C74.7874 8.26239 73.9511 6.11706 73.5078 4.71357H73.4809C73.0678 6.08698 72.087 8.87726 70.6999 12.4695H76.5037Z"
                      fill="white"
                    />
                    <path
                      d="M98.7012 15.6575C98.1537 18.2038 95.9538 20.573 91.5136 20.573C86.301 20.573 84.0037 17.3116 84.0037 13.4487C84.0037 9.80292 86.6133 6.37439 91.5204 6.37439C96.8842 6.37439 98.4493 9.85639 98.6105 11.3468H94.3282C94.0763 10.6149 93.418 9.56232 91.5573 9.56232C89.3406 9.56232 88.3599 11.193 88.3599 13.4186C88.3599 15.6007 89.2835 17.3617 91.5372 17.3617C93.0788 17.3617 93.8714 16.8037 94.4223 15.6575H98.7012Z"
                      fill="white"
                    />
                    <path
                      d="M114.772 13.4587C114.772 17.6057 111.894 20.5697 106.866 20.5697C101.825 20.5697 99.2451 17.198 99.2451 13.462C99.2451 9.76949 101.915 6.37103 107.041 6.37103C112.317 6.37103 114.772 10.117 114.772 13.4587ZM103.605 13.462C103.605 15.5572 104.773 17.355 107.014 17.355C109.318 17.355 110.372 15.584 110.372 13.5288C110.372 11.4938 109.355 9.58236 106.98 9.58236C104.656 9.5857 103.605 11.3868 103.605 13.462Z"
                      fill="white"
                    />
                    <path
                      d="M114.913 6.73532H117.342V2.76544H121.644V6.73532H124.778V9.82968H121.644V15.5038C121.644 16.65 121.886 17.178 123.196 17.178C123.565 17.178 123.985 17.1746 124.355 17.0944V20.015C123.622 20.2222 122.638 20.3158 121.641 20.3158C118.309 20.3158 117.342 18.8755 117.342 16.249V9.82968H114.913V6.73532Z"
                      fill="white"
                    />
                    <path
                      d="M129.47 14.5079C129.581 16.1353 130.766 17.4052 132.795 17.4052C134.411 17.4052 135.173 16.9139 135.667 16.0852H139.949C139.133 18.4711 137.098 20.5697 132.751 20.5697C127.21 20.5697 125.211 16.9106 125.211 13.4887C125.211 9.69598 127.774 6.37103 132.721 6.37103C137.991 6.37103 140.114 9.98002 140.114 13.4887C140.114 13.8296 140.114 14.0735 140.09 14.5046H129.47V14.5079ZM135.767 11.8981C135.684 10.8689 135.126 9.35179 132.714 9.35179C130.464 9.35179 129.648 10.5715 129.52 11.8981H135.767Z"
                      fill="white"
                    />
                    <path
                      d="M151.929 16.0384L150.321 20.2055H145.716L153.149 1.84644H158.892L166.704 20.2055H161.861L160.145 16.0384H151.929ZM158.889 12.4695C157.172 8.26239 156.336 6.11706 155.893 4.71357H155.866C155.453 6.08698 154.472 8.87726 153.085 12.4695H158.889Z"
                      fill="white"
                    />
                    <path
                      d="M167.188 0.79718H171.47V4.19898H167.188V0.79718ZM167.188 6.7353H171.47V20.2055H167.188V6.7353Z"
                      fill="white"
                    />
                    <path
                      d="M64.8961 26.7317V37.0206H62.3872V26.7317H64.8961Z"
                      fill="white"
                    />
                    <path
                      d="M66.5217 31.3766C66.5217 30.7384 66.5217 30.0132 66.5083 29.4719H68.8527C68.8829 29.6857 68.9098 30.1435 68.9232 30.4476C69.2691 29.9263 69.9644 29.268 71.4422 29.268C73.3096 29.268 74.418 30.4176 74.418 32.3657V37.0206H71.993V32.7467C71.993 31.8812 71.6571 31.1226 70.579 31.1226C69.4606 31.1226 68.94 31.8946 68.94 33.2546V37.0206H66.5285V31.3766H66.5217Z"
                      fill="white"
                    />
                    <path
                      d="M75.6975 31.3766C75.6975 30.7384 75.6975 30.0132 75.6841 29.4719H78.0284C78.0587 29.6857 78.0855 30.1435 78.099 30.4476C78.4449 29.9263 79.1402 29.268 80.618 29.268C82.4854 29.268 83.5938 30.4176 83.5938 32.3657V37.0206H81.1688V32.7467C81.1688 31.8812 80.8329 31.1226 79.7548 31.1226C78.6364 31.1226 78.1158 31.8946 78.1158 33.2546V37.0206H75.7042V31.3766H75.6975Z"
                      fill="white"
                    />
                    <path
                      d="M93.1426 33.2412C93.1426 35.5637 91.527 37.2278 88.7125 37.2278C85.8878 37.2278 84.4436 35.3365 84.4436 33.2446C84.4436 31.1728 85.9382 29.2714 88.8132 29.2714C91.7655 29.268 93.1426 31.3666 93.1426 33.2412ZM86.882 33.2412C86.882 34.4142 87.5369 35.4233 88.7931 35.4233C90.0862 35.4233 90.6739 34.4309 90.6739 33.278C90.6739 32.1385 90.103 31.0658 88.7729 31.0658C87.4731 31.0692 86.882 32.0783 86.882 33.2412Z"
                      fill="white"
                    />
                    <path
                      d="M95.5943 29.4719C96.6321 32.3824 97.2803 34.0199 97.5457 34.9522H97.5725C97.8513 34.0098 98.3753 32.5529 99.5038 29.4719H101.946L98.8085 37.0206H96.1317L93.0115 29.4719H95.5943Z"
                      fill="white"
                    />
                    <path
                      d="M109.781 34.9054C109.781 35.8878 109.825 36.8569 109.842 37.0207H107.575C107.518 36.8402 107.501 36.3791 107.487 36.1685C107.081 36.8202 106.204 37.2245 104.78 37.2245C102.705 37.2245 101.868 35.968 101.868 34.7617C101.868 32.7801 103.612 32.2287 105.848 32.2287C106.443 32.2287 107.175 32.2287 107.437 32.2287V31.9915C107.437 31.38 107.168 30.8854 106.057 30.8854C105.019 30.8854 104.79 31.273 104.693 31.7041H102.292C102.355 30.7718 103.017 29.268 106.016 29.268C109.311 29.268 109.778 30.8119 109.778 32.075V34.9054H109.781ZM107.437 33.7392C107.262 33.7258 106.738 33.7258 105.889 33.7258C104.67 33.7258 104.189 34.0466 104.189 34.6414C104.189 35.1326 104.589 35.5303 105.459 35.5303C106.775 35.5303 107.437 34.9321 107.437 33.8561V33.7392Z"
                      fill="white"
                    />
                    <path
                      d="M110.282 29.4718H111.642V27.2463H114.054V29.4718H115.81V31.2062H114.054V34.3874C114.054 35.029 114.188 35.3264 114.924 35.3264C115.132 35.3264 115.364 35.3231 115.572 35.2796V36.917C115.162 37.034 114.611 37.0841 114.05 37.0841C112.183 37.0841 111.639 36.2788 111.639 34.8051V31.2095H110.279V29.4718H110.282Z"
                      fill="white"
                    />
                    <path
                      d="M116.499 26.1436H118.897V28.0517H116.499V26.1436ZM116.499 29.4719H118.897V37.0206H116.499V29.4719Z"
                      fill="white"
                    />
                    <path
                      d="M128.452 33.2412C128.452 35.5637 126.837 37.2278 124.022 37.2278C121.198 37.2278 119.753 35.3365 119.753 33.2446C119.753 31.1728 121.248 29.2714 124.123 29.2714C127.075 29.268 128.452 31.3666 128.452 33.2412ZM122.192 33.2412C122.192 34.4142 122.847 35.4233 124.103 35.4233C125.396 35.4233 125.987 34.4309 125.987 33.278C125.987 32.1385 125.416 31.0658 124.086 31.0658C122.783 31.0692 122.192 32.0783 122.192 33.2412Z"
                      fill="white"
                    />
                    <path
                      d="M129.302 31.3766C129.302 30.7384 129.302 30.0132 129.289 29.4719H131.633C131.663 29.6857 131.69 30.1435 131.703 30.4476C132.049 29.9263 132.745 29.268 134.222 29.268C136.09 29.268 137.198 30.4176 137.198 32.3657V37.0206H134.773V32.7467C134.773 31.8812 134.437 31.1226 133.359 31.1226C132.241 31.1226 131.72 31.8946 131.72 33.2546V37.0206H129.309V31.3766H129.302Z"
                      fill="white"
                    />
                    <path
                      d="M142.196 26.7317H144.705V30.6013H149.464V26.7317H151.973V37.0206H149.464V32.5896H144.705V37.0206H142.196V26.7317Z"
                      fill="white"
                    />
                    <path
                      d="M156.326 26.7317V32.5495C156.326 34.7383 157.481 35.2897 158.751 35.2897C160.104 35.2897 161.008 34.7116 161.008 32.5495V26.7317H163.517V32.6297C163.517 35.7508 161.753 37.2378 158.68 37.2378C155.708 37.2378 153.817 35.8778 153.817 32.6832V26.7284H156.326V26.7317Z"
                      fill="white"
                    />
                    <path
                      d="M165.351 26.7317H171.074C173.549 26.7317 174.624 27.928 174.624 29.3816C174.624 30.5746 173.875 31.283 173.079 31.5771C174.08 31.8845 175 32.6531 175 33.9597C175 35.8912 173.512 37.024 170.976 37.024H165.347V26.7317H165.351ZM170.55 30.7584C171.672 30.7584 172.031 30.314 172.031 29.6924C172.031 28.9172 171.436 28.5997 170.57 28.5997H167.819V30.7551H170.55V30.7584ZM167.819 35.1627H170.654C171.621 35.1627 172.353 34.882 172.353 33.8628C172.353 33.0407 171.792 32.6197 170.701 32.6197H167.819V35.1627Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_182_44"
                        x1="49.2442"
                        y1="0.945353"
                        x2="8.73147"
                        y2="41.6645"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#14CDE3" />
                        <stop offset="1" stop-color="#2255F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Link>
                <label
                  htmlFor="hbr"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                  />
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                  />
                </label>
              </div>
              <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none lg:border-0 text-white">
                <div className="lg:pr-4">
                  <ul className="space-y-6 tracking-wide font-medium text-[20px] lg:flex lg:space-y-0 md:space-x-[26px]">
                    <li>
                      <Link
                        href="/"
                        className="cursor-pointer active:text-blue-600"
                      >
                        <span>Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#about"
                        className="group relative hover:text-blue-600 duration-300 ease-in-out"
                      >
                        <span className="transition-colors group-hover:text-blue-600 duration-300 ease-in-out">
                          About
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#expertise"
                        className="group relative hover:text-blue-600 duration-300 ease-in-out"
                      >
                        <span className="transition-colors group-hover:text-blue-600 duration-300 ease-in-out">
                          Expertise
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#solutions"
                        className="group relative hover:text-blue-600 duration-300 ease-in-out"
                      >
                        <span className="transition-colors group-hover:text-blue-600 duration-300 ease-in-out">
                          Solutions
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#projects"
                        className="group relative hover:text-blue-600 duration-300 ease-in-out"
                      >
                        <span className="transition-colors group-hover:text-blue-600 duration-300 ease-in-out">
                          Projects
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full space-y-2 flex flex-col sm:flex-row lg:space-y-0 md:w-max md:ml-[50px]">
                  {/* <button
                    type="button"
                    class="inline-flex items-center px-10 py-2.5 border-gradient-br-light-blue-black-200  gradient-border-2 rounded-full text-gray-100 text-lg font-semibold"
                  >
                    Let&apos;s Talk
                  </button> */}

                  <Link
                    href={"/contact-us"}
                    className="relative inline-flex overflow-hidden rounded-full p-[2px]"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#14CDE3_0%,#393BB2_50%,#2255F6_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black hover:bg-gradient-to-r from-[#2255F6] to-[#14CDE3] px-8 py-2.5 text-lg font-semibold text-white backdrop-blur-3xl">
                      Let&apos;s Talk
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
