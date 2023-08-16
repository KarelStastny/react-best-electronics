import React, { useContext } from "react";
import { AddCartContext } from "../Back-End/context/AddCartContext";

const Order = () => {
  const { cart, totalPrice } = useContext(AddCartContext);
  return (
    <div>
      {/* údaje */}
      <h2 className="text-center mt-8 font-semibold md:text-lg">Vyplňte prosím údaje o nakupujícím</h2>
      <form className="flex items-center justify-center flex-col mt-8 w-[350px] m-auto  md:w-[650px] ">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full">
          <input
            className="w-full h-full p-1 md:p-2 bg-primary border-b-2 border-second outline-none"
            type="text"
            placeholder="jméno"
          />
          <input
            className="w-full h-full p-1 md:p-2 bg-primary border-b-2 border-second outline-none"
            type="text"
            placeholder="příjmení"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full">
          <input
            className="w-full h-full mt-2 p-1 md:p-2 bg-primary border-b-2 border-second outline-none"
            type="text"
            placeholder="ulice"
          />
          <input
            className="w-full h-full p-1 md:p-2 bg-primary border-b-2 border-second outline-none"
            type="text"
            placeholder="popisné číslo"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full">
          <input
            className="w-full h-full mt-2 p-1 md:p-2 bg-primary border-b-2 border-second outline-none"
            type="text"
            placeholder="PSČ"
          />
          <input
            className="w-full h-full p-1 md:p-2 bg-primary border-b-2 border-second outline-none"
            type="text"
            placeholder="město"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4 w-[350px] ">
          <input
            className="w-full h-full p-1 mt-2 md:p-2 bg-primary border-b-2 border-second outline-none"
            type="email"
            placeholder="email"
          />
          <input
            className="w-full h-full p-1 md:p-2 bg-primary border-b-2 border-second outline-none"
            type="tel"
            placeholder="telefonní číslo"
          />
        </div>
            <div className="grad flex mt-4 p-4  rounded-lg w-[350px] m-auto flex-col items-center justify-center">
                <div  className="uppercase font-semibold"> Celková částka</div>
                <div className="text-second">{parseFloat(totalPrice).toLocaleString("cs-CZ")}</div>
                <button type="submit" className="bg-second py-1 px-2 rounded-lg mt-4 text-dark font-semibold">Odeslat objednávku</button>
            </div>
        
      </form>
    </div>
  );
};

export default Order;

