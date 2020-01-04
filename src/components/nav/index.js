import React from "react";

import "./styles.scss";

const Nav = ({ large = false }) => {
  return (
    <div className="nav-wrapper">
      <h1 className={large ? "large" : "small"}>The Congress Connection</h1>
      <p className={large ? "large" : "small"}>Twitter Stats on the 116th Congress (as of December 10, 2019)</p>
    </div>
  );
};

export default Nav;
