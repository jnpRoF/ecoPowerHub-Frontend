import React from "react";
import ReactDOM from "react-dom/client";
// import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <MoralisProvider initializeOnMount={false}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </MoralisProvider>
);
