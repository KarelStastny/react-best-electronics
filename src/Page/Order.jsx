import React, { useContext, useEffect, useState } from "react";
import { AddCartContext } from "../Back-End/context/AddCartContext";
import { MdLocalGasStation } from "react-icons/md";

const Order = () => {
    const { cart, totalPrice, setCart, ordresRecevied, setOrdersReceived } = useContext(AddCartContext);
  const [userName, setUserName] = useState("");
  const [userSurName, setSurName] = useState("");
  const [userPSC, setUserPSC] = useState("");
  const [userStreet, setUserStreet] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userStreetNumber, setUserStreetNumber] = useState("");


  //   Odeslání formuláře
  const submitForm  = async (e) => {
    e.preventDefault();

    //  Kontrola vyplnění všech polí
    if (
      !userName ||
      !userSurName ||
      !userPSC ||
      !userStreet ||
      !userCity ||
      !userEmail ||
      !userTel ||
      !userStreetNumber
    ) {
      alert("Vyplnte všechny údaje");
      return;
    }


    // VYtvoření nového pole
    const allUserInfo = {
        userName: userName,
        userSurName: userSurName,
        userPSC: userPSC,
        userStreet: userStreet,
        userCity: userCity,
        userEmail: userEmail,
        userTel: userTel,
        userStreetNumber: userStreetNumber,
        id: `${Date.now()}`
       
    }

    // Spojí data dohromaddy
    const allOrderInfo = {
        userInfo: allUserInfo,
        orderInfo: cart,
        totalPrice:totalPrice,
        id: `${Date.now()}`
    }

    try{
        const   updateAllOrders  =  [...ordresRecevied, allOrderInfo]
        await setOrdersReceived(updateAllOrders)

        // Vyprázdnění políček
        // setUserName("");
        // setSurName("");
        // setUserPSC("");
        // setUserStreet("");
        // setUserCity("");
        // setUserEmail("");
        // setUserTel("");
        // setUserStreetNumber("");

        // Vyprázdnění košíku
        // setCart(null)

    }catch{
        console.log("Chyba v odeslání objednávky");
    }

 console.log(ordresRecevied);
   

    
  };

  




  return (
    <div>
      {/* údaje */}
      <h2 className="text-center mt-8 font-semibold md:text-lg">
        Vyplňte prosím údaje o nakupujícím
      </h2>
      <form
        className="flex items-center justify-center flex-col mt-8 w-[350px] m-auto  md:w-[650px] "
        onSubmit={submitForm}
      >
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full">
          <input
            className="w-full h-full p-1 md:p-2 bg-primary border-b-2 border-second outline-none"
            type="text"
            placeholder="jméno"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="w-full h-full p-1 md:p-2 bg-primary border-b-2 border-second outline-none"
            type="text"
            placeholder="příjmení"
            value={userSurName}
            onChange={(e) => setSurName(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full">
          <input
            className="w-full h-full mt-2 p-1 md:p-2 bg-primary border-b-2 border-second outline-none"
            type="text"
            placeholder="ulice"
            value={userStreet}
            onChange={(e) => setUserStreet(e.target.value)}
          />
          <input
            className="w-full h-full p-1 md:p-2 bg-primary border-b-2 border-second outline-none"
            type="text"
            placeholder="popisné číslo"
            value={userStreetNumber}
            onChange={(e) => setUserStreetNumber(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full">
          <input
            className="w-full h-full mt-2 p-1 md:p-2 bg-primary border-b-2 border-second outline-none"
            type="text"
            placeholder="PSČ"
            value={userPSC}
            onChange={(e) => setUserPSC(e.target.value)}
          />
          <input
            className="w-full h-full p-1 md:p-2 bg-primary border-b-2 border-second outline-none"
            type="text"
            placeholder="město"
            value={userCity}
            onChange={(e) => setUserCity(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4 w-[350px] ">
          <input
            className="w-full h-full p-1 mt-2 md:p-2 bg-primary border-b-2 border-second outline-none"
            type="email"
            placeholder="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            className="w-full h-full p-1 md:p-2 bg-primary border-b-2 border-second outline-none"
            type="tel"
            placeholder="telefonní číslo"
            value={userTel}
            onChange={(e) => setUserTel(e.target.value)}
          />
        </div>
        <div className="grad flex mt-4 p-4  rounded-lg w-[350px] m-auto flex-col items-center justify-center">
          <div className="uppercase font-semibold"> Celková částka</div>
          <div className="text-second">
            {parseFloat(totalPrice).toLocaleString("cs-CZ")} Kč
          </div>
          <button
            type="submit"
            className="bg-second py-1 px-2 rounded-lg mt-4 text-dark font-semibold"
          >
            Odeslat objednávku
          </button>
        </div>
      </form>
    </div>
  );
};

export default Order;
