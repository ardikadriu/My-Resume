import Image from "next/image";
import Link from "next/link";

import Basket from "@/public/Projects/basketball-web1.png";
import Nikeshoes from "@/public/Projects/nike-shoes.png";
import Watches from "@/public/Projects/Watches.png";
import Signin from "@/public/Projects/simple sign in.png";

import { RxVercelLogo } from "react-icons/rx";
import { LuFigma } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
const Experience = () => {
  return (
    <div className="mt-12 ml-9 max-md:pr-5 ">
      <h1 className="text-3xl  font-Raleway font-semibold  max-w-[809px]  mr-10">
        EXPERIENCE
      </h1>
      <div className="flex justify-between mt-12 max-md:w-[709px]  max-md:flex max-md:justify-between  w-[809px]">
        <div>
          <Link href={"https://vercel.com/ardikadriu/basketball-web"}>
            <Image src={Basket} width={300} height={250} alt="baket" />
          </Link>
          <div className="flex justify-between mt-4">
            <Link
              href={
                "https://www.figma.com/file/Friex6UklMP2wriHhPTR27/Sport-Website-(Community)?type=design&mode=design"
              }
            >
              <LuFigma
                className=" transform hover:scale-150 ease-out duration-500"
                size={30}
              />
            </Link>

            <Link href={"https://vercel.com/ardikadriu/basketball-web"}>
              <RxVercelLogo
                className=" transform hover:scale-150 ease-out duration-500"
                size={30}
              />
            </Link>
            <Link href={"https://github.com/ardikadriu/Basketball-web"}>
              <FaGithub
                className=" transform hover:scale-150 ease-out duration-500"
                size={30}
              />
            </Link>
          </div>
        </div>
        <div>
          <Link href={"https://nike-layout.vercel.app/"}>
            <Image
              className="h-[142px] max-md:h-[142px]"
              src={Nikeshoes}
              width={300}
              height={250}
              alt="baket"
            />
          </Link>
          <div className="flex justify-between mt-4">
            <Link
              href={
                "https://www.figma.com/file/1qzy1idS9BgNHHpIzD8EUM/nike-shoes-logo-(Community)?mode=dev"
              }
            >
              <LuFigma
                className=" transform hover:scale-150 ease-out duration-500"
                size={30}
              />
            </Link>

            <Link href={"https://vercel.com/ardikadriu/nike-layout"}>
              <RxVercelLogo
                className=" transform hover:scale-150 ease-out duration-500"
                size={30}
              />
            </Link>
            <Link href={"https://github.com/ardikadriu/nike-layout"}>
              <FaGithub
                className=" transform hover:scale-150 ease-out duration-500"
                size={30}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-12  w-[809px] max-md:w-[709px]  max-md:flex max-md:justify-between">
        <div>
          <Link href={"https://watches-iota.vercel.app/"}>
            <Image
              className="h-[142px]"
              src={Watches}
              width={300}
              height={142}
              alt="baket"
            />
          </Link>
          <div className="flex justify-between mt-4">
            <Link
              href={
                "https://www.figma.com/file/Gyyca3XdpQPQnkhXKqnXqN/Smart-Watch-eCommerce-Website-(Community)?node-id=0%3A1&mode=dev"
              }
            >
              <LuFigma
                className=" transform hover:scale-150 ease-out duration-500"
                size={30}
              />
            </Link>
            <Link href={"https://vercel.com/ardikadriu/watches"}>
              <RxVercelLogo
                className=" transform hover:scale-150 ease-out duration-500"
                size={30}
              />
            </Link>
            <Link href={"https://github.com/ardikadriu/Watches"}>
              <FaGithub
                className=" transform hover:scale-150 ease-out duration-500"
                size={30}
              />
            </Link>
          </div>
        </div>
        <div>
          <Link href={"https://sign-in-design.vercel.app/"}>
            <Image
              className="h-[142px]"
              src={Signin}
              width={300}
              height={250}
              alt="baket"
            />
          </Link>
          <div className="flex justify-between mt-4">
            <Link
              href={
                "https://www.figma.com/file/5UAzszP1yzinVOBxCFuoWk/Sign-In-Page-Design-(Community)?mode=dev"
              }
            >
              <LuFigma
                className=" transform hover:scale-150 ease-out duration-500"
                size={30}
              />
            </Link>
            <Link href={"https://vercel.com/ardikadriu/sign-in-design"}>
              <RxVercelLogo
                className=" transform hover:scale-150 ease-out duration-500"
                size={30}
              />
            </Link>
            <Link href={"https://github.com/ardikadriu/Sign-in-Design"}>
              <FaGithub
                className=" transform hover:scale-150 ease-out duration-500"
                size={30}
              />
            </Link>
          </div>
        </div>
      </div>
      <p className=" max-w-[809px] text-center mt-7 leading-5 text-[15px] font-Raleway">
        {" "}
        Experienced in crafting 50+ Figma templates. Eager to leverage creative
        skills and learn quickly in a collaborative development environment.
      </p>
    </div>
  );
};

export default Experience;
