const tempNumber = parseFloat(document.getElementById("high").textContent);
        //console.log(tempNumber);

        const speedNumber = parseFloat(document.getElementById("windspeed").textContent);
        //console.log(speedNumber);

        let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber,0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber,0.16));
        //console.log(windchill);
        windchill = Math.round(windchill);
        //console.log(windchill);

        if (tempNumber<=50 && speedNumber >3){
            document.getElementById("wchill").textContent = "Wind Chill: "+windchill+"\xB0F";
    }

        else {
            document.getElementById("wchill").textContent = "Wind Chill: No Today";
    }