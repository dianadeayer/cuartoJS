import { universityInformation } from "./JASONdata.js";

const locationsTransformer = (jsonData) => {
  const features = jsonData.features;

  const states = [];
  features.forEach((f) => {
    const state = f.attributes.State;
    if (!states.includes(state)) {
      states.push(state);
    }
  });

  const locations = features.map((f) => {
    return {
      name: f.attributes.University_Chapter,
      latLng: [f.geometry.y, f.geometry.x],
    };
  });

  return [states, locations];
};

const [states, locations] = locationsTransformer(universityInformation);

const statesList = document.getElementById("states");
states.forEach((state) => {
  const li = document.createElement("li");
  li.textContent = state;
  statesList.appendChild(li);
});

const locationsList = document.getElementById("locations");
locations.forEach((loc) => {
  const li = document.createElement("li");
  li.textContent = `${loc.name} [${loc.latLng[0]}, ${loc.latLng[1]}]`;
  locationsList.appendChild(li);
});
