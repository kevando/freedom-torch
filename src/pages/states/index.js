import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";

import Nav from "../../components/nav";
import Loader from "../../components/loader";
// import Meta from "./meta";

import StatesTable from "./tables";

import { fetchData } from "../../lib/helpers";

// import "./styles.scss";

const States = props => {
  const [states, setStates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("states")
      .then(data => setStates(data.states))
      .catch(error => setError(error.toString()));
  }, [setStates]);

  return (
    <div className="states">
      {/* <Meta /> */}

      <Container>
        <Nav large />
        {states === null ? (
          <Loader content={error || "Getting States"} />
        ) : (
          <StatesTable states={states} />
        )}
      </Container>

    </div>
  );
};

export default States;
