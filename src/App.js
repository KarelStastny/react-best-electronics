import React from "react";
import Header from "./Front-End/Header/Header";
import Home from "./Page/Home";
import Category from "./Page/Category";
import About from "./Page/About";
import Footer from "./Front-End/Footer";
import NewProduct from "./Page/NewProduct";
import Admin from "./Page/Admin";
import { Routes, Route } from "react-router-dom";
import Favorite from "./Page/Favorite";
import Cart from "./Page/Cart";
import ProduktDetail from "./Front-End/Main/ProduktDetail";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/*" element={<Category />} />
          <Route path="/category/:produktId" element={<ProduktDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
