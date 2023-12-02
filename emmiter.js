const events = require("events");

let emmiter = new events.EventEmitter();

emmiter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

emmiter.emit("customEvent", "Hello World", "Bill");
emmiter.emit("customEvent", "Thats pretty cool", "Eve");

process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    if (input === "exit") {
        emmiter.emit("customEvent", "Goodbye", "process");
        process.exit();
    }
    emmiter.emit("customEvent", data.toString().trim(), "terminal");
});