
// Set the date we are counting down to
var countDownDate = new Date("February 15, 2019 09:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function(){
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the countdown date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Print the result in an element with id="demo"

  event_days.innerHTML = days
  event_hours.innerHTML = hours 
  event_minutes.innerHTML = minutes 
  event_seconds.innerHTML = seconds          
  // If the count down is over, write some text
  if(distance < 0){
    clearInterval(x);
    document.getElementById('timer_count').hidden = "hidden";  
    document.getElementById('event_completed').hidden = "";    

  }else{
    document.getElementById("timer_count").hidden = "";
    document.getElementById('event_completed').hidden = "hidden";
  }
}, 1000);
