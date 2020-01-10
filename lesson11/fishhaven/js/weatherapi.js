const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83287&units=imperial&APPID=5830ac76297bacea53c628cfe39eeeea';
const forecastApiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=5830ac76297bacea53c628cfe39eeeea';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('currently').textContent=jsObject.weather[0].main;
    document.getElementById('high').textContent=jsObject.main.temp_max;
    document.getElementById('low').textContent=jsObject.main.temp_min;
    document.getElementById('humidity').textContent=jsObject.main.humidity;
    document.getElementById('speed').textContent=jsObject.wind.speed;


    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array

    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  windChill();

  });

  fetch(forecastApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];

    let x = 0; 
    for(x=0;x<jsObject.list.length;x++){
      let d = new Date(jsObject.list[x].dt_txt);
      if(d.getHours()==18){
        break;
      }
    }

    let d = new Date(jsObject.list[x].dt_txt);
    document.getElementById('day1temp').textContent= days[d.getDay()] +" "+ jsObject.list[x].main.temp;
    document.getElementById('day1').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[x].weather[0].icon + '.png');
    document.getElementById('day1').setAttribute('alt', jsObject.list[x].weather[0].description);

    x = x +8;
    d = new Date(jsObject.list[x].dt_txt);
    document.getElementById('day2temp').textContent= days[d.getDay()] +" "+ jsObject.list[x].main.temp;
    document.getElementById('day2').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[x].weather[0].icon + '.png');
    document.getElementById('day2').setAttribute('alt', jsObject.list[x].weather[0].description);

    x = x +8;
    d = new Date(jsObject.list[x].dt_txt);
    document.getElementById('day3temp').textContent= days[d.getDay()] +" "+ jsObject.list[x].main.temp;
    document.getElementById('day3').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[x].weather[0].icon + '.png');
    document.getElementById('day3').setAttribute('alt', jsObject.list[x].weather[0].description);

    x = x +8;
    d = new Date(jsObject.list[x].dt_txt);
    document.getElementById('day4temp').textContent= days[d.getDay()] +" "+ jsObject.list[x].main.temp;
    document.getElementById('day4').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[x].weather[0].icon + '.png');
    document.getElementById('day4').setAttribute('alt', jsObject.list[x].weather[0].description);

    x = x +8;
    d = new Date(jsObject.list[x].dt_txt);
    document.getElementById('day5temp').textContent= days[d.getDay()] +" "+ jsObject.list[x].main.temp;
    document.getElementById('day5').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[x].weather[0].icon + '.png');
    document.getElementById('day5').setAttribute('alt', jsObject.list[x].weather[0].description);


  });