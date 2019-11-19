import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
