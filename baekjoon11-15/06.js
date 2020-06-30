// 3	11399	ATM

/*
줄 선 사람: n명
돈을 인출하는데 걸리는 시간: Pi (1 ≤ Pi ≤ 1,000)
*/

'use strict'
// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();

var input = "5\n3 1 4 3 2"
var inputN = input.split('\n');
var n = parseInt(inputN[0]);
var time = inputN[1]
    .split(' ')
    .map(x => parseInt(x))

function solution (arr) {
    var sum = 0;
    arr.sort(function(a, b){return b-a});
    for (var i=0; i<arr.length; i++) {
        sum += arr[i]*(i+1);
    }
    console.log(sum);
}

solution(time);
