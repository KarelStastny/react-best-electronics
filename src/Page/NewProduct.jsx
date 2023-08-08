import React, { useState } from "react";
import { ShopFirestore, ShopStorage } from "../Back-End/firebase/config";

const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [secondCategory, setSecondCategory] = useState("");
  const [price, setPrice] = useState("");
  const [shortText, setShortText] = useState("");
  const [longText, setLongText] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [imageAsset, setImageAsset] = useState("");
  const [uploading, setUploading] = useState(false);

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

    // Vytvoření nového objektu
    const newItem = {
      title: title,
      mainCategory: mainCategory,
      secondCategory: secondCategory,
      price: price,
      shortText: shortText,
      longText: longText,
      newProduct: newProduct,
      imageAsset: imageAsset,
    };

    try {
      // odeslání produktu do databáze
      await ShopFirestore.collection("products").add(newItem);

      // Vyprázdnění políček
      setTitle("");
      setMainCategory("");
      setLongText("");
      setPrice("");
      setShortText("");
      setNewProduct("");
      setSecondCategory("");
      setImageAsset("")
    } catch {
      console.log("Eror");
    }
  };

  return (
    <div className="newProducts">
      <div className="flex justify-center items-center flex-col">
        {/* Formulář pro odeslání Dat do databáze */}
        <form onSubmit={submitForm} className="flex flex-col">
          {/* Název produktu */}
          <input
            type="text"
            placeholder="Název Produktu"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="text-black"
          />

          {/* Hlavní Kategorie */}
          <input
            type="text"
            placeholder="Hlavní Kategorie"
            onChange={(e) => setMainCategory(e.target.value)}
            value={mainCategory}
            className="text-black"
          />

          {/* Vedlejší kategorie */}
          <input
            type="text"
            placeholder="Vedlejší Kategorie"
            onChange={(e) => setSecondCategory(e.target.value)}
            value={secondCategory}
            className="text-black"
          />

          {/* Cena */}
          <input
            type="text"
            placeholder="Cena"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="text-black"
          />

          {/* Krátký text */}
          <input
            type="text"
            placeholder="Krátký popis"
            onChange={(e) => setShortText(e.target.value)}
            value={shortText}
            className="text-black"
          />

          {/* Dlouhý text */}
          <input
            type="text"
            placeholder="Podrobný popis"
            onChange={(e) => setLongText(e.target.value)}
            value={longText}
            className="text-black"
          />

          {/* Nový produkt */}
          <input
            type="text"
            placeholder="Nový Produkt"
            onChange={(e) => setNewProduct(e.target.value)}
            value={newProduct}
            className="text-black"
          />

          {/* Obrázek */}
          <input type="file" name="uploadimage" onChange={uploadImage} />

          {/* Odesílací tlačítko */}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
