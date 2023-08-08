import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import  ShopContextProvider, {ShopContext} from "./Back-End/context/ShopContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopContextProvider >
  <Router>
    
      <App />
    
  </Router>
  </ShopContextProvider>
);
