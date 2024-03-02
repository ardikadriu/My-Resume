"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { projectList } from "@/project-list";
import Project from "@/components/Project";

const Experiencemobile = () => {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <div
      className=" max-sm:mt-10 sm:hidden ease-out duration-500"
      id="Experience"
    >
      <h1 className="text-center text-3xl font-semibold font-Raleway ">
        Projects
      </h1>
      <div className="flex flex-col items-center shrink-0 ">
        {" "}
        {projectList.map((el, index) => {
          if (el.devices == "desktop") {
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

      <div>
        <p
          data-aos="flip-right"
          data-aos-duration="400"
          className="max-w-[250px] text-center font-Raleway mt-6 font-medium"
        >
          Experienced in crafting 40+ Figma templates. Eager to leverage
          creative skills and learn quickly in a collaborative development
          environment.
        </p>
      </div>
    </div>
  );
};

export default Experiencemobile;
