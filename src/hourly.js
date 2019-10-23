const readlineSync = require("readline-sync");

const WAGE = readlineSync.question("\nHourly wage: ");
const MON = readlineSync.question("\nMonday: ");
const TUES = readlineSync.question("Tuesday: ");
const WED = readlineSync.question("Wednesday: ");
const THURS = readlineSync.question("Thursday: ");
const FRI = readlineSync.question("Friday: ");
const SAT = readlineSync.question("Saturday: ");
const SUN = readlineSync.question("Sunday: ");
let HOURS = (MON+TUES+WED+THURS+FRI+SAT+SUN)
let MONEY = (WAGE*HOURS)
let FINAL = MONEY.toLocaleString()
console.log("You'll make $" + FINAL + " this week.")
