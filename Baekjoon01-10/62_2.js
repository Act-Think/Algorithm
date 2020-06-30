// var input = require('fs').readFileSync('/dev/stdin').toString();
'use strict'
var input = "60 \n 100"

var inputN = input.split('\n');
var m = parseInt(inputN[0]);
var n = parseInt(inputN[1]);
var primeMin = 10001;

function isPrime(num) {
    if (num === 1) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

function solution(min, max) {
    var primeMin = 10001;
    var sum = 0;
    for (var k = min; k <= max; k++) {
        if (isPrime(k)) {
            sum += k;
            if (k < primeMin) primeMin = k;
        }
    }
    if (sum == 0) {
        console.log(-1);
        return
    } else {
        console.log(sum);
        console.log(primeMin);
    }
}

solution(m, n);