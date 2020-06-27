let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = input[0].split(' ');
console.log(num.slice(0).sort(function(a, b) {return Number(a) - Number(b);})[1])

// gkwlak645