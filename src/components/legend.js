import React, { useState } from "react";
import { numberWithCommas } from "./helpers";

const Legend = ({handleChange, selectedRank}) => {

  return (
    <div id="Legend" className="legend">

      <p>
          <label>
            <input
              type="radio"
              value="population_rank"
              checked={selectedRank === "population_rank"}
              onChange={handleChange}
            />
            Population
          </label>
          </p>

        <p>
          <label>
            <input
              type="radio"
              value="total_audience_rank"
              checked={selectedRank === "total_audience_rank"}
              onChange={handleChange}
            />
            Total Twitter Audience
          </label>
        </p>
    </div>
  );
};


export default Legend;
