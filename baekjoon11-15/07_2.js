// 4	1541	잃어버린 괄호
/*
식은 ‘0’~‘9’, ‘+’, 그리고 ‘-’만으로 이루어져 있고,
가장 처음과 마지막 문자는 숫자이다.
연속해서 두 개 이상의 연산자가 나타나지 않고,
5자리보다 많이 연속되는 숫자는 없다.
수는 0으로 시작할 수 있다.
*/

'use strict'
// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().trim();

var input = "012+0345-0678+0910-0123+0234-0567";

var inputR = input.replace(/0(?=\d)/g, '');
var inputArr = inputR.split("-");

var sum = eval(inputArr[0]);
if (inputArr.length >= 2) {
    for (var i = 1; i < inputArr.length; i++) {
        sum -= eval(inputArr[i]);
    }
}
console.log(sum);