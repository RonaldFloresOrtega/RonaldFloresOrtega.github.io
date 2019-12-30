/* Date Stamp*/
function timeStamp(){
  var timeStamp = Math.floor(Date.now() / 1000);
  var d = new Date();
  }
  timeStamp();
  
  /* Banner Announcement*/
  function banner(){
    var d = new Date();
    var today = d.getDay();
    console.log(today);
  if (today == 5)
      document.getElementById("announcement").removeAttribute("class","banner");
  }
  banner();
  
  
  /* Responsive Menu*/
  function toggleMenu(){
    document.getElementById("navigation").classList.toggle("hide");
  }
  