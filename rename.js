const fs = require("fs");

fs.copyFileSync("README.md", "README2.md");
fs.copyFileSync("README.md", "README4.md");

fs.renameSync("README2.md", "README3.md");

fs.unlink("README4.md", function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("File deleted successfully!");
});

fs.unlinkSync("README3.md");
