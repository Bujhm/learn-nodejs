const fs = require("fs");

fs.readFile("./README.md", "utf8", (err, ipsum) => {
    console.log(ipsum);
});

console.log("reading the file ...");