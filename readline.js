const readline = require("readline");
const { resourceLimits } = require("worker_threads");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name?",
    "Ehat is your favorite color?",
    "What is your favorite food?",
    "What is your favorite movie?"
];

/*
 * This function will collect answers to the questions
 */
function collectAnswers(questions, done) {
    const answers = [];

    /*
    * This function will be called when a question is answered it uses the _recursion_ to ask the next question
    */
    const questionAnswered = (answer) => {
        answers.push(answer.trim());
        if (answers.length < questions.length) {
            rl.question(
                questions[answers.length],
                questionAnswered
            );
        } else {
            return done(answers);
        }
    }
    rl.question(questions[0], questionAnswered);
}

collectAnswers(questions, (answers) => {
    console.log("Thank you for your answers");
    console.log(answers);
    process.exit();
});

