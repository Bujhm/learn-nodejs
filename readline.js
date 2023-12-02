const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What is your name?",
    "Ehat is your favorite color?",
    "What is your favorite food?",
    "What is your favorite movie?"
];

collectAnswers(questions, (answers) => {
    console.log("Thank you for your answers");
    console.log(answers);
    process.exit();
});