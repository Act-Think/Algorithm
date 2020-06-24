var input = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ').trim();

var input = "739 893";
var inputArr = input.split(' ');
var a = inputArr[0].toString;
var b = inputArr[1].toString;


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