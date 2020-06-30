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
// var input = fs.readFileSync('/dev/stdin').toString();

var input = "55-50+40"
input.replace(/-[0-9]+(?=-)/,/-\([0-9]+\)/);
console.log(input);