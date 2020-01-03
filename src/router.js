import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import NotFound from "./pages/not-found";
import SenateMap from "./pages/senate-map";
import SenateTable from "./pages/senate-table";
import SenateTimeline from "./pages/senate-timeline";

import StatesMap from "./pages/states-map";
import Profile from "./pages/profile";
import Table from "./pages/table";

import "./styles/App.scss";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={SenateMap} path="/senate-map" />
        <Route component={SenateTable} path="/senate-table" />
        <Route component={SenateTimeline} path="/senate-timeline" />

        <Route component={StatesMap} path="/states-map" />
        <Route component={Profile} path="/profile" />
        <Route component={Table} path="/table" />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
