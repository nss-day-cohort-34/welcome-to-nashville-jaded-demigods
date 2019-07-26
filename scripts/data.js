
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

