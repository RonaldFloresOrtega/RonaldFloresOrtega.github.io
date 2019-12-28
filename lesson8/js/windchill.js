function windChill(){
  var temp = parseFloat(document.getElementById("low").textContent);
  var speed = parseFloat(document.getElementById("speed").textContent);
  var calculations;
console.log(temp, speed);

  if (temp >= 50 || speed >=3) {
  calculations = 35.74 + (0.6215*temp) - 35.75*(Math.pow(speed, 0.16)) + 0.4275*temp + (Math.pow(speed,0.16));
  }

  else{
  calculations = temp;
  }

  document.getElementById("chillcalc").innerHTML = calculations.toFixed(1);
}

windChill();