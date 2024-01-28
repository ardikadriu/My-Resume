import Image from "next/image";
import Link from "next/link";
import Basket from "@/public/basketball-web1.png";
import Nikeshoes from "@/public/nike-shoes.png";
import Figma from "@/public/figma.png";
import Github from "@/public/github.png";
import { RxVercelLogo } from "react-icons/rx";
import Watches from "@/public/Watches.png";
import Signin from "@/public/simple sign in.png";
const Experience = () => {
  return (
    <div className="mt-12 ml-9 ">
      <h1 className="text-3xl  font-Raleway font-semibold ml-9 max-w-[809px] text-center">
        EXPERIENCE
      </h1>
      <div className="flex justify-between mt-12  w-[809px]">
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
              <Image src={Figma} width={30} height={50} alt="figma" />
            </Link>
            <Link href={"https://vercel.com/ardikadriu/basketball-web"}>
              <RxVercelLogo size={30} />
            </Link>
            <Link href={"https://github.com/ardikadriu/Basketball-web"}>
              <Image
                src={Github}
                width={30}
                height={50}
                alt="git hub
          "
              />
            </Link>
          </div>
        </div>
        <div>
          <Link href={"https://nike-layout.vercel.app/"}>
            <Image
              className="h-[142px]"
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
              <Image src={Figma} width={30} height={50} alt="figma" />
            </Link>

            <Link href={"https://vercel.com/ardikadriu/nike-layout"}>
              <RxVercelLogo size={30} />
            </Link>
            <Link href={"https://github.com/ardikadriu/nike-layout"}>
              <Image
                src={Github}
                width={30}
                height={50}
                alt="git hub
          "
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-12  w-[809px]">
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
              <Image src={Figma} width={30} height={50} alt="figma" />
            </Link>
            <Link href={"https://vercel.com/ardikadriu/watches"}>
              <RxVercelLogo size={30} />
            </Link>
            <Link href={"https://github.com/ardikadriu/Watches"}>
              <Image
                src={Github}
                width={30}
                height={50}
                alt="git hub
          "
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
              <Image src={Figma} width={30} height={50} alt="figma" />
            </Link>
            <Link href={"https://vercel.com/ardikadriu/sign-in-design"}>
              <RxVercelLogo size={30} />
            </Link>
            <Link href={"https://github.com/ardikadriu/Sign-in-Design"}>
              <Image
                src={Github}
                width={30}
                height={50}
                alt="git hub
          "
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
