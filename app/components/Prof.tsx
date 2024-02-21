"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Prof = () => {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="200"
      className="max-w-[593px] mt-[151px] ml-9"
    >
      <h1 className="text-3xl font-semibold font-Raleway leading-[38px] tracking-[1.5px] uppercase ">
        Profile
      </h1>
      <p className="mt-7 font-Raleway tracking-[0.975px] max-w-[593px] leading-5 text-[15px] text-center">
        Aspiring front-end developer with a strong passion for creating engaging
        and user-friendly web experiences. Eager to leverage my education
        background in and enthusiasm for front-end technologies to contribute
        and grow as a valuable member of a dynamic development team.
      </p>
    </div>
  );
};

export default Prof;
