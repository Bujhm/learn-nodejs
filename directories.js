const fs = require("fs");

//maybe its a glich but if you try to rename upper level folder you will get an error (possibly node version or flag)
fs.renameSync("./assets/logs2", "./assets/logs");

console.log("logs folder moved");

// is this dunction doesnt worl for you, try to update node to the latest version using --> nvm install node
// this will work if directory you trying to delete dosn't have files inside
fs.rmdir("./assets", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("./assets folder deleted");
    }
});

fs.readdirSync("./assets").forEach((file) => {
    fs.unlinkSync(`./assets/${file}`);
});

/* or moving
fs.readdirSync("./assets").forEach((file) => {
    fs.renameSync(`./assets/inc/${file}`, `./assets/inc2/${file}`);
});

console.log("files removed");
fs.rmdirSync("./accounts")
console.log("folder removed");
*/