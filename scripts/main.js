const restBtn = document.querySelector("#restaurants-btn")
const restPriceSelection = document.querySelector("#restaurants-input")
let resultsContainer = document.querySelector("#results-list")
let idNum = 1


getRestaurantsData()
.then((overallObj) => {
  const restaurantsArr = overallObj.restaurants
  
  const searchForRestaurants = (optValue) => {
    const resultsArr = restaurantsArr.filter((restaurantObj)=> {
      return restaurantObj.price === optValue
      })
      for (let i = 0; i < 4; i++) {
        const restaurant = resultsArr[i]
        const htmlString = resultsHTMLrep(restaurant.name, restaurant.address, idNum)
        renderResults(htmlString)
        idNum++
      }
    }

    restBtn.addEventListener("click", () => {
      resultsContainer.innerHTML = ""
      const optionValue = restPriceSelection.selectedIndex + 1
      searchForRestaurants(optionValue)
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
