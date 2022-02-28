import React from "react";
import profile from "../assets/profile2.jpg";
import desktopPro from "../assets/profile1.jpg";
import { social } from "../utils/constants";
const Image = () => {
  return (
    <div className="container m-auto mt-8">
      <div className="profile-card">
        <img className="lg:hidden" src={profile} alt="me" />
        <img className="hidden lg:block" src={desktopPro} alt="me" />
        <div className="content">
          <div className="contentBox">
            <h3 className="font-bold">莊詠媗 Judy Chuang</h3>
            <h3>Frontend Developer</h3>
          </div>
          <div className="social">
            {social.map((social, index) => {
              const { site, icon } = social;
              return (
                <a
                  key={index}
                  href={site}
                  className="h-8 w-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
