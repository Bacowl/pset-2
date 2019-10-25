const readlineSync = require("readline-sync");

const Width = readlineSync.question("\nWidth: ");
const Length = readlineSync.question("Length: ");
let Diag = Math.sqrt(Length*Length+Width*Width);
let Deci = Math.round(Diag, -2)
let Final = Deci.toLocaleString("en");

console.log("\nA(n) " + Width + "-by-" + Length + "-inch sheet of paper has a diagonal of " + (Final) + " inch(es)")
