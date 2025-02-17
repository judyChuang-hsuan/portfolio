import React from "react";
import { FaCodepen, FaMediumM, FaGithub } from "react-icons/fa";
import AudioPhileImg from '../assets/audio.png'
import PlanetsFactImg from '../assets/planets.png'
import QuizImg from '../assets/quiz.png'


export const projects = [
  {
    id: 1,
    name: "Audiophile",
    image: AudioPhileImg,
    description:
      "If you wanna buy nice-looking and elegant headphones, visit the website now.",
    tech: "React  Redux  Tailwind CSS  API",
    website: "https://audiophile-ecom.netlify.app/",
    github: "https://github.com/judyChuang-hsuan/audiophile",
  },
  {
    id: 2,
    name: "Planets-Fact",
    image: PlanetsFactImg,
    description:
      "Do you know what happened to every planets in the solar system? Visit the website now.",
    tech: "React  Bootstrap  API",
    website: "https://planetsecret.netlify.app/",
    github: "https://github.com/judyChuang-hsuan/Planets-Fact",
  },
  {
    id: 6,
    name: "Quizzzzz",
    image: QuizImg,
    description:
      "Wanna test your knowledge about different fields? Check this!",
    tech: "React     API     Styled-Components",
    website: "https://knowledgequizz.netlify.app/",
    github: "https://github.com/judyChuang-hsuan/quiz-app",
  },
];

export const social = [
  {
    id: 1,
    icon: <FaGithub className="w-8 h-8 hover:text-cyan transition" />,
    site: "https://github.com/judyChuang-hsuan",
  },
  {
    id: 2,
    icon: <FaMediumM className="w-8 h-8 hover:text-cyan transition" />,
    site: "https://medium.com/@hsuan__",
  },
  {
    id: 3,
    icon: <FaCodepen className="w-8 h-8 hover:text-cyan transition" />,
    site: "https://codepen.io/hsuanturtle",
  },
];
