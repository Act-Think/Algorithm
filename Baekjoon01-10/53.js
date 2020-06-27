// 수학1 - 손익분기점
// 매년 고정 비용 - A만원
// 노트북 1대 생산 비용 - B만원
//  ex) 10대 생산 비용 - (A + 10*B)만원
// 노트북 가격 - C만원
// 손익분기점: 최초로 총 수입 > 총 비용
//  즉, 노트북 n대를 팔 경우,
//  n*C - A - n*B > 0
// 만약 생산 비용이 노트북 가격보다 비싸다면, 손익분기점이 존재하지 않는다.
// 즉, B > C일 경우

// var input = require('fs').readFileSync('/dev/stdin').toString();

var input = "1 4 9"

var inputArrNum = input.split(' ').map(Number);
var a = inputArrNum[0];
var b = inputArrNum[1];
var c = inputArrNum[2];

function profit (n) {
    return n*(c-b) - a;
}

function breakEven (x, y, z) {
    if (y>=z) return -1;
    var i=1;
    while(true) {
        if (profit(i) > 0) return i;
        i++;
    }
}

console.log(breakEven(a, b, c));

