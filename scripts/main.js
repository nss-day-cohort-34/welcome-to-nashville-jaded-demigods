const restBtn = document.querySelector("#restaurants-btn")
const restSearch = document.querySelector("#restaurants-input")
let idNum = 1


// const searchAPI = (arr, userInput) => {
//   // const userInput = restSearch.value
//   arr.find(userInput)

// }

// restBtn.addEventListener("click",)

// var ages = [3, 10, 18, 20];

// const checkAdult = (age) => {
//   return age >= 18;
// }

// const myFunction = () => {
//   document.getElementById("nash-container").innerHTML += ages.find(checkAdult);
// }

// myFunction()

const userInput = 

getRestaurantsData()
  .then((overallObj) => {
    const restaurantsArr = overallObj.restaurants
    restaurantsArr.find()
    restaurantsArr.forEach(restaurant => {
      const htmlString = resultsHTMLrep(restaurant.name, restaurant.address, idNum)
      renderResults(htmlString)
      idNum++
    })
  })

