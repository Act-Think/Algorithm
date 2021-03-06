// var input = require('fs').readFileSync('/dev/stdin').toString();
var input = "4 \n1 3 5 7"

var inputN = input.split('\n');
var n = parseInt(inputN[0]);
var ex = inputN[1].split(' ');
var exNum = ex.map(x => parseInt(x));

var set = new Set();
set.add(1);
function notPrime (num) {
    for (i=2; i<=num/2; i++) {
        for (j=2; j<=num/2; j++) {
            if (i*j <=num) set.add(i*j);
        }
    }
    return set;
}


function solution (arr) {
    var max = Math.max(...arr);
    var notPrimeEx = notPrime(max);
    var count = 0;
    arr.forEach(element => {
        if(!set.has(element)) count++;
    });
    return count;
}

console.log(solution(exNum));