const fs = require("fs");

// this is non blocking variant of fs.readdirSync
fs.readdir("./", function (err, files) {
    if (err) {
        throw err;
    }

    console.log(files);
});

console.log("reading files ...");