import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ShopContextProvider from "./Back-End/context/ShopContext";
import AddCartContextProvider from "./Back-End/context/AddCartContext";
import AddFavoriteContextProvider from "./Back-End/context/AddFavoriteContext";

ReactDOM.render(
  <React.StrictMode >
    <ShopContextProvider>
      <AddCartContextProvider>
        <AddFavoriteContextProvider>
          <Router basename="/react-best-electronics">
            <App />
          </Router>
        </AddFavoriteContextProvider>
      </AddCartContextProvider>
    </ShopContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
