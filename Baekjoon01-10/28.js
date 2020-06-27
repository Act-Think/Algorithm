// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');

var input = ["40", "20", "10"]
input.sort(function(a, b){return a-b});
console.log(parseInt(input[1]));
