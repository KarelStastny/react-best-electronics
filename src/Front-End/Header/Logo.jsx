import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <h1 className="text-2xl lg:text-4xl italic ">
          Best <span className="font-semibold  text-second ">Electronic</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
