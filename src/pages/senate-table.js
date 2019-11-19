import React from "react";
import { Helmet } from "react-helmet";

import Table from "../components/senate-table";



export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Senate Table</title>
      </Helmet>
      <Table />
    </>
  );
};
