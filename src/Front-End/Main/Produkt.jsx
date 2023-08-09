import React, { useState, useContext } from "react";
import useLoadData from "../../Back-End/LoadDataFirebase"; // Importujte komponentu useLoadData
import { Link } from "react-router-dom";
import { ShopContext } from "../../Back-End/context/ShopContext";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import AddCartButton from "./AddCartButton";

const Produkt = () => {
  const { selectedCategory, selectedSubcategory } = useContext(ShopContext);

  const products = useLoadData();

  // Filter produktů

  const filteredProducts = products.filter((product) => {
    // Pokud nejsou vybrány žádné kategorie vygeneruje vše
    if (!selectedCategory && !selectedSubcategory) {
      return true;
    }

    // Pokud jsou vybrány obě kategorie, vrátí tu podkategorii která má shodu s hlavní kategorii
    if (selectedCategory && selectedSubcategory) {
      return (
        product.mainCategory === selectedCategory &&
        product.secondCategory === selectedSubcategory
      );
    }
    // Pokud je vybrána pouze hlavní kategorie vrátí vše v ní
    if (selectedCategory) {
      return product.mainCategory === selectedCategory;
    }

    // POkud je vybrána pouze podkategorie, vrátí pouze jí
    if (selectedSubcategory) {
      return product.secondCategory === selectedSubcategory;
    }

    return false; // Přidejte tento řádek jako fallback pro ostatní případy
  });

  return (
    <div className="w-full prodkut">
      <div className="flex flex-wrap w-full pt-7 ">
        {filteredProducts.map((one) => {
          // Kontrola, zda je produkt oblíbený
          console.log(one.id);
          return (
            <div
              className="flex flex-col  justify-center items-center w-1/2 flex-wrap  md:w-1/3 lg:w-1/4 xl:w-1/5  p-3 "
              key={one.id}
            >
              {/* Vnitřní barva */}
              <Link className="bg-gradient-to-b rounded-lg from-dark to-primary p-4 w-full h-full">
                {/* FAvorite */}

                <div className="flex justify-end">
                  {/* Pokud je id v oblíbených smaže ho pokud není přidá ho */}
                  <div>
                    <MdFavorite className="text-[20px] fill-red-600 cursor-pointer" />

                    <MdFavoriteBorder className="text-[20px] cursor-pointer" />
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
                <div className="flex justify-between">
                  <button>
                    <AddCartButton product={one} />
                  </button>
                  <h3 className="text-second font-semibold text-right">
                    {one.price} Kč
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

export default Produkt;
