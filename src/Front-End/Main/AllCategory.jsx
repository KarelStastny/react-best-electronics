import React, { useContext } from "react";
import Categories from "../../Back-End/Categories";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Back-End/context/ShopContext";
import { motion } from "framer-motion";

const AllCategory = () => {
  const { setSelectedCategory, setIsOpenMenu } = useContext(ShopContext);

  const handleHamburgerClick = () => {
    setIsOpenMenu(false);
  };

  return (
    <div className="allCategory w-full h-full">
      <h2 className=" text-center md:text-lg uppercase font-semibold tracking-wide mb-3">
        Hlavní Kategorie
      </h2>
      <div className="  flex  items-center justify-center gap-1 md:gap-4 md:flex-row ">
        {Categories?.map((category) => {
          return (
            // Předělá url adresu a po kliknutí pošle title do filteru
            <Link
              to={`/category/${category.title}`}
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.title);
                handleHamburgerClick();
              }}
              className=" w-1/5 md:max-h-[170px] rounded-lg grad p-2 md:p-4"
            >
              <motion.div whileTap={{ scale: 0.75 }}>
                <div className=" h-[60px] md:h-[120px] flex items-center justify-center   ">
                  <img
                    className="w-full h-full object-contain"
                    src={category.img}
                    alt={category.title}
                  />
                </div>

                <h3 className="md:h-[50px] text-xs hidden md:block text-center mt-1 hover:text-second  md:text-base">
                  {category.title}
                </h3>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllCategory;
