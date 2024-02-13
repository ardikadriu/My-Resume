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
    <div className="sm:hidden mt-4   ">
      <ul className="flex gap-5 font-Mohave font-semibold active:red ">
        <Link
          href={"#Profile"}
          data-aos="fade-right"
          data-aos-duration="200"
          data-aos-dealy="200"
        >
          {" "}
          <li>Profile</li>
        </Link>

        <Link
          href={"#Skills"}
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-dealy="400"
        >
          {" "}
          <li className="scroll-smooth ">Skills</li>
        </Link>

        <Link
          href={"#Experience"}
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-dealy="600"
        >
          <li>Portofolio</li>
        </Link>

        <Link
          href={"#Contact"}
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="800"
        >
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
