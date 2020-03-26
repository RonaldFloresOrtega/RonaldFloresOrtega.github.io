const d = new Date();

const todayDayNumber = d.getDay();

//  let forecastDayNumber = todayDayNumber;  
//  console.log(forecastDayNumber);

//no en video,   console.log(todayDayNumber); 

const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

//console.log(weekday[3]); si esta

const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=fb589240ce3f3e1712da9b7878c9228b&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);

     //Once console.log(weatherInfo.city.name);   si esta video
    
    

    let mylist = weatherInfo.list;

                let forecastDayNumber = todayDayNumber;

                for (i=0;i<mylist.length;i++) {    //bien

                    let time = mylist[i].dt_txt;    //var time

                    if (time.includes('18:00:00')) {    //bien
                                    //console.log("Found an entry with 18:00:00 in the time. It was report"+i+"from the mylist of 40");

                                    forecastDayNumber +=1;  //bien
                                    if(forecastDayNumber === 7){forecastDayNumber = 0;}  //bien
                                    //console.log("Forecast Day Number " + forecastDayNumber+"which is"+weekday[forecastDayNumber]);

                                    let theDayName = document.createElement("h2");   //bien
                                    theDayName.textContent = weekday[forecastDayNumber];  //bien
                                    // console.log(">"+weekday[forecastDayNumber]);  //bien

                                    let theTemp = document.createElement("p");   //bien
                                    theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0"+"F";   //bien

                                    //console.log("TEMPERATURE>"+weatherInfo.list[i].main.temp);

                                    let iconcode = weatherInfo.list[i].weather[0].icon;  //bien
                                    let iconPath = "http://openweathermap.org/img/w/" + iconcode + ".png";   //bien
                                    let theIcon = document.createElement("img"); //bien 
                                    theIcon.src=iconPath; //bien
                                    theIcon.alt="Weather Icon" + ' ' + iconcode;

                                    let theDay = document.createElement("div");  //bien
                                    theDay.appendChild(theDayName);   //bien
                                    theDay.appendChild(theTemp);   //bien
                                    theDay.appendChild(theIcon);   //bien

    document.getElementById('weatherforecast').appendChild(theDay);  //bien

  }//end if

}//end for



 }); //end of "then" fat arrow function



