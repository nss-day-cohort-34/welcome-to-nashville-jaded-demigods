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
  return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&classificationId=${genre}&daterange=from20190726-to-20191231&apikey=${apiKeys.ticketMaster}`)
    .then(response => response.json())
}

// get/fetch data 
// Referece to dom Element 
// event listener
// get Data
// html representation
// render to dom

const getParksData = () => {
  return fetch("https://data.nashville.gov/resource/74d7-b74t.json").then
      (response => response.json())
};
console.log(getParksData())