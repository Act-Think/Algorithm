/*
count = 1 -> sum = 1
count = 2 -> sum = 2, 3 -> 위-아래
count = 3 -> sum = 4, 5, 6 -> 아래-위
count = 4 -> sum = 7, 8, 9, 10 -> 위-아래
count = 5 -> sum = 11, 12, 13, 14, 15 -> 아래-위

*/


// var input = require('fs').readFileSync('/dev/stdin').toString();
var input = "5";
var x = parseInt(input);

var count = 0;
var sum = 0;
while (x > sum) {
    count++; // 1, 2, 3, 4
    sum += count; // 1, 3, 6, 10
}
var th = x+count-sum;
count%2 == 1 ? console.log(`${count+1-th}/${th}`):
console.log(`${th}/${count+1-th}`)
