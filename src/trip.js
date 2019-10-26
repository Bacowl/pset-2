const readlineSync = require("readline-sync");

const STUDENTS = Number(readlineSync.question("\nStudents: "));
const TEACHERS = Number(readlineSync.question("Teachers: "));
const BUS = readlineSync.question("Bus capacity: ");

let PEOPLE = STUDENTS + TEACHERS;
let LEFT = PEOPLE%BUS;
let CHECKFORFULLBUSES = Math.round(LEFT/(LEFT+1));
let EXTRA = Math.abs(BUS*Math.abs(CHECKFORFULLBUSES-1)+LEFT)
let BUSNUM = ((PEOPLE-LEFT)/BUS) + CHECKFORFULLBUSES;
let EXTRAFINAL = EXTRA.toLocaleString("en")
let BUSNUMFINAL = BUSNUM.toLocaleString("en")

console.log("\n"+BUSNUMFINAL+" bus(es) is (are) needed, with "+EXTRAFINAL+ " passenger(s) on the last bus.")
