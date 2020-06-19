// var a = require('fs').readFileSync('/dev/stdin');

// 1 1 - 1, 1    0.5
//   0
// 2 1 - 2, 4    1
//   1
// 3 2 - 3, 6    1.5
//   1
// 4 2 - 4, 8    2
//   2
// 5 3 - 5, 10   2.5
//   2
// 6 3 - 6, 12   3
//   3
// 7 4 - 7, 14   3.5
//   3

const a = 1;

for(i=1; i<=a; i++) {
    console.log("* ".repeat(Math.ceil(a/2)));
    console.log(" *".repeat(Math.floor(a/2)));
}

