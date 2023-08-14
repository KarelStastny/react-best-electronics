import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";

import Img1 from "../../images/AdSliderImage/1.png";
import Img2 from "../../images/AdSliderImage/2.png";
import Img3 from "../../images/AdSliderImage/3.png";
import Img4 from "../../images/AdSliderImage/4.png";
import Img5 from "../../images/AdSliderImage/5.png";
import { Link } from "react-router-dom";

// data
const sliderData = [
  {
    img: Img1,
  },
  {
    img: Img2,
  },
  {
    img: Img3,
  },
  {
    img: Img4,
  },
  {
    img: Img5,
  },
];

export const AdSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlider = () => {
    const isLastSlide = currentIndex === sliderData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" grad w-full h-full rounded-2xl p-4 ">
      {/* Ad container */}
      <div className="flex  items-center justify-center h-full w-full  relative">
        {/* Left Arrow */}
        <div className="absolute left-2 cursor-pointer">
          <MdKeyboardArrowLeft className="fill-second" onClick={prevSlider} size={40} />
        </div>

        {/* Add */}
        <div className="w-full   flex ">
          <div className="w-[45%]  flex  flex-col items-center mt-2 md:mt-8">
            <h2 className="uppercase text-base md:text-lg text-second font-semibold">
              Speciální nabídka
            </h2>
            <p className=" text-sm md:text-base">Nejlepší produkty </p>
            <p className=" text-sm md:text-base">
              za{" "}
              <span className="underline   md:text-base text-second font-bold uppercase text-sm">
                nejlepší ceny
              </span>
            </p>
            <Link to={"/category"} className="mt-32">
              <button className=" py-1 px-2 bg-second text-dark rounded-md font-semibold hover:bg-secondHover">
                Koupit
              </button>
            </Link>
          </div>
          <div className="w-[55%] h-[300px]  flex flex-col items-center justify-center ">
            <img
              src={sliderData[currentIndex].img}
              alt=""
              className="w-[75%] h-[75%] object-contain"
            />
            {/* Dot */}
            <div className="flex top-4 justify-center py-2">
              {sliderData.map((slide, slideIndex) => {
                return (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className="text-2xl cursor-pointer"
                  >
                    <RxDotFilled className="fill-red-100" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* {Right Arrow} */}
        <div className="absolute right-2 cursor-pointer">
          <MdKeyboardArrowRight className="fill-second" onClick={nextSlider} size={40} />
        </div>
      </div>
    </div>
  );
};

export default AdSlider;
