import React, { useContext } from "react";
import Categories from "../../Back-End/Categories";
import { ShopContext } from "../../Back-End/context/ShopContext";
import { MdKeyboardArrowDown, MdFilterAltOff } from "react-icons/md";

const FilterMenu = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    setSelectedSubcategory,
    resetFilterProducts,
  } = useContext(ShopContext);

  // Funkce pro přepínání vybrané kategorie
  const toggleCategory = (categoryTitle) => {
    if (selectedCategory === categoryTitle) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    } else {
      setSelectedCategory(categoryTitle);
      setSelectedSubcategory(null);
    }
  };

  // přepínač pro podkategorii
  const toggleSubcategory = (subcategoryTitle) => {
    if (selectedCategory === subcategoryTitle) {
      setSelectedCategory(null);
    } else {
      setSelectedSubcategory(subcategoryTitle);
    }
  };

  return (
    <div className="filter-menu">
      <div className="md:w-[200px] bg-dark md:h-screen rounded-xl">
        {/* resetování produktu */}
        <div
          onClick={() => resetFilterProducts()}
          className=" bg-second  py-2 px-5 rounded-t-xl cursor-pointer flex justify-between items-center"
        >
          <p className="uppercase text-dark font-bold">Katalog</p>
          
          <MdFilterAltOff size={20} className="fill-dark"/>
        </div>
        {Categories?.map((category) => (
          <div className="p-1" key={category.id}>
            <div
              className="uppercase text-second font-semibold py-2 px-4 hover:text-secondHover cursor-pointer flex  items-center justify-between"
              onClick={() => toggleCategory(category.title)}
            >
              {category.title}

              <MdKeyboardArrowDown className="text-[20px]" />
            </div>
            {selectedCategory === category.title && (
              <ul className="flex flex-col">
                {category.subcategories.map((subcategory) => (
                  <li
                    className="pl-8 text-base cursor-pointer hover:text-secondHover  "
                    key={subcategory.id}
                    onClick={() => toggleSubcategory(subcategory.title)}
                  >
                    {subcategory.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterMenu;
