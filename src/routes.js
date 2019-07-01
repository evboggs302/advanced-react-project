import React from "react";
import { Switch, Route } from "react-router-dom";
import HOCDisplay from "./Components/HOC/HOCDisplay";

export default (
  <Switch>
    <Route exact path="/" />
    <Route path="/hoc" component={HOCDisplay} />
    <Route path="/render-props" />
  </Switch>
);
