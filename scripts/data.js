// get/fetch data 
// Referece to dom Element 
// event listener
// get Data
// html representation
// render to dom


const getParksData = () => {
    fetch("https://data.nashville.gov/resource/74d7-b74t.json", {
      "headers": {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(results => {
        console.log(results)
      })
  }
  
  // getRestaurantsData()