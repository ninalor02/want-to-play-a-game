/* VAR BODY - DOCUMENT BODY */
var timer = document.getElementById("timer");
var startButton = document.getElementById("start");
var submitButton = document.getElementById("final");
// console.log('timer1'); //working// 


var correctAnswer = "";
var score = 0;
var timer;
var timerCount;

var correctAnswer = [];
// console.log('testing words1'); //working// 

// console.log('timer2'); //working// 

 var secondsLeft = 60;
// console.log('testing2'); //working// 

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = ('secondsLeft' + secondsLeft);

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);

    }

  }, 1000);
}

setTime();
// console.log('hi', submitButton)


submitButton.addEventListener("click", function() {
  //this part down

  //QUIZ 1
var quizOneButton = document.querySelectorAll('input[type="radio"].hp');
for (let index = 0; index < quizOneButton.length; index++) {
  const element = quizOneButton[index];

  if(element.checked){
  //  console.log('el ', element.dataset.correct)
    if(element.dataset.correct){
    //  console.log('good')
      score++;
    }
    else {
      secondsLeft -= 10
    //  console.log('should minus from timer')
    }
  }


  //QUIZ 2
  var quiztwoButton = document.querySelectorAll('input[type="radio"].hp');
  for (let index = 0; index < quiztwoButton.length; index++) {
    const element = quiztwoButton[index];
  
  
    if(element.checked){
    //  console.log('el ', element.dataset.correct)
      if(element.dataset.correct){
      //  console.log('good')
        score++;
      }
      else {
        secondsLeft -= 10
      //  console.log('should minus from timer')
      }
    }
  }
//QUIZ 3 
var quizThreeButton = document.querySelectorAll('input[type="radio"].hp');
for (let index = 0; index < quizThreeButton.length; index++) {
  const element = quizThreeButton[index];


  if(element.checked){
  //  console.log('el ', element.dataset.correct)
    if(element.dataset.correct){
    //console.log('good')
      score++;
    }
    else {
      secondsLeft -= 10
    //  console.log('should minus from timer')
    }
  }
}
  
  //QUIZ 4
  var quizFourButton = document.querySelectorAll('input[type="radio"].hp');
  for (let index = 0; index < quizFourButton.length; index++) {
    const element = quizFourButton[index];
  
  
    if(element.checked){
    //  console.log('el ', element.dataset.correct)
      if(element.dataset.correct){
      //  console.log('good')
        score++;
      }
      else {
        secondsLeft -= 10
      //  console.log('should minus from timer')
      }
    }
  }
// this is the end for saving timer and the questions//
}
});

// saving into local storage //
var saveScore = document.querySelector('#score');

saveScore.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var user = {
    firstName: firstNameInput.value(),
  
  };
console.log('firstName', firstNameInput)
  // set new submission to local storage 
  localStorage.setItem("user", JSON.stringify(user));
  
});
