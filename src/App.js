import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import NotFound from "./pages/not-found";
import SenateMap from "./pages/senate-map";

import "./styles/App.scss";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/senate-map">
            <SenateMap />
          </Route>
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;
