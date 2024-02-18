"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";
const Contactmobile = () => {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <div className=" sm:hidden mt-10  mb-5" id="Contact">
      <h1 className="text-center font-Raleway text-3xl font-semibold">
        Contact
      </h1>
      <h2 className="font-Mohave mt-2">ardikadriu156@gmail.com</h2>
      <div className="flex justify-between mt-3">
        {" "}
        <Link href={"https://www.instagram.com/ardi.kadriu/"}>
          <FaInstagram
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-dealy="200"
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/ardi-kadriu-4b8018297/"}>
          <CiLinkedin
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-dealy="400"
            size={17}
          />
        </Link>
        <Link href={"https://github.com/ardikadriu"}>
          <FaGithub
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-dealy="600"
          />
        </Link>
      </div>
    </div>
  );
};

export default Contactmobile;
