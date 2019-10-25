const readlineSync = require("readline-sync");

const STUDENTS = Number(readlineSync.question("\nStudents: "));
const TEACHERS = Number(readlineSync.question("Teachers: "));
const BUS = readlineSync.question("Bus capacity: ");

let PEOPLE = STUDENTS + TEACHERS
let EXTRA = PEOPLE%BUS;
let CHECK = Math.round(EXTRA/(EXTRA+1))
let BUSNUM = ((PEOPLE-EXTRA)/BUS) + CHECK

console.log("\n"+BUSNUM+" bus(es) is (are) needed, with "+EXTRA+ " passenger(s) on the last bus.")
