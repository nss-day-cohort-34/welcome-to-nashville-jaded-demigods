let id = 0

fetchTicketMasterData()
.then((overallObject) => {
  console.log(overallObject._embedded.events)
    const eventsArray = overallObject._embedded.events
    for (const event of eventsArray) {
    
    // const venuesArray = overallObject._embedded.events._embedded
    // for (const event of venuesArray) {
    //     if ("address" in overallObject._embedded.events._embedded.venues) {
    //         event.address = overallObject._emsbedded.events._embedded.venues.address
    //     }

    //     console.log(event.address)
        id += 1
        const eventHTML = createEventHTML(id, event)
        renderEvent(eventHTML)
 }
    })

// )

// fetchTicketMasterData()
// .then((overallObject) => {
// //   console.log(overallObject._embedded.venues)
//     const venuesArray = overallObject._embedded.events._embedded
//     for (const event of venuesArray) {
//         if ("address" in overallObject._embedded.events._embedded.venues) {
//             event.address = overallObject._emsbedded.events._embedded.venues.address
//         }

//         console.log(event.address)

//  }
//     }

// )