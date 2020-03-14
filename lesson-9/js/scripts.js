const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i=0; i < towns.length; i++ ) {
          
      let card = document.createElement('section');

      let h2 = document.createElement('h2');
      h2.textContent = towns[i].name;   
      card.appendChild(h2);

      let h3 = document.createElement('h3');
      h3.textContent = towns[i].motto;
      card.appendChild(h3);

      let birthp = document.createElement('p');
      birthp.textContent = 'Year Founded: '+ towns[i].yearFounded;
      card.appendChild(birthp);

      let populatiom = document.createElement('p');
      population.textContent = 'Population: '+ towns[i].currentPopulation;
      card.appendChild(population);

      let rainfall = document.createElement('p');
      rainfall.textContent = 'Annual Rainfall: '+ towns[i].averageRainfall;
      card.appendChild(rainfall);

      let image = document.createElement('img');
      image.setAttribute('src', towns[i].photo);
      image.setAttribute('alt', towns[i].name + ' ' + towns[i].motto + ' - ' + towns[i].yearFounded);
      card.appendChild(image);
      
      document.querySelector('div.cards').appendChild(card);
     
    }
  });
