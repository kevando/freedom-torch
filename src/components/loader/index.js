import React from "react";
import { Dimmer, Loader as SemanticLoader } from "semantic-ui-react";

const Loader = ({ inverted = true, active = true, content = "Loading" }) => {
  return (
    <Dimmer active={active} inverted={inverted}>
      <SemanticLoader inverted={inverted} content={content} />
    </Dimmer>
  );
};

export default Loader;
