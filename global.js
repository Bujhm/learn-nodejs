// to run this script use: node global
const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);
const timerFinished = () => {
    clearInterval(interval);
    console.log("done");
}

setTimeout(timerFinished, waitTime);

const waitInterwal = 500;
let currentTime = 0;
const incTime = () => {
    currentTime += waitInterwal;
    console.log(`waiting ${currentTime / 1000} seconds`);
};

const interval = setInterval(incTime, waitInterwal);