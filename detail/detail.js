import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const dog = await getDog(params.get('id'));
    const dogDiv = renderDogDetail(dog);
    dogDetailContainer.append(dogDiv);
    
}
loadData();
// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
