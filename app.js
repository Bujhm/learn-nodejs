const { inc, dec, getCount} = require("./module");

inc();
inc();
inc();

console.log(`thecount is ${getCount()} \n`);

dec();

console.log(`thecount is ${getCount()}`);
