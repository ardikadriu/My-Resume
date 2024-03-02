"use client";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

import { FaGithub } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({});
  });

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="10"
      className="flex mt-40 pb-10"
    >
      <div className=" mt-[21px] ">
        <h1 className="text-3xl text-right leading-9 tracking-[1.5px] font-Raleway font-semibold ">
          Contact
        </h1>
        <h3 className="font-Raleway font-medium leading-6 ">
          ardikadriu156@gmail.com
        </h3>
        <div className="flex justify-end mt-[11px]">
          <div className=" text-right flex w-[72px] justify-between">
            <Link href={"https://www.instagram.com/ardi.kadriu/"}>
              <FaInstagram className="transform hover:scale-150 ease-out duration-300" />
            </Link>
            <Link href={"https://www.linkedin.com/in/ardi-kadriu-4b8018297/"}>
              <CiLinkedin
                className="transform hover:scale-150 ease-out duration-300"
                size={17}
              />{" "}
            </Link>
            <Link href={"https://github.com/ardikadriu"}>
              <FaGithub className="transform hover:scale-150 ease-out duration-300" />
            </Link>
          </div>
        </div>
      </div>
      <div className=" h-[102px] w-[2px] bg-black ml-4 flex justify-center ">
        <div className="">
          <div
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay="600"
            className="w-2 h-2 rounded-md bg-purple-950 mt-14"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
