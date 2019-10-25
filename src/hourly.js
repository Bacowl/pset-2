const readlineSync = require("readline-sync");

const WAGE = readlineSync.question("\nHourly wage: ");
const MON = readlineSync.question("\nMonday: ");
const TUES = readlineSync.question("Tuesday: ");
const WED = readlineSync.question("Wednesday: ");
const THURS = readlineSync.question("Thursday: ");
const FRI = readlineSync.question("Friday: ");
const SAT = readlineSync.question("Saturday: ");
const SUN = readlineSync.question("Sunday: ");

let MONWAGE = (MON*WAGE);
let TUESWAGE = (TUES*WAGE);
let WEDWAGE = (WED*WAGE);
let THURSWAGE = (THURS*WAGE);
let FRIWAGE = (FRI*WAGE);
let SATWAGE = (SAT*WAGE);
let SUNWAGE = (SUN*WAGE);

let MONEY = (MONWAGE + TUESWAGE + WEDWAGE + THURSWAGE + FRIWAGE + SATWAGE + SUNWAGE)
let ROUND = Math.round(MONEY*100)/100
let COMMA = ROUND.toLocaleString("en", {style: "currency", currency: "USD"})
console.log("\nYou'll make "+COMMA+" this week.")
