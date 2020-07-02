// 정수 내림차순으로 배치하기
'use strict'

function solution(n) {
    return +n.toString().split('').sort().reverse().join('');
}

console.log(solution(118372));