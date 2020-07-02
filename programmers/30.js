// 직사각형 별찍기
'use strict'

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    var star = "*".repeat(a)
    for (var i = 1; i<=b; i++) {
        console.log(star);
    }

});

var a = 5;
var b = 3;

