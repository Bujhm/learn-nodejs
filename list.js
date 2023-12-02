const fs = require("fs");

let files = fs.readdirSync("./"); //it blocks execution until it gets the result

console.log(files);