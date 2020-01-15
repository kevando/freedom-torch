import React from "react";
import { Header } from "semantic-ui-react";

import "./styles.scss";

const ComingSoon = () => (
  <div className="coming-soon">
    <span className="title">
      <span className="emoji">🚧</span>
      <span className="text"><strong>More content</strong> coming soon</span>
    </span>
  </div>
);

export default ComingSoon;
