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

let incorrectAnswer = function() {
    alert("Your Answer is Incorrect. It will subtract 10 points from your Score");
    score -= 10;
    nextQuestion();
};

let endGame = function() {
    clearInterval(timeLeft);
    let inputText = `<input type="text" id="name" placeholder="Enter Initials (2 to 5 characters)" minlength="2" maxlength="5" size="50" style="display:block; font-size:25px; padding:20px; text-align: center" required><br /><br />`
    let quizContent = `<h3 style="padding: 20px;">Your Score is ` + score + `</h3>` + inputText + `<button onclick="setHighScore()">Submit</button>`;
    if (score <= 20) {
        quizContent =`<h2>Game Over! </h2>` + quizContent; 
    } else if (score > 20 && score <= 50) {
        quizContent = `<h2>Good job, try again!</h2>` + quizContent;
    } else {
        quizContent = `<h2>Congratulations!</h2>` + quizContent;
    }

    startGameEl.innerHTML = quizContent;
};

let resetGame = function() {
    clearInterval(timeLeft);
    score = 0;
    currentQuestion = -1;

    let quizContent = `<h1>Code Quiz!</h1>
<h3>Answer all the questions before the timer runs out! <br> May the odds be in your favor!</h3>
<button onclick="startGame()">Start Quiz</button>`;

startGameEl.innerHTML = quizContent;
};

let setHighScore = function() {
    localStorage.setItem("highScore", score);
    localStorage.setItem("highScoreName", document.getElementById('name').value);
    getHighScore();

};

let getHighScore = function() {
    let quizContent = 
    `<h3>` + localStorage.getItem("highScoreName") + ` your Score is:</h3>
    <h2>` + localStorage.getItem("highScore") + `</h2>
    <br /> <br />
    <button style="display: block" onclick="clearHighScore()">Clear High Score!</button><button onclick="resetGame()">Go Back!</button>`

    startGameEl.innerHTML = quizContent;
};

function clearHighScore() {
    localStorage.setItem("highScore", "");
    localStorage.setItem("highScoreName",  "");
}