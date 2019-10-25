const readlineSync = require("readline-sync");

const Width = readlineSync.question("\nWidth: ");
const Length = readlineSync.question("Length: ");
const conv = 645.16;
let Area = Width*Length*conv;
let Deci = Math.round(100*Area)/(100)
let Final = Deci.toLocaleString("en");

console.log("\nA(n) " + Width + "-by-" + Length + "-inch sheet of paper has an area of " + (Final) + " square millimeter(s)")
