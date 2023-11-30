// to run this script use: node global
const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);
const timerFinished = () => {
    clearInterval(interval);
    console.log("\ndone");
}

setTimeout(timerFinished, waitTime);

const waitInterwal = 500;
let currentTime = 0;
const incTime = () => {
    currentTime += waitInterwal;
    const p = Math.floor((currentTime / waitTime) * 100);
    // console.log(`waiting ${currentTime / 1000} seconds`);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
};

const interval = setInterval(incTime, waitInterwal);