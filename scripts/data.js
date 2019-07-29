const getParksData = feature => {
  return fetch(
    `https://data.nashville.gov/resource/74d7-b74t.json?${feature}=Yes`
  ).then(response => response.json());
};

const fetchTicketMasterData = genre => {
  return fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&classificationId=${genre}&apikey=${
      apiKeys.ticketMaster
    }`
  ).then(response => response.json());
};

const getRestaurantsData = () => {
  return fetch(
    "https://cors-anywhere.herokuapp.com/https://opentable.herokuapp.com/api/restaurants?city=Nashville&per_page=100",
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  ).then(response => response.json());
};
