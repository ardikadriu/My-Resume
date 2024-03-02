"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { projectList } from "@/project-list";
import Project from "./Project";

const Experience = () => {
  useEffect(() => {
    AOS.init({}), [];
  });
  return (
    <div className="mt-12 ml-9 max-md:pr-5  ">
      <h1
        data-aos="flip-right"
        data-aos-duration="400"
        className="text-3xl  font-Raleway font-semibold  mb-10"
      >
        EXPERIENCE
      </h1>
      <div className="">
        <div className="grid grid-cols-2 grid-rows-3 max-md:w-[709px] max-md:justify-between gap-10  max-md:grid max-md:grid-cols-2 max-md:row-span-3 ">
          {projectList.map((el, index) => {
            if (el.devices == "mobile") {
              return null;
            }
            return (
              <Project
                image={el.image}
                figmaLink={el.figmaLink}
                vercelLink={el.vercelLink}
                githubLink={el.githubLink}
              />
            );
          })}
        </div>

        <p className=" max-w-[809px] text-center mt-7 leading-5 text-[15px] font-Raleway ">
          Experienced in crafting 40+ Figma templates. Eager to leverage
          creative skills and learn quickly in a collaborative development
          environment.
        </p>
      </div>
    </div>
  );
};

export default Experience;
