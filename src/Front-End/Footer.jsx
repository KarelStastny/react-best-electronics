import React from "react";
import Img1 from "../images/SocailIconColor/facebook.png";
import Img2 from "../images/SocailIconColor/instagram.png";
import Img3 from "../images/SocailIconColor/linkedin.png";
import Img4 from "../images/SocailIconColor/youtube.png";

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-2 flex-col mt-5 mb-5">
      <p>© 1994 - 2023 Best Electronic a.s.</p>

      <div className="flex items-center justify-center gap-6 mt-4">
        <a
          href="https://cs-cz.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-7 cursor-pointer" src={Img1} alt="" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-7 cursor-pointer" src={Img2} alt="" />
        </a>
        <a
          href="https://cz.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-7 cursor-pointer" src={Img3} alt="" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-7 cursor-pointer" src={Img4} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
