// 예산
/*
최대한 많은 부서의 물품을 구매
구매해주려면 각 부서가 신청한 금액 모두 지원

*/

'use strict'

function solution(d, budget) {
    if (d.reduce((a,b)=> a+b,0) <= budget) return d.length;
    d.sort((a, b) => a - b);
    var sum = 0;
    for (var i = 0; i < d.length; i++) {
        sum += d[i];
        if (sum == budget) return i+1;
        if (sum > budget) return i;
    }
}

console.log(solution([1,1,1,1], 9));
