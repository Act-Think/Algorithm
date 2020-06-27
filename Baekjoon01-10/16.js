var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();
var a = parseInt(input);

for (i=1;i<=a;i++) {
    console.log(i);
}