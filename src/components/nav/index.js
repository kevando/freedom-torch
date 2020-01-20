import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Nav = ({ large = false }) => {
  return (
    <div className="nav-wrapper">
      <h1 className={large ? "large" : "small"}>
        <Link to="/">The Congress Connection</Link>
      </h1>
      <p className={`title-border ${large ? "large" : "small"}`}>
        Twitter Stats on the 116th Congress (as of December 10, 2019)
      </p>
    </div>
  );
};

export default Nav;
