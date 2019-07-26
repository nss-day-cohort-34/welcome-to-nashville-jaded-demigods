<<<<<<< HEAD
const eric = (5 + 37)
console.log(eric)


// get/fetch data 
// Referece to dom Element 
// event listener
// get Data
// html representation
// render to dom

// const getAPIData = () => {
//     fetch("https://https://data.nashville.gov/resource/74d7-b74t.json")
//         .then(response => response.json()) //get the data

// }
=======
const fetchAPIData = () => {
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${searchString}&location.address=nashville&token=${token.name}`, {
  "headers": {
      "Accept": "application/json"
  }
}
}
>>>>>>> master
