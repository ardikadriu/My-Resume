"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skillsmobile = () => {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <div className=" flex sm:hidden py-10   " id="Skills">
      <div className="flex">
        <div className="mt-[59px] ">
          <div className="w-[114px] h-2 bg-[#D9D9D9] rounded-sm oveflow-hidden">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className="bg-[#686868] w-[103px] h-2 rounded-sm"
            ></div>
          </div>
          <div className="w-[114px] h-2 bg-[#D9D9D9] rounded-sm mt-4">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="400"
              className="bg-[#686868] w-[103px] h-2 rounded-sm"
            ></div>
          </div>
          <div className="w-[114px] h-2 bg-[#D9D9D9] rounded-sm mt-4">
            <div
              className="bg-[#686868] w-[33px] h-2 rounded-sm"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="600"
            ></div>
          </div>
          <div className="w-[114px] h-2 bg-[#D9D9D9] rounded-sm mt-4">
            <div
              className="bg-[#686868] w-[103px] h-2 rounded-sm"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="800"
            ></div>
          </div>
        </div>

        <div className="text-center font-Raleway">
          {" "}
          <h1 className="text-3xl font-semibold leading-8 mb-4 tracking-[1.5px]">
            Skills
          </h1>
          <h2>Html</h2>
          <h2>CSS</h2>
          <h2>Java</h2>
          <h2>Next.js</h2>
        </div>
      </div>
      <div className="w-0.5 h-36 bg-black ml-4 flex flex-col items-center mt-">
        <div
          className="w-1.5 h-1.5 rounded-md bg-purple-950 mt-[59px]"
          data-aos="fade-down"
          data-aos-duration="500"
        ></div>
        <div
          className="w-1.5 h-1.5 rounded-md bg-purple-950 mt-4"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="200"
        ></div>
        <div
          className="w-1.5 h-1.5 rounded-md bg-purple-950 mt-5"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="400"
        ></div>
        <div
          className="w-1.5 h-1.5 rounded-md bg-purple-950 mt-4"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="600"
        ></div>
      </div>
    </div>
  );
};

export default Skillsmobile;
