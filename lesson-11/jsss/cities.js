const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i=0; i < towns.length; i++ ) {
        let nameTown = towns[i].name;
        if (nameTown == "Fish Haven" || nameTown == "Preston" || nameTown =="Soda Springs")
        {  
          let citySection = document.createElement('section');
      let card = document.createElement('div');

      let h2 = document.createElement('h2');
      h2.textContent = towns[i].name;   
      card.appendChild(h2);

      let h3 = document.createElement('h3');
      h3.textContent = towns[i].motto;   
      card.appendChild(h3);

      let bdate = document.createElement('p');
      bdate.textContent = 'Year Founded: ' + towns[i].yearFounded;
      card.appendChild(bdate);

      let birthp = document.createElement('p');
      birthp.textContent = 'Current Population: '+ towns[i].currentPopulation;
      card.appendChild(birthp);

      let rainfall = document.createElement('p');
      rainfall.textContent = 'Annual Rainfall: '+ towns[i].averageRainfall;
      card.appendChild(rainfall);

      citySection.appendChild(card)

      let image = document.createElement('img');
      image.setAttribute('src', './images/' + towns[i].photo);
      image.setAttribute('alt', towns[i].name + ' ' + towns[i].yearFounded + ' - ' + towns[i].currentPopulation);
      citySection.appendChild(image);
      
      document.querySelector('div.cards').appendChild(citySection);
    }
    }
  });
