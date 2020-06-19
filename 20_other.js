var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

for(var i = 1; i <= parseInt(input); i++) {
    console.log('*'.repeat(i));
}
// limdaeho98



[...Array(+require('fs').readFileSync('/dev/stdin')).keys()].forEach(idx => console.log('*'.repeat(++idx)));
// skid901

const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin'));
const arr = [];
for (i = 1; i <= n; i++) {
    arr.push("*");
    console.log(arr.join(""));

// hsyeon4001
