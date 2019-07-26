// Sarah
const eventsContainer = document.querySelector("#results-list")

const renderEvent = (HTMLString) => {
    eventsContainer.innerHTML += HTMLString
}

// Jacquelyn
const results = document.querySelector(`#results-list`)

const renderResults = (htmlString) => {
  results.innerHTML += htmlString
}

const restaurantItinerary = document.querySelector("#itinerary--2")
const addRestToItinerary = (restName) => {
  restaurantItinerary.innerHTML = `Restaurant: ${restName}`
}