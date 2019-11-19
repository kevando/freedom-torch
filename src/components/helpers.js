import * as d3 from "d3";
import { SlowBuffer } from "buffer";

export function getStateClasses(d) {
  var classes = "states";

  if (d.properties.color) {
    classes += " " + d.properties.color;
  }

  return classes;
}

export function handleMouseOverState(d, i) {
  d3.select(this).classed("active", true);
  // d3.select(this).classed("visted", true);

  // var tooltip = d3.select("#ToolTip");

  // var tooltipText = tooltip.selectAll("text")

  // var scales = {
  //   // used to scale airport bubbles
  //   airports: d3.scaleSqrt().range([4, 18]),
  //   states: d3.scaleSqrt().range([4, 18])
  // };

  var p = d.properties;

  d3.select("#Population").text(
    p.population ? numberWithCommas(p.population) : d.id
  );
  d3.select("#TwitterAudience").text(numberWithCommas(p.total_audience));
  d3.select("#TwitterAge").text(numberWithCommas(p.years_on_twitter));
  d3.select("#PercentVoters").text(numberWithCommas(p.percent_voters + "%"));
}

export function handleMouseOutState(d, i) {
  d3.select(this).classed("active", false);
}

export function numberWithCommas(x) {
  return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const drawRank = ({ selectedRank, g, topoFeatureData }) => {
  g.basemap.selectAll("text").remove();

  g.basemap
    .selectAll("text")
    .data(topoFeatureData)
    .enter()
    .append("text")
    .attr("x", function(d) {
      return d.properties.x;
    })
    .attr("y", function(d) {
      return d.properties.y;
    })
    .attr("dy", -7)
    .attr("class", "rank text")
    .attr("text-anchor", "middle")
    .text(function(d) {
      return "#" + d.properties[selectedRank];
    });
};

export const drawTooltip = () => {
  const svg = d3.select("#main");
  const map =  svg.select("g#basemap")
  const tooltip = d3.select("#Tooltip").style("position", "absolute");

  map
    .on("mouseover", function() {
      return tooltip.style("visibility", "visible");
    })
    .on("mousemove", function() {
      return tooltip
        .style("top", d3.mouse(this)[1] - 10 + "px")
        .style("left", d3.mouse(this)[0] + 340 + "px");
    })
    .on("mouseout", function() {
      return tooltip.style("visibility", "hidden");
    });
};
