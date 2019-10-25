const readlineSync = require("readline-sync");

const SALARY = readlineSync.question("\nAnnual salary: ");
const CONTRIBUTION = 0.07;
const FEDERAL = 0.157;
const STATE = 0.0447;
const SOCIAL = 0.062;
const MED = 0.0145;

let WEEKbeforetax = SALARY/24
let WEEKpretax = WEEKbeforetax-(WEEKbeforetax*CONTRIBUTION)
let WEEKaftertax = WEEKpretax-(WEEKpretax*FEDERAL)-(WEEKpretax*STATE)-(WEEKpretax*SOCIAL)-(WEEKpretax*MED)
let FINAL = WEEKaftertax.toLocaleString("en", {style: "currency", currency: "USD"})
console.log("\nYour take-home pay each check will be "+FINAL+".")
