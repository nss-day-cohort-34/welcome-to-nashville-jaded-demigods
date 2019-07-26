const restBtn = document.querySelector("#restaurants-btn")
const restPriceSelection = document.querySelector("#restaurants-input")
let idNum = 1

const searchPrices = (restaurantObj) => {
  return restaurantObj.price === userInput
}

getRestaurantsData()
  .then((overallObj) => {
    const restaurantsArr = overallObj.restaurants
    const resultsArr = restaurantsArr.filter(searchPrices)
    for ( let i = 0; i < 4; i++ ){
      const restaurant = resultsArr[i]
      const htmlString = resultsHTMLrep(restaurant.name, restaurant.address, idNum)
      renderResults(htmlString)
      idNum++
    }
  })



