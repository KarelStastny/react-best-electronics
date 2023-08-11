import React, { useEffect, useState } from "react";
import useLoadData from "../../Back-End/LoadDataFirebase";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import img1 from "../../images/AdSliderImage/1.png";
import img2 from "../../images/AdSliderImage/2.png";
import img3 from "../../images/AdSliderImage/3.png";
import { Link } from "react-router-dom";
import AddFavoriteButton from "./AddFavoriteButton";
import AddCartButton from "./AddCartButton";

const NewProductSlider = () => {
  const [newProducts, setNewProducts] = useState("");
  const products = useLoadData();

  // Filter new product
  useEffect(() => {
    const filtredProducts = products.filter((one) => one.newProduct === "true");
    setNewProducts(filtredProducts);
  }, []);

  console.log(newProducts);

  return (
    <div>
      <div className="w-full prodkut">
        <div className="flex flex-wrap w-full pt-7 ">
          {newProducts.map((one) => {
            // Kontrola, zda je produkt oblíbený

            return (
              <div
                className="flex flex-col  justify-center items-center w-1/2 flex-wrap  md:w-1/3 xl:w-1/4 2xl:w-1/5  p-1 sm:p-3 "
                key={one.id}
              >
                {/* Vnitřní barva */}
                <Link className="bg-gradient-to-b rounded-lg from-dark to-primary p-2 sm:p-4 w-full h-full">
                  {/* FAvorite */}

                  <div className="flex justify-between">
                    <div className=" text-sm px-2 text-dark bg-second rounded-md">
                      New
                    </div>

                    <div>
                      <AddFavoriteButton product={one} />
                    </div>
                  </div>

                  {/* Img */}
                  <div className="md:h-[200px] h-[150px] flex items-center justify-center p-2 md:p-4">
                    <img
                      className=" object-contain h-full mb-4 hover:scale-90 transition-all duration-100"
                      src={one.imageAsset}
                      alt=""
                    />
                  </div>

                  {/* Text */}
                  <div className="uppercase text-xs text-second mb-2">
                    {one.mainCategory}
                  </div>
                  {one.title && one.title.length > 25 ? (
                    <h2 className="font-semibold text-xs md:text-sm mb-6">
                      {one.title.substring(0, 25)}...
                    </h2>
                  ) : (
                    <h2 className="font-semibold text-xs md:text-sm mb-6">
                      {one.title}
                    </h2>
                  )}

                  <div className="flex justify-between items-center">
                    <button>
                      <AddCartButton product={one} />
                    </button>
                    <h3 className="text-second font-semibold text-right text-xs sm:text-base">
                      {parseFloat(one.price).toLocaleString("cs-CZ")} Kč
                    </h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewProductSlider;

{
  /* <h1>Nadpis</h1>
<Swiper
  spaceBetween={50}
  slidesPerView={3}
  // onSlideChange={() => console.log('slide change')}
  // onSwiper={(swiper) => console.log(swiper)}
>
  <SwiperSlide></SwiperSlide>
  ...
</Swiper>
NewProductSlider */
}
