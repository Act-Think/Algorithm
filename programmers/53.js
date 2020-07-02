// 모의고사
/*
1, 2, 3, 4, 5, / 1, 2, 3, 4, 5, ...
2, 1, 2, 3, 2, 4, 2, 5, / 2, 1, 2, 3, 2, 4, 2, 5 /
3, 3, 1, 1, 2, 2, 4, 4, 5, 5, / 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
*/

'use strict'

function solution(answers) {
    var s1 = "12345".repeat(Math.ceil(answers.length/5));
    var s2 = "21232425".repeat(Math.ceil(answers.length/8));
    var s3 = "3311224455".repeat(Math.ceil(answers.length/10));
    

    var count1 = 0;
    var count2 = 0;
    var count3 = 0;

    for (var i=0; i<answers.length; i++) {
        if (s1[i] == answers[i]) count1++;
        if (s2[i] == answers[i]) count2++;
        if (s3[i] == answers[i]) count3++;
    }

    console.log(count1, count2, count3);

}

var a = [1,2,3,4,5];
var b = [1,3,2,4,2]
solution(b);