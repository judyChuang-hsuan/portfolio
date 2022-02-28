import React from "react";
import { MdDoubleArrow } from "react-icons/md";

const technology = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JAVASCRIPT" },
  { id: 4, name: "REACT" },
  { id: 5, name: "REDUX" },
  { id: 6, name: "PYTHON" },
  { id: 7, name: "FLASK" },
  { id: 8, name: "BOOTSTRAP" },
  { id: 9, name: "TAILWIND CSS" },
  { id: 10, name: "GA" },
];
const Tech = () => {
  return (
    <div className="h-50 w-11/12 m-auto mt-8 justify-center flex flex-col gap-8 flex-wrap lg:h-40">
      {technology.map((t, index) => {
        const { name } = t;
        return (
          <div
            className="text-cyan text-lg items-center flex flex-wrap gap-4 "
            key={index}
          >
            <MdDoubleArrow />
            <h3>{name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Tech;
