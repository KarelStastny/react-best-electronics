import React, { useContext } from "react";
import { AddFavoriteContext } from "../Back-End/context/AddFavoriteContext";
import { Link } from "react-router-dom";
import AddCartButton from "../Front-End/Main/AddCartButton";
import AddFavoriteButton from "../Front-End/Main/AddFavoriteButton";

const Favorite = () => {
  const { favorite } = useContext(AddFavoriteContext);
  const products = favorite;

  return (
    <div className="favoritePage max-w-7xl m-auto">
      <div className="flex flex-wrap w-full pt-7 ">
        {products.map((one) => {
          return (
            <div
              className="flex flex-col  justify-center items-center w-1/2 flex-wrap  md:w-1/3 lg:w-1/4 xl:w-1/5 
               p-1 sm:p-3 "
              key={one.id}
            >
              {/* Vnitřní barva */}
              <Link className="bg-gradient-to-b rounded-lg from-dark to-primary p-2 sm:p-4 w-full h-full">
                {/* FAvorite */}

                <div className="flex justify-end">
                  {/* Pokud je id v oblíbených smaže ho pokud není přidá ho */}
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
  );
};

export default Favorite;
