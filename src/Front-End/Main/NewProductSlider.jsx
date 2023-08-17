import React, { useEffect, useState } from "react";
import useLoadData from "../../Back-End/LoadDataFirebase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel"
// Vlastní




import { Link } from "react-router-dom";
import AddFavoriteButton from "./AddFavoriteButton";
import AddCartButton from "./AddCartButton";

const NewProductSlider = () => {
  const [newProducts, setNewProducts] = useState([]);
  const {products} = useLoadData();

  // Filter new product
  useEffect(() => {
    const loadNewProduct = async () => {
      const filtredProducts = products.filter(
        (one) => one.newProduct == "true"
      );
      setNewProducts(filtredProducts);
    };

    loadNewProduct();
  }, [products]);

 

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
      navigation={true}
      className="productSlider"
      mousewheel={true}
    
      pagination={{ clickable: true }}
      scrollbar={{clickable: true}}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        750: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1240: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
    >
      <div>
        <div className="w-full prodkut">
      

          <div className="flex flex-warp w-full  ">
            {newProducts.map((one) => {
            
              return (
                <SwiperSlide
                  className="flex flex-col grad rounded-lg justify-center items-center w-1/2 flex-wrap  md:w-1/3 xl:w-1/4 2xl:w-1/5  mb-12 p-2 sm:p-3 "
                  key={one.id}
                >
                  {/* Vnitřní barva */}
                  <div  className="   w-full h-full">
                    {/* FAvorite */}

                    <div className="flex justify-between items-center pb-2">
                      <div className=" text-[11px] px-2 text-dark bg-second rounded-full font-bold ">
                        New
                      </div>

                      <div>
                        <AddFavoriteButton product={one} />
                      </div>
                    </div>
                <Link to={`/product/${one.id}`}>
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
</Link>
                    <div className="flex justify-between items-center">
                      <button>
                        <AddCartButton product={one} />
                      </button>
                      <h3 className="text-second font-semibold text-right text-xs sm:text-base">
                        {parseFloat(one.price).toLocaleString("cs-CZ")} Kč
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </div>
      </div>
    </Swiper>
  );
};

export default NewProductSlider;
