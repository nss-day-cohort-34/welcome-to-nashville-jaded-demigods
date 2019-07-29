const parkHtmlRep = (parkObj, streetAdress, parksIdNum) => {
  return `
  <li id="li--${parksIdNum}">
  <h3><span id="parkName--${parksIdNum}">${parkObj.park_name}</span><button id="savePark--${parksIdNum}">Save</button></h3>
  <p>${streetAdress}</p>
  </li>
  `
}

const createConcertHTML = (idNum, concertObj, venue) => {
    return `
        <li id="li--${idNum}">
            <h3><span id="concert-name--${idNum}">${concertObj.name}</span><button id="save-concert--${idNum}">Save</button></h3>
            <p>Location: ${venue}</p>
            <p>Date: ${concertObj.dates.start.localDate} | Time: ${concertObj.dates.start.localTime}</p>
            
        </li>
        `
}

const resultsHTMLrep = (restaurantObj, idNum) => {
  return `
    <li id="li--${idNum}">${restaurantObj.name}: ${restaurantObj.address}<button id="save--rest--${idNum}">Save</button>
    </li>
  `
}
