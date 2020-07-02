// 하샤드 수
'use strict'

function solution(x) {
    var sum = x
        .toString()
        .split('')
        .map(x => parseInt(x))
        .reduce((a, b) => a + b, 0);
    return x%sum == 0;
}


console.log(solution(1));

