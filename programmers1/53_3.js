// 모의고사
/*
1, 2, 3, 4, 5, / 1, 2, 3, 4, 5, ...
2, 1, 2, 3, 2, 4, 2, 5, / 2, 1, 2, 3, 2, 4, 2, 5 /
3, 3, 1, 1, 2, 2, 4, 4, 5, 5, / 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
*/

'use strict'

function solution(result) {
    var win = [];
    var max = Math.max(...result);
    var maxIdx = result.indexOf(max)
    win.push(maxIdx);
    if (result[maxIdx+1] == max)
    win.push(maxIdx+1);
    if (result[maxIdx+2] == max)
    win.push(maxIdx+2);

    console.log(win);
    return win;


}

var a = [-1, 1, 2, 3];
var b = [-1, 0, 0, 0];
var c = [-1, 1, 2, 2];
solution(a);



