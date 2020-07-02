// 평균 구하기
'use strict'

function solution(arr) {
    var sum = arr.reduce((a, b) => a+b, 0);
    var num = arr.length;
    return sum/num;
}

var x = [5, 5]
console.log(solution(x));
