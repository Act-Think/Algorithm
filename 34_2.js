// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var input = ["3", "40 80 60"];
var n = input[0];
var a = input[1].split(' ').map(Number);
var m = Math.max(...a);
var sum = a.reduce((a, b) => a + b);
console.log(sum/n/m*100);


// var a = input[1].split(" ");
// a.sort(function(a, b){return a-b});
// var n = input[0];
// var m = a[n-1];
// var sum = 0;
// for (i=0; i<a.length; i++) {
//     sum += parseInt(a[i]);
// }
// var result = sum*100/m/n;
// console.log(result);