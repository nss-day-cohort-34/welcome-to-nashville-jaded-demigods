const getRestaurantsData = () => {
  fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&apikey=${apiKeys.zomato}`, {
    "headers": {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(results => {
      console.log(results)
    })
}
