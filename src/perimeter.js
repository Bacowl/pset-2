const readlineSync = require("readline-sync");

const Width = Number(readlineSync.question("\nWidth: "));
const Length = Number(readlineSync.question("Length: "));
const Conv = 2.54;
let Peri= (2*Width+2*Length)*Conv;
let Deci = Intl.NumberFormat("en", { style: 'decimal', maximumFractionDigits:2, minimumFractionDigits:2 }).format(Peri);


console.log("\nA(n) " + Width + "-by-" + Length + "-inch sheet of paper has a perimeter of " + Deci + " centimeter(s).")
