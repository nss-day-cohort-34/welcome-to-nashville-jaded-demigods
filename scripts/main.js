document.querySelector(`#save--${idNum}`).addEventListener("click", event => {
    
})


fetchTicketMasterData()
    .then((overallObject) => {
        let id = 0
        let venueName = ""
        const eventsArray = overallObject._embedded.events
        for (const event of eventsArray) {
            for (let index = 0; index < eventsArray.length; index++) {
                const events = eventsArray[index];
                if ("venues" in events._embedded) {
                    venueName = events._embedded.venues[0].name
                }
            }
            id += 1
            const eventHTML = createEventHTML(id, event, venueName)
            renderEvent(eventHTML)
        }
    })
const restBtn = document.querySelector("#restaurants-btn")
const restSearch = document.querySelector("#restaurants-input")
let idNum = 1


// const searchAPI = (arr, userInput) => {
//   // const userInput = restSearch.value
//   arr.find(userInput)

// }

// restBtn.addEventListener("click",)

// var ages = [3, 10, 18, 20];

// const checkAdult = (age) => {
//   return age >= 18;
// }

// const myFunction = () => {
//   document.getElementById("nash-container").innerHTML += ages.find(checkAdult);
// }

// myFunction()

const userInput = "City"
const searchAPI = (restaurantName) => {
  return restaurantName >= userInput
}


// getRestaurantsData()
//   .then((overallObj) => {
//     const restaurantsArr = overallObj.restaurants
//     for (let i = 0; i < 4; i++) {
//       const restaurantObj = restaurantsArr.find(searchAPI)
//       const htmlString = resultsHTMLrep(restaurantObj.name, restaurantObj.address, idNum)
//       renderResults(htmlString)
//       idNum++
//       restaurantsArr.splice(restaurantObj)
//     }
//   })

