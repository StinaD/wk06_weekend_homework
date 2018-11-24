document.addEventListener('DOMContentLoaded', () => {

  const newFormItem = document.querySelector('#new-spot-form');
  newFormItem.addEventListener('submit', handleFormInput);

  const buttonDelete = document.querySelector('#delete');
  buttonDelete.addEventListener('click', handleDelete);

  const speciesSelect = document.querySelector('#species');
  speciesSelect.addEventListener('change', handleSpeciesSelect);

});

const handleSpeciesSelect = function() {
  $("#" + $(this).val()).show().siblings().hide();
})



const handleDelete = function(event){
  const resultDelete = document.querySelector('#twitching-list');
  resultDelete.textContent = '';
}


const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(readingListItem);

  event.target.reset();
}


const handleFormInput = function(event){
  event.preventDefault();

  const newSpotItem = createNewSpot(event.target);
  const spotList = document.querySelector('#twitching-list');
  spotList.appendChild(newSpotItem);

  event.target.reset();
}



const createNewSpot = function (event) {

  const newSpot = document.createElement('div');
  newSpot.classList.add('box');

  const spotSpecies = document.createElement('h3');
  spotSpecies.textContent = `${this.species.value}`;
  newSpot.appendChild(spotSpecies);

  const spotLocation = document.createElement('h4');
  spotLocation.textContent = `${this.location.value}`;
  newSpot.appendChild(spotLocation);

  const spotDate = document.createElement('p');
  spotDate.textContent = `${this.date.value}`;
  newSpot.appendChild(spotDate);

  const twitchingList = document.querySelector('#twitching-list');
  twitchingList.appendChild(newSpot);

}


// handleSpeciesSelect = function.onchange(event) {
//   switch (this[this.selectIndex].value) {
//     case "Water birds":
//     document.querySelector("#all-water-birds").className = "show";
//     break;
//     case "Birds of prey":
//     document.querySelector("#all-birds-of-prey").className = "show";
//     break;
//     case "Song birds":
//     document.querySelector("#all-song-birds").className = "show";
//     break;
//   }
// }
