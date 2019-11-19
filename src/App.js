import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import NotFound from "./pages/not-found";
import SenateMap from "./pages/senate-map";
import SenateTable from "./pages/senate-table";

import "./styles/App.scss";

function App() {
  return (
    <Router>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={SenateMap} path="/senate-map" />
          <Route component={SenateTable} path="/senate-table" />
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;
