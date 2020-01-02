/*Json file */
const requestURL = 'temples.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const templeClosures = jsonObject['templeClosures'];
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement('section');
      let templeClosures = document.createElement('p');

      h2.textContent = temples[i].name;
      address.textContent = "Address:" + ' ' + temples[i].address;
      telephone.textContent = "Telephone:" + ' ' + temples[i].telephone;
      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname) + ' ' + prophets[i].order;

      card.appendChild(h2);
      card.appendChild(image);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      document.querySelector('div.cards').appendChild(card);


    }