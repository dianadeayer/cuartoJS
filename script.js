import { universityInformation } from "./JASONdata.js";

const locationsTransformer = (jsonData) => {
  const features = jsonData.features;

  const locations = features.map((f) => ({
    state: f.attributes.State,
    name: f.attributes.University_Chapter,
    lat: f.geometry.y,
    lng: f.geometry.x,
  }));

  // Sort by state, then by name
  locations.sort((a, b) => {
    if (a.state === b.state) {
      return a.name.localeCompare(b.name);
    }
    return a.state.localeCompare(b.state);
  });

  return locations;
};

const locations = locationsTransformer(universityInformation);

const table = document.getElementById("states-locations-table");
const tbody = table.tBodies[0];

locations.forEach((loc) => {
  const tr = document.createElement("tr");

  const tdState = document.createElement("td");
  tdState.textContent = loc.state;
  tr.appendChild(tdState);

  const tdName = document.createElement("td");
  tdName.textContent = loc.name;
  tr.appendChild(tdName);

  const tdLat = document.createElement("td");
  tdLat.textContent = loc.lat;
  tr.appendChild(tdLat);

  const tdLng = document.createElement("td");
  tdLng.textContent = loc.lng;
  tr.appendChild(tdLng);

  tbody.appendChild(tr);
});
