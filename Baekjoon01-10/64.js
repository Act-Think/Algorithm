// 에라토스테네스의 체로 풀어봅시다.

// var input = require('fs').readFileSync('/dev/stdin').toString();
'use strict'
var input = "3 16"

var inputN = input.split(' ');
var m = parseInt(inputN[0]);
var n = parseInt(inputN[1]);

var notPrime = new Set();
notPrime.add(1);

function addMultiple (num, max3) {
    for (var j=2; j<=max3/num; j++) notPrime.add(num*j);
}

function eratos (max2) {
    for (var i=2; i<=Math.sqrt(max2); i++) {
        if (!notPrime.has(i, max2)) {
            addMultiple(i, max2); 
        }        
    }
}

function minMax (min, max) {
    eratos(max);
    for (var k=min; k<=max; k++) {
        if(!notPrime.has(k, max)) console.log(k);
    }
}

minMax(m, n);