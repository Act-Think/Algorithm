// var input = require('fs').readFileSync('/dev/stdin').toString().split(' ').trim().map(Number);
var input = [734, 895]
var a = input[0];
var b = input[1];

function reverseNumber (num) {
    var numStringArr = [...num.toString()];
    var value = 0;
    for (i=0; i<numStringArr.length; i++) {
        value += numStringArr[i] * Math.pow(10, i);
    }
    return value;
}

// console.log(reverseNumber(a));
// console.log(reverseNumber(b));

if (reverseNumber(a) > reverseNumber(b)) {
    console.log(reverseNumber(a));
} else {
    console.log(reverseNumber(b));
}