import React from "react";
import { FaCodepen, FaMediumM, FaGithub } from "react-icons/fa";
import audio from "../assets/audio1.png";
import planets from "../assets/planets2.png";
import colors from "../assets/colors.png";
import quiz from "../assets/quiz.png";
import weshop from "../assets/weshop.png";
import todo from "../assets/to-do2.png";

export const projects = [
  {
    id: 1,
    name: "Audiophile",
    image: { audio },
    description:
      "If you wanna buy nice-looking and elegant headphones, visit the website now.",
    tech: "React  Redux  Tailwind CSS  API",
    website: "https://audiophile-ecom.netlify.app/",
    github: "https://github.com/judyChuang-hsuan/audiophile",
  },
  {
    id: 2,
    name: "Planets-Fact",
    image: { planets },
    description:
      "Do you know what happened to every planets in the solar system? Visit the website now.",
    tech: "React  Bootstrap  API",
    website: "https://planetsecret.netlify.app/",
    github: "https://github.com/judyChuang-hsuan/Planets-Fact",
  },
  {
    id: 3,
    name: "WeShop",
    image: { weshop },
    description:
      "We have different kinds of products. Everything you need is in WeShop.",
    tech: "React  Bootstrap  Styled-Components  API",
    website: "https://weshopforlife.netlify.app/",
    github: "https://github.com/judyChuang-hsuan/WeShop",
  },
  {
    id: 4,
    name: "Coollors",
    image: { colors },
    description: "Generate any color you like.",
    tech: "React",
    website: "https://coollors.netlify.app/",
    github: "https://github.com/judyChuang-hsuan/color-generator",
  },
  {
    id: 5,
    name: "What's your plan?",
    image: { todo },
    description: "What are you going to do today? Write down your to-do list.",
    tech: "React  Styled-Components",
    website: "https://whatsyourplan.netlify.app/",
    github: "https://github.com/judyChuang-hsuan/to-do-list",
  },
  {
    id: 6,
    name: "Quizzzzz",
    image: { quiz },
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
