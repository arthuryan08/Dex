import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

import "./assets/boxicons-2.1.1/css/boxicons.min.css";
import "./assets/cssdashboard/grid.css";
import "./assets/cssdashboard/index.css";
import "./assets/cssdashboard/theme.css";

import Layout from "./components/LayoutDashboard/Layout";

const store = createStore(
  rootReducer
)


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
