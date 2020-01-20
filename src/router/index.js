import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, NotFound, Senate, Yearbook } from "../pages";
import "../styles/App.scss";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Senate} path="/senate/:view" />
        <Route component={Yearbook} path="/116th/yearbook" />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
