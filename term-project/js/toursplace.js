const requestURL = "https://ronaldfloresortega.github.io/lesson-12/json/places.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const tours = jsonObject['tours'];
    for (let i=0; i < tours.length; i++ ) {
        let nameTown = tours[i].name;
          
      let citySection = document.createElement('section');
      let card = document.createElement('div');

      let h2 = document.createElement('h2');
      h2.textContent = tours[i].name;   
      card.appendChild(h2);

      let bdate = document.createElement('p');
      bdate.textContent = 'Visitors Last Year: ' + tours[i].numberVisitors;
      card.appendChild(bdate);

      let birthp = document.createElement('p');
      birthp.textContent = 'Description: '+ tours[i].description;
      card.appendChild(birthp);

      citySection.appendChild(card)

      let imagen = document.createElement('img');
      imagen.setAttribute('src', './images/' + tours[i].image);
      imagen.setAttribute('alt', tours[i].name + ' ' + tours[i].numberVisitors);
      citySection.appendChild(imagen);
      
      document.querySelector('div.features').appendChild(citySection);
    
    }
  });