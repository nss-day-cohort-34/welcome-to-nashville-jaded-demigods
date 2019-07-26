const createEventHTML = (idNum, eventObj, venue) => {
    return `
        <li id="li--${idNum}">
            ${eventObj.name}: ${venue}
            <button id="save--${idNum}">Save</button>
        </li>
        `
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

