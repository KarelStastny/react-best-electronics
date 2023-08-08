import { useState, useEffect } from 'react';
import { ShopFirestore } from '../Back-End/firebase/config';

const LoadDataFirebase = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await ShopFirestore.collection('products').get();
        const productsData = snapshot.docs.map((doc) => doc.data());
        setProducts(productsData);
      } catch (error) {
        console.error('Chyba při načítání produktů:', error);
      }
    };

    fetchProducts();
  }, []);

  return products;
};

export default LoadDataFirebase;
