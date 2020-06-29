// 2	10870	피보나치 수 5

// var input = require('fs').readFileSync('/dev/stdin').toString();
var input = "10";
var n = parseInt(input);

function fibonacci (num) {
    if (num < 0) return;
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fibonacci(num-2) + fibonacci(num-1);
}

console.log(fibonacci(n));
