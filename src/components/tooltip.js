import React from "react";
import { numberWithCommas } from "./helpers";

const Tooltip = ({ handleChange, selectedRank }) => {
  return (
    <div id="Tooltip" className="tool-tip wrapper">

      <div>
        <p id="TwitterAudience" className="value">fff</p>
        <p className="label">Total Followers</p>
      </div>

      <div>
        <p id="TwitterAge" className="value">ff</p>
        <p className="label">Years on Twitter</p>
      </div>


      <div>
        <p id="Population" className="value">ff</p>
        <p className="label">Population</p>
      </div>


      <div>
        <p id="PercentVoters" className="value">fff</p>
        <p className="label">% that can vote</p>
      </div>

    </div>
  );
};

export default Tooltip;
