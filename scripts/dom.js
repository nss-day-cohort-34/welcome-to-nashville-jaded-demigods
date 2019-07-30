const putParksInDOM = (htmlString) => {
parksResultsContainer.innerHTML += htmlString
}

const iteneraryParksItem = document.querySelector("#itinerary--1")

const addParkToItenerary = (htmlString) => {
iteneraryParksItem.innerHTML = `Park: ${htmlString}`

}

const concertsContainer = document.querySelector("#results-list")
const itineraryConcertItem = document.querySelector("#itinerary--4")

// Add concerts to results list
const renderConcerts = (HTMLString) => {
    concertsContainer.innerHTML += HTMLString
}

// Save concert to itinerary
const addConcertToItinerary = (concertName) => {
  itineraryConcertItem.innerHTML = `Concert: ${concertName}`
}

const results = document.querySelector(`#results-list`)

const renderRestResults = (htmlString) => {
  results.innerHTML += htmlString
}

const restaurantItinerary = document.querySelector("#itinerary--2")
const addRestToItinerary = (restName) => {
  restaurantItinerary.innerHTML = `Restaurant: ${restName}`
}