import React from "react";

import { Helmet } from "react-helmet";
import { Container, Grid } from "semantic-ui-react";

import Nav from "../../components/nav";

import Welcome from "./welcome";
import Popular from "./popular";
import ComingSoon from './coming-soon'

const Meta = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>The Congress Connection</title>
  </Helmet>
);

const Home = () => {
  return (
    <div className="home">
      <Meta />
      <Nav large />
      <Container>
        <Grid stackable>
          <Grid.Row stretched>
            <Grid.Column width={4}>
              <Welcome />
            </Grid.Column>
            <Grid.Column width={12}>
              <Popular />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column width={16}>
              <ComingSoon />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
