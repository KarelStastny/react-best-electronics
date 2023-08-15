import React, { useContext } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { CiInstagram, CiFacebook, CiLinkedin, CiYoutube } from "react-icons/ci";
import Img1 from "../../images/SocailIconColor/facebook.png";
import Img2 from "../../images/SocailIconColor/instagram.png";
import Img3 from "../../images/SocailIconColor/linkedin.png";
import Img4 from "../../images/SocailIconColor/youtube.png";
import { ShopContext } from "../../Back-End/context/ShopContext";

const Banner = () => {
  const { setSelectedCategory, setSelectedSubcategory } =
    useContext(ShopContext);

  return (
    <div className="grad h-full  w-full rounded-2xl">
      <div className="   rounded-lg grad p-4 sm:p-6 w-full h-full ">
        <h1 className="font-semibold text-lg xl:text-3xl italic">
          Nejzajímavější obchod s elektronikou ve <br />
          <span className="uppercase text-second">vašem městě</span>
        </h1>
        <p className=" pt-4 pl-2 italic text-sm md:text-base text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          voluptatum earum illo, ab soluta in. Officiis quos quaerat omnis
          voluptas delectus, qui, maiores !
        </p>
        <div className="flex items-center justify-center gap-6 mt-4">
          <i>
            <img className="w-7 cursor-pointer" src={Img1} alt="" />
          </i>
          <i>
            <img className="w-7 cursor-pointer" src={Img2} alt="" />
          </i>
          <i>
            <img className="w-7 cursor-pointer" src={Img3} alt="" />
          </i>
          <i>
            <img className="w-7 cursor-pointer" src={Img4} alt="" />
          </i>
        </div>
        <Link
          onClick={() => {
            setSelectedCategory(null);
            setSelectedSubcategory(null);
          }}
          to={"/category"}
          className=""
        >
          <button className=" mt-8 py-1 px-2 rounded-md text-dark font-semibold hover:bg-secondHover bg-second">
            Naše Nabídka
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
