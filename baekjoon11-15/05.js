// 2	1931	회의실배정
/*
1 개의 회의실 -> n개의 회의
회의의 시작시간과 끝나는 시간이 같을 수도 있다.

첫째 줄에 회의의 수 N(1 ≤ N ≤ 100,000)
시작 시간과 끝나는 시간은 2^31-1보다 작거나 같은 자연수 또는 0이다.
*/
'use strict'
// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();

var input = "11\n1 4\n3 5\n0 6\n5 7\n3 8\n5 9\n6 10\n8 11\n8 12\n2 13\n12 14"
var inputSplit = input.split('\n');
var n = parseInt(inputSplit[0]);

var arr = [];
for (var i = 1; i <= n; i++) {
    var [start, end] = inputSplit[i].split(' ');
    arr.push([+start, +end]);
}

arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
})

var count = 0;
var time = 0;
arr.forEach(element => {
    if (element[0] >= time) {
        count += 1;
        time = element[1];
    }
}
);
console.log(count); 