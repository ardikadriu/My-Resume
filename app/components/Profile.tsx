"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Porfilepic from "@/public/test.png";

const Profile = () => {
  useEffect(() => {
    AOS.init({});
  });

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="200"
      className="max-sm:hidden max-md:pl-4"
    >
      <div className="flex  mt-52 items-center ml-4 ">
        <div className="w-32 h-[1px] bg-black flex mb-11 "></div>
        <div className="flex flex-col ">
          <h1 className="text-6xl font-Mohave ml-4 ">Ardi</h1>
          <h2 className="w-[148px] text-right text-4xl ">Kadriu</h2>
        </div>
      </div>

      <div className="w-64 h-[413px] bg-[#D9D9D9] flex justify-center items-center mt-8 ">
        <Image
          className="w-full flex h-full object-cover "
          src={Porfilepic}
          width={200}
          height={200}
          alt="Me"
        />{" "}
      </div>
    </div>
  );
};

export default Profile;
