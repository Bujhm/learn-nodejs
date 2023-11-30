const path = require('path');

let hello = "Hello World from Node.js"
let justnode = hello.slice(17);
console.log(__dirname);
console.log(__filename);
console.log(`The file name is ${path.basename(__filename)}`);


/**  runing mode with arguments  
 * node global.js --user Eve --greeting "Hello"   
*/

function grab(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting, user);

// using process.stdout , to run this script use  node global
process.stdout.write("Hello World \n \n");

const questions = [
    "What is your name?",
    "Ehat is your favorite color?",
    "What is your favorite food?",
    "What is your favorite movie?"
];

const answers = [];

function ask(i) {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

// here we are using process.stdin to get the data from the user using event "on"
process.stdin.on("data", (data) => {
    process.stdout.write(data.toString().trim() + "\n");
})

ask(answers.length);