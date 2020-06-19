var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();
var a = parseInt(input);

for (var i = 1; i < 10; i++) {
    console.log(a + " \* " + i + " \= " + a*i);
}
