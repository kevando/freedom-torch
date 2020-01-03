import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Container, Grid, Segment } from "semantic-ui-react";

import Nav from "../../components/nav";

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
        <Grid divided celled stackable>
          <Grid.Row stretched>
            <Grid.Column width={3}>
              <Segment style={{ height: 400 }}>Welcome</Segment>
              <Segment>Award chatterbox</Segment>
            </Grid.Column>
            <Grid.Column width={13}>
            <Grid divided celled>
              <Grid.Row stretched>
                <Grid.Column width={11}>
                  <Segment>Map</Segment>
                </Grid.Column>

                <Grid.Column width={5}>
                  <Segment>Top List</Segment>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row stretched>
                <Grid.Column width={8}>
                  <Segment>table</Segment>
                </Grid.Column>

                <Grid.Column width={8}>
                  <Segment>cspan vid</Segment>
                </Grid.Column>
              </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;

{
  /* <Link to="/senate-table">Senate Table</Link> */
}
