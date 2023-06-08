var mainContainer = document.querySelector('#main-content');
var i = 0;
var time = 60;
var score = 0;
var score = scoreIdCounter = 0;
var highscore = [];
var timer = setInterval(countdown, 1000);

var questions = [
// question 1
  {
  question: "Who is the author for the book series Harry Potter?",
  options: [
    "a. E.L. James",
    "b. J.K. Rowling",
    "c. Maya Banks",
    "d. James Patterson",
    console.log('testing', b. J.K. Rowling)
  ],
  answer: "b. J.K. Rowling",
},

// question 2
{
  question: "Who is Tom Riddle",
  options: [
    "a. Voldemort",
    "b. Dumboldore",
    "c. Hagrid",
    "d. Severus Snape",
    console.log('testing2',a. Voldemort )
  ],
  answer: "a. Voldemort",
},

// question 3
{
  question: "Which of the following that was not a Horcrux?",
  options: [
    "a. Diary",
    "b. Basilisk",
    "c. Stone",
    "d. Ring",
    console.log('testing3', stone)
  ],
  answer: "c. Stone",
},

// question 4
{
  question: "Who is the half blood prince?",
  options: [
    "a. Happy Potter",
    "b. Severus Snape",
    "c. Draco Malfoy",
    "d. Albus Dumboldore",
    console.log('Severus Snape',Severus)
  ],
  answer: "b. Severus Snape",
},

// question 5 //
{
  question: "What was the name of Harry Potter's owl?",
  options: [
    "a. Ronald",
    "b. Dobby",
    "c. Draco",
    "d. Hedwig",
    console.log('testing3', Hedwig)
  ],
  answer: "d. Hedwig",
},
];

// create a starting page //

var createLandingPage = function() {
  time = 75;
  i = 0;
}