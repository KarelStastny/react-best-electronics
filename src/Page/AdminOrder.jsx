import React, { useContext } from "react";
import { AddCartContext } from "../Back-End/context/AddCartContext";
import useLoadData from "../Back-End/LoadDataFirebase"

const AdminOrder = () => {
//   const { ordresRecevied } = useContext(AddCartContext);
  const {products, ordresRecevied} = useLoadData()

  console.log(ordresRecevied);
  console.log(products);

  return (
    <div className="max-w-[1240px] m-auto">
      {ordresRecevied.map((oneOrder) => (
        <div key={oneOrder.id} className="w-full  mt-10 grad p-2 md:p-4 rounded-lg">
          <div className="text-center mb-4">
            <h2 className="uppercase flex items-center gap-2 justify-center">Údaje k objednávce: <p className="text-second font-semibold"> {oneOrder.id}</p></h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="underline">Údaje o nakupujícím:</h3>
              <section className="px-2">
                <div>
                  {oneOrder.userInfo.userName} {oneOrder.userInfo.userSurName}
                </div>
                <div>
                  {oneOrder.userInfo.userStreet}
                  {oneOrder.userInfo.userStreetNumber}
                </div>
                <div>
                  {oneOrder.userInfo.userPSC} {oneOrder.userInfo.userCity}
                </div>
                <div>
                  <p>Tel.: {oneOrder.userInfo.userTel}</p>
                  <p>email: {oneOrder.userInfo.userEmail}</p>
                </div>
              </section>
            </div>
            <div>
              <h3 className="underline">Objednané zboží</h3>
              {oneOrder.orderInfo.map((item, index) => (
                <div key={index}
                className="px-2 x-col mb-2 mt-2">
                  <ul>Název produktu: {item.title}</ul>
                  <li className="px-2">Množství: {item.quantity}</li>
                  <li className="px-2">Cena: {item.finalPrice} Kč</li>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-6 flex items-center gap-2 justify-center">Celková cena: <p className="text-second font-semibold">{oneOrder.totalPrice}</p> Kč</div>
        </div>
      ))}
    </div>
  );
};

export default AdminOrder;
