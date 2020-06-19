var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// var input = ["3", "29", "38", "12", "57", "74", "40", "85", "61"];
var inputCopy = input.slice();
var x = input.sort(function(a, b){return a-b});
var y = inputCopy.indexOf(x[8]);

console.log(x[8] + "\n" + (y+1));