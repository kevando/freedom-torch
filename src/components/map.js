import React, { useEffect, useState } from "react";

// import dd3 from 'd3'
import * as d3 from "d3";
import * as topojson from "topojson";

import { typeUnitedStates } from "./types";
import { dataUrls } from "../data";

function Map() {
  function processData(values) {
    let map = values[0];
    let unitedStates = values[1];
    drawMap(map, unitedStates);
  }

  function drawMap(map, unitedStates) {
    let topoFeatureData = topojson.feature(map, map.objects.states).features;

    topoFeatureData.forEach(geoState => {
      var stateData = unitedStates.find(
        us_state => parseInt(geoState.id) === us_state.id
      );

      if (stateData) {
        geoState.key = stateData.id; // not needed
        geoState.properties = stateData;
      }
    });

    var svg = d3.select("#main");
    // var tooltip = d3.select("text#tooltip");

    var path = d3.geoPath();

    var g = {
      basemap: svg.select("g#basemap")
    };

    // must be hard-coded to match our topojson projection
    // source: https://github.com/topojson/us-atlas
    // var projection = d3
    //   .geoAlbers()
    //   .scale(1280)
    //   .translate([480, 300]);

    // var scales = {
    //   // used to scale airport bubbles
    //   airports: d3.scaleSqrt().range([4, 18]),
    //   states: d3.scaleSqrt().range([4, 18])
    // };

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
  }

  function getStateClasses(d) {
    var classes = "states";

    if (d.properties.color) {
      classes += " " + d.properties.color;
    }

    return classes;
  }

  function handleMouseOverState(d, i) {
    console.log(d, i);
    // Highlight state outline
    d3.select(this).classed("active", true);
    d3.select(this).classed("visted", true);

    var tooltip = d3.select("#ToolTip");

    var scales = {
      // used to scale airport bubbles
      airports: d3.scaleSqrt().range([4, 18]),
      states: d3.scaleSqrt().range([4, 18])
    };

    var p = d.properties;
    if (p) {
      //   // make tooltip take up space but keep it invisible
      tooltip.style("display", null);
      tooltip.style("visibility", "hidden");
      tooltip.attr("text-anchor", "middle");
      tooltip.attr("dy", -scales.states(0) - 4);
      tooltip.attr("x", p.x);
      tooltip.attr("y", p.y);
      tooltip.text(p.name);
      tooltip.style("visibility", "visible");
    }

    // legend, too
    // var legend = d3.select("#Legend");
    // legend
    //   .append("p")
    //   .text(p.x)
    //   .attr("class", "tooltip");

    var featureTxt = d3.select("#Feature");

    featureTxt.text(`Id: ${d.id}`);
  }

  function handleMouseOutState(d, i) {
    // Add interactivity
    d3.select(this).classed("active", false);
    // console.log(d, i);
  }

  const init = () => {
    Promise.all([
      d3.json(dataUrls.map),
      d3.tsv(dataUrls.unitedStates, typeUnitedStates)
    ]).then(processData);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="map-wrapper">
      <h1 className="the90s title">Senate</h1>
      <svg width="960" height="600" id="main" className="map">
        <g id="basemap"></g>

        <text id="ToolTip" className="tool-tip"></text>
      </svg>
      <div id="Legend" className="legend">
        <p id="Feature"></p>
      </div>
    </div>
  );
}

export default Map;
