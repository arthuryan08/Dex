import React from "react";

import "./layout.css"

import SideBarDashboard from '../SideBarDashboard/SideBarDashboard'
import Routes from '../Routes'

import { BrowserRouter, Route } from 'react-router-dom'

const Layout = () => {
  return (
    <BrowserRouter>
      <Route render={(props) => (
        <div className="layout">
          <SideBarDashboard {...props} />
          <div className="layout__content">
            <div className="layout__content-main">
              <Routes />
            </div>
          </div>
        </div>
      )} />
    </BrowserRouter>
  )
};

export default Layout;
