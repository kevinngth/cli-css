console.log('running');

let arg1 = process.argv[2];
let arg2 = process.argv[3];
let arg3 = process.argv[4];
let arg4 = process.argv[5];

const r = require('./inputRGB.js');

const h = require('./inputHex.js');

if (arg1 === 'hex') {
    console.log(h.hToOthers(arg2));
} else if (arg1 === 'rgb') {
    let myOutput = r.rToOthers(parseInt(arg2), parseInt(arg3), parseInt(arg4));
    console.log(`\x1b[38;2;${parseInt(arg2)};${parseInt(arg3)};${parseInt(arg4)}m%s\x1b[0m`, myOutput);
} else if (arg1 === 'hsl') {

} else {
    console.log("HI!");
}

console.log(`\x1b[38;2;${parseInt(arg2)};${parseInt(arg3)};${parseInt(arg4)}m%s\x1b[0m`, 'myOutput');