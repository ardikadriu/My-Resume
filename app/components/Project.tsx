import Link from "next/link";
import Image from "next/image";
import Basket from "@/public/Projects/basketball-web1.png";
import { LuFigma } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { useEffect } from "react";
import { RxVercelLogo } from "react-icons/rx";
import { ProjectData } from "@/project-list";

interface ProjectProps extends ProjectData {}

export default function Project({
  image,
  figmaLink,
  vercelLink,
  githubLink,
}: ProjectProps) {
  return (
    <div data-aos="flip-right" data-aos-duration="400" data-aos-delay="200">
      <Link href={vercelLink}>
        <Image
          className="max-sm:h-[170px] max-sm:mt-6 h-[135px] shrink-0 max-sm:object-contain max-sm:shadow-2xl"
          src={image}
          width={300}
          height={250}
          alt="baket"
        />
      </Link>
      <div className="flex max-w-[300px] justify-between mt-4">
        <Link href={figmaLink}>
          <LuFigma
            className=" transform hover:scale-150 ease-out duration-500"
            size={30}
          />
        </Link>

        <Link href={vercelLink}>
          <RxVercelLogo
            className=" transform hover:scale-150 ease-out duration-500"
            size={30}
          />
        </Link>
        <Link href={githubLink}>
          <FaGithub
            className=" transform hover:scale-150 ease-out duration-500"
            size={30}
          />
        </Link>
      </div>
    </div>
  );
}
