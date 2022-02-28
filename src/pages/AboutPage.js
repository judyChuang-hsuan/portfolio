import React, { useEffect } from "react";
import Image from "../components/Image.js";
import Tech from "../components/Tech.js";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="min-h-screen w-full bg-dark-blue" id="about">
      <div className="w-11/12 py-8 m-auto">
        <h1 data-aos="fade-up" className="text-5xl text-white font-light mb-4">
          About ME
        </h1>
        <div className="bg-light-blue ml-8 w-56 h-2 mb-8"></div>
        <div data-aos="zoom-in" className="xl:flex ">
          <Image />
          <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
            <div className="text-white text-center mt-8 m-auto tracking-wider text-xl leading-normal">
              <p>
                I am a Front-End developer located in Taiwan. I have a serious
                passion for creating intuitive, dynamic user experiences.
              </p>
              <p>
                Well-organized person, problem solver, doer with high attention
                to details. Fan of NBA, playing the instruments, working out,
                and hiking.
              </p>
              <p>
                Interested in the entire front-end spectrum and working
                ambitious projects with positive people.
              </p>
            </div>
            <Tech />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
