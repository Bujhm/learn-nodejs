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
