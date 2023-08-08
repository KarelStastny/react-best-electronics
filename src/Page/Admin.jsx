import React, { useState, useEffect } from "react";
import { ShopFirestore } from "../Back-End/firebase/config";

const Admin = () => {
  const [products, setProducts] = useState([]);

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
  const deleteProduct = async (productId) => {
    try {
      await ShopFirestore.collection("products").doc(productId).delete();
      // Aktualizovat stav products po smazání
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Chyba při mazání produktu:", error);
    }
  };

  return (
    <div className="admin">
      <h1>Administrační rozhraní</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.title}</p>
            <img src={product.imageAsset} alt="" />
            <button onClick={() => deleteProduct(product.id)}>Smazat</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
