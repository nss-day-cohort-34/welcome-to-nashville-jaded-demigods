// Sarah
const concertsContainer = document.querySelector("#results-list")
const itineraryConcertItem = document.querySelector("#itinerary--4")

// Add concerts to results list
const renderConcerts = (HTMLString) => {
    concertsContainer.innerHTML += HTMLString
}

// Save concert to itinerary
const addConcertToItinerary = (HTMLString) => {
  itineraryConcertItem.innerHTML = HTMLString
}

// Jacquelyn
const results = document.querySelector(`#results-list`)

const renderResults = (htmlString) => {
  results.innerHTML += htmlString
}

// const itinerary = document.querySelector("#itinerary-list")
