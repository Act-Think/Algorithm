var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();
var a = parseInt(input);

var a = +(require('fs').readFileSync('/dev/stdin'));
for (var i = 1; i < 10; i++) {
    console.log(a + " \* " + i + " \= " + a*i);
}

for (var i = 1; i < 10; i++) {
    console.log(`${a} * ${i} = ${a*i}`);
}