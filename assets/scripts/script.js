/* VAR BODY - DOCUMENT BODY */
var timerElement = document.querySelector(".time");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
console.log('timer1'); /* this is working in console.log*/ 


var correctAnswer = "";
var isWin = false;
var timer;
var timerCount;

var correctAnswer = [];
console.log('testing words1'); /* this is working in console.log*/ 

var words = ["J.K. Rowling","Voldemort", "Stone", "Severus Snape", "Happy Potter", "E.L. James", "Maya Banks", "James Patterson", "Dumboldore", "Hagrid", "Diary", "Basilisk", "Ring", "Draco Malfoy", "Ronald Weasley"];

 console.log('timer2'); /* this is working in console.log*/ 

 var secondsLeft = 60;
 console.log('testing2'); /* this is working in console.log*/ 

 function init() {
  getTimer();
}
console.log('false'); /* this is working in console.log*/ 


function startGame() {
  isWin = false;
  console.log(); /* this is NOT working in console.log*/ 
  timerCount = 60;
  console.log('data'); /* this is NOT working in console.log*/ 

  startButton.disabled = true;
  renderWords()
  startTimer()
  console.log('data'); /* this is NOT working in console.log*/ 
}

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();

        console.log('tesing3');  /* this is NOT working in console.log*/ 
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);

  console.log('tesing4'); /* this is NOT working in console.log*/ 
}











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