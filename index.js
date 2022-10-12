var readlineSync = require("readline-sync");

// initialising score to 0
var score = 0;

// highScores database
var highScores = [
  {
    name: "Bunty",
    score: 1,
  },

  {
    name: "Monty",
    score: 2,
  },
  {
    name: "Shonty",
    score: 4,
  },
  {
    name: "Tonty",
    score: 5,
  }
]

// array of objects containing questions and answers
var questions = [{
  question: "Where do I live?  a. Kolkata  b. Mumbai  c. Durgapur ",
  answer: "c"
}, {
  question: "My favorite number is? a. 6  b. 10  c. 7 ",
  answer: "a"
},
{
  question: "What is my favourite food? a. Maggi  b. Momo  c. Noodles ",
  answer: "b"
},
{
  question: "What is my favourite book? a. Kite Runner  b. Atomic Habits  c. Sapiens ",
  answer: "a"
},
{
  question: "What is my favourite colour? a. Black  b. White  c. Pink ",
  answer: "b"
}];


// taking input then displaying it
function greetings() {
  var playerName = readlineSync.question("Hello. May I know your name? ");

  console.log("Welcome " + playerName + "! Let's play this fun game to see if you know me.");
}

function play(question, answer) {
  // question is displayed to the user and demands an input
  var userAnswer = readlineSync.question(question);

  // if answers match : increment score
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(" Correct ");
    score = score + 1;
    
  // else : decrement score
  } else {
    console.log(" Wrong ");

  }

  console.log("current score: ", score);
  console.log("- - - - - - - - ")
}

// playing the quiz
function game() {
  // traversing over the questions database : it is an array of objects
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    // passing the current question and answer to another function
    play(currentQuestion.question, currentQuestion.answer)
  }
}

// for displaying the final scores
function displayScores() {
  console.log("You SCORED: ", score);
  console.log("The maximum possible score was 5");

  
  console.log("Score History : ");

  // traversing over highScores database and displaying them all
  highScores.map(score => console.log(score.name, " --> ", score.score))
}


greetings(); // calling the function to display welcome message
game(); // calling the function to start the game 
displayScores(); // calling the function to display final scores