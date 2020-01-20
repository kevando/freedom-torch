import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>{process.env.NODE_ENV || "Dev probably"}</p>
    </div>
  );
};

export default NotFound;
