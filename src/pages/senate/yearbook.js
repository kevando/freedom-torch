import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";

import Nav from "../../components/nav";
import Loader from "../../components/loader";
import Grid from "./grid";
import Meta from "./meta";

import { fetchSenators } from "../../lib/helpers";

import "./styles.scss";

const Yearbook = props => {
  const [senators, setSenators] = useState(null);

  useEffect(() => {
    fetchSenators(setSenators);
  }, [setSenators]);

  return (
    <div className="senate yearbook">
      <Meta />

      <Container>
        <Nav large />
        {senators === null ? (
          <Loader content="Getting Senators" />
        ) : (
          <Grid senators={senators} />
        )}
      </Container>
    </div>
  );
};

export default Yearbook;
