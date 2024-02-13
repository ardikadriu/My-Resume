"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram } from "react-icons/fa";
import { PiBasketballLight } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";
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
        <FaInstagram
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-dealy="200"
        />
        <PiBasketballLight
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-dealy="400"
          size={17}
        />
        <FaGoogle
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-dealy="600"
        />
      </div>
    </div>
  );
};

export default Contactmobile;
