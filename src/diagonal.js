const readlineSync = require("readline-sync");

const Width = readlineSync.question("\nWidth: ");
const Length = readlineSync.question("Length: ");
let Diag = Math.hypot(Length, Width);
let Deci = Intl.NumberFormat("en", { style: 'decimal', maximumFractionDigits:2, minimumFractionDigits:2 }).format(Diag);

console.log("\nA(n) " + Width + "-by-" + Length + "-inch sheet of paper has a diagonal of " + Deci + " inch(es).")
