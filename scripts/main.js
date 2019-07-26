fetchTicketMasterData()
.then((overallObject) => {
  console.log(overallObject._embedded.venues)
    const eventsArray = overallObject._embedded.events
    // for (const event of eventsArray) {
    //     if ("address" in overallObject._embedded.venues && "line1" in overallObject._embedded.venues.address) {
    //         event.address = overallObject._embedded.events.address.line1
    //     }
    // }
    const venuesArray = overallObject._embedded._embedded.venues
    for (const event of venuesArray) {
        if ("address" in overallObject._embedded._embedded.venues && "line1" in overallObject._embedded._embedded.venues.address) {
            event.address = overallObject._embedded._embedded.venues.address.line1
        }

        console.log(event.address)
        const eventHTML = createEventHTML(event)
        renderEvent(eventHTML)
    }
}
)

