// Get reference to genre options use can select in index.html
const genre = document.querySelector("#music-genres")

// Get reference to concerts search button
const concertsSearchButton = document.querySelector("#concerts-btn")

// Get reference to save button next to a concert item
//const saveConcertItem = document.querySelector(`#save--${idNum}`)
 

// When applying event listener to the Save buttons use event.target since the listener will be at the parent level
// if (event.target.tagName === 'LI')

concertsSearchButton.addEventListener("click", () => {
    // Call fetch function and pass in user's selected genre
    fetchTicketMasterData(genre.value)
        .then((overallObject) => {
            concertsContainer.innerHTML = ""
            let id = 0
            let venueName = ""
            const concertsArray = overallObject._embedded.events
            for (const event of concertsArray) {
                for (let index = 0; index < concertsArray.length; index++) {
                    const events = concertsArray[index];
                    if ("venues" in events._embedded) {
                        venueName = events._embedded.venues[0].name
                    }
                }
                id += 1
                const concertsHTML = createConcertHTML(id, event, venueName)
                renderConcerts(concertsHTML)
            }

        })
})

concertsContainer.addEventListener("click", (event) => {
    if (event.target.id.includes("save-concert--")) {
        addConcertToItinerary(overallObject._embedded.events)

    }
})