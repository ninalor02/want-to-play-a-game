/* VAR BODY - DOCUMENT BODY */

var timerEl = document.getElementById("timer");
var mainEl = document.querySelector("main");
 console.log('timer');
 console.log('main');

 function setTime() {

var timeLeft = 60;
console.log('timeLeft');

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + "seconds left";
    console.log('timerInterval', timerInterval);

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage('Times Up');
    }

  }, 1000);
}