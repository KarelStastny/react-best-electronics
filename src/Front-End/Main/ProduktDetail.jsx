import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import useLoadData from "../../Back-End/LoadDataFirebase";
import { MdKeyboardArrowRight } from "react-icons/md";
import AddCartButton from "./AddCartButton";
import AddFavoriteButton from "./AddFavoriteButton";
import { ShopContext } from "../../Back-End/context/ShopContext";

const ProduktDetail = () => {
  const { setSelectedCategory, setSelectedSubcategory } =
    useContext(ShopContext);
  const { produktId } = useParams();
  const { products } = useLoadData([]);

  // Vyfiltrování správný produkt do stránky
  const product = products.find((one) => {
    return one.id === produktId;
  });

  return (
    <div className="w-full h-full mt-8 p-4">
      {product && (
        <div className="w-full h-full">
          <div className=" text-center uppercase font-semibold">
            {product.title}
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Link
              className="hover:text-second"
              to={"/category"}
              onClick={() => {
                setSelectedCategory(product.mainCategory);
                setSelectedSubcategory(null);
              }}
            >
              {product.mainCategory}
            </Link>
            <div>
              <MdKeyboardArrowRight />
            </div>
            <Link
              className="hover:text-second"
              to={"/category"}
              onClick={() => {
                setSelectedSubcategory(product.secondCategory);
                setSelectedCategory(product.mainCategory);
              }}
            >
              {product.secondCategory}
            </Link>
          </div>
          <div className="flex items-center justify-center mt-6">
            <div className="">
              <AddFavoriteButton product={product} />
            </div>
          </div>
          <div className="flex items-center justify-center p-4 max-w-md mt-4  m-auto ">
            <img
              src={product.imageAsset}
              className=" max-h-[300px] object-contain"
              alt=""
            />
          </div>
          {/* krátký popis */}
          <div className="flex items-center justify-center flex-col max-w-2xl  m-auto">
            <p className="text-second uppercase font-bold tracking-wider mt-4 ">
              Popis
            </p>
            <p className=" text-justify">{product.shortText}</p>
          </div>
          <div className="flex items-center justify-center mt-8 mb-8">
            <p className="font-semibold text-second">
              {parseFloat(product.price).toLocaleString("cs-CZ")} Kč
            </p>
          </div>

          {/* Tlačítka pro oblíbené a koupení */}
          <div className="flex  items-center justify-center gap-6">
            <div>
              <AddCartButton product={product} />
            </div>
          </div>

          {/* Douhý popis */}
          <div className="flex items-center justify-center flex-col max-w-2xl  m-auto">
            <p className="text-second uppercase font-bold tracking-wider mt-4 ">
              Detaily:
            </p>
            <p className=" text-justify"> {product.longText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProduktDetail;
