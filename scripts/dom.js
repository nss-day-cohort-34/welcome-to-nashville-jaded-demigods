const eventsContainer = document.querySelector("#search-results")

const renderEvent = (HTMLString) => {
    eventsContainer.innerHTML += HTMLString
}