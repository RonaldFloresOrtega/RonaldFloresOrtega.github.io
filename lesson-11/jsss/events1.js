const apisURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(apisURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    

    for (let i=0; i < towns.length; i++ ) {
        let nameTown = towns[i].name;
        if (nameTown =="Soda Springs")
        {  
       //con   let citySection = document.createElement('section');
      let card = document.createElement('section');

      
      let notices = document.createElement('p');
      notices.textContent = towns[i].events[0];   
      card.appendChild(notices);

      let notices1 = document.createElement('p');
      notices1.textContent = towns[i].events[1];   
      card.appendChild(notices1);

      let notices2 = document.createElement('p');
      notices2.textContent = towns[i].events[2];   
      card.appendChild(notices2);
     
      
      document.querySelector('div.advice').appendChild(card);
    }
    }
  });
