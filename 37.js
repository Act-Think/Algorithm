// var a = require('fs').readFileSync('/dev/stdin');

// i 5 4 3 2 1 | 2 3 4 5
// * 9 7 5 3 1 | 3 5 7 9
// s 0 1 2 3 4 | 3 2 1 0

var a = 5;
for(i=a; i>=1; i--) {
    console.log(" ".repeat(a-i)+"*".repeat(2*i-1));
}
for(i=2; i<=a; i++) {
    console.log(" ".repeat(a-i)+"*".repeat(2*i-1));
}
