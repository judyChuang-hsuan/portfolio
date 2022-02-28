import React from "react";
import { ArrowCircleDownIcon } from "@heroicons/react/outline";
const HeroPage = () => {
  return (
    <div className="min-h-95">
      <div className="relative bg-hero-background bg-cover bg-center brightness-50 blur-sm h-95 "></div>
      <div
        className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 m-auto md:top-40 lg:top-2/3  
      
      "
      >
        <div className="text-white text-5xl leading-loose tracking-wider animate__animated animate__flipInX md:text-7xl lg:leading-loose">
          Hello, I'm
          <span className="font-bold ml-5">
            <span className="text-cyan text-7xl hover:text-8xl xl:text-8xl">
              J
            </span>
            udy,
          </span>
          <h2 className="text-4xl mb-2 md:text-6xl">web developer</h2>
        </div>
        <h3 className="text-grey text-lg tracking-wider animate__animated animate__bounceInLeft md:text-xl">
          Front End Developer / Creator
        </h3>
        <a href="#contact">
          <button className="close block text-center font-bold border-2 text-white py-3 px-8 text-xl mt-8 md:text-2xl">
            Contact Me
          </button>
        </a>
      </div>
      <a href="#project">
        <button className="absolute bottom-11 right-8 bg-transparent z-10 h-9 w-9 text-grey animate-bounce xl:h-11 xl:w-11 xl:left-1/2">
          <ArrowCircleDownIcon />
        </button>
      </a>
    </div>
  );
};

export default HeroPage;
