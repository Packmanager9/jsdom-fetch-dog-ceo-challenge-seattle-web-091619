document.addEventListener("DOMContentLoaded", main);

function main() {
  getDogs();
  getBreeds();
  storeDogs();
}

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedsUrl = "https://dog.ceo/api/breeds/list/all";
let dogos = [];

async function storeDogs() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => (dogos = json.message));
}

async function getDogs() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => displayDogs(json.message));
}

displayDogs = dogsArray => {
  dogsArray.forEach(dogImg => {
    let dogDisplayPane = document.getElementById("dog-image-container");
    let newDogImg = document.createElement("img");
    newDogImg.classList.add("dog-img");
    newDogImg.src = dogImg;
    dogDisplayPane.appendChild(newDogImg);
  });
};

async function getBreeds() {
  return fetch(breedsUrl)
    .then(resp => resp.json())
    .then(json => displayBreeds(json.message));
}

displayBreeds = breedsArray => {
  breeds = Object.keys(breedsArray);
  console.log(breeds);
};