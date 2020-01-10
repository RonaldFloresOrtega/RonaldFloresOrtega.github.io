
/* Date Stamp*/
function timeStamp(){
    var timeStamp = Math.floor(Date.now() / 1000);
    var d = new Date();
    }
    timeStamp();
    
    
    /* Responsive Menu*/
    function toggleMenu(){
      document.getElementById("navigation").classList.toggle("hide");
    }
    
    
    /* check in date*/
    function inDate(checkIn) {
      document.getElementById("reservationIn").innerHTML = checkIn;
    }
    
    
    /* check out date*/
    function outDate(checkOut) {
      document.getElementById("reservationOut").innerHTML = checkOut;
    }
    