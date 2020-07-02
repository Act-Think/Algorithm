// 약수의 합
'use strict'

function solution(n) {
    if (n==0) return 0;
    if (n==1) return 1;
    var sum = 0;
    for (var i=1; i<=Math.sqrt(n); i++) {
        if(n%i == 0) sum += i+n/i;
        if(i*i == n) sum -=i;
    }
    return sum;
}

console.log(solution(2));