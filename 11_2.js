// var [a,b] = require('fs').readFileSync('/dev/stdin').split('\n');

// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);


var a = 1;
var b = 2;

console.log(a>0 && b>0?1:a<0 && b>0?2:a<0 && b<0?3:4)

// if (a>0 && b>0) {
//     console.log(1);
// } else if (a<0 && b>0) {
//     console.log(2);
// } else if (a<0 && b<0) {
//     console.log(3);
// } else {
//     console.log(4);
// }