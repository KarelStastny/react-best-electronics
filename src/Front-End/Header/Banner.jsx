import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import {CiInstagram, CiFacebook,CiLinkedin, CiYoutube,   } from "react-icons/ci"

const Banner = () => {
  return (
    <div className="grad h-full  w-full rounded-2xl">
      <div className="   rounded-lg grad p-2 sm:p-6 w-full h-full ">
        <h1 className="font-semibold text-2xl xl:text-3xl italic">
          Nejzajímavější obchod s elektronikou ve <span className="uppercase text-second">vašem městě</span>
        </h1>
        <p className=" pt-4 pl-2 italic text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          voluptatum earum illo, ab soluta in. Officiis quos quaerat omnis
          voluptas delectus, qui, maiores aliquid dolore officia, adipisci
          magnam. Molestiae, atque!
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <i><CiInstagram size={30} className="hover:fill-orange-400 cursor-pointer"/></i>
          <i><CiFacebook size={30} className="hover:fill-blue-400 cursor-pointer"/></i>
          <i><CiYoutube size={30} className="hover:fill-red-400 cursor-pointer"/></i>
          <i><CiLinkedin size={30} className="hover:fill-blue-400 cursor-pointer"/></i>
        </div>
        <Link to={"/category"} className=""> <button className=" mt-8 py-1 px-2 rounded-md text-dark font-semibold hover:bg-secondHover bg-second">Naše Nabídka</button> </Link>
      </div>
    </div>
  );
};

export default Banner;
