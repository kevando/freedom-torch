import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Container, Grid } from "semantic-ui-react";

import './style.scss'

const Meta = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Congress Connections</title>
  </Helmet>
);

const Home = () => {
  return (
    <Container className="profile">
      <Grid>
        <Grid.Row className="title-wrapper">
          <Grid.Column width={16}>
            <h1 className="title1">The Congress Connection</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid celled="internally">
        <Grid.Row>
          <Grid.Column width={3}>
            <Button>Click Here</Button>
          </Grid.Column>
          <Grid.Column width={10}>
            <Button>Click Here</Button>
          </Grid.Column>
          <Grid.Column width={3}>
            <Button>Click Here</Button>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
            <Button>Click Here</Button>
          </Grid.Column>
          <Grid.Column width={10}>
            <Button>Click Here</Button>
          </Grid.Column>
          <Grid.Column width={3}>
            <Button>Click Here</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
  return (
    <div className="home">
      <Meta />
      <h1 className="logo1">congress connections</h1>
      <h5 className="center">Exploring how congress uses Twitter</h5>
      <Button>Click Here</Button>
    </div>
  );
};

export default Home;

{
  /* <Link to="/senate-table">Senate Table</Link> */
}
