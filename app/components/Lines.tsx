"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Experience from "./Experience";
import Prof from "./Prof";

const Lines = () => {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <div className="mt-16 ">
      <div className="w-0.5 h-32  bg-black ml-9"></div>

      <h1 data-aos="flip-up" data-aos-duration="100" className="my-6 text-2xl ">
        UX/UI DESIGNER
      </h1>
      <div className="flex ">
        <div className="w-0.5 h-[377px]  bg-black ml-9"></div>
        <Prof />
      </div>
      <div className="flex">
        <div className="w-0.5 h-[578px]  bg-black ml-9 mt-12 mb-10"></div>
        <Experience />
      </div>
    </div>
  );
};

export default Lines;
