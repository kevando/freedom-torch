import React from "react";

import Router from "./router";
import Footer from "./components/footer";

import "./styles/App.scss";

require('dotenv').config()

function App() {
  return (
    <div className="app-wrapper">
      <Router />
      <Footer />
    </div>
  );
}

export default App;
