var button = document.querySelector(".start");
// console.log('start', start); //works//

var timer = document.getElementById("timer");
// console.log('timer'); //works//
// console.log('button'); //works//

var score = document.getElementById("score");
// console.log('score'); //works//

var timerCount;
var timer;
var score;

var secondsLeft = 60;
// console.log('secondsLeft'); //works//

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft + "seconds left";
    console.log('timerInterval', timerInterval);

    if (secondsLeft === 60) {
      clearInterval(timerInterval);
      sendMessage('Times Up');
    }

  }, 1000);
}

function sendMessage() {
  timer.textContent = " ";
  console.log('timer', timer)
}