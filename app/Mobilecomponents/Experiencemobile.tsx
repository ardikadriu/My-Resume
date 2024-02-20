"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Link from "next/link";
import Image from "next/image";
import Basketweb from "@/public/Projects/basketball-web1.png";
import TaxiWeb from "@/public/Projects-mobile/taxi-cover.png";
import SimpleLogin from "@/public/Projects-mobile/web-phones.png";
import Renthouses from "@/public/Projects-mobile/rent.png";
import TikTok from "@/public/Projects-mobile/tik tok.png";
import Facebook from "@/public/Projects-mobile/facebook.png";

import { RxVercelLogo } from "react-icons/rx";
import { LuFigma } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
const Experiencemobile = () => {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <div
      className=" max-sm:mt-10 sm:hidden ease-out duration-500"
      id="Experience"
    >
      <h1 className="text-center text-3xl font-semibold font-Raleway mb-5">
        Projects
      </h1>
      <div
        data-aos="flip-right"
        data-aos-duration="200"
        className=" px-2 pt-2 mb-4 "
      >
        <Link href={"https://basketball-web-ruby.vercel.app/"}>
          <Image src={Basketweb} width={240} height={240} alt="WEb" />
        </Link>
        <div className="flex items-center justify-between mt-3">
          <Link
            href={
              "https://www.figma.com/file/WaWEV7MRljBVpqne552uEI/Sport-Website-(Community)?mode=dev"
            }
          >
            <LuFigma size={25} />
          </Link>

          <Link href={"https://basketball-web-ruby.vercel.app/"}>
            <RxVercelLogo size={30} />
          </Link>

          <Link href={"https://github.com/ardikadriu/Basketball-web"}>
            <FaGithub size={29} />
          </Link>
        </div>
      </div>

      <div
        data-aos="flip-right"
        data-aos-duration="300"
        className=" px-2 pt-2 mb-4"
      >
        <Link href={"https://taxiapp-mobile.vercel.app/"}>
          <Image src={TaxiWeb} width={240} height={240} alt="WEb" />
        </Link>
        <div className="flex items-center justify-between mt-3">
          <Link
            href={
              "https://www.figma.com/file/Jd1A4gexkxCjeXsP72bo1t/Taxi-App-(Community)?node-id=0%3A1&mode=dev"
            }
          >
            <LuFigma size={25} />
          </Link>

          <Link href={"https://taxiapp-mobile.vercel.app"}>
            <RxVercelLogo size={30} />
          </Link>

          <Link href={"https://github.com/ardikadriu/Taxiapp-mobile"}>
            <FaGithub size={29} />
          </Link>
        </div>
      </div>

      <div data-aos="flip-right" data-aos-duration="400" className=" px-2 pt-2">
        <Link href={"https://login-design2.vercel.app/"}>
          <Image src={SimpleLogin} width={240} height={140} alt="WEb" />
        </Link>
        <div className="flex items-center justify-between mt-3">
          <Link
            href={
              "https://www.figma.com/file/esbLh7WF0FlnOVOvJ6dNi2/figma-mobile-application-simple-design-(Community)?mode=dev"
            }
          >
            <LuFigma size={25} />
          </Link>

          <Link href={"https://login-design2.vercel.app/"}>
            <RxVercelLogo size={30} />
          </Link>

          <Link href={"https://github.com/ardikadriu/login-design2"}>
            <FaGithub size={29} />
          </Link>
        </div>
      </div>

      <div
        data-aos="flip-right"
        data-aos-duration="400"
        className=" px-2 pt-2 mt-4"
      >
        <Link href={"https://rent-house-xi.vercel.app/"}>
          <Image src={Renthouses} width={240} height={240} alt="WEb" />
        </Link>
        <div className="flex">
          <div className="flex w-full items-center justify-between mt-3">
            <Link
              href={
                "https://www.figma.com/file/WaWEV7MRljBVpqne552uEI/Sport-Website-(Community)?mode=dev"
              }
            >
              <LuFigma size={25} />
            </Link>

            <Link href={"https://rent-house-xi.vercel.app/"}>
              <RxVercelLogo size={30} />
            </Link>

            <Link href={"https://github.com/ardikadriu/Rent-house"}>
              <FaGithub size={29} />
            </Link>
          </div>
        </div>

        <div
          data-aos="flip-right"
          data-aos-duration="400"
          className=" px-2 pt-2"
        >
          <Link href={"https://tiktok-figma.vercel.app/"}>
            <Image src={TikTok} width={240} height={140} alt="WEb" />
          </Link>
          <div className="flex items-center justify-between mt-3">
            <Link className="" href={"/"}>
              <LuFigma size={25} />
            </Link>

            <Link href={"https://figma-mobile-design-u1bj.vercel.app"}>
              <RxVercelLogo size={30} />
            </Link>

            <Link href={"https://github.com/ardikadriu/Tiktok-figma"}>
              <FaGithub size={29} />
            </Link>
          </div>
        </div>

        <div
          data-aos="flip-right"
          data-aos-duration="400"
          className=" px-2 pt-2"
        >
          <Link href={"https://ipohne13-facebook.vercel.app/"}>
            <Image src={Facebook} width={240} height={140} alt="WEb" />
          </Link>
          <div className="flex items-center justify-between mt-3">
            <Link
              href={
                "https://www.figma.com/file/WqruY50EPcYos61G4sNSo1/facebook-page-(Community)?type=design&node-id=0-1&mode=design&t=aYBUZyjAqdqmx0RB-0"
              }
            >
              <LuFigma size={25} />
            </Link>

            <Link href={"https://ipohne13-facebook.vercel.app/"}>
              <RxVercelLogo size={30} />
            </Link>

            <Link href={"https://github.com/ardikadriu/Ipohne13-Facebook"}>
              <FaGithub size={29} />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p
          data-aos="flip-right"
          data-aos-duration="400"
          className="max-w-[250px] text-center font-Raleway mt-6 font-medium"
        >
          Experienced in crafting 50+ Figma templates. Eager to leverage
          creative skills and learn quickly in a collaborative development
          environment.
        </p>
      </div>
    </div>
  );
};

export default Experiencemobile;
