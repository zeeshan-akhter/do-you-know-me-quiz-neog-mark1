var readlineSync = require("readline-sync");

var chalk = require("chalk");

var score = 0;

var right = chalk.bold.green;

var wrong = chalk.bold.red;

var userName = readlineSync.question(chalk.bold.blue("Enter your name: "));

console.log(chalk.blue("Welcome " + chalk.red(userName) + " to DO-YOU-KNOW Zeeshan? "));

console.log(chalk.keyword('orange')("RULES: You will be awarded 5 points for each correct answer."));

console.log("<---------------------------->");

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(right("Right!"));
    score += 5;
    console.log(right("Current Score: ", score));
  } else {
    console.log(wrong("Wrong!"));
    console.log(wrong("Current Score: ", score));
  }


  console.log("<--------------------------------->");
}


var questions = [{
  question: "What is my full name? ",
  answer: "Zeeshan Akhter"
}, {
  question: "How old am I? ",
  answer: "18"
}, {
  question: "My birth date? ",
  answer: "28"
}, {
  question: "Where do I live? ",
  answer: "Gaya"
}, {
  question: "My favourite fruit? ",
  answer: "Mango"
}];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];

  quiz((chalk.black.bgRed(currentQuestion.question)), currentQuestion.answer);
}

console.log(chalk.yellow("YAY! You scored: ", score, "points"));