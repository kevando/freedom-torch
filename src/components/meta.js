import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({title = "Welcome"}) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title} | The Congress Connection</title>
  </Helmet>
);

export default Meta;
