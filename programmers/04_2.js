// 나누어 떨어지는 숫자 배열
'use strict';

function solution(arr, divisor) {
    arr.sort((a, b) => a-b);
    var answer = arr.filter(x => x%divisor == 0);
    
    if (answer.length == 0) answer.push(-1);
    return answer;
}

console.log(solution([5, 9, 7, 10], 5));