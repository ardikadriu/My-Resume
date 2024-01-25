import Link from "next/link";
import Image from "next/image";
import Basketweb from "@/public/basketball-web1.png";
import Nike from "@/public/nike-shoes.png";
import SimpleLogin from "@/public/web-phones.png";
import Signin from "@/public/Sign In Page Design.jpg";
import { Sign } from "crypto";

const Experience = () => {
  return (
    <div className=" max-sm:mt-10 sm:hidden">
      <h1 className="text-center text-3xl font-semibold font-Raleway mb-5">
        Projects
      </h1>
      <div className="border border-black px-2 pt-2 mb-4">
        <h1></h1>
        <Link href={"https://basketball-g48iza31h-ardikadriu.vercel.app"}>
          <Image src={Basketweb} width={240} height={240} alt="WEb" />
        </Link>
        <div className="flex">
          <Link
            href={
              "https://www.figma.com/file/WaWEV7MRljBVpqne552uEI/Sport-Website-(Community)?mode=dev"
            }
          >
            <h1 className="text-center w-60 text-2xl font-Raleway font-semibold ">
              Figmas
            </h1>
          </Link>
        </div>
      </div>

      <div className="border border-black px-2 pt-2 mb-4">
        <h1 className="text-center">Pc Only</h1>
        <h2 className="text-center">Vercel</h2>
        <Link href={"https://nike-layout.vercel.app/"}>
          <Image src={Nike} width={240} height={240} alt="WEb" />
        </Link>
        <div className="flex">
          <Link
            href={
              "https://www.figma.com/file/1qzy1idS9BgNHHpIzD8EUM/nike-shoes-logo-(Community)?node-id=0%3A1&mode=dev"
            }
          >
            <h1 className="text-center w-60 text-2xl font-Raleway font-semibold ">
              Figmas
            </h1>
          </Link>
        </div>
      </div>
      <div className="border border-black px-2 pt-2">
        <h1 className="text-center">Pc Only</h1>
        <h2 className="text-center">Vercel</h2>
        <Link href={"https://figma-mobile-design-u1bj.vercel.app//"}>
          <Image src={SimpleLogin} width={240} height={140} alt="WEb" />
        </Link>
        <div className="flex">
          <Link
            href={
              "https://www.figma.com/file/esbLh7WF0FlnOVOvJ6dNi2/figma-mobile-application-simple-design-(Community)?mode=dev"
            }
          >
            <h1 className="text-center w-60 text-2xl font-Raleway font-semibold ">
              Figmas
            </h1>
          </Link>
        </div>
      </div>

      <div className="border border-black px-2 pt-2 mt-4">
        <Link href={"https://sign-in-design.vercel.app/"}>
          <Image src={Signin} width={240} height={240} alt="WEb" />
        </Link>
        <div className="flex">
          <Link
            href={
              "https://www.figma.com/file/PBJ5ZSWb5FfaVD2OhOdOkL/Sign-In-Page-Design-(Community)?node-id=1%3A28&mode=dev"
            }
          >
            <h1 className="text-center w-60 text-2xl font-Raleway font-semibold ">
              Figmas
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
