import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "semantic-ui-react";
import Nav from "../components/nav";

import Table from "../components/senate-table";

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Senate Table</title>
      </Helmet>
      <Container>
        <Nav large />
        <Table />
      </Container>
    </>
  );
};
