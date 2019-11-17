import * as d3 from "d3";

var projection = d3
  .geoAlbers()
  .scale(1280)
  .translate([480, 300]);

export function typeUnitedStates(unitedState) {
  unitedState.id = parseFloat(unitedState.id);

  unitedState.longitude = parseFloat(unitedState.longitude);
  unitedState.latitude = parseFloat(unitedState.latitude);

  // use projection hard-coded to match topojson data
  let coords = projection([unitedState.longitude, unitedState.latitude]);
  unitedState.x = coords[0];
  unitedState.y = coords[1];

  unitedState.outgoing = 0; // eventually tracks number of outgoing flights
  unitedState.incoming = 0; // eventually tracks number of incoming flights

  unitedState.flights = []; // eventually tracks outgoing flights

  return unitedState;
}
