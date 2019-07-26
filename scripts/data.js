// const fetchEventBriteData = () => {
//   return fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${searchString}&location.address=nashville&token=${apiKeys.eventBrite}`, {
//     "headers": {
//       "Accept": "application/json"
//     }
//   })
//     .then(response => response.json())
// }

// 343 = Nashville
const fetchTicketMasterData = () => {
  return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=${apiKeys.ticketMaster}`)
    .then(response => response.json())
}