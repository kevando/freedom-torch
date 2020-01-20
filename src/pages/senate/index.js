import React from "react";
import { useParams } from "react-router-dom";
import Debug from './debug';
import DebugImages from './debug-images';

const Senate = props => {
  let { view } = useParams();

  switch (view) {
    case "debug":
      return <Debug />;
    case "debug-images":
      return <DebugImages />;

    default:
      return (
        <div className="senate">
          <h3>116th Congress {view}</h3>
        </div>
      );
  }
};

export default Senate;
