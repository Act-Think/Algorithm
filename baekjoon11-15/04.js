// 1	11047	동전 0

/*
동전의 종류: n종류 (1 ≤ N ≤ 10)
동전의 가치: 2열~ (1 ≤ Ai ≤ 1,000,000, A1 = 1, i ≥ 2인 경우에 Ai는 Ai-1의 배수)
→ 합해서 k원 (1 ≤ K ≤ 100,000,000)

출력: k원을 만드는 데 필요한 동전 개수의 최솟값
*/
'use strict'
// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();

var input = "10 4792 \n1\n5\n10\n50\n100\n500\n1000\n5000\n10000\n50000";


function solution(str) {
    var arr = str.split('\n');
    var arr0S = arr[0].split(' ');

    var n = parseInt(arr0S[0]);
    var k = parseInt(arr0S[1]);
    var sum = 0;

    for (var i = n; i >= 1; i--) {
        if(arr[i] < k) {
        sum += Math.floor(k / arr[i]);
        k %= arr[i];
        }
    }
    return sum;
}
console.log(solution(input));

