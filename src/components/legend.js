import React, { useState } from "react";
import { numberWithCommas } from "./helpers";

const Legend = ({ handleChange, selectedRank }) => {
  return (
    <div id="Legend" className="legend">
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
      <p>
        <label>
          <input
            type="radio"
            value="years_on_twitter_rank"
            checked={selectedRank === "years_on_twitter_rank"}
            onChange={handleChange}
          />
          Twitter Age
        </label>
      </p>
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
            value="percent_voters_rank"
            checked={selectedRank === "percent_voters_rank"}
            onChange={handleChange}
          />
          % can vote
        </label>
      </p>
    </div>
  );
};

export default Legend;
