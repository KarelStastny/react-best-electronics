import React, { useEffect, useState } from "react";
import { ShopFirestore } from "../Back-End/firebase/config";
import useLoadData from "../Back-End/LoadDataFirebase";
import { MdAutoAwesomeMosaic } from "react-icons/md";

const Admin = () => {
  const { products } = useLoadData();

  console.log(products);

  // Aktualizace stavu v databázi
  const toggleVisibility = async (productId) => {
    try {
      const productRef = ShopFirestore.collection("products").doc(productId);
      const productDoc = await productRef.get();
      const currentVisible = productDoc.data().visible;

      await productRef.update({
        visible: !currentVisible,
      });

      // Automatické obnovení stránky
      window.location.reload();
    } catch (error) {
      console.error("Chyba při aktualizaci viditelnosti:", error);
    }
  };

  return (
    <div>
      <div className="admin p-10 max-w-6xl m-auto">
        <h1 className="text-2xl font-bold mb-4">Administrační rozhraní</h1>
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              className="mb-4 grad rounded-lg flex items-center justify-between "
            >
              {/* Obrázek */}
              <div className="w-[10%] ">
                <img
                  src={product.imageAsset}
                  alt=""
                  className="w-full h-12  object-contain rounded shadow-md my-2 mx-4"
                />
              </div>

              {/* Název */}
              <div className="w-[10%]">
                <p className="text-sm">
                  {product.title ? product.title.substring(0, 25) : ""}
                </p>
              </div>

              {/* Kategorie */}
              <div className="w-[10%]">
                <p>
                  <span>{product.mainCategory}</span>
                </p>
                <p>
                  <span>{product.secondCategory}</span>
                </p>
                <p>
                  <span>{product.newProduct}</span>
                </p>
              </div>

              {/* Krátký text */}
              <div className="w-[10%]">
                <p>Krátký popis</p>
                <p className="text-xs">
                  {product.shortText ? product.shortText.substring(0, 50) : ""}
                </p>
              </div>

              {/* Dlouhý text */}
              <div className="w-[10%]">
                <p>Dlouhý popis</p>
                <p className="text-xs">
                  {product.longText ? product.longText.substring(0, 50) : ""}
                </p>
              </div>

              {/* Cena */}
              <div className="w-[10%]">
                <p>{parseFloat(product.price).toLocaleString("cs-CZ")} Kč</p>
              </div>

              {/* Tlačítka */}
              <div className="w-[10%]">
                {product.visible ? (
                  <button
                    onClick={() => {
                      toggleVisibility(product.id);
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-2"
                  >
                    Skrýt
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      toggleVisibility(product.id);
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-2"
                  >
                    Zobrazit
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
