import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./custom.css";
import Kalkylator from "./kalkylator/Kalkylator";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="container mt-3">
      <Kalkylator />
    </div>
  </React.StrictMode>
);
