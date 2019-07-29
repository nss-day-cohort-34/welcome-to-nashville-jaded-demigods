const parksResultsContainer = document.querySelector("#search-results");
const playgroundOption = document.querySelector("#playground");
const picnicShelterOption = document.querySelector("#picnic-shelters");
const dogParkOption = document.querySelector("#dog-parks");
const walkJogOption = document.querySelector("#running-trails");
const parksSearchBtn = document.querySelector("#parks-btn");

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
         const htmlString = parkHtmlRep(parkObj, streetAddress)
         putParksInDOM(htmlString)

      })
  })
});

// if (document.queryselector("#playground").checked) {
//     playgroundOption = document.queryselector("#playground").value;
//   }
// console.log(playgroundOption)
