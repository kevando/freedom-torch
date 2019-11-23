import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Congress Connections</title>
      </Helmet>
      <h1 className="logo">congress connections</h1>
      <h5 className="center">Exploring how congress uses Twitter</h5>

      <div className="cards">

        <div className="card senate-map">
        <Link to="/senate-map">Senate Map</Link>

        
        </div>

        <div className="card senate-table">
        <Link to="/senate-table">Senate Table</Link>
        </div>


        </div>
      {/* <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/senate-map">Senate Map</Link>
        </li> */}

    </div>
  );
};

export default Home;
