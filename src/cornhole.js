const LENGTH = 48
const WIDTH = 24
const DIAMETER = 6

let SURFACEwithouthole = LENGTH*WIDTH
let HOLE = Math.PI*(DIAMETER/2)**2
let SURFACE = SURFACEwithouthole-HOLE
let FINAL = Intl.NumberFormat('en', { style: 'decimal', maximumFractionDigits:2, minimumFractionDigits:2 }).format(SURFACE);

console.log("\nThe surface area of a standard Cornhole board is "+FINAL+" square inch(es).")
