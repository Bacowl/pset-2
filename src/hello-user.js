const readlineSync = require("readline-sync");

const name = readlineSync.question("\nWhat is your name?\n");
console.log("\nHello," + name + "!");
