import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Map from "./components/map";

import "./App.scss";

function App() {
  return (
    <Router>
      <div >
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Map />
          </Route>
          <Route path="/about">
            <Map />
          </Route>
          <Route path="/dashboard">
            <Map />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
