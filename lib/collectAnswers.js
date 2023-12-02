const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
 * This function will collect answers to the questions
 */
module.exports = (questions, done) =>{
    const answers = [];
    const [firstQuestion] = questions;

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