import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Map from "./pages/map";

import "./styles/App.scss";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;
