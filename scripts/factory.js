const createEventHTML = (idNum, eventObj, venue) => {
    return `
        <li id="li--${idNum}">
            ${eventObj.name}: ${venue}
            <button id="save--${idNum}">Save</button>
        </li>
        `
}