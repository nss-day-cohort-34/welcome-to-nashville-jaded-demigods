// Save button selected
// document.querySelector(`#save--${idNum}`)

const genreOptions = {
    alternative: "KnvZfZ7vAvv",
    blues: "KnvZfZ7vAvd",
    country: "KnvZfZ7vAv6",
    folk: "KnvZfZ7vAva",
    hipHopRap: "KnvZfZ7vAv1",
    pop: "KnvZfZ7vAev",
    rock: "KnvZfZ7vAeA",
}

const genre = document.querySelector("#music-genres")
const concertsSearchButton = document.querySelector("#concerts-btn")

// Get user input

    // Search Genre

    // let selectedGenre = genreSelector.options[genreSelector.selectedIndex].text

    // Look up the selectedIndex property. Create an object with music genres and IDs and iterate through that instead of trying to assign the Genre ID value to the value of the select option. Figure out which one is easier. 

// When applying event listener to the Save buttons use event.target since the listener will be at the parent level
// if (event.target.tagName === 'LI')

concertsSearchButton.addEventListener("click", () => {
    fetchTicketMasterData(genre.value)
        .then((overallObject) => {
            eventsContainer.innerHTML = ""
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
})