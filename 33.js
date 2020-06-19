var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// var input = ["39", "40", "41", "42", "43", "44", "82", "83", "84", "85"];
var result = []
for (i = 0; i < 10; i++) {
    if (!result.includes(input[i] % 42)) {
        result.push(input[i] % 42)
    }
}
console.log(result.length);