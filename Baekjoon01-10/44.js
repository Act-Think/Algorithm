// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var input = ["11", "10987654321"]

var n = parseInt(input[0]); // number 5
var a = input[1]; // string "54321"
var sum = 0;
for (i=0; i<n; i++) {
    sum += parseInt(a[i]);
}
console.log(sum);