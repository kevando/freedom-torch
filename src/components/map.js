import React, { useEffect, useState} from 'react';

// import dd3 from 'd3'
import * as d3 from 'd3'
import * as topojson from 'topojson'

import './map.scss';

function Map() {

  function processData(values) {
    let map = values[0];
    drawMap(map);
  }

  function drawMap(map) {
    console.log('lets draw a map',map)
    var topoFeatureData = topojson.feature(map, map.objects.states)
      .features;

   
      var svg = d3.select("#main");
      console.log('svg',svg)
  
      var path = d3.geoPath();
  
      var g = {
        basemap: svg.select("g#basemap")
      };

    g.basemap
      // .attr("class", "states")
      .selectAll("path")
      .data(topoFeatureData)
      .enter()
      .append("path")

      .attr("d", path);

    g.basemap
      .append("path")
      .attr("class", "state-borders")
      .attr(
        "d",
        path(
          topojson.mesh(map, map.objects.states, function(a, b) {
            return a !== b;
          })
        )
      );
  }

  const init = () => {

    var urls = {
      // map: require("../data/us-geo.json"),
      map: "/data/us-geo.json"
      // unitedStates: "united-states.tsv"
    };

    // var svg = d3.select("#main");
    // console.log('svg',svg)

    // var path = d3.geoPath();

    // var g = {
    //   basemap: svg.select("g#basemap")
    // };

    

    // Load data
    Promise.all([d3.json(urls.map)]).then(processData);
  }

  useEffect(() => {
    console.log('did mount')
    init()
  },[])
  return (
    <div className="App">
      <header className="App-header">

      <svg width="960" height="600" id="main">
      <g id="basemap"></g>
    </svg>
      </header>
    </div>
  );
}

export default Map;
