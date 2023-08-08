import React, { useState } from "react";
import Categories from "../../Back-End/Categories";

const FilterMenu = () => {
  const [selected, setSelected] = useState(null);

  // přepínač
  const toggleCategory = (id) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };

  return (
    <div className="filter-menu">
      <div className=" md:w-[200px] bg-dark md:h-screen rounded-xl">
        {Categories?.map((category) => (
          <div className="p-1"  key={category.id}>
            {/* Pošlu Id */}
            <div className="uppercase text-second font-semibold py-2 px-4 hover:text-secondHover cursor-pointer" onClick={() => toggleCategory(category.id)}>
              {category.title}
            </div>
            {/* Pokud se id shodují zobrazí kategorii */}
            {selected === category.id && (
              <ul>
                {category.subcategories.map((subcategory) => (
                  <li className="pl-8 text-base cursor-pointer hover:text-secondHover" key={subcategory.id}>{subcategory.title}</li>
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
