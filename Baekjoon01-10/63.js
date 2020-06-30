// 에라토스테네스의 체로 풀어봅시다.

// var input = require('fs').readFileSync('/dev/stdin').toString();
'use strict'
var input = "60 \n 100"

var inputN = input.split('\n');
var m = parseInt(inputN[0]);
var n = parseInt(inputN[1]);



var primeNum = new Set();
function prime(max) {
    for (var i = 2; i <= Math.sqrt(max); i++) {
        for (var j = 2; j <= Math.sqrt(max) / 2; j++) {
            if (i % j === 0) primeNum.add(i);
        }
    }
    return primeNum;
}
console.log(prime(100));