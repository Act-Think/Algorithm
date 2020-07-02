// 모의고사
/*
1, 2, 3, 4, 5, / 1, 2, 3, 4, 5, ...
2, 1, 2, 3, 2, 4, 2, 5, / 2, 1, 2, 3, 2, 4, 2, 5 /
3, 3, 1, 1, 2, 2, 4, 4, 5, 5, / 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
*/

'use strict'

function count (arr) {
var s1 = "12345".repeat(Math.ceil(arr.length/5));
var s2 = "21232425".repeat(Math.ceil(arr.length/8));
var s3 = "3311224455".repeat(Math.ceil(arr.length/10));

var result = new Array(4).fill(0);
for (var i=0; i<arr.length; i++) {
    if (s1[i] == arr[i]) result[0]++;
    if (s2[i] == arr[i]) result[1]++;
    if (s3[i] == arr[i]) result[2]++;
}
return result;
}

function solution(answers) {
    var result = count(answers);

    var win = [];
    result.unshift(-1);
    var max = Math.max(...result);
    var maxIdx = result.indexOf(max)
    win.push(maxIdx);
    if (result[maxIdx+1] == max)
    win.push(maxIdx+1);
    if (result[maxIdx+2] == max)
    win.push(maxIdx+2);
    
    return win;
}

var a = [1,2,3,4,5];
var b = [1,3,2,4,2];
solution(a);



