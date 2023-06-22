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