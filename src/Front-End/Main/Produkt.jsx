import React, { useState } from "react";
import useLoadData from "../../Back-End/LoadDataFirebase"; // Importujte komponentu useLoadData
import { Link } from "react-router-dom";

const Produkt = () => {
  const products = useLoadData();
  console.log(products);
  return (
    <div className="prodkut">
      <div className="flex flex-wrap">
        {products.map((one) => {
          console.log(one.newProduct);
          return (
            <div
              className="flex flex-col justify-center items-center w-1/2 flex-wrap md:w-1/3 lg:w-1/4  p-3 "
              key={one.id}
            >
              {/* Vnitřní barva */}
              <Link className="bg-gradient-to-b rounded-lg from-dark to-primary p-4 w-full h-full">
                {/* New */}
                {/* Tato část kodu na ukázání new produktů mi nefunguje */}
                {one.newProduct === true && (
                  <div className="flex justify-end">
                    <div className="bg-second px-2 rounded-2xl">
                      <p className="text-right text-dark font-bold text-sm">
                        New
                      </p>
                    </div>
                  </div>
                )}

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
                <h2 className="font-semibold text-xs md:text-sm mb-6">{one.title.substring(0,25)}...</h2>
                <h3 className="text-second font-semibold text-right">
                  {one.price} Kč
                </h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Produkt;
