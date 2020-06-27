// var input = require('fs').readFileSync('/dev/stdin').toString();

var input = "-123 \n -234"
var inputSplit = input.split('\n');


var x = inputSplit[0];
var y = inputSplit[1];
if (x > 0 && y > 0) {
    console.log(1);
} else if (x < 0 && y > 0) {
    console.log(2);
} else if (x < 0 && y < 0) {
    console.log(3);
} else {
    console.log(4);
}


