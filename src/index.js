import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

import "./assets/boxicons-2.1.1/css/boxicons.min.css";
import "./assets/cssdashboard/grid.css";
import "./assets/cssdashboard/index.css";

import Layout from "./components/LayoutDashboard/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById("root")
);
