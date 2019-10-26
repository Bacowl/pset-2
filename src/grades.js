const readlineSync = require("readline-sync");

console.log("\nEnter three homework grades.")
const HW1 = readlineSync.question("");
const HW2 = readlineSync.question("");
const HW3 = readlineSync.question("");
console.log("\nEnter three quiz grades.")
const Q1 = readlineSync.question("");
const Q2 = readlineSync.question("");
const Q3 = readlineSync.question("");
console.log("\nEnter three test grades.")
const T1 = readlineSync.question("");
const T2 = readlineSync.question("");
const T3 = readlineSync.question("");

let HWW = 0.15;
let QW = 0.35;
let TW = 0.50;
let HWG = (HW1/3+HW2/3+HW3/3)
let TG = (T1/3+T2/3+T3/3)
let QG = (Q1/3+Q2/3+Q3/3)
let HWF = (HWG*HWW)
let TF = (TG*TW)
let QF = (QG*QW)
let GF = (TF+QF+HWF)
let GRADE = Intl.NumberFormat("en", { style: 'decimal', maximumFractionDigits:2, minimumFractionDigits:2 }).format(GF);
console.log("\nYour marking period grade is "+GRADE+"%.")
