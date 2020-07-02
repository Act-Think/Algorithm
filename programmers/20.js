// 정수 제곱근 판별
'use strict'

function solution(n) {
    var sqrt = Math.sqrt(n)
    return Number.isInteger(sqrt) ? (sqrt+1)**2 : -1;
}

console.log(solution(3));