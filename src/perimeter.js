const readlineSync = require("readline-sync");

const Width = readlineSync.question("\nWidth: ");
const Length = readlineSync.question("Length: ");
const conv = 2.54;
let Peri= 2* Width+2*Length*conv;
let Deci = Math.round(100*Peri)/(100)
let Final = Deci.toLocaleString();

console.log("\nA(n) " + Width + "-by-" + Length + "-inch sheet of paper has a perimeter of " + (Final) + " centimeter(s)")
