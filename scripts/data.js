const someCode = "here's some code"
const fetchAPIData = () => {
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${searchString}&location.address=nashville&token=${token.name}`, {
  "headers": {
      "Accept": "application/json"
  }
}
}
