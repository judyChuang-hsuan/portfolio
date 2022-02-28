import React from "react";
import { SiNetlify, SiGithub } from "react-icons/si";
const SingleProject = ({ name, image, description, tech, website, github }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img
          className="h-full m-auto w-11/12 brightness-75 hover:brightness-100"
          src={image}
          alt={name}
        />
      </div>
      <div className="relative card-body text-center flex flex-col gap-4">
        <h2 className="text-white font-bold text-2xl xl:text-3xl">{name}</h2>
        <p className="text-graish-blue font-xl tracking-wide xl:text-2xl">
          {description}
        </p>
        <p className="text-grey tracking-wider xl:text-lg">{tech}</p>
        <div
          className="absolute bottom-2 text-white flex justify-center m-auto w-full gap-8
        
         xl:bottom-8"
        >
          <a href={website} target="_blank" rel="noopener noreferrer">
            <SiNetlify
              className="h-6 w-6 text-cyan hover:text-light-blue transition
             2xl:h-8 2xl:w-8"
            />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <SiGithub
              className="h-6 w-6 text-cyan hover:text-light-blue transition
            2xl:h-8 2xl:w-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
