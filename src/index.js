import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { initialState } from "./Back-End/context/initalState";
import { StateProvider } from "./Back-End/context/StateProvider";
import reducer from "./Back-End/context/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>
);
