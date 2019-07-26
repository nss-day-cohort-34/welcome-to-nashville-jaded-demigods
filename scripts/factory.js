const createEventHTML = (idNum, eventObj) => {
    return `
        <li id="li--${idNum}">
            ${eventObj.name}
            <button id="save--${idNum}">Save</button>
        </li>
        `
}