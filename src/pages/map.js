import React from "react";
import { Helmet } from "react-helmet";

import Map from "../components/map";

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Senate Map</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Map />
    </>
  );
};
