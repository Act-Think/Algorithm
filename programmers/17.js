// 자릿수 더하기
'use strict'

function solution(n) {
    var arr = n.toString().split('');
    var sum = 0;
    arr.forEach(element => {
        sum += parseInt(element);
    });
    return sum;
}

console.log(solution(987))