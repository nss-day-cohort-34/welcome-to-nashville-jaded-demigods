const restBtn = document.querySelector("#restaurants-btn")
const restPriceSelection = document.querySelector("#restaurants-select")
const restNameSearch = document.querySelector("#restaurants-input")
const restNameSearchBtn = document.querySelector("#rest-name-btn")
const restStreetSearch = document.querySelector("#restaurant-street-input")
const restStreetSearchBtn = document.querySelector("#rest-street-btn")
let resultsContainer = document.querySelector("#results-list")
let idNum = 1


getRestaurantsData()
  .then((overallObj) => {
    const restaurantsArr = overallObj.restaurants

    const search = (prop, userInput) => {
      const resultsArr = restaurantsArr.filter((restaurantObj) => {
        if (prop == "price") {
          return restaurantObj[prop] === userInput
        } else {
          return restaurantObj[prop].includes(userInput)
        }
      })
      if (resultsArr.length === 0 && prop === "price") {
        alert("No restaurants in this price range")
      } else if (resultsArr.length === 0 && prop === "name") {
        alert("No restaurants with this name")
      } else {
        resultsArr.forEach(restaurantObj => {
          const htmlString = resultsHTMLrep(restaurantObj, idNum)
          renderResults(htmlString)
          idNum++
        })
      }
    }

    restBtn.addEventListener("click", () => {
      resultsContainer.innerHTML = ""
      const optionValue = restPriceSelection.selectedIndex + 1
      search("price",optionValue)
    })

    restNameSearchBtn.addEventListener("click", () => {
      restPriceSelection.selectedIndex = 0
      resultsContainer.innerHTML = ""
      const nameSearch = restNameSearch.value
      search("name",nameSearch)
      restNameSearch.value = null
    })
    
    restStreetSearchBtn.addEventListener("click", () => {
      restPriceSelection.selectedIndex = 0
      resultsContainer.innerHTML = ""
      const streetSearch = restStreetSearch.value
      search("address",streetSearch)
      restStreetSearch.value = null
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
