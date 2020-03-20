//ADD the key and change units to imperial
const requestURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=fb589240ce3f3e1712da9b7878c9228b";

//Go fetch it and then wait for a response.
fetch(requestURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;
    document.getElementById('currently').innerHTML=weatherInfo.weather[0].main;
    document.getElementById('humidity').innerHTML=weatherInfo.main.humidity;

    

 }); //end of "then" fat arrow function



