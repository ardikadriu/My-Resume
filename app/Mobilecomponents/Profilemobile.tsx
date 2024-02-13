"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

const Profilemobile = () => {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <div
      data-aos="flip-right"
      data-aos-duration="100"
      className="max-sm:flex max-sm:flex-col max-sm:items-center mt-[25px] sm:hidden mb-6"
      id="Profile"
    >
      <div className="flex items-center">
        <div className="w-[130px] h-[1px] bg-[#000]"></div>{" "}
        <h1 className="text-6xl font-Mohave  tracking-[0.922px] ml-5">Ardi</h1>{" "}
      </div>
      <h2 className="w-[289px] text-right text-3xl font-Mohave">Kadriu</h2>

      <div className="bg-[#D9D9D9] max-sm:w-[253px] sm:hidden mt-[25px] flex justify-center items-center">
        <h2 className="py-32">Profile Picture</h2>
      </div>
      <div className="font-Raleway mt-4">
        <h1 className="text-4xl text-center font-semibold">Profile</h1>
        <p className="max-w-[300px] text-center mt-2">
          Aspiring front-end developer with a strong passion for creating
          engaging and user-friendly web experiences. Eager to leverage my
          educational background in [Your Degree or Relevant Courses] and
          enthusiasm for front-end technologies to contribute and grow as a
          valuable member of a dynamic development team.
        </p>
      </div>
    </div>
  );
};

export default Profilemobile;
