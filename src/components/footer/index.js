import React from "react";

import "./styles.scss";

const Footer = () => {
  return (
    <footer>
      <p>
        <span className="flag waving" role="img" aria-label="America">🇺🇸</span>Made in America
      </p>
      <p>{process.env.NODE_ENV || "Dev probably"}</p>
    </footer>
  );
};

export default Footer;
