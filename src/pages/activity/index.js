import React from "react";
import { Link } from "react-router-dom"

const Activity = () => {
  return (
    <div>
      <h1>Activity</h1>
      <p><Link to="/senate">Senate</Link></p>
      <p><Link to="/house">House</Link></p>
    </div>
  );
};

export default Activity;
