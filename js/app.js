document.addEventListener('DOMContentLoaded', () => {

  const newFormItem = document.querySelector('#new-spot-form');
  newFormItem.addEventListener('submit', handleFormInput);

  const buttonDelete = document.querySelector('#delete');
  buttonDelete.addEventListener('click', handleDelete);

});

  const handleDelete = function(event){
    const resultDelete = document.querySelector('#twitching-list');
    resultDelete.textContent = '';
  }


  const handleFormInput = function (event) {
    event.preventDefault();

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

    document.getElementById('new-spot-form').reset();
  }
