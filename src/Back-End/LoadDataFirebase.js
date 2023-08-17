import { useState, useEffect } from "react";
import { ShopFirestore } from "../Back-End/firebase/config";

const LoadDataFirebase = () => {
  const [products, setProducts] = useState([]);
  const [ordresRecevied, setOrdersReceived] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Produkty
        const snapshot = await ShopFirestore.collection("products").get();
        const productsData = snapshot.docs.map((doc) => doc.data());
        setProducts(productsData);

        // Objednávky
        const snapshotOrder = await ShopFirestore.collection(
          "ordersRecevied"
        ).get();
        const ordersData = snapshotOrder.docs.map((doc) => doc.data());
        setOrdersReceived(ordersData);
      } catch (error) {
        console.error("Chyba při načítání produktů:", error);
      }
    };

    fetchProducts();
  }, []);

  return { products, ordresRecevied };
};

export default LoadDataFirebase;
