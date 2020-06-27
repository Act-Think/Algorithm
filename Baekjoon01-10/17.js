var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();
var a = parseInt(input);

for (i=a;i>=1;i--) {
    console.log(i);
}