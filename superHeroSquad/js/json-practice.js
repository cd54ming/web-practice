//tutorial from: https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Objects/JSON

var header = document.querySelector('header');
var section = document.querySelector('section');

//get JSON file
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
  console.log("superHeroes: ");
  console.log(superHeroes);
  console.log("superHeroes' Property Names: ");
  console.log(Object.getOwnPropertyNames(superHeroes));
}

function populateHeader(jsonObj) {
  var title = document.createElement('h1');
  // console.log(jsonObj);
  title.textContent = jsonObj['squadName'];
  header.appendChild(title);

  var subtitle = document.createElement('p');
  subtitle.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(subtitle);
}

function showHeroes(jsonObj) {
  var heros = jsonObj['members'];

  for(i = 0; i < heros.length; i++) {
    var heroArea = document.createElement('article');
    var heroName = document.createElement('h2');
    var heroAge = document.createElement('p');
    var heroSecretIdentity = document.createElement('p');
    var heroPowersPara = document.createElement('p');
    var heroPowersList = document.createElement('ul');

    heroName.textContent = heros[i]['name'];
    heroAge.textContent = 'Age: ' + heros[i]['age'];
    heroSecretIdentity.textContent = 'Secret identity: ' + heros[i]['secretIdentity'];
    heroPowersPara.textContent = 'Superpowers: ';

    var heroPowers = heros[i]['powers'];
    for(j = 0; j < heroPowers.length; j++) {
      var heroPower = document.createElement('li');
      heroPower.textContent = heroPowers[j];
      heroPowersList.appendChild(heroPower);
    }
    heroArea.appendChild(heroName);
    heroArea.appendChild(heroSecretIdentity);
    heroArea.appendChild(heroAge);
    heroArea.appendChild(heroPowersPara);
    heroArea.appendChild(heroPowersList);

    section.appendChild(heroArea);
  }

}


// console.log(superHeroes["members"][0]["powers"][1]);
