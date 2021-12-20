import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { App } from "./App";
import { Step1 } from "./Pages/Step1";
import { Step2 } from "./Pages/Step2";
import { Step3 } from "./Pages/Step3";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/step1" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
      </Switch>
    </BrowserRouter>
  );
};
