import React from "react";
import { Container as SemanticContainer } from "semantic-ui-react";

import Meta from "./meta";

const Container = props => {
  const { title, children, className } = props;

  return (
    <SemanticContainer className={className}>
      <Meta title={title} />
      {children}
    </SemanticContainer>
  );
};

export default Container;
