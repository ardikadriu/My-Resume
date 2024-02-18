"use client";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <div className="sm:hidden text-blue-800 mt-3  ">
      <ul className="flex gap-5 font-Mohave font-semibold active:red  mx-20 ">
        <Link href={"#Profile"} data-aos="fade-right" data-aos-duration="200">
          {" "}
          <li className=" border border-blue-800 px-2 py-1 ">Profile</li>
        </Link>

        <Link href={"#Skills"} data-aos="fade-right" data-aos-duration="400">
          {" "}
          <li className=" border border-blue-800 px-2 py-1 ">Skills</li>
        </Link>

        <Link
          href={"#Experience"}
          data-aos="fade-right"
          data-aos-duration="600"
        >
          <li className=" border border-blue-800 px-2 py-1 ">Portofolio</li>
        </Link>

        <Link href={"#Contact"} data-aos="fade-right" data-aos-duration="800">
          <li className=" border border-blue-800 px-2 py-1 ">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
