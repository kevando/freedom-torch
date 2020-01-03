import React from "react";
import { Helmet } from "react-helmet";

import Timeline from "../components/senate-timeline";



export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Senate Table</title>
      </Helmet>
      <Timeline />
    </>
  );
};
