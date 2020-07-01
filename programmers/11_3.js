// 소수 찾기
'use strict'

var 


var set = new Set();
set.add(1);
function multiple (a, n) {
    for(var i=2; i<=n/a; i++) {
        set.add(i*a);
    }
}


function solution(n) {
    for(var j=2; j<=Math.sqrt(n); j++) {
        if (!set.has(j)) multiple(j, n);
    }
    return n-set.size;
}

console.log(solution(5));