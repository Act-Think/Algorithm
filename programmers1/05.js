// 두 정수 사이의 합
'use strict';

function solution(a, b) {
    var answer = (a+b)/2*((Math.abs(a-b))+1);
    return answer;
}

console.log(solution(-4,3));