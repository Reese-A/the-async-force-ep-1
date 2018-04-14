'use strict';

function getVader() {
  document.getElementById('person4Name').innerHTML = JSON.parse(this.response).name;
}

function getTatooine() {
  document.getElementById('person4HomeWorld').innerHTML = JSON.parse(this.response).name
}
let vader = new XMLHttpRequest();
vader.addEventListener("load", getVader);
vader.open("GET", "https://swapi.co/api/people/4/");
vader.send();

let tatooine = new XMLHttpRequest();
tatooine.addEventListener("load", getTatooine)
tatooine.open("GET", "https://swapi.co/api/planets/1/");
tatooine.send();

function getSolo() {
  document.getElementById('person14Name').innerHTML = JSON.parse(this.response).name;
}

function getHuman() {
  document.getElementById('person14Species').innerHTML = JSON.parse(this.response).name;
}
let solo = new XMLHttpRequest();
solo.addEventListener('load', getSolo);
solo.open("GET", "https://swapi.co/api/people/14/");
solo.send();

let human = new XMLHttpRequest();
human.addEventListener('load', getHuman);
human.open("GET", 'https://swapi.co/api/species/1/');
human.send();

function getFilms() {
  let films = JSON.parse(this.response).results;
  console.log(films);
  let filmListElement = document.getElementById('filmList')
  for (let i = 0; i < films.length; i++) {
    let film = document.createElement('li')
    film.className = 'film';
    filmListElement.appendChild(film);
    // let filmList = document.getElementsByClassName('film');

    let filmElement = document.createElement('h2');
    filmElement.className = 'filmTitle';
    filmElement.innerHTML = films[i].title;
    film.appendChild(filmElement);
    // let titleList = document.getElementsByClassName('filmTitle');

    let planetsHeaderElement = document.createElement('h3');
    planetsHeaderElement.innerHTML = 'Planets';
    film.appendChild(planetsHeaderElement);

    let filmPlanetsElem = document.createElement('ul');
    filmPlanetsElem.className = 'filmPlanets';
    film.appendChild(filmPlanetsElem);
    // let filmPlanetsList = document.getElementsByClassName('filmPlanets');

    for (let j = 0; j < films[i].planets.length; j++) {
      let planetElement = document.createElement('li');
      planetElement.className = 'planet';
      filmPlanetsElem.appendChild(planetElement);

      let planetNameElement = document.createElement('h4');
      planetElement.appendChild(planetNameElement);
      planetNameElement.className = 'planetName';

      function getPlanets() {
        planetNameElement.innerHTML = JSON.parse(this.response).name;
      }

      let planet = new XMLHttpRequest();
      planet.addEventListener('load', getPlanets);
      planet.open("GET", films[i].planets[j]);
      planet.send();
    }
  }
}

let swList = new XMLHttpRequest();
swList.addEventListener('load', getFilms);
swList.open("GET", "https://swapi.co/api/films/");
swList.send();
console.log(swList);