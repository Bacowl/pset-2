const readlineSync = require("readline-sync");

const Width = readlineSync.question("\nWidth: ");
const Length = readlineSync.question("Length: ");
const Conv = 645.16;
let Area = Width*Length*Conv;
let Deci = Intl.NumberFormat('en', { style: 'decimal', maximumFractionDigits:2, minimumFractionDigits:2 }).format(Area);
console.log("\nA(n) " + Width + "-by-" + Length + "-inch sheet of paper has an area of "+Deci+" square millimeter(s).")
