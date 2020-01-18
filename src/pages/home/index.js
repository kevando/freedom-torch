import React from "react";

import { Helmet } from "react-helmet";
import { Container, Grid, Divider } from "semantic-ui-react";

import Nav from "../../components/nav";

import Welcome from "./welcome";
import Bernie from "./bernie";
import Popular from "./popular";

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

      <Container>
        <Nav large />
        <Grid stackable className="newspaper">
          <Grid.Row stretched>
            <Grid.Column mobile={16} tablet={5} computer={4}>
              <Welcome />
            </Grid.Column>
            <Grid.Column tablet={11} computer={12} only="tablet computer">
              <Popular />
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row stretched only="mobile">
            <Grid.Column width={16}>
              <Bernie />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
