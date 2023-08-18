import React, { useContext } from "react";
import useLoadData from "../../Back-End/LoadDataFirebase";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Back-End/context/ShopContext";
import AddCartButton from "./AddCartButton";
import AddFavoriteButton from "./AddFavoriteButton";

const Produkt = () => {
  const { selectedCategory, selectedSubcategory } = useContext(ShopContext);
  const { products } = useLoadData();

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

    return false;
  });

  return (
    <div className="w-full prodkut">
      <div className="flex flex-wrap w-full pt-7 ">
        {filteredProducts.map((one) => {
          if (one.visible === true) {
            return (
              <div
                className="flex flex-col  justify-center items-center w-1/2 flex-wrap  md:w-1/3 xl:w-1/4 2xl:w-1/5  p-1 sm:p-3 "
                key={one.id}
              >
                {/* Vnitřní barva */}
                <div className="bg-gradient-to-b rounded-lg from-dark to-primary p-2 sm:p-4 w-full h-full">
                  {/* FAvorite */}

                  <div className="flex justify-end">
                    {/* Pokud je id v oblíbených smaže ho pokud není přidá ho */}
                    <div>
                      <AddFavoriteButton product={one} />
                    </div>
                  </div>

                  {/* Img */}
                  <Link
                    to={`/product/${one.id}`}
                    className="md:h-[200px] h-[150px] flex items-center justify-center p-2 md:p-4"
                  >
                    <img
                      className=" object-contain h-full mb-4 hover:scale-90 transition-all duration-100"
                      src={one.imageAsset}
                      alt=""
                    />
                  </Link>

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
                </div>
              </div>
            );
          }else {
            return null; // Ignorovat neviditelné produkty
          }
        })}
      </div>
    </div>
  );
};

export default Produkt;
