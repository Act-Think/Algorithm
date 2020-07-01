// 수박수박수박수박수박수?
'use strict'

function solution(n) {
    var answer = "수박".repeat(Math.floor(n/2));
    if (n%2 == 1) answer += "수";
return answer;
}

console.log(solution(3));
console.log(solution(4));