//ADD the key and change units to imperial
const requestURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=fb589240ce3f3e1712da9b7878c9228b";

//Go fetch it and then wait for a response.
fetch(requestURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;
    document.getElementById('currently').innerHTML=weatherInfo.weather[0].main;
    document.getElementById('humidity').innerHTML=weatherInfo.main.humidity;

    

    const tempNumber = parseFloat(document.getElementById("currentTemp").textContent);
        console.log(tempNumber);

        const speedNumber = parseFloat(document.getElementById("windSpeed").textContent);
        console.log(speedNumber);

        let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber,0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber,0.16));
        console.log(windchill);
        windchill = Math.round(windchill);
        console.log(windchill);

        if (tempNumber<=50 && speedNumber >3){
            document.getElementById("wchill").textContent = "Wind Chill: "+windchill+"\xB0F";
    }

        else {
            document.getElementById("wchill").textContent = "Wind Chill: No Today";
    }

    

 }); //end of "then" fat arrow function



