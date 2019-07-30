// Get reference to genre options user can select in index.html
const genre = document.querySelector("#music-genres")

// Get reference to concerts search button
const concertsSearchButton = document.querySelector("#concerts-btn")

// Add event listener to the 
concertsSearchButton.addEventListener("click", () => {
    // Call fetch function and pass in user's selected genre
    fetchTicketMasterData(genre.value)
        .then((overallObject) => {
            // Set HTML in results container to empty string before returning search results 
            concertsContainer.innerHTML = ""
            let id = 0
            let venueName = ""
            // Create variable to store concerts array
            const concertsArray = overallObject._embedded.events
            // Iterate over array to 
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
            concertsContainer.addEventListener("click", () => {
                if (event.target.id.includes("save-concert--")) {
                    const getConcertIdNum = event.target.id.split("--")[1]
                    const getConcertNameId = `concert-name--${getConcertIdNum}`
                    const getConcertName = document.querySelector(`#${getConcertNameId}`).textContent
                    addConcertToItinerary(getConcertName)

                } else {
                    return
                }
            })

        })
})

