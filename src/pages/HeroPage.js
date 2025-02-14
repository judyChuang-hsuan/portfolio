import React from "react";
import { ArrowCircleDownIcon } from "@heroicons/react/outline";
const HeroPage = () => {
  return (
    <div className="min-h-95">
      <div className="relative bg-hero-background bg-cover bg-center brightness-50 h-95 "></div>
      <div
        className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto md:top-40 lg:top-1/2
      
      "
      >
        <div className="text-center leading-loose tracking-wider lg:leading-loose">
          <div data-text="Hello, I'm Judy" className="hero-title text-9xl">Hello, I'm Judy</div>
          <h2 data-text="web developer" className="hero-title text-7xl mb-2">web developer</h2>
        </div>
        <h3 className="text-center font-BebasNeue text-grey text-lg tracking-wider animate__animated animate__zoomIn md:text-xl">
          Front End Developer / Creator
        </h3>
        <a href="#contact">
          <button className="font-BebasNeue close block border-2 text-white py-3 px-8 text-xl mt-8 md:text-2xl">
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
