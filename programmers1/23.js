// 최대공약수와 최소공배수
'use strict'

function solution(n, m) {
    var arr = [n, m]
    arr.sort((a, b) => a - b);
    var min = arr[0];
    var max = arr[1];
    var a = 1;
    var b = max * min;
    for (var i = 2; i <= min; i++) {
        if (min % i == 0 && max % i == 0) {
            var a = i;
            break;
        }
    }
    for (var j = max; j < max * min; j += max) {
        if (j % min == 0 && j % max == 0) {
            var b = j;
            console.log(j);
            break;
        }
    }
    return [a, b];
}
console.log(solution(5, 7));