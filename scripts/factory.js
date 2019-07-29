const htmlRep = ((fetchPlaygroundData, fetchPicnicShelterData, fetchDogParksData, fetchRunningTrailsData) => {
  return `
  <fieldset>
  <p>${fetchPlaygroundData}</p> 
  <p>${fetchPicnicShelterData}</p>
  <p>${fetchDogParksData}</p> 
  <p>${fetchRunningTrailsData}</p>
  </fieldset>
  `
})

document.querySelector("#parks-btn").addEventListener("click", event => {
const parksRadioButtons = document.querySelector("#search-results");
  const fetchPlaygroundData = document.querySelector("#playgrounds").value;
  const fetchPicnicShelterData = document.querySelector("#picnic-shelters").value;
  const fetchDogParksData = document.querySelector("#dog-parks").value;
  const fetchRunningTrailsData = document.querySelector("#running-trails").value;
  const htmlOutput = htmlRep(fetchPlaygroundData, fetchPicnicShelterData, fetchDogParksData, fetchRunningTrailsData);
  parksRadioButtons.innerHTML = htmlOutput;
})


