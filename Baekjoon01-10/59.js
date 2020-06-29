/*
a층의 b호에 살려면
자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼
사람들을 데려와 살아야 한다

양의 정수 k와 n에 대해
k층에 n호에는 몇 명이 살고 있는지 출력하라.

아파트에는 0층부터 있고 각층에는 1호부터 있으며,
0층의 i호에는 i명이 산다.

*/

// var input = require('fs').readFileSync('/dev/stdin').toString();
var input = "2\n1\n3\n2\n3"

var inputN = input.split('\n');
var t = parseInt(inputN[0]);

for (i = 1; i <= t * 2; i += 2) {
    var k = parseInt(inputN[i]);
    var n = parseInt(inputN[i + 1]);

    var peopleCopy = [];
    for (var j = 0; j <= n; j++) {
        peopleCopy[j] = j; // 0층 사람들을 1, 2, 3, 4,..명으로 set
    }
    console.log(k, n);
    console.log(peopleCopy);

    for (var f = 1; f <= k; f++) { // 각 층
        var people = new Array(n + 1).fill(0);
        for (var l = 0; l <= n; l++) { // 1호~ n호 set

            for (var m = 0; m <= l; m++) {
                people[l] += peopleCopy[m]; // 전 층의 1호~n호 합
            }
        }
        var peopleCopy = people.slice(); // 전 층의 1호~n호 copy
        console.log(peopleCopy);
    }
    console.log(people[n]);
}