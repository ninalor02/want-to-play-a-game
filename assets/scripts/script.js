/* VAR BODY - DOCUMENT BODY */
var timerElement = document.querySelector(".time");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
// console.log('timer1'); //working// 


var correctAnswer = "";
var score;
var timer;
var timerCount;

var correctAnswer = [];
// console.log('testing words1'); //working// 

var words = ["J.K. Rowling","Voldemort", "Stone", "Severus Snape", "Happy Potter", "E.L. James", "Maya Banks", "James Patterson", "Dumboldore", "Hagrid", "Diary", "Basilisk", "Ring", "Draco Malfoy", "Ronald Weasley"];

// console.log('timer2'); //working// 

 var secondsLeft = 60;
// console.log('testing2'); //working// 

 function init() {
  getTimer();
}
// console.log('false'); //working// 











/*

 function setTime() {

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "running out of time";
    
    console.log('timerInterval'); /* this is NOT working in console.log*/ 
/*
    if(secondsLeft > 1) {

      timerEl.textContent = secondsLeft + 'seconds remaining';
      secondsLeft--;
    } else if (secondsLeft === 1) {
      timeEl.textContent + 'seconds remaining';
      secondsLeft--;
    } else {
      timeEl.textContent = '';

      clearInterval(timerInterval);

      sendMessage('out of time');
      console.log('out of time'); /* this is NOT working in console.log 
    }

  }, 1000);
}   

*/