let timeLeftEl = document.getElementById("time-left");
let startGameEl = document.getElementById("start-game");

let quizQuestions = [
    {
        question: "Question 1. Who is the author for the book series Harry Potter?",
        options: ['E.L. James', 'J.K. Rowling', 'Maya Banks', 'James Patterson'],
        answer: "author = ['E.L. James']"  
    },
    {
        question: "Question 2. Who is Tom Riddle?",
        options: ["Voldemort", "Albus Dumboldore", "Professor Quill", "Severus Snape"],
        answer: "Voldemort" 
    },
    {
        question: "Which of the following that was not a Horcrux?",
        options: ["Diary", "Basilisk", "Stone", "Ring"],
        answer: "Stone"
    },
    {
        question: "Who is the half blood prince?",
        options: ["Harry Potter", "Severus Snape", "Voldemort", "Draco Malfoy"],
        answer: "Severus Snape"
    },
     {
        question: "Who disarmed the Elder Wand from Dumbledore?",
        options: ["Harry Potter", "Voldemort", "Lucius Malfoy", "Draco Malfoy"],
        answer: "Draco Malfoy"
     }
];

let score = 0;
let currentQuestion = -1;
let timeLeft = "";

let startGame = function() {
    score = 75;
    timeLeftEl.innerHTML = score;

    timeLeft = setInterval(function() {
    score--;
    timeLeftEl.innerHTML = score;

    if (score <= 0) {
        clearInterval(timeLeft);
        endGame();
    }
  }, 1000);

  nextQuestion();
};


let nextQuestion = function() {
    currentQuestion++;

    if (currentQuestion > quizQuestions.length - 1) {
        endGame();
        return;
    }

    let content = "<h3>" + quizQuestions[currentQuestion].question + "</h3>";

    for (let i = 0; i < quizQuestions[currentQuestion].options.length; i++) {
        let buttonContent = "<button style='display:block; margin:5px;' onclick=\"[Answer]\">[Options]</button>";
        let quizAnswer = quizQuestions[currentQuestion].answer;
        let quizOptions = quizQuestions[currentQuestion].options[i];
        buttonContent = buttonContent.replace("[Options]", quizQuestions[currentQuestion].options[i]);

        if (quizOptions === quizAnswer) {
            buttonContent = buttonContent.replace("[Answer]", "correctAnswer()");
        } else {
            buttonContent = buttonContent.replace("[Answer]", "incorrectAnswer()");
        }
        content += buttonContent;
    }
    startGameEl.innerHTML = content;
};
let correctAnswer = function() {
    alert("Your Answer is Correct.");
    nextQuestion();
};

