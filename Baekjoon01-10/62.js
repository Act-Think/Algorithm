// var input = require('fs').readFileSync('/dev/stdin').toString();
var input = "64 \n 65"

var inputN = input.split('\n');
var m = parseInt(inputN[0]);
var n = parseInt(inputN[1]);

function isPrime(num) {
    if (num === 1) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

function solution(min, max) {
    var sum = 0;
    for (var j = min; j <= max; j++) {
        if (isPrime(j)) {
            var primeMin = j;
            sum = + j;
            break;
        }
    }
    for (var k = primeMin + 1; k <= max; k++) {
        if (isPrime(k)) sum += k;
    }
    if (sum == 0) {console.log(-1); return};
    console.log(sum);
    console.log(primeMin);
}

solution(m, n);