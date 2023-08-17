import React, { useEffect, useState } from "react";
import { ShopFirestore, ShopStorage } from "../Back-End/firebase/config";
import Categories from "../Back-End/Categories";

const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [secondCategory, setSecondCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [price, setPrice] = useState("");
  const [shortText, setShortText] = useState("");
  const [longText, setLongText] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [imageAsset, setImageAsset] = useState("");
  const [uploading, setUploading] = useState(false);

  // Zjistit vybranou hlavní kategorii a nastavit odpovídající podkategorie
  const handleMainCategoryChange = (e) => {
    const selectedMainCategory = e.target.value;
    setMainCategory(selectedMainCategory);

    // Najít odpovídající objekt kategorie z dat
    const foundCategory = Categories.find(
      (category) => category.title === selectedMainCategory
    );

    // Nastavit vybranou kategorii a vynulovat podkategorii
    setSelectedCategory(foundCategory);
    setSecondCategory("");
  };

  // ********** Upload Image

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const storageRef = ShopStorage.ref(); // Použijeme ShopStorage
    const fileRef = storageRef.child(`images/${file.name}`);

    try {
      setUploading(true); // Začátek nahrávání
      await fileRef.put(file);
      const imageUrl = await fileRef.getDownloadURL();
      setImageAsset(imageUrl); // Nastavit URL obrázku
      setUploading(false); // Konec nahrávání
    } catch (error) {
      console.error("Chyba při nahrávání obrázku:", error);
      setUploading(false); // Konec nahrávání (i v případě chyby)
    }
  };

  // Odelsání formuláře
  const submitForm = async (e) => {
    e.preventDefault();

    // Kontrola da jsou vyplěná všechna pole
    if (
      !title ||
      !mainCategory ||
      !price ||
      !shortText ||
      !longText ||
      !newProduct ||
      !imageAsset
    ) {
      alert("Vyplňte všechna pole formuláře.");
      return;
    }

    // Vytvoření nového objektu
    const newItemWithoutId = {
      title: title,
      mainCategory: mainCategory,
      secondCategory: secondCategory,
      price: price,
      shortText: shortText,
      longText: longText,
      newProduct: newProduct,
      imageAsset: imageAsset,
      visible: false,
    };

    try {
      // odeslání produktu do databáze
      const docRef = await ShopFirestore.collection("products").add(
        newItemWithoutId
      );

      // Získat automaticky vygenerované Id z firestore

      const newItem = {
        ...newItemWithoutId,
        id: docRef.id,
      };

      // aktualizovat produtkt
      await docRef.update(newItem);

      // Vyprázdnění políček
      setTitle("");
      setMainCategory("");
      setLongText("");
      setPrice("");
      setShortText("");
      setNewProduct("");
      setSecondCategory("");
      setImageAsset("");
    } catch {
      console.log("Eror");
    }
  };

  return (
    <div className="newProducts w-full h-screen">
      <div className=" flex flex-col items-center justify-center h-full">
        {/* Formulář pro odeslání Dat do databáze */}
        <h2 className="font-semibold text-2xl md:text-4xl mb-4">
          Nový <span className="text-second">produkt</span>{" "}
        </h2>
        <form
          onSubmit={submitForm}
          className="flex flex-col gap-2 w-full items-center"
        >
          {/* Název produktu */}
          <input
            type="text"
            placeholder="Název Produktu"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="text-black w-[80%] md:w-[50%] lg:w-[35%] p-2 pl-4 rounded-md outline-none"
          />

          {/* Hlavní Kategorie */}
          <select
            value={mainCategory}
            onChange={handleMainCategoryChange}
            className="text-black w-[80%] md:w-[50%] lg:w-[35%] p-2 pl-4 rounded-md outline-none"
          >
            <option value="">Vyberte hlavní kategorii</option>
            {Categories.map((category) => (
              <option
                className="text-black "
                key={category.id}
                value={category.title}
              >
                {category.title}
              </option>
            ))}
          </select>

          {/* Vedlejší kategorie */}
          {selectedCategory && (
            <select
              value={secondCategory}
              onChange={(e) => setSecondCategory(e.target.value)}
              className="text-black w-[80%] md:w-[50%] lg:w-[35%] p-2 pl-4 rounded-md outline-none"
            >
              <option value="">Vyberte podkategorii</option>
              {selectedCategory.subcategories.map((subcategory) => (
                <option
                  className="text-black"
                  key={subcategory.id}
                  value={subcategory.title}
                >
                  {subcategory.title}
                </option>
              ))}
            </select>
          )}

          {/* Nový produkt */}
          <select
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
            className="text-black w-[80%] md:w-[50%] lg:w-[35%] p-2 pl-4 rounded-md outline-none"
          >
            <option className="text-black" value="">
              Vyberte typ produktu
            </option>
            <option className="text-black" value="true">
              Nový produkt
            </option>
            <option className="text-black" value="false">
              Běžný produkt
            </option>
          </select>

          {/* Cena */}
          <input
            type="text"
            placeholder="Cena"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="text-black w-[80%] md:w-[50%] lg:w-[35%] p-2 pl-4 rounded-md outline-none"
          />

          {/* Krátký text */}
          <textarea
            type="text"
            placeholder="Krátký popis"
            onChange={(e) => setShortText(e.target.value)}
            value={shortText}
            className="text-black w-[80%] md:w-[50%] lg:w-[35%] p-2 pl-4 rounded-md outline-none h-24"
          />

          {/* Dlouhý text */}
          <textarea
            type="text"
            placeholder="Podrobný popis"
            onChange={(e) => setLongText(e.target.value)}
            value={longText}
            className="text-black w-[80%] md:w-[50%] lg:w-[35%] p-2 pl-4 rounded-md outline-none h-52"
          />

          {/* Obrázek */}
          <input
            type="file"
            name="uploadimage"
            onChange={uploadImage}
            className="cursor-pointer"
          />

          {/* Odesílací tlačítko */}
          <input
            type="submit"
            value="Nahrát produkt"
            className="bg-lightWhite py-2 px-4 rounded-lg mt-4 text-dark font-semibold hover:bg-second transition-all duration-100 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
