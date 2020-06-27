var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

if (a>0 && b>0) {
    console.log(1);
} else if (a<0 && b>0) {
    console.log(2);
} else if (a<0 && b<0) {
    console.log(3);
} else if (a>0 && b<0) {
    console.log(4);
}