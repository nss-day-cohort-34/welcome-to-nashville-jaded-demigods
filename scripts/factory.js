const createConcertHTML = (idNum, concertObj, venue) => {
    return `
        <li id="li--${idNum}">
            <h3>${concertObj.name} <button id="save-concert--${idNum}">Save</button></h3>
            <p>Location: ${venue}</p>
            <p>Date: ${concertObj.dates.start.localDate} | Time: ${concertObj.dates.start.localTime}</p>
            
        </li>
        `
}

const addConcertToItineraryHTML = (concertObj) => {
  return `Concert: ${concertObj.name}`
}

const resultsHTMLrep = (name, address, idNum) => {
  return `
    <li id="li--${idNum}">
      ${name}: ${address}<button id="save--${idNum}">Save</button>
    </li>
  `
}

// const itenHTMLrep = (eventType, name) => {
//   return `
//   <li>${eventType}: ${name}</li>
//   `
// }

