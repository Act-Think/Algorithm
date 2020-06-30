// var input = require('fs').readFileSync('/dev/stdin').toString();
var input = "4 \n1 3 5 7"

var inputN = input.split('\n');
var n = parseInt(inputN[0]);
var ex = inputN[1].split(' ');
var exNum = ex.map(x => parseInt(x));

function Prime (num) {
    if (num == 1) return false;
    for (i=2; i<=Math.sqrt(num); i++) {
        if(num%i == 0) return false;
    }
    return true;
}

function solution (arr) {
    var count = 0;
    arr.forEach(element => {
        if(Prime(element)) count++;
    });
    return count;
}

console.log(solution(exNum));

