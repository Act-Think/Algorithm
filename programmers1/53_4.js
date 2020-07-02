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
    var max = Math.max(...result);
    if (result[0] == max) win.push(1);
    if (result[1] == max) win.push(2);
    if (result[2] == max) win.push(3);
   
    return win;
}

var a = [1,2,3,4,5];
var b = [1,3,2,4,2];
console.log(solution(b));



function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}

