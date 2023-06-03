var btn = document.querySelector(".btn");

var timer = document.getElementById("timer");
 console.log('timer');
 console.log('.btn');


var secondsLeft = 60;
console.log('secondsLeft');

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + "seconds left";
    console.log('timerInterval', timerInterval);

    if(secondsLeft === 60) {
      clearInterval(timerInterval);
      sendMessage('Times Up');
    }

  }, 1000);
}

function sendMessage(){
    timer.textContent = " ";
    console.log('timer')
}