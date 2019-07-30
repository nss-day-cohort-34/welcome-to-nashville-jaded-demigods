// Global variables - used to tie to elements in the DOM and to add click listeners for the user input
const parksResultsContainer = document.querySelector("#results-list");
const playgroundOption = document.querySelector("#playground");
const picnicShelterOption = document.querySelector("#picnic-shelters");
const dogParkOption = document.querySelector("#dog-parks");
const walkJogOption = document.querySelector("#running-trails");
const parksSearchBtn = document.querySelector("#parks-btn");
let parksIdNum = 1

const parksResultsArray = [];
let parksReturnedData;

const checkSelectedParkFeature = () => {
  if (playgroundOption.checked) {
    parksReturnedData = getParksData(playgroundOption.value);
  } else if (picnicShelterOption.checked) {
    parksReturnedData = getParksData(picnicShelterOption.value);
  } else if (dogParkOption.checked) {
    parksReturnedData = getParksData(dogParkOption.value);
  } else if (walkJogOption.checked) {
    parksReturnedData = getParksData(walkJogOption.value);
  }
  return parksReturnedData;
};

parksSearchBtn.addEventListener("click", () => {
  parksResultsContainer.innerHTML = ""
  checkSelectedParkFeature().then((parksReturnedData) => {
    parksResultsArray.push = parksReturnedData
    parksReturnedData.forEach(parkObj => {
      const addressString = parkObj.mapped_location.human_address
      const addressWordsArray = addressString.split("\"")
      const streetAddress = addressWordsArray[3]
      const htmlString = parkHtmlRep(parkObj, streetAddress, parksIdNum)
      putParksInDOM(htmlString)
      parksIdNum++

    })
    parksResultsContainer.addEventListener("click", () => {
      if (event.target.id.includes("savePark--")) {
        const parksSaveBtnId = event.target.id
        const getParksIdNum = parksSaveBtnId.split("--")[1]
        const parkNameId = `parkName--${getParksIdNum}`
        const getParkName = document.querySelector(`#${parkNameId}`).textContent
        addParkToItenerary(getParkName)

      }
    })
  })
})

