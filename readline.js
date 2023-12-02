const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What is your name?",
    "What is your favorite color?",
    "What is your favorite food?",
    "What is your favorite movie?"
];

const answerEvents = collectAnswers(questions, (answers) => {
    console.log("Thank you for your answers");
    console.log(answers);
    process.exit();
});

answerEvents.on("answer", (answer) => console.log(`you answered: ${answer}`));