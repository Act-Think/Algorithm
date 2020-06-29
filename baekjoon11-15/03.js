// 3	2447	별 찍기 - 10

/*
n = 3, 9, 27, ..
27 * 27 정사각형 모양
가운데는 9 * 9 공백 - 9 * 9 패턴으로 둘러쌈
*/

// var input = require('fs').readFileSync('/dev/stdin').toString();
var input = "27";
var n = parseInt(input);

function star (num) {
    if (num == 1) return;
    if (num == 3) return(`***\n* *\n***\n`);
    // return star(num-1).repeat(3)
    

}




console.log(star(3).repeat(3));