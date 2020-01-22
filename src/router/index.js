import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Pages from "../pages";
import "../styles/App.scss";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Pages.Home} path="/" exact />

        <Route component={Pages.Activity} path="/activity" />
        <Route component={Pages.Congress} path="/congress" />
        <Route component={Pages.Elections} path="/elections" />

        <Route component={Pages.SenateTable} path="/senate/table" />
        <Route component={Pages.SenateYearbook} path="/senate/yearbook" />
        <Route component={Pages.Senate} path="/senate" />

        <Route component={Pages.Member} path="/m/:docId" />

        <Route component={Pages.StatesView} path="/states/:stateName" />
        <Route component={Pages.States} path="/states" />

        <Route component={Pages.NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
