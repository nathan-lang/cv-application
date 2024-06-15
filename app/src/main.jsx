import React from "react";
import ReactDOM from "react-dom/client";
import Info from "./Info.jsx";
import Title from "./Title.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Title />
    <Info />
  </React.StrictMode>
);
