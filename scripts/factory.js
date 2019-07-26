// const results = [];
// const parksInput = "feature";
// const searchResults = "myActivity";
// for (i = 0; i < getParksData.length; i++) {
//   if (getParksData.list[i][parksInput] == searchResults) {
//     results.push(getParksData.List[i]);
//   }
// }









 const parksRadioButtons = document.querySelector("#parks-input");
const htmlRep = (disc-golf, playground, restrooms, picnic-shelters, dog-parks, ada-accessible, running-trails) => {
  return `
    <div>
    <p>${disc-golf} Disc Golf ${playground} Playground ${restrooms} Restrooms ${picnic-shelters} Picnic Shelters ${dog-parks} Dog Parks ${ada-accessible} ADA Compliant${running-trails}Running Trails</p>
    </div>
    `
}

document.querySelector("#saveEntry").addEventListener("click", event => {
  const name = document.querySelector("#fullName").value;
  const address = document.querySelector("#address").value;
  const personAddress = htmlRep(name, address);
  addressContainer.innerHTML = personAddress;
})
