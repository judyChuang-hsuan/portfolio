import React from "react";
import { social } from "../utils/constants";
const Footer = () => {
  return (
    <div className="bg-blue py-4 min-h-15 text-center">
      <h3 className="text-grey text-lg">Designed by Judy Chuang</h3>

      <div className="text-cyan flex gap-4 justify-center m-auto mt-4">
        {social.map((social, index) => {
          const { site, icon } = social;
          return (
            <a
              key={index}
              href={site}
              className="h-6 w-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
