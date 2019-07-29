const getParksData = (feature) => {
  return fetch(`https://data.nashville.gov/resource/74d7-b74t.json?${feature}=Yes`).then(
    response => response.json()
  );
};

// const fetchPlaygroundData = () => {
//   return fetch(
//     `https://data.nashville.gov/resource/74d7-b74t.json?playground=Yes`
//   ).then(response => response.json());
// };
// console.log(fetchPlaygroundData());

// const fetchPicnicShelterData = () => {
//   return fetch(
//     "https://data.nashville.gov/resource/74d7-b74t.json?picnic_shelters=Yes"
//   ).then(response => response.json());
// };
// console.log(fetchPicnicShelterData());

// const fetchDogParksData = () => {
//   return fetch(
//     "https://data.nashville.gov/resource/74d7-b74t.json?dog_park=Yes"
//   ).then(response => response.json());
// };
// console.log(fetchDogParksData());

// const fetchRunningTrailsData = () => {
//   return fetch(
//     "https://data.nashville.gov/resource/74d7-b74t.json?walk_jog_paths=Yes"
//   ).then(response => response.json());
// };
// console.log(fetchRunningTrailsData());
