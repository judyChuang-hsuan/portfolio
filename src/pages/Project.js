import React, { useEffect } from "react";
import { projects } from "../utils/constants";
import SingleProject from "../components/SingleProject";
import Aos from "aos";
import "aos/dist/aos.css";
const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="bg-dark-blue" id="project">
      <div data-aos="fade-right" className="min-h-screen py-8 w-11/12 m-auto">
        <h1 className="text-5xl text-white font-light mb-4">My Project</h1>
        <div className="bg-light-blue ml-8 w-56 h-2 mb-8"></div>
        <div className="flex justify-center m-auto flex-col flex-wrap md:flex-row">
          {projects.map((project) => {
            return <SingleProject key={project.id} {...project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
