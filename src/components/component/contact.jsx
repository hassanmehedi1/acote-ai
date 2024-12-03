import Image from "next/image";
import map from "@/assets/map.png";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function Contact() {
  return (
    <section className="bg-black w-full md:py-[120px]">
      <div className="max-w-[1440px] md:max-h-[800px] mx-auto md:flex flex-row-reverse justify-center text-white">
        <div className="bg-[#131E29] md:w-2/4 px-[90px] py-[120px]">
          <h1 className="font-[700] text-[32px] md:text-[48px] md:leading-[64px]">
            Get in Touch
          </h1>
          <p className="font-[400] text-[16px] leading-[24px] mt-4 text-[#A2A9B0] ">
            Fill up the form our team will get back to you within 24 Hours
          </p>

          <form className="mt-8">
            <Label htmlFor="name" className="text-lg">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="bg-[#636D79] text-white"
            />

            <div className="mt-4">
              <Label htmlFor="email" className="text-lg">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="bg-[#636D79] text-white"
              />
            </div>

            <div className="mt-4">
              <Label htmlFor="subject" className="text-lg">
                Subject
              </Label>
              <Input
                type="text"
                id="subject"
                placeholder="Enter Your Subject"
                className="bg-[#636D79] text-white"
              />
            </div>

            <div className="grid w-full gap-1.5 mt-4">
              <Label htmlFor="message" className="text-lg">
                Your message
              </Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                className="bg-[#636D79] text-white h-[140px]"
              />
            </div>

            <button class="flex items-center bg-blue-700 text-white gap-1 px-12 py-2.5 cursor-pointer font-semibold tracking-widest rounded-lg hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3 mt-8 text-lg">
              Send
              <svg
                class="w-5 h-5"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
          </form>
        </div>

        <div className="md:w-1/3 h-full">
          <div className="order-1 col-span-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.25286911904834!2d90.42050505752738!3d23.81778282762785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79d1f491479%3A0x9b53b3ea3be764b1!2sAcote%20Group!5e0!3m2!1sen!2sbd!4v1711945202028!5m2!1sen!2sbd"
              title="map"
              scrolling="no"
              frameBorder="0"
              className="w-full h-[800px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
