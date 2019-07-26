const getRestaurantsData = () => {
  return fetch("https://cors-anywhere.herokuapp.com/https://opentable.herokuapp.com/api/restaurants?city=Nashville&per_page=100", {
    "headers": {
      "Content-Type": "application/json",
    }
  })
  .then(response => response.json())
}