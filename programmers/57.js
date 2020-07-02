// 비밀지도
/*
n*n 정사각형 배열
각 칸은  공백(" ") or 벽("#")

지도 1 또는 지도 2 중
어느 하나라도 벽인 부분은
-> 전체 지도에서도 벽이다.

지도 1과 지도 2에서
모두 공백인 부분은
-> 전체 지도에서도 공백이다.

벽+벽 = 벽
벽+공백 = 벽
공백+공백 = 공백

*/

'use strict'

function solution(n, arr1, arr2) {
    var arrA = arr1.map(x => ("0".repeat(n) + x.toString(2)).slice(-n));
    var arrB = arr2.map(x => ("0".repeat(n) + x.toString(2)).slice(-n));

    var answer = [];
    for (var i = 0; i < n; i++) {
        var map = ""
        for (var j = 0; j < n; j++) {
            if (arrA[i][j] == 0 && arrB[i][j] == 0) {
                map += " ";

            } else {
                map += "#";
            }
        }
        answer.push(map);
    }
    return answer;
}


var a = 5;
var b = [9, 20, 28, 18, 11];
var c = [30, 1, 21, 17, 28];

console.log(solution(a, b, c));

var x = ["11110", "00001", "10101", "10001", "11100"]
console.log(x[0][1]);