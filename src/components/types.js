import * as d3 from "d3";

var projection = d3
  .geoAlbers()
  .scale(1280)
  .translate([480, 300]);

export function typeUnitedStates(unitedState) {
  
  const floats = [, "percent_voters", "latitude", "longitude"];
  const ints = [
    "geo_id",
    "total_audience",
    "total_audience_rank",
    "years_on_twitter",
    "years_on_twitter_rank",
    "population",
    "population_rank",
    "percent_voters_rank"
  ];

  floats.forEach(f => {
    unitedState[f] = parseFloat(unitedState[f]);
  })

  ints.forEach(f => {
    unitedState[f] = parseInt(unitedState[f]);
  })

  // use projection hard-coded to match topojson data
  // this needed?
  let coords = projection([unitedState.longitude, unitedState.latitude]);
  unitedState.x = coords[0];
  unitedState.y = coords[1];

  return unitedState;
}
