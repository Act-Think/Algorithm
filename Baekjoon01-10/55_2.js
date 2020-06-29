/*
N(1 ≤ N ≤ 1,000,000,000)이
1 -> 1개
2~7 -> 2개 -> 6 = 6*1
 0~5 -> 몫이 0
8~19 -> 3개 -> 12 = 6*2
 6~17 -> 몫이 1, 2
20~37 -> 4개 -> 18 = 6*3
 18~35 -> 몫이 3, 4, 5
38~61 -> 5개 -> 24 = 6*4
 36~59 -> 몫이 6, 7, 8, 9


(N-2)/6의 몫(q)이
 ※ N=1일 때는 1개이다. -> 음수이면 1개
 i) 0 -> 2개
 ii) 1, 2 -> 3개
 iii) 3, 4, 5 -> 4개
 iv) 6, 7, 8, 9 -> 5개
*/

// var input = require('fs').readFileSync('/dev/stdin').toString();
var input = "13";
var n = parseInt(input);

var count = 1;
var sum = 1;
while (n > sum) {
    sum += count*6; // 1+6=7, 7+12=19
    count++; // 2, 3
}
console.log(count);