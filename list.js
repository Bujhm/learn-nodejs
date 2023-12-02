const fs = require("fs");

let ipsum = fs.readFileSync("./README.md", "utf8");

console.log(ipsum);