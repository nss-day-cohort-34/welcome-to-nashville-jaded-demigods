// get/fetch data
// Referece to dom Element
// event listener
// get Data
// html representation
// render to dom

const getParksData = () => {
  return fetch("https://data.nashville.gov/resource/74d7-b74t.json").then(
    response => response.json()
  );
};

const fetchPlaygroundData = () => {
  return fetch(
    `https://data.nashville.gov/resource/74d7-b74t.json?playground=Yes`
  ).then(response => response.json());
};
console.log(fetchPlaygroundData());

const fetchPicnicShelterData = () => {
  return fetch(
    "https://data.nashville.gov/resource/74d7-b74t.json?$where=picnic_shelters_quantity > 0"
  ).then(response => response.json());
};
console.log(fetchPicnicShelterData());

const fetchDogParksData = () => {
  return fetch(
    "https://data.nashville.gov/resource/74d7-b74t.json?dog_park=Yes"
  ).then(response => response.json());
};
console.log(fetchDogParksData());

const fetchRunningTrailsData = () => {
  return fetch(
    "https://data.nashville.gov/resource/74d7-b74t.json?walk_jog_paths=Yes"
  ).then(response => response.json());
};
console.log(fetchRunningTrailsData());

const fetchPlaygroundAndDogParkData = () => {
  return fetch(
    "https://data.nashville.gov/resource/74d7-b74t.json?playground=Yes&dog_park=Yes"
  ).then(response => response.json());
};
console.log(fetchPlaygroundAndDogParkData());
