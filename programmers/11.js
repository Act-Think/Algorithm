// 소수 찾기
'use strict'

function isPrime(num) {
    for(var i=2; i<=Math.sqrt(num); i++) {
        if (num%i == 0) return false;
    }
    return true;
}


function solution(n) {
    var count = 0;
    for(var j=2; j<=n; j++) {
        if (isPrime(j)) count++;
    }
    return count;
}

console.log(solution(5));

function solution2(n) {
    var answer =[];
    for(var j=2; j<=n; j++) {
        if (isPrime(j)) answer.push(j);
    }
    return answer;
}

console.log(solution2(2));