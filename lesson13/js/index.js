const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];
    console.log(towns);
    console.log(towns[0]);
    console.log(towns[0].name);

    for (let i = 0; i < towns.length; i++) {
      if ( towns[i].name=="Fish Haven" || towns[i].name=="Preston" || towns[i].name=="Soda Springs"){
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let photo = document.createElement('img');
        let motto = document.createElement('p');
        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');
        
        let events = document.createElement('div');

        name.textContent = towns[i].name;
        motto.textContent = "Town Motto: " + towns[i].motto;
        yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
        currentPopulation.textContent = "Current Population: " + towns[i].currentPopulation;
        averageRainfall.textContent = "Average Rainfall: " + towns[i].averageRainfall;
        for (let j=0; j < towns[i].events.length; j++){
          let event = document.createElement('p');
          event.textContent=towns[i].events[j];
          events.appendChild(event);
        }

        photo.setAttribute('src', "images/" + towns[i].photo);
        photo.setAttribute('alt', towns[i].name);

        card.appendChild(name);
        card.appendChild(photo);
        card.appendChild(motto);
        card.appendChild(yearFounded);
        card.appendChild(currentPopulation);
        card.appendChild(averageRainfall);
        card.appendChild(events);

        document.querySelector('div.towns').appendChild(card);
      }
    }

  });
