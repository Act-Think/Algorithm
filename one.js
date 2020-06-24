var a = require('fs').readFileSync('/dev/stdin');
var a = require('fs').readFileSync('/dev/stdin').toString().trim();

// 숫자 하나일 때는 이렇게 해도 된다.
// string이면 앞에 + 붙여서 숫자로 만들어준다.


// var fs = ;
// var input = require('fs').readFileSync('/dev/stdin').toString();
// var a = parseInt(input);

var a = 1;

// var a = require('fs').readFileSync('/dev/stdin');
// var a = +(require('fs').readFileSync('/dev/stdin'));