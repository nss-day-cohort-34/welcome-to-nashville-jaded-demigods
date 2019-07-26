const eventsContainer = document.querySelector("#event-list")

const renderEvent = (HTMLString) => {
    eventsContainer.innerHTML += HTMLString
}