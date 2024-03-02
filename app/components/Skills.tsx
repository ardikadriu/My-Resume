"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({});
  });

  return (
    <div className="flex mt-32 " data-aos="fade-right" data-aos-duration="700">
      {" "}
      <div className="flex">
        <div className="mt-[59px]">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-dealy="400"
            className="w-[114px] h-2 bg-[#D9D9D9] rounded-sm"
          >
            <div className="bg-[#686868] w-[103px] h-2 rounded-sm"></div>
          </div>
          <div className="w-[114px] h-2 bg-[#D9D9D9] rounded-sm mt-4">
            <div
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-dealy="700"
              className="bg-[#686868] w-[103px] h-2 rounded-sm"
            ></div>
          </div>
          <div className="w-[114px] h-2 bg-[#D9D9D9] rounded-sm mt-4">
            <div
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-dealy="900"
              className="bg-[#686868] w-[33px] h-2 rounded-sm"
            ></div>
          </div>
          <div className="w-[114px] h-2 bg-[#D9D9D9] rounded-sm mt-4">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="600"
              className="bg-[#686868] w-[103px] h-2 rounded-sm"
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
          <h2>JavaScript</h2>
          <h2>Next.js</h2>
        </div>
      </div>
      <div className="w-0.5 h-36 bg-black ml-4 flex flex-col items-center ">
        <div
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-dealy="400"
          className="w-1.5 h-1.5 rounded-md bg-purple-950 mt-[57px] mb-3.5 "
        ></div>
        <div
          data-aos="fade-down"
          data-aos-duration="700"
          data-aos-dealy="700"
          className="w-1.5 h-1.5 rounded-md bg-purple-950 mb-5"
        ></div>
        <div
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-dealy="900"
          className="w-1.5 h-1.5 rounded-md bg-purple-950 mb-5"
        ></div>
        <div
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="600"
          className="w-1.5 h-1.5 rounded-md bg-purple-950 mt-"
        ></div>
      </div>
    </div>
  );
};

export default Skills;
