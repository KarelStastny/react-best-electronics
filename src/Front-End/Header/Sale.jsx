import React from "react";

import Img1 from "../../images/AdSliderImage/4.png";
import Img2 from "../../images/AdSliderImage/6.png";

const Sale = () => {
  return (
    <div className="sale w-full ">
      <div className="w-full grad rounded-2xl flex justify-between items-center p-6">
        {/* Img */}
        <div className="hidden w-1/5 md:flex items-center flex-col justify-center">
          <img className=" h-[50%] w-[50%]" src={Img2} alt="" />
        </div>
        {/* Sale */}
        <div className=" hidden w-1/5 md:flex items-center flex-col justify-center">
          <p className="text-xl text-second">Sleva</p>
          <p className="text-xs">Pouze tento víkend</p>
          <p className="text-lg font-semibold ">
            {" "}
            <span className="text-second">20%</span> na vše
          </p>
        </div>
        {/* Img */}
        <div className="hidden md:flex w-1/5 md:w-1/5  items-center flex-col justify-center">
          <p className="uppercase text-sm md:text-2xl text-center">
            Speciální nabídka
          </p>
          <p className="uppercase text-xs md:text-md mt-4 px-4 py-1 rounded-full font-bold bg-second text-dark tracking-wider">
            Super
          </p>
        </div>
        {/* Sale */}
        <div className="w-1/2 md:w-1/5 flex items-center flex-col justify-center">
          <p className="text-xl text-second">Sleva</p>
          <p className="text-xs">Pouze tento víkend</p>
          <p className="text-lg font-semibold ">
            {" "}
            <span className="text-second">20%</span> na vše
          </p>
        </div>
        {/* Img */}
        <div className="w-1/2 md:w-1/5  flex items-center flex-col justify-center">
          <img className=" h-[70%] w-[50%]" src={Img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sale;
