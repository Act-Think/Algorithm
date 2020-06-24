// 5
// 10 일 때,

// var input 대신
// var [a, b] 로도 가능

a.split(' ').map(Number);


var input = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ').trim();
// 이렇게 하면 ["5", "10"]으로 가져온다.
var input = require('fs').readFileSync('/dev/stdin').toString().split(' ').trim();
// 이것도 위와 똑같다.
var input = require('fs').readFileSync('/dev/stdin').toString().split(' ').trim().map(Number).trim();
// 이렇게 하면 [5, 10]으로 가져온다.







// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);
// var c = parseInt(input[2]);

var input = ["5", "1 1", "2 3", "3 4", "9 8", "5 2"]
var a = parseInt(input[0]);
console.log(a);