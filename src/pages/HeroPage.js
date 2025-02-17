import React from "react";
import { ArrowCircleDownIcon } from "@heroicons/react/outline";
const HeroPage = () => {
  return (
    <div className="min-h-95 h-95 relative w-full">
      <div className="relative bg-hero-background bg-cover bg-center brightness-50 h-95 "></div>
      <div
        className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto md:top-40 lg:top-1/2
      
      "
      >
        <div className="text-center leading-loose tracking-wider lg:leading-loose">
          <div data-text="Hello, I'm Judy" className="hero-title text-4xl xl:text-9xl">Hello, I'm Judy</div>
          <h2 data-text="web developer" className="hero-title text-2xl mb-2 xl:text-7xl">web developer</h2>
        </div>
        <h3 className="text-center font-BebasNeue text-grey text-md tracking-wider animate__animated animate__zoomIn xl:text-lg">
          Front End Developer / Creator
        </h3>
      </div>
        <a href="#project" className="w-full">
            <button className="absolute bottom-11 right-6 bg-transparent z-10 h-9 w-9 text-grey animate-bounce xl:h-11 xl:w-11 xl:right-1/2">
                <ArrowCircleDownIcon />
            </button>
        </a>
    </div>
  );
};

export default HeroPage;
