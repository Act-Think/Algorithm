var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
var d = input.map(x => x%42);
var e = new Set(d);
console.log(e.size);


// var result = []
// for (i = 0; i < 10; i++) {
//     if (!result.includes(input[i] % 42)) {
//         result.push(input[i] % 42)
//     }
// }
// console.log(result.length);