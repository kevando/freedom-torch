import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "semantic-ui-react";

import Nav from "../../components/nav";
import Loader from "../../components/loader";
import Container from "../../components/container";
import MembersTable from "../../components/table/members";

import { fetchData } from "../../lib/helpers";

import "./styles.scss";

const StatesView = props => {
  const { stateName } = useParams();

  const [state, setState] = useState(null);

  useEffect(() => {
    async function fetchState() {
      const data = await fetchData(`states/${stateName}`);
      setState(data.state);
    }
    fetchState();
  }, []);

  if (!state) return null;

  return (
    <Container className="state" title={state.stateName}>
      <Nav large />

      <Breadcrumb size="large">
          <Breadcrumb.Section link href="/">Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section link href="/states">United States</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section active>{state.stateName}</Breadcrumb.Section>
        </Breadcrumb>

      <h2 className="title">{state.stateName}</h2>
      {state === null ? (
        <Loader content={"Getting State"} />
      ) : (
        <div>
          <h1>{state.name}</h1>

          <MembersTable members={state.members} />
        </div>
      )}
    </Container>
  );
};

export default StatesView;
