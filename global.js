const path = require('path');

let hello = "Hello World from Node.js"
let justnode = hello.slice(17);
console.log(__dirname);
console.log(__filename);
console.log(`The file name is ${path.basename(__filename)}`);

for (let key in global) {
    console.log(key);
}