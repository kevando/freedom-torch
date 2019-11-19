import React from "react";
import { Helmet } from "react-helmet";

import Map from "../components/senate-map";



export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Senate Map</title>
      </Helmet>
      <Map />
    </>
  );
};
