var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();
var a = parseInt(input);

var result = 0;
for (var i = 1; i <= a; i++) {
    result += i
}
console.log(result);