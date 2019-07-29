const parkHtmlRep = (parkObj, streetAdress, parksIdNum) => {
  return `
  <li class="activity-li" id="li--${parksIdNum}">
  <h3 class="activity-name"><span id="parkName--${parksIdNum}">${parkObj.park_name}</span><button class="save-button" id="savePark--${parksIdNum}">Save</button></h3>
  <p class="activity-details">${streetAdress}</p>
  </li>
  `
}

const createConcertHTML = (idNum, concertObj, venue) => {
    return `
        <li class="activity-li" id="li--${idNum}">
            <h3 class="activity-name"><span id="concert-name--${idNum}">${concertObj.name}</span><button class="save-button" id="save-concert--${idNum}">Save</button></h3>
            <p class="activity-details">Location: ${venue}</p>
            <p class="activity-details">Date: ${concertObj.dates.start.localDate} | Time: ${concertObj.dates.start.noSpecificTime ? "No Specific Time": concertObj.dates.start.localTime}</p>
        </li>
        `
}

const resultsHTMLrep = (restaurantObj, idNum) => {
  return `
    <li class="activity-li" id="li--${idNum}">${restaurantObj.name}: ${restaurantObj.address}<button class="save-button" id="save--rest--${idNum}">Save</button>
    </li>
  `
}
