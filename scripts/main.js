const restPriceSearchBtn = document.querySelector("#restaurants-btn")
const restPriceSelection = document.querySelector("#restaurants-select")
const restNameSearch = document.querySelector("#restaurants-input")
const restNameSearchBtn = document.querySelector("#rest-name-btn")
const restStreetSearch = document.querySelector("#restaurant-street-input")
const restStreetSearchBtn = document.querySelector("#rest-street-btn")

let resultsContainer = document.querySelector("#results-list")
let idNum = 1



// Function to be included in .addEventListener for the search buttons
function search(arr, prop, userInput) {

  // Filter data from API based on user's search parameter (the filter method accepts a function and gives back an array)
  const resultsArr = arr.filter((restaurantObj) => {
    if (prop == "price") {
      return restaurantObj[prop] === userInput
    } else {
      return restaurantObj[prop].includes(userInput)
    }
  })

  // If the user's search returned no results, alert the user
  if (resultsArr.length === 0 && prop === "price") {
    alert("No restaurants in this price range. Please search another price range.")
  } else if (resultsArr.length === 0 && prop === "name") {
    alert("No restaurants with this name. Please search for another name.")
  } else if (resultsArr.length === 0 && prop === "address") {
    alert("No restaurants with this address. Please search for street name.")

    // If the user's search has results, invoke functions to create HTML representation and render it in the DOM
  } else {
    resultsArr.forEach(restaurantObj => {
      const htmlString = resultsHTMLrep(restaurantObj, idNum)
      renderResults(htmlString)

      idNum++
    })
  }
}

// function addClickListener() {
//   btn.addEventListener("click",() => {

//   })
// }

// Fetch the data from the API and add event listeners to each of the search buttons. Add event listener to the results container and 
getRestaurantsData()
  .then((overallObj) => {
    const restaurantsArr = overallObj.restaurants

    restPriceSearchBtn.addEventListener("click", () => {
      if (restPriceSelection.selectedIndex === 0) { 
        alert("Select a price range")
        restPriceSelection.focus()
        return 
      }
      resultsContainer.innerHTML = ""                // Reset inner html of results container
      const optionValue = restPriceSelection.selectedIndex
      search(restaurantsArr, "price", optionValue)
    })

    restNameSearchBtn.addEventListener("click", () => {
      if (restNameSearch.value === "") {
        alert("Please enter a restaurant name")
        restNameSearch.focus()
        return
      }
      restPriceSelection.selectedIndex = 0           // Reset the price selection to none
      resultsContainer.innerHTML = ""                // Reset inner html of results container
      const nameSearch = restNameSearch.value
      search(restaurantsArr, "name", nameSearch)
      restNameSearch.value = null                    // Empty the input
    })

    restStreetSearchBtn.addEventListener("click", () => {
      if (restStreetSearch.value === "") {
        alert("Please enter a street name")
        restStreetSearch.focus()
        return
      }
      restPriceSelection.selectedIndex = 0          // Reset the price selection to none
      resultsContainer.innerHTML = ""               // Reset inner html of results container
      const streetSearch = restStreetSearch.value
      search(restaurantsArr, "address", streetSearch)
      restStreetSearch.value = null                 // Empty the input
    })

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
