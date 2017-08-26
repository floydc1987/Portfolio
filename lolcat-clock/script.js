
var noon = 12;
var evening = 17;
var messageText = "";
var partyTime = false;
var napTime = 14;
var lunchTime = 1;
var wakeUpTime = 6;

var updateClock = function() 
{
var time = new Date().getHours(); 
if (partyTime) {
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
  messageText = "PARTY TIME";
} else if (time == napTime) {
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
  messageText = "NAP TIME";
} else if (time == lunchTime) {
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
  messageText = "Lunch TIME!!!";
} else if (time == wakeUpTime) {
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
  messageText = "Wake Up!!!";
} else if (time < noon) {
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
  messageText = "Good Morning!";
} else if (time > evening) {
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
  messageText = "Good evening!";
} else {
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
  messageText = "Goodday!";  
} 
var clockJS = document.getElementById("timeEvent");
clockJS.innerText = messageText;
var lolcat = document.getElementById("lolcat");
lolcat.src = image;
 
showCurrentTime();
 
};


var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
  
    clock.innerText = clockTime;
};
 


updateClock(); 
var oneSecond = 500; 
setInterval( updateClock, oneSecond);


var partyTimeButton = document.getElementById("partyTimeButton");
var buttonClicked = function() {
  if (partyTime === true) {
    partyTime = false;
    partyTimeButton.innerHTML = "Party Time!";
    partyTimeButton.style.background = "rgb(34,34,34)";
  } else {
    partyTime = true;
    partyTimeButton.innerHTML = "Party over";
    partyTimeButton.style.background = "rgb(10,141,171)";
  }
};  
partyTimeButton.addEventListener("click", buttonClicked);

var wakeUpDropDown = document.getElementById("wakeUpTimeSelector");
var wakeUpChange = function() {
  wakeUpTime = wakeUpDropDown.value;
};
wakeUpDropDown.addEventListener("change", wakeUpChange);

var lunchTimeDropDown = document.getElementById("lunchTimeSelector");
var lunchChange = function() {
  lunchTime = lunchTimeDropDown.value;
};
lunchTimeDropDown.addEventListener("change", lunchChange);

var napTimeDropDown = document.getElementById("napTimeSelector");
var napChange = function() {
  napTime = napTimeDropDown.value;
};
napTimeDropDown.addEventListener("change", napChange);
