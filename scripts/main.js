fetchTicketMasterData()
.then((_embedded) => {
//   console.log(events)
    for (const event of _embedded.events) {
        const eventHTML = createEventHTML(event)
        renderEvent(eventHTML)
    }
}
  )