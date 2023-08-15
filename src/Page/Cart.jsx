import React, { useContext } from "react";
import Produkt from "../Front-End/Main/Produkt";
import useLoadData from "../Back-End/LoadDataFirebase";
import { ShopContext } from "../Back-End/context/ShopContext";
import { AddFavoriteContext } from "../Back-End/context/AddFavoriteContext";
import { AddCartContext } from "../Back-End/context/AddCartContext";
import { Link } from "react-router-dom";
import AddCartButton from "../Front-End/Main/AddCartButton";
import AddFavoriteButton from "../Front-End/Main/AddFavoriteButton";

const Cart = () => {
  // const {  } =useContext(ShopContext)
  const { cart, minuseQuantity, pluseQuantity, totalPrice } =
    useContext(AddCartContext);
  const carts = cart;

  // console.log(carts);

  return (
    <div className="cartPage max-w-2xl m-auto">
      <div className="flex flex-col w-full pt-7 min-h-[600px] ">
        {carts.map((one) => {
          return (
            <div
              className="flex flex-col w-full  justify-center items-center flex-wrap   
               p-1  "
              key={one.id}
            >
              {/* Vnitřní barva */}
              <div className="bg-dark rounded-lg p-2 sm:p-4 w-full h-full flex items-center">
                {/* Img */}
                <div className="w-[20%] flex items-center justify-center">
                  <div className=" h-[50px] w-[100px] flex items-center justify-center p-1 md:p-1">
                    <img
                      className=" object-contain h-full  hover:scale-90 transition-all duration-100"
                      src={one.imageAsset}
                      alt=""
                    />
                  </div>
                </div>

                {/* title */}
                <div className="w-[40%] flex items-center justify-start">
                  {one.title && one.title.length > 20 ? (
                    <h2 className="font-semibold text-xs md:text-sm ml-6">
                      {one.title.substring(0, 20)}...
                    </h2>
                  ) : (
                    <h2 className="font-semibold text-xs md:text-sm ml-6 w-[200px]">
                      {one.title}
                    </h2>
                  )}
                </div>

                {/* Price */}
                <div className="w-[20%] flex items-center justify-center">
                  <h3 className="text-second font-semibold text-right text-xs sm:text-base">
                    {parseFloat(one.finalPrice).toLocaleString("cs-CZ")} Kč
                  </h3>
                </div>

                {/* Quantity */}
                <div className="w-[20%] flex items-center justify-center">
                  <div className="flex items-center justify-between gap-2">
                    {/* Minuse */}
                    <button
                      onClick={() => {
                        minuseQuantity(one);
                      }}
                      className=" hover:bg-primary w-5 h-5 rounded-full flex items-center justify-center "
                    >
                      <div className=" hover:text-second pb-1">-</div>
                    </button>
                    {/* Qunatity */}
                    <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center ">
                      <div className="text-dark font-semibold">{one.quantity}</div>
                    </div>
                    {/* Pluse */}
                    <button
                      onClick={() => {
                        pluseQuantity(one);
                      }}
                      className=" hover:bg-primary w-5 h-5 rounded-full flex items-center justify-center"
                    >
                      <div className=" hover:text-second pb-1">+</div>
                    </button>
                  </div>
                </div>

                {/* Delete Button */}
                <div className="w-[5%] flex items-center justify-center">
                  <div className="flex justify-between items-center">
                    <button>
                      <AddCartButton product={one} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="grad flex mt-4 p-4  rounded-lg w-[350px] m-auto flex-col items-center justify-center">
          <div className="uppercase font-semibold">Celková částka</div>
          <div className="text-second">{parseFloat(totalPrice).toLocaleString("cs-CZ")} Kč</div>
          <button className="bg-second py-1 px-2 rounded-lg mt-4 text-dark font-semibold">Objednat</button>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;
