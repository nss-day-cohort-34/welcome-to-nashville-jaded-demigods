// Save button selected
// document.querySelector(`#save--${idNum}`)

// Get user input
const concertsButton = document.querySelector("#concerts-btn").addEventListener("click", event => {
  // Search Genre
    genre = 
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