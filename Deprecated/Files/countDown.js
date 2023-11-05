 // Set the countdown date
 var countdownDate = new Date("June 11, 2023 00:00:00").getTime();

 // Update the countdown every second
 var countdownTimer = setInterval(function() {

   // Get the current date and time
   var now = new Date().getTime();

   // Calculate the time remaining
   var timeRemaining = countdownDate - now;

   // Calculate days, hours, minutes, and seconds
   var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
   var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

   // Display the countdown in the format 00:00:00:00
   var countdown = ("0" + days).slice(-2) + ":" + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
   document.getElementById("countdown").innerHTML = countdown;

   // Stop the countdown when it reaches 0
   if (timeRemaining < 0) {
     clearInterval(countdownTimer);
     document.getElementById("countdown").innerHTML = "Countdown complete!";
   }
 }, 1000);


