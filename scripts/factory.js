const createEventHTML = (idNum, eventObj, venue) => {
    return `
        <li id="li--${idNum}">
            ${eventObj.name}: ${venue}
            <button id="save--${idNum}">Save</button>
        </li>
        `
}
const resultsHTMLrep = (restaurantObj, idNum) => {
  return `
    <li id="li--${idNum}">${restaurantObj.name}: ${restaurantObj.address}<button id="save--rest--${idNum}">Save</button>
    </li>
  `
}

// const itenHTMLrep = (eventType, name) => {
//   return `
//   <li>${eventType}: ${name}</li>
//   `
// }

