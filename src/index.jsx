import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Thempro } from "./context/Themprousecontext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Thempro>
      <App />
    </Thempro>
  </React.StrictMode>
);
