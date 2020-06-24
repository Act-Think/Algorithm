// var input = require('fs').readFileSync('/dev/stdin').toString();


var input = "734 893"
var inputSplit = input.split(' ');
var a = inputSplit[0];
var b = inputSplit[1];

console.log(a);

function reverseNumber (num) {
    var numStringArr = [...num.toString()];
    var value = 0;
    numStringArr.forEach((element, index) => {
        value += element * (10**index);
    });
    return value;
}

if (reverseNumber(a) > reverseNumber(b)) {
    console.log(reverseNumber(a));
} else {
    console.log(reverseNumber(b));
}