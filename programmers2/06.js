// 124 나라의 숫자

/*
*/

'use strict'

function solution(n) {
    var ternary = n.toString(3);
    var tArr = [...ternary];

    for (var j = tArr.length; j > 0; j--) {
        if (tArr[j] <= 0) {
            tArr[j] += 3;
            tArr[j - 1] -= 1;
        }
    }
    for (var i = tArr.length; i > 0; i--) {
        if (tArr[i] == 3) {
            tArr[i] = 4;
        }
    }

    if (tArr[0] == 0) tArr.shift();
    return tArr.join('').toString();
}
console.log(solution(10));

function change124(n) {
    return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
  }