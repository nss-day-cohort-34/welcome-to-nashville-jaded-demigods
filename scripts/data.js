// const getParksData = () => {
//     return fetch("https://data.nashville.gov/resource/74d7-b74t.json").then
//         (response => response.json())
// };
// console.log(getParksData())


// 343 = Nashville
// const fetchTicketMasterData = () => {
//     return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&classificationId=${genre}&daterange=from20190726-to-20191231&apikey=${apiKeys.ticketMaster}`)
//       .then(response => response.json())
//   }

  const getRestaurantsData = () => {
    return fetch("https://cors-anywhere.herokuapp.com/https://opentable.herokuapp.com/api/restaurants?city=Nashville&per_page=100", {
      "headers": {
        "Content-Type": "application/json",
      }
    })
    .then(response => response.json())
  }