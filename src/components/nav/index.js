import React from "react";

import { Button, Container, Grid } from "semantic-ui-react";

import "./styles.scss";

const Nav = ({large = false}) => {
  return (
    <div className={large ? 'large' : 'small'}>
      <h1>The Congress Connection</h1>
    </div>
  );
};

export default Nav;
