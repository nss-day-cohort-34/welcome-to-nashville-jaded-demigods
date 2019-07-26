const createEventHTML = (id, eventObj) => {
    return `
        <li id="event-${id}">${eventObj.name}: </li>
        `
}