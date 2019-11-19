import React, { useEffect, useState } from "react";

import * as d3 from "d3";
import * as topojson from "topojson";

import { typeUnitedStates } from "./types";
import { dataUrls } from "../data";
import {
  getStateClasses,
  handleMouseOutState,
  handleMouseOverState,
  drawRank,
  drawTooltip
} from "./helpers";

import Legend from "./legend";
import Tooltip from "./tooltip";

let topoFeatureData;
let svg;
let path;
let g;

function Map() {
  const [selectedRank, setSelectedRank] = useState("total_audience_rank");

  // Set Global vars

  const handleChange = event => {
    setSelectedRank(event.target.value);

    drawRank({ selectedRank: event.target.value, g, topoFeatureData });
  };

  function processData(values) {
    let map = values[0];
    let unitedStates = values[1];
    drawMap(map, unitedStates);
  }

  function drawMap(map, unitedStates) {
    topoFeatureData = topojson.feature(map, map.objects.states).features;

    topoFeatureData.forEach(geoState => {
      var stateData = unitedStates.find(
        us_state => parseInt(geoState.id) === us_state.geo_id
      );

      if (stateData) {
        geoState.properties = stateData;
      }
    });
    svg = d3.select("#main");
    path = d3.geoPath();
    g = {
      basemap: svg.select("g#basemap")
    };

    g.basemap
      .selectAll("path")
      .data(topoFeatureData)
      .enter()

      .append("path")
      .attr("class", getStateClasses)
      .on("mouseover", handleMouseOverState)
      .on("mouseout", handleMouseOutState)
      .attr("d", path);

    g.basemap
      .append("path")
      .attr("class", "state-borders")
      .attr(
        "d",
        path(topojson.mesh(map, map.objects.states, (a, b) => a !== b))
      );

    drawRank({ selectedRank, g, topoFeatureData });
    drawTooltip();
  }

  useEffect(() => {
    Promise.all([
      d3.json(dataUrls.map),
      d3.tsv(dataUrls.unitedStates, typeUnitedStates)
    ]).then(processData);
  }, []);

  return (
    <div className="map">
      <div className="container">
        <div className="top-bar">
          <h1>Congress Connections</h1>
        </div>
        <div className="content">
          <div className="main">
            <svg width="960" height="600" id="main" className="map">
              <g id="basemap"></g>

              <text id="Rank"></text>
            </svg>
          </div>
          <div className="side-bar">
            <Legend selectedRank={selectedRank} handleChange={handleChange} />
          </div>
        </div>

        <Tooltip />
        <div className="bottom-bar"></div>
      </div>
    </div>
  );
}

export default Map;

