import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";

import Nav from "../../components/nav";
// import Loader from "../../components/loader";
import Meta from "../../components/meta";

import StatesTable from "./states-table";

import { fetchData } from "../../lib/helpers";

const States = props => {
  const [states, setStates] = useState(null);

  useEffect(() => {
    async function fetchStates() {
      const data = await fetchData("states");
      setStates(data.states);
    }
    fetchStates();
  }, [setStates]);

  return (
    <div className="states">
      <Meta title="United States" />

      <Container>
        <Nav large />
        <h1>The United States</h1>
        {states && <StatesTable states={states} />}
      </Container>
    </div>
  );
};

export default States;
