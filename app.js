import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';


// on load
async function loadData() {
    const dogs = await getDogs();
    const dogListContainer = document.getElementById('dog-list-container');

    for (let dog of dogs) {
        const dogDiv = renderDogCard(dog);
        dogListContainer.append(dogDiv);
    }
}
// fetch all dogs
// render and append all dog cards to the container
loadData();