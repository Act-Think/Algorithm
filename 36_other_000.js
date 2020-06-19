// 4344

function toNumber(s) { return +s; }
function add(a, b) { return a + b; }
function over(n) { return function (a) { return a > n; } }
var lines = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
var T = lines[0];
for (var i = 1; i <= T; i++) {
    var scores = lines[i].split(' ').slice(1).map(toNumber);
    var mean = scores.reduce(add, 0) / scores.length;
    var perc = scores.filter(over(mean)).length / scores.length * 100;
    console.log(perc.toFixed(3) + '%');
}

// wonyoung