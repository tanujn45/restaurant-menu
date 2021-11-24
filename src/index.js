import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import NewDrinks from './Newdrinks'

ReactDOM.render(
  <React.StrictMode>
    <NewDrinks />
  </React.StrictMode>,
  document.getElementById("root")
);
