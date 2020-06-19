var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// input = ["800", "700", "900", "198", "330"]

var result = Math.min(input[0], input[1], input[2]) + Math.min(input[3], input[4]) - 50;

console.log(result);