var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// var input = ["5", "20 10 35 30 7"];
var n = input[1].split(" ");
n.sort(function(a, b){return a-b});
console.log(n[0] + " " + n[input[0]-1]);

