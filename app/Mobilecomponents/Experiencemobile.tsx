import Link from "next/link";
import Image from "next/image";
import Basketweb from "@/public/basketball-web1.png";
import TaxiWeb from "@/public/taxi-cover.png";
import SimpleLogin from "@/public/web-phones.png";
import Renthouses from "@/public/rent.png";
import Figma from "@/public/figma.png";
import Github from "@/public/github.png";
import { RxVercelLogo } from "react-icons/rx";
import { LuFigma } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
const Experiencemobile = () => {
  return (
    <div className=" max-sm:mt-10 sm:hidden" id="Experience">
      <h1 className="text-center text-3xl font-semibold font-Raleway mb-5">
        Projects
      </h1>
      <div className=" px-2 pt-2 mb-4">
        <Link href={"https://basketball-g48iza31h-ardikadriu.vercel.app"}>
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

          <Link href={"https://basketball-g48iza31h-ardikadriu.vercel.app"}>
            <RxVercelLogo size={30} />
          </Link>

          <Link href={"https://github.com/ardikadriu/Basketball-web"}>
            <FaGithub size={29} />
          </Link>
        </div>
      </div>

      <div className=" px-2 pt-2 mb-4">
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

          <Link href={"https://vercel.com/ardikadriu/taxiapp-mobile"}>
            <RxVercelLogo size={30} />
          </Link>

          <Link href={"https://github.com/ardikadriu/Taxiapp-mobile"}>
            <FaGithub size={29} />
          </Link>
        </div>
      </div>

      <div className=" px-2 pt-2">
        <Link href={"https://figma-mobile-design-u1bj.vercel.app/"}>
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

          <Link href={"https://vercel.com/ardikadriu/figma-mobile-design-u1bj"}>
            <RxVercelLogo size={30} />
          </Link>

          <Link href={"https://github.com/ardikadriu/Basketball-web"}>
            <FaGithub size={29} />
          </Link>
        </div>
      </div>

      <div className=" px-2 pt-2 mt-4">
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

            <Link href={"https://vercel.com/ardikadriu/rent-house"}>
              <RxVercelLogo size={30} />
            </Link>

            <Link href={"https://github.com/ardikadriu/Rent-house"}>
              <FaGithub size={29} />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="max-w-[250px] text-center font-Raleway mt-6 font-medium">
          Experienced in crafting 50+ Figma templates. Eager to leverage
          creative skills and learn quickly in a collaborative development
          environment.
        </p>
      </div>
    </div>
  );
};

export default Experiencemobile;
