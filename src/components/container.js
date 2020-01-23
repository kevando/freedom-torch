import React from "react";
import { Container as SemanticContainer } from "semantic-ui-react";

import Meta from "./meta";
import Nav from './nav';


const Container = props => {
  const { title, children, className, nav = false } = props;

  return (
    <SemanticContainer className={className}>
      {nav && <Nav large />}
      <Meta title={title} />
      {children}
    </SemanticContainer>
  );
};

export default Container;
