// 나누어 떨어지는 숫자 배열
'use strict';

function solution(arr, divisor) {
    arr.sort((a, b) => a-b);
    var answer = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i]%divisor == 0) answer.push(arr[i]);
    }
    if (answer.length == 0) answer.push(-1);
    return answer;
}

console.log(solution([3,2,6], 10));
