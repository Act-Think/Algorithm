// 1	10872	팩토리얼

// var input = require('fs').readFileSync('/dev/stdin').toString();
var input = "10";
var n = parseInt(input);

function factorial (num) {
    if(num < 0) return;
    if(num === 0) return 1;
    return num * factorial(num-1);
}

console.log(factorial(n));