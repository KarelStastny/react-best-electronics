import React, { useState, useEffect } from "react";
import { ShopFirestore } from "../Back-End/firebase/config";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deletePassword, setDeletePassword] = useState("");
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  // Načtení položek z databáze Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ShopFirestore.collection("products").get();
        const productsData = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Chyba při načítání produktů:", error);
      }
    };

    fetchProducts();
  }, []);

  // Funkce pro smazání položky
  const deleteProduct = async () => {
    try {
      if (deletePassword === "ga4lx4") {
        // Zde nahraďte vaším skutečným heslem
        await ShopFirestore.collection("products")
          .doc(selectedProduct.id)
          .delete();
        // Aktualizovat stav products po smazání
        setProducts(
          products.filter((product) => product.id !== selectedProduct.id)
        );
        setSelectedProduct(null);
        setDeletePassword("");
        setIsConfirmDialogOpen(false);
      } else {
        alert("Zadali jste nesprávné heslo.");
      }
    } catch (error) {
      console.error("Chyba při mazání produktu:", error);
    }
  };

  return (
    <div className="admin p-10 max-w-6xl m-auto">
      <h1 className="text-2xl font-bold mb-4">Administrační rozhraní</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-4 border flex items-center justify-between ">
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
              <p className="text-sm">{product.title ? product.title.substring(0,25) : ""}</p>
            </div>

            {/* Kateogire */}
            <div className="w-[10%]">
              <p> <span >{product.mainCategory}</span> </p>
              <p> <span >{product.secondCategory}</span></p>
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

            {/* Mazací tlačítko */}
            <div className="w-[10%]">
              <button
                onClick={() => {
                  setSelectedProduct(product);
                  setIsConfirmDialogOpen(true);
                }}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-2"
              >
                Smazat
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isConfirmDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">Potvrzení smazání</h2>
            <p className="text-sm mb-2">
              Zadejte heslo pro potvrzení smazání produktu:
            </p>
            <input
              type="password"
              value={deletePassword}
              onChange={(e) => setDeletePassword(e.target.value)}
              className="border p-1 mb-2"
            />
            <button
              onClick={deleteProduct}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded"
            >
              Potvrdit smazání
            </button>
            <button
              onClick={() => {
                setSelectedProduct(null);
                setDeletePassword("");
                setIsConfirmDialogOpen(false);
              }}
              className="border ml-2 p-1 rounded"
            >
              Zrušit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
