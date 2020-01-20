import * as d3 from "d3";

import * as topojson from "topojson";

import { numberWithCommas} from '../../lib/helpers'

export function getStateClasses(d) {
  var classes = "states";

  if (d.properties.color) {
    classes += " " + d.properties.color;
  }

  return classes;
}

export function handleMouseOverState(d) {

  d3.select(this).classed("active", true);
  d3.select(`#State${d.id}Rank`).classed("active", true);

  var p = d.properties;

  d3.select("#StateName").text(numberWithCommas(p.name + " (" + d.id + ")"));

  d3.select("#Population").text(numberWithCommas(p.population));
  d3.select("#TwitterAudience").text(numberWithCommas(p.total_audience));
  d3.select("#TwitterAge").text(numberWithCommas(p.years_on_twitter));
  d3.select("#PercentVoters").text(numberWithCommas(p.percent_voters + "%"));
}

export function handleMouseOutState(d) {
  d3.select(this).classed("active", false);
  d3.select(`#State${d.id}Rank`).classed("active", false);
}

export const drawRank = ({ selectedRank, g, topoFeatureData }) => {
  g.basemap.selectAll("text").remove();

  g.basemap
    .selectAll("text")
    .data(topoFeatureData)
    .enter()
    .append("text")
    .attr("x", d => d.properties.x)
    .attr("y", d => d.properties.y)
    .attr("dy", -7)
    .attr("class", "rank text")
    .attr("id", d => `State${d.id}Rank`)
    .attr("text-anchor", "middle")
    .text(function(d) {
      return "#" + d.properties[selectedRank];
    });
};

export const drawTooltip = () => {
  const svg = d3.select("#main");
  const map = svg.select("g#basemap");
  const tooltip = d3.select("#Tooltip").style("position", "absolute");

  map
    .on("mouseover", function() {
      return tooltip.style("visibility", "visible");
    })
    .on("mousemove", function() {
      console.log( d3.event.pageX, d3.event.pageY )
      return tooltip
        .style("top", d3.event.pageY - 240 + "px")
        .style("left", d3.event.pageX + 160 + "px");
    })
    .on("mouseout", function() {
      return tooltip.style("visibility", "hidden");
    });
};

export const drawStates = ({ path, topoFeatureData }) => {
  d3.select("#main")
    .select("g#basemap")
    .selectAll("path")
    .data(topoFeatureData)
    .enter()

    .append("path")
    .attr("class", getStateClasses)
    .on("mouseover", handleMouseOverState)
    .on("mouseout", handleMouseOutState)
    .attr("d", path);
};

export const drawStateBorders = ({ map, path }) => {
  d3.select("#main")
    .select("g#basemap")
    .append("path")
    .attr("class", "state-borders")
    .attr("d", path(topojson.mesh(map, map.objects.states, (a, b) => a !== b)));
};
