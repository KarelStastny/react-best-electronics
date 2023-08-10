import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ShopContextProvider from "./Back-End/context/ShopContext";
import AddCartContextProvider from "./Back-End/context/AddCartContext";
import AddFavoriteContextProvider from "./Back-End/context/AddFavoriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopContextProvider>
    <AddCartContextProvider>
      <AddFavoriteContextProvider>
        <Router>
          <App />
        </Router>
      </AddFavoriteContextProvider>
    </AddCartContextProvider>
  </ShopContextProvider>
);
