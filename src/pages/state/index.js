import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import { Container } from "semantic-ui-react";

import Nav from "../../components/nav";
import Loader from "../../components/loader";
// import Meta from "./meta";

import { fetchData } from "../../lib/helpers";

// import "./styles.scss";

const States = props => {
  const {stateName} = useParams();

  const [state, setState] = useState(null);
  // const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(`states/find/${stateName}`)
      .then(data => setState(data.state))
  }, [setState]);

  return (
    <div className="states">
      {/* <Meta /> */}

      <Container>
        <Nav large />
        {state === null ? (
          <Loader content={"Getting State"} />
        ) : (
          <div>
            <h1>{state.name}</h1>
            <h3>Senators</h3>
            <p><Link to={`/senator/${state.senators[0].docId}`}>{state.senators[0].name}</Link></p>
            <p><Link to={`/senator/${state.senators[1].docId}`}>{state.senators[1].name}</Link></p>
          </div>
        )}
      </Container>

    </div>
  );
};

export default States;
