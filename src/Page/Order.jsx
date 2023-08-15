import React, { useContext } from "react";
import { AddCartContext } from "../Back-End/context/AddCartContext";


const Order = () => {
    // const { cart, totalPrice } = useContext(AddCartContext);
  return (
    <div>
      {/* údaje */}
      <h2 className="text-center mt-8">Vyplňte prosím údaje o nakupujícím</h2>
      <form className="flex items-center justify-center flex-col mt-8">
        <div>
          <input type="text" placeholder="Jméno" />
          <input type="text" placeholder="Příjmení" />
        </div>
        <div>
          <input type="text" placeholder="Ulice" />
          <input type="text" placeholder="Popisné číslo" />
        </div>
        <div>
          <input type="text" placeholder="PSČ" />
          <input type="text" placeholder="Město" />
        </div>

    <p>objednat</p>
      </form>
    </div>
  );
};

export default Order;
// {/* <div className="grad flex mt-4 p-4  rounded-lg w-[350px] m-auto flex-col items-center justify-center">
// <div className="uppercase font-semibold">Celková částka</div>
// <div className="text-second">
//   {/* {parseFloat(totalPrice).toLocaleString("cs-CZ")} Kč */}
// </div>

// <input
//   type="submit"
//   className="bg-second py-1 px-2 rounded-lg mt-4 text-dark font-semibold"
// >
//   Objednat
// </input>
// </div> */}