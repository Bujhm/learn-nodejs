const fs = require("fs");
const directoryName = "your-files-here";

if (fs.existsSync(directoryName)) {
    console.log("Directory already exists");
} else {
    fs.mkdir(directoryName, function (err) {
        if (err) {
            console.log(`Error creating directory: ${err}`);
        } else {
            console.log("Directory created successfully!");
        }
    });
}

