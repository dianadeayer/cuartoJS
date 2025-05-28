const url =
  "https://services2.arcgis.com/5I7u4SJE1vUr79JC/arcgis/rest/services/UniversityChapters_Public/FeatureServer/0/query?where=1%3D1&outFields=University_Chapter,City,State&outSR=4326&resultRecordCount=15&f=json";

const locationsTransformer = (jsonData) => {
  const features = jsonData.features;

  const states = [];
  features.forEach((f) => {
    const state = f.attributes.State;
    if (!states.includes(state)) {
      states.push(state);
    }
  });
};
