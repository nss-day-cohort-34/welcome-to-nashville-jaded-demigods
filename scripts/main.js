const restPriceSearchBtn = document.querySelector("#restaurants-btn")
const restPriceSelection = document.querySelector("#restaurants-select")
const restNameSearch = document.querySelector("#restaurants-input")
const restNameSearchBtn = document.querySelector("#rest-name-btn")
const restStreetSearch = document.querySelector("#restaurant-street-input")
const restStreetSearchBtn = document.querySelector("#rest-street-btn")

let resultsContainer = document.querySelector("#results-list")
let idNum = 1

// Create array of restaurant objects based on user input. The filter method accepts a function and gives back an array.
function searchData(arr, prop, userInput) {

  const resultsArr = arr.filter((restaurantObj) => {
    if (prop == "price") {
      return restaurantObj[prop] === userInput
    } else {
      return restaurantObj[prop].includes(userInput)
    }
  })
  return resultsArr
}

// Check if the user's input yields results. If the no results, alert the user. 
function checkUserInput(arr, prop) {
  if (arr.length === 0 && prop === "price") {
    resultsContainer.innerHTML = "No restaurants in this price range. Please search another price range."
  } else if (arr.length === 0 && prop === "name") {
    resultsContainer.innerHTML = "No restaurants with this name. Please search for another name."
  } else if (arr.length === 0 && prop === "address") {
    resultsContainer.innerHTML = "No restaurants with this address. Please search for street name."
  }
}

// If the user input passes the tests, invoke the functions to create the html representation and render the results in the DOM
function showResults(arr) {
  arr.forEach(restaurantObj => {
    const htmlString = resultsHTMLrep(restaurantObj, idNum)
    renderResults(htmlString)
    idNum++
  })
}

// Add click listener to select element (intended for price options)
function addClickListenerToSelect(btn, select, arr, prop) {
  btn.addEventListener("click", () => {
    resultsContainer.innerHTML = ""               // Reset inner html of results container
    if (select.selectedIndex === 0) {
      alert("Select a price range")
      select.focus()
      return
    }
    const optionValue = select.selectedIndex
    const resultsArr = searchData(arr, prop, optionValue)
    checkUserInput(resultsArr, prop)
    showResults(resultsArr)
  })
}

// Add click listener to input element (intended for name and address searches)
function addClickListenerToTextInput(btn, input, type, arr, prop) {
  btn.addEventListener("click", () => {
    resultsContainer.innerHTML = ""                // Reset inner html of results container
    if (input.value === "") {
      alert(`Please enter a ${type} name`)
      input.focus()
      return
    }
    restPriceSelection.selectedIndex = 0           // Reset the price selection to none
    const resultsArr = searchData(arr, prop, input.value)
    checkUserInput(resultsArr, prop)
    showResults(resultsArr)
    input.value = null
  })
}

// Fetch the data from the API and add event listeners to each of the search buttons. 
// Add event listener to the results container. If save button is clicked, add corresponding restaurant name to itinerary.
getRestaurantsData()
  .then((overallObj) => {
    const restaurantsArr = overallObj.restaurants

    addClickListenerToSelect(restPriceSearchBtn, restPriceSelection, restaurantsArr, "price")
    addClickListenerToTextInput(restNameSearchBtn, restNameSearch, "restaurant", restaurantsArr, "name")
    addClickListenerToTextInput(restStreetSearchBtn, restStreetSearch, "street", restaurantsArr, "address")

    resultsContainer.addEventListener("click", () => {
      if (event.target.id.includes("save--rest--")) {
        const idNum = event.target.id.split("--")[2]
        const liId = `li--${idNum}`
        const li = document.querySelector(`#${liId}`)
        const restName = li.textContent.split(":")[0]
        addRestToItinerary(restName)
      }
    })
  })




// Save button selected
// document.querySelector(`#save--${idNum}`)

// Get user input
// const concertsButton = document.querySelector("#concerts-btn").addEventListener("click", event => {
//   // Search Genre
//     genre = 
// })


// fetchTicketMasterData()
//     .then((overallObject) => {
//         let id = 0
//         let venueName = ""
//         const eventsArray = overallObject._embedded.events
//         for (const event of eventsArray) {
//             for (let index = 0; index < eventsArray.length; index++) {
//                 const events = eventsArray[index];
//                 if ("venues" in events._embedded) {
//                     venueName = events._embedded.venues[0].name
//                 }
//             }
//             id += 1
//             const eventHTML = createEventHTML(id, event, venueName)
//             renderEvent(eventHTML)
//         }
//     })
