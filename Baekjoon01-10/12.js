var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);


var input = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ');
var a = input[0];
var b = input[1];

var a = 0;
var b = 30;

console.log(b>=45?(a +" "+ (b-45)) : a==0?(23+" "+ (b+15)) : ((a-1) +" "+ (b+15)));


// if (b >= 45) {
//     console.log(a +" "+ (b-45));
// } else if (a == 0) {
//     console.log(23+" "+ (b+15));
// } else {
//     console.log((a-1) +" "+ (b+15));
// }
